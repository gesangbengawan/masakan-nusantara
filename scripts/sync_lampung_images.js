const fs = require('fs');
const path = require('path');

// CONFIG
const SOURCE_DIR = 'C:\\Users\\ASUS\\Downloads\\lampung';
const TARGET_DIR = path.join(__dirname, '../public/images');

// MAPPING (Index based on prefix _1, _2 etc)
const MAPPING = {
    '1': 'lampung_geguduh.jpeg',
    '2': 'lampung_gabing.jpeg',
    '3': 'lampung_engkak_ketan.jpeg',
    '4': 'lampung_gulai_balak.jpeg',
    '5': 'lampung_keripik_pisang.jpeg',
    '6': 'lampung_sambal_tempoyak.jpeg',
    '7': 'lampung_bekasam.jpeg'
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

console.log("Lampung Image Sync Complete!");
