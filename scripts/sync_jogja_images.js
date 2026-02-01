const fs = require('fs');
const path = require('path');

// CONFIG
const SOURCE_DIR = 'C:\\Users\\ASUS\\Downloads\\jogja';
const TARGET_DIR = path.join(__dirname, '../public/images');

// MAPPING
const MAPPING = {
    '1': 'di_yogyakarta_oseng_mercon.jpeg',
    '2': 'di_yogyakarta_bakmi_jawa.jpeg',
    '3': 'di_yogyakarta_sate_kere.jpeg',
    '4': 'di_yogyakarta_jadah_tempe.jpeg',
    '5': 'di_yogyakarta_brongkos.jpeg',
    '6': 'di_yogyakarta_ayam_kalasan.jpeg',
    '7': 'di_yogyakarta_kopi_joss.jpeg'
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

console.log("DI Yogyakarta Image Sync Complete!");
