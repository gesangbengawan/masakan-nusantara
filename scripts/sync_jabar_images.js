const fs = require('fs');
const path = require('path');

// CONFIG
const SOURCE_DIR = 'C:\\Users\\ASUS\\Downloads\\jabar'; // Updated path
const TARGET_DIR = path.join(__dirname, '../public/images');

// MAPPING
const MAPPING = {
    '1': 'jawa_barat_nasi_timbel.jpeg',
    '2': 'jawa_barat_soto_mie_bogor.jpeg',
    '3': 'jawa_barat_batagor.jpeg',
    '4': 'jawa_barat_mie_kocok.jpeg',
    '5': 'jawa_barat_pepes_ikan.jpeg',
    '6': 'jawa_barat_nasi_tutug_oncom.jpeg',
    '7': 'jawa_barat_es_goyobod.jpeg'
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

console.log("Jawa Barat Image Sync Complete!");
