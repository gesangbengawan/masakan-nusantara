const fs = require('fs');
const path = require('path');

// CONFIG
const SOURCE_DIR = 'C:\\Users\\ASUS\\Downloads\\jakarta';
const TARGET_DIR = path.join(__dirname, '../public/images');

// MAPPING
const MAPPING = {
    '1': 'dki_jakarta_nasi_uduk.jpeg',
    '2': 'dki_jakarta_soto_tangkar.jpeg',
    '3': 'dki_jakarta_asinan_betawi.jpeg',
    '4': 'dki_jakarta_gabus_pucung.jpeg',
    '5': 'dki_jakarta_laksa_betawi.jpeg',
    '6': 'dki_jakarta_semur_jengkol.jpeg',
    '7': 'dki_jakarta_es_selendang_mayang.jpeg'
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

console.log("Jakarta Image Sync Complete!");
