const fs = require('fs');
const path = require('path');

const downloadsDir = 'C:\\Users\\ASUS\\Downloads\\foto masakan';
const projectDir = path.join(__dirname, '../');
const publicImagesDir = path.join(projectDir, 'public/images');
const dataDir = path.join(projectDir, 'src/data/grand_master');
const promptFile = path.join(projectDir, 'image_prompts.md');

// Ensure public/images exists
if (!fs.existsSync(publicImagesDir)) {
    fs.mkdirSync(publicImagesDir, { recursive: true });
}

// 1. Parse Image Prompts to map No -> TargetFilename
console.log('Parsing image_prompts.md...');
const promptContent = fs.readFileSync(promptFile, 'utf8');
const promptMap = new Map(); // No (string) -> targetFilename (e.g. foo.png)

const lines = promptContent.split('\n');
lines.forEach(line => {
    if (line.includes('|')) {
        const parts = line.split('|').map(s => s.trim());
        if (parts.length >= 6) {
            const no = parts[1];
            const targetFile = parts[4].replace(/`/g, '');
            if (no && !isNaN(parseInt(no))) {
                promptMap.set(no, targetFile);
            }
        }
    }
});
console.log(`Loaded ${promptMap.size} prompts.`);

// 2. Read all JS files into memory
const dataFiles = fs.readdirSync(dataDir).filter(f => f.endsWith('.js'));
const fileContents = new Map(); // Filename -> Content
dataFiles.forEach(f => {
    fileContents.set(path.join(dataDir, f), fs.readFileSync(path.join(dataDir, f), 'utf8'));
});

// 3. Process Downloaded Files
const downloadFiles = fs.readdirSync(downloadsDir).filter(f => f.endsWith('.jpeg') || f.endsWith('.jpg') || f.endsWith('.png'));
let updatedCount = 0;

downloadFiles.forEach(file => {
    // Extract Number from filename _X__...
    const match = file.match(/^_(\d+)__/);
    if (match) {
        const no = match[1];
        const targetFilenameInfo = promptMap.get(no); // e.g. "aceh_mie.png"

        if (targetFilenameInfo) {
            // Determine new filename
            const ext = path.extname(file); // .jpeg
            const targetBase = path.basename(targetFilenameInfo, path.extname(targetFilenameInfo)); // aceh_mie
            const newFilename = `${targetBase}${ext}`; // aceh_mie.jpeg

            // COPY FILE
            const srcPath = path.join(downloadsDir, file);
            const destPath = path.join(publicImagesDir, newFilename);
            fs.copyFileSync(srcPath, destPath);
            // console.log(`[${no}] Copied -> ${newFilename}`);

            // UPDATE CONTENT
            // We search for the occurrence of the OLD filename (targetFilenameInfo) in ALL JS files
            // and replace it with newFilename

            // targetFilenameInfo usually has .png extension from the prompt file
            // We need to match exactly what is in the JS file. 
            // The JS file usually has `image: "foo.png"` OR `image: "images/foo.png"`
            // We'll replace the filename part.

            fileContents.forEach((content, filePath) => {
                if (content.includes(targetFilenameInfo)) {
                    const newContent = content.replace(targetFilenameInfo, newFilename);
                    fileContents.set(filePath, newContent);
                    updatedCount++;
                    console.log(`Updated Ref in ${path.basename(filePath)}: ${targetFilenameInfo} -> ${newFilename}`);
                }
            });
        }
    }
});

// 4. Write back JS files
fileContents.forEach((content, filePath) => {
    fs.writeFileSync(filePath, content, 'utf8');
});

console.log(`Sync Complete. Updated references for ${updatedCount} matches.`);
