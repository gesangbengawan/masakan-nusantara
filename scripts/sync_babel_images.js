const fs = require('fs');
const path = require('path');

// CONFIG
const SOURCE_DIR = 'C:\\Users\\ASUS\\Downloads\\babel';
const TARGET_DIR = path.join(__dirname, '../public/images');

// MAPPING (Index based on prefix _1, _2 etc)
const MAPPING = {
    '1': 'babel_berekeng.jpeg',
    '2': 'babel_pantiaw.jpeg',
    '3': 'babel_lempah_darat.jpeg',
    '4': 'babel_martabak_bangka.jpeg',
    '5': 'babel_kopi_tung_tau.jpeg',
    '6': 'babel_sotong_hitam.jpeg',
    '7': 'babel_kue_rintak.jpeg'
};

if (!fs.existsSync(SOURCE_DIR)) {
    console.error(`Source directory not found: ${SOURCE_DIR}`);
    process.exit(1);
}

if (!fs.existsSync(TARGET_DIR)) {
    fs.mkdirSync(TARGET_DIR, { recursive: true });
}

console.log(`Scanning ${SOURCE_DIR}...`);
const files = fs.readdirSync(SOURCE_DIR);

files.forEach(file => {
    // Extract number from prefix like "_1__2026..." -> "1"
    const match = file.match(/_(\d+)__/);
    if (match) {
        const index = match[1];
        const targetName = MAPPING[index];

        if (targetName) {
            const sourcePath = path.join(SOURCE_DIR, file);
            const targetPath = path.join(TARGET_DIR, targetName);

            console.log(`Syncing [${index}]: ${file} -> ${targetName}`);
            fs.copyFileSync(sourcePath, targetPath);
        }
    }
});

console.log("Babel Image Sync Complete!");
