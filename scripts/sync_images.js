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
const promptMap = new Map(); // No (string) -> { filename, title }

const lines = promptContent.split('\n');
lines.forEach(line => {
    if (line.includes('|')) {
        const parts = line.split('|').map(s => s.trim());
        // Expected parts: empty, No, Province, Title, TargetFilename, Prompt, empty
        if (parts.length >= 6) {
            const no = parts[1];
            const title = parts[3];
            const targetFile = parts[4].replace(/`/g, ''); // Remove backticks
            if (no && !isNaN(parseInt(no))) {
                promptMap.set(no, {
                    targetFile: targetFile,
                    title: title
                });
            }
        }
    }
});
console.log(`Loaded ${promptMap.size} prompts.`);

// 2. Map Recipes to JS Files
console.log('Mapping recipes to data files...');
const recipeFileMap = new Map(); // Title -> FilePath
const dataFiles = fs.readdirSync(dataDir).filter(f => f.endsWith('.js'));

dataFiles.forEach(f => {
    const filePath = path.join(dataDir, f);
    const content = fs.readFileSync(filePath, 'utf8');
    // Simple regex to find titles in the file content is risky, better require it?
    // But requiring caches the module. We need to edit source strings.
    // Let's rely on string matching for replacement later, but we need to know WHICH file to edit.
    // We can require it to build the map.

    // Note: We need to handle potential 'require' nuances (caching), but since this is a one-off script run, it's fine.
    try {
        delete require.cache[require.resolve(filePath)];
        const recipes = require(filePath);
        recipes.forEach(r => {
            recipeFileMap.set(r.title, filePath);
        });
    } catch (e) {
        console.error(`Error reading ${f}:`, e);
    }
});

// 3. Process Downloaded Files
console.log('Processing downloaded files...');
const downloadFiles = fs.readdirSync(downloadsDir).filter(f => f.endsWith('.jpeg') || f.endsWith('.jpg') || f.endsWith('.png'));

let updatedCount = 0;
let fileUpdates = new Map(); // FilePath -> Content

downloadFiles.forEach(file => {
    // Extract Number from filename _X__...
    const match = file.match(/^_(\d+)__/);
    if (match) {
        const no = match[1];
        const promptInfo = promptMap.get(no);

        if (promptInfo) {
            const { targetFile, title } = promptInfo;
            // Determined new extension based on source file
            const ext = path.extname(file);
            const targetBase = path.basename(targetFile, path.extname(targetFile));
            const newFilename = `${targetBase}${ext}`;

            // Copy File
            const srcPath = path.join(downloadsDir, file);
            const destPath = path.join(publicImagesDir, newFilename);
            fs.copyFileSync(srcPath, destPath);
            console.log(`[${no}] Copied ${file} -> ${newFilename}`);

            // Update Recipe Data
            const recipeJsPath = recipeFileMap.get(title);
            if (recipeJsPath) {
                let content = fileUpdates.get(recipeJsPath);
                if (!content) {
                    content = fs.readFileSync(recipeJsPath, 'utf8');
                }

                // Replace the image field
                // Search pattern: image: "oldname.png" or image: "oldname"
                // We assume the title match is unique enough or we search relative to title

                // Strategy: Find the block containing the title, then replace the image line inside it.
                // Since this is tricky with regex global replace, we'll try a specific title-bound replacement if possible.
                // Or simplified: Search for the title, then find the next 'image:' property.

                const titleIdx = content.indexOf(`title: "${title}"`);
                if (titleIdx !== -1) {
                    const afterTitle = content.substring(titleIdx);
                    const imageMatch = afterTitle.match(/image:\s*"([^"]+)"/);
                    if (imageMatch) {
                        const oldImageLine = imageMatch[0];
                        const oldImageVal = imageMatch[1];

                        // Check if we need to update
                        if (oldImageVal !== newFilename) {
                            // We need to be careful not to replace the wrong occurrence.
                            // We define the unique string to replace specific to this recipe entry
                            // But since JS files are structured, we can just replace the first occurrence after the title

                            const newImageLine = `image: "${newFilename}"`;
                            // Careful splice
                            const globalOffset = titleIdx + imageMatch.index;
                            content = content.substring(0, globalOffset) +
                                newImageLine +
                                content.substring(globalOffset + oldImageLine.length);

                            fileUpdates.set(recipeJsPath, content);
                            updatedCount++;
                        }
                    }
                }
            } else {
                console.warn(`Could not find JS file for recipe: "${title}"`);
            }
        } else {
            console.warn(`No prompt info found for index: ${no}`);
        }
    }
});

// 4. Write Updates
console.log('Writing updated JS files...');
fileUpdates.forEach((content, filePath) => {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${path.basename(filePath)}`);
});

console.log(`Sync Complete. Updated ${updatedCount} recipe references.`);
