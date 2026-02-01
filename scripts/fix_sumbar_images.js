const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, '../public/images');

const fixes = [
    { old: 'rendang_premium.png', new: 'sumbar_rendang_daging.jpeg' },
    { old: 'dendeng_batokok_premium.png', new: 'sumbar_dendeng_batokok.jpeg' },
    { old: 'sate_padang_premium.png', new: 'sumbar_sate_padang.jpeg' }
];

fixes.forEach(fix => {
    const oldPath = path.join(imagesDir, fix.old);
    const newPath = path.join(imagesDir, fix.new);

    if (fs.existsSync(oldPath)) {
        console.log(`Copying ${fix.old} -> ${fix.new}`);
        fs.copyFileSync(oldPath, newPath);
    } else {
        console.error(`Source file not found: ${fix.old}`);
    }
});
