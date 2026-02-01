const fs = require('fs');
const path = require('path');

const projectDir = path.join(__dirname, '../');
const publicImagesDir = path.join(projectDir, 'public/images');
const dataDir = path.join(projectDir, 'src/data/grand_master');

// 1. Rename Files
if (fs.existsSync(publicImagesDir)) {
    const files = fs.readdirSync(publicImagesDir);
    let renamed = 0;

    files.forEach(file => {
        if (file.includes('`')) {
            const cleanName = file.replace(/`/g, '');
            const oldPath = path.join(publicImagesDir, file);
            const newPath = path.join(publicImagesDir, cleanName);

            // Rename
            if (!fs.existsSync(newPath)) { // Avoid collision or overwrite logic
                fs.renameSync(oldPath, newPath);
                console.log(`Renamed: ${file} -> ${cleanName}`);
                renamed++;
            } else {
                console.warn(`Skipping rename (target exists): ${file} -> ${cleanName}`);
                // If it exists, maybe we delete the bad valid one?
                // Let's rely on simple rename for now or manual check
            }
        }
    });
    console.log(`Renamed ${renamed} files.`);
}

// 2. Fix JS Content References (if any accidentally got bad refs)
const dataFiles = fs.readdirSync(dataDir).filter(f => f.endsWith('.js'));
let updatedRefs = 0;

dataFiles.forEach(f => {
    const filePath = path.join(dataDir, f);
    let content = fs.readFileSync(filePath, 'utf8');

    if (content.includes('`')) {
        // Only replace backticks inside QUOTES, assuming path strings
        // But backticks are rare in valid content here except maybe template literals?
        // Our data uses double quotes "image.png".
        // If we see `image.png`, it's bad.
        // Actually, let's just replace any backtick inside the image field value

        // This is tricky. Let's look for known bad patterns from previous script run?
        // Or simply: search for .jpeg references containing backticks
        // Regex: image: "`.*.jpeg"

        const regex = /image:\s*"(`[^"]+)"/g;
        let match;
        let modified = false;

        // Naive replace all backticks in specific context is safer
        // Let's replace "` with "

        if (content.match(/image:\s*"`/)) {
            content = content.replace(/image:\s*"`/g, 'image: "');
            modified = true;
            updatedRefs++;
            console.log(`Fixed refs in ${f}`);
        }
    }

    if (updatedRefs > 0) {
        fs.writeFileSync(filePath, content, 'utf8');
    }
});

console.log(`Ref Check Complete.`);
