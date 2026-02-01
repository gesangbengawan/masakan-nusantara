const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '../src/data/grand_master');

console.log('Auditing Image Field in Recipes...');
const files = fs.readdirSync(dataDir).filter(f => f.endsWith('.js'));
let placeholderCount = 0;

files.forEach(f => {
    const filePath = path.join(dataDir, f);
    const content = fs.readFileSync(filePath, 'utf8');

    // Naive regex check matches content
    // pattern: image: "/images/hero.png" or similar
    if (content.includes('hero.png') || content.includes('hero_masakan_nusantara.png')) {
        console.log(`[WARNING] Placeholder found in ${f}`);
        placeholderCount++;

        // Let's print the specific line
        const lines = content.split('\n');
        lines.forEach((l, idx) => {
            if (l.includes('hero.png')) {
                console.log(`  Line ${idx + 1}: ${l.trim()}`);
            }
        });
    }
});

if (placeholderCount === 0) {
    console.log('✅ ALL CLEARED! No placeholder images found in source files.');
} else {
    console.log(`⚠️  Found placeholders in ${placeholderCount} files.`);
}
