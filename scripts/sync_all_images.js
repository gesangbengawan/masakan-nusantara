const fs = require('fs');
const path = require('path');

// Settings
const sourceDirs = [
    'C:\\Users\\ASUS\\Downloads\\foto masakan',
    'C:\\Users\\ASUS\\Downloads\\foto masakan 2'
];
const projectDir = path.join(__dirname, '../');
const publicImagesDir = path.join(projectDir, 'public/images');
const dataDir = path.join(projectDir, 'src/data/grand_master');
const promptFiles = [
    path.join(projectDir, 'image_prompts.md'),
    path.join(projectDir, 'image_prompts_missing.md')
];

// Ensure public/images exists
if (!fs.existsSync(publicImagesDir)) {
    fs.mkdirSync(publicImagesDir, { recursive: true });
}

// 1. Build Prompt Map (No -> TargetFilename)
console.log('Parsing prompt files...');
const promptMap = new Map(); // No (string) -> targetFilename (e.g. foo.png)

promptFiles.forEach(pFile => {
    if (fs.existsSync(pFile)) {
        console.log(`Reading ${path.basename(pFile)}...`);
        const content = fs.readFileSync(pFile, 'utf8');
        const lines = content.split('\n');
        lines.forEach(line => {
            if (line.includes('|')) {
                const parts = line.split('|').map(s => s.trim());
                if (parts.length >= 5) {
                    const no = parts[1];
                    let targetFile = parts[4] || ''; // Adjust column index if needed
                    // In image_prompts.md: Col 1=No, 2=Prov, 3=Title, 4=File, 5=Prompt
                    // Let's robustly check which column looks like a filename
                    const possibleFile = parts.find(p => p.endsWith('.png') || p.endsWith('.jpg'));
                    if (possibleFile) targetFile = possibleFile.replace(/`/g, '');

                    if (no && !isNaN(parseInt(no)) && targetFile) {
                        promptMap.set(no, targetFile);
                    }
                }
            }
        });
    }
});
console.log(`Loaded ${promptMap.size} filename mappings.`);

// 2. Read JS Data Files
const dataFiles = fs.readdirSync(dataDir).filter(f => f.endsWith('.js'));
const fileContents = new Map(); // AbsPath -> Content
dataFiles.forEach(f => {
    fileContents.set(path.join(dataDir, f), fs.readFileSync(path.join(dataDir, f), 'utf8'));
});

// 3. Process Downloaded Files
let copiedCount = 0;
let updatedRefCount = 0;

sourceDirs.forEach(dir => {
    if (fs.existsSync(dir)) {
        console.log(`Processing source: ${dir}`);
        const files = fs.readdirSync(dir).filter(f => f.match(/\.(jpe?g|png)$/i));

        files.forEach(file => {
            // Extract Number
            const match = file.match(/^_(\d+)__/);
            if (match) {
                const no = match[1];
                const targetFilenameInfo = promptMap.get(no); // e.g. "aceh_mie.png"

                if (targetFilenameInfo) {
                    // Normalize extension to .jpeg (since source is likely jpeg)
                    const ext = path.extname(file).toLowerCase();
                    const targetBase = path.basename(targetFilenameInfo, path.extname(targetFilenameInfo));
                    const newFilename = `${targetBase}${ext}`; // e.g. "aceh_mie.jpeg"

                    // Copy
                    const srcPath = path.join(dir, file);
                    const destPath = path.join(publicImagesDir, newFilename);
                    fs.copyFileSync(srcPath, destPath);
                    copiedCount++;

                    // Update References in JS
                    // Replace "targetBase.png" OR "targetBase.jpeg" -> newFilename
                    // We need to match the BASE name to start

                    fileContents.forEach((content, filePath) => {
                        // Regex to match: image: ".*targetBase.*"
                        // Try simple string replace first for the specific target
                        if (content.includes(targetFilenameInfo)) {
                            // Replace full filename
                            const newContent = content.replace(targetFilenameInfo, newFilename);
                            fileContents.set(filePath, newContent);
                            updatedRefCount++;
                        } else {
                            // It might have already been updated to .jpeg in previous run, but we want to confirm
                            // match "targetBase.jpeg"
                            const currentRef = `${targetBase}.jpeg`;
                            if (content.includes(currentRef)) {
                                // Already correct, do nothing
                            } else {
                                // Maybe it's "images/targetBase.png"
                                // Let's try to find just the base name in the 'image:' field
                                // Warning: this is risky if names overlap.
                            }
                        }
                    });
                }
            }
        });
    } else {
        console.warn(`Source dir not found: ${dir}`);
    }
});

// 4. Write Updates
fileContents.forEach((content, filePath) => {
    fs.writeFileSync(filePath, content, 'utf8');
});

console.log(`Sync Complete: Copied ${copiedCount} files. Updated ${updatedRefCount} references.`);
