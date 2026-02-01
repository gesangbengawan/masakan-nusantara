const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '../src/data/grand_master');

console.log('Force Updating Extensions to .jpeg...');
const files = fs.readdirSync(dataDir).filter(f => f.endsWith('.js'));
let totalUpdates = 0;

files.forEach(f => {
    const filePath = path.join(dataDir, f);
    let content = fs.readFileSync(filePath, 'utf8');

    // Replace all .png with .jpeg in image fields
    // Naively replace ".png" with ".jpeg"
    // But be careful not to break non-image strings.
    // However, in our context, .png only appears in image content.

    if (content.includes('.png')) {
        const matches = content.match(/\.png/g);
        const count = matches ? matches.length : 0;

        // Match only inside image: "..." context is safer?
        // Let's replace simple instances first
        const newContent = content.replace(/\.png"/g, '.jpeg"');

        if (newContent !== content) {
            fs.writeFileSync(filePath, newContent, 'utf8');
            console.log(`Updated ${count} refs in ${f}`);
            totalUpdates += count;
        }
    }
});

console.log(`Force Update Complete. Changed ${totalUpdates} references.`);
