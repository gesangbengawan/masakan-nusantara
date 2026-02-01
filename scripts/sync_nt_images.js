const fs = require('fs');
const path = require('path');

// CONFIG
const SOURCE_DIR = 'C:\\Users\\ASUS\\Downloads\\nt';
const TARGET_DIR = path.join(__dirname, '../public/images');

// MAPPING
const MAPPING = {
    '1': 'ntb_sate_rembiga.jpeg',
    '2': 'ntb_plecing_kangkung.jpeg',
    '3': 'ntt_ikan_kuah_asam.jpeg',
    '4': 'ntt_kolo_nasi_bambu.jpeg'
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

console.log("Nusa Tenggara Image Sync Complete!");
