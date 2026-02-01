const fs = require('fs');
const path = require('path');

// CONFIG
const SOURCE_DIR = 'C:\\Users\\ASUS\\Downloads\\jatim';
const TARGET_DIR = path.join(__dirname, '../public/images');

// MAPPING
const MAPPING = {
    '1': 'jawa_timur_soto_lamongan.jpeg',
    '2': 'jawa_timur_tahu_tek.jpeg',
    '3': 'jawa_timur_lontong_balap.jpeg',
    '4': 'jawa_timur_nasi_krawu.jpeg',
    '5': 'jawa_timur_pecel_madiun.jpeg',
    '6': 'jawa_timur_ayam_lodho.jpeg',
    '7': 'jawa_timur_bebek_sinjay.jpeg'
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

console.log("Jawa Timur Image Sync Complete!");
