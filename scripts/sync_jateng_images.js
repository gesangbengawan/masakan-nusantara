const fs = require('fs');
const path = require('path');

// CONFIG
const SOURCE_DIR = 'C:\\Users\\ASUS\\Downloads\\jateng';
const TARGET_DIR = path.join(__dirname, '../public/images');

// MAPPING
const MAPPING = {
    '1': 'jawa_tengah_tahu_gimbal.jpeg',
    '2': 'jawa_tengah_nasi_gandul.jpeg',
    '3': 'jawa_tengah_selat_solo.jpeg',
    '4': 'jawa_tengah_mangut_beong.jpeg',
    '5': 'jawa_tengah_sate_buntel.jpeg',
    '6': 'jawa_tengah_mie_ongklok.jpeg',
    '7': 'jawa_tengah_dawet_ireng.jpeg'
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

console.log("Jawa Tengah Image Sync Complete!");
