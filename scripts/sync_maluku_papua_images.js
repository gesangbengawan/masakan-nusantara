const fs = require('fs');
const path = require('path');

// CONFIG
const SOURCE_DIR = 'C:\\Users\\ASUS\\Downloads\\maluku_papua';
const TARGET_DIR = path.join(__dirname, '../public/images');

// MAPPING
const MAPPING = {
    '1': 'maluku_ikan_kuah_kuning.jpeg',
    '2': 'maluku_kohu_kohu.jpeg',
    '3': 'maluku_nasi_lapola.jpeg',
    '4': 'maluku_utara_gohu_ikan.jpeg',
    '5': 'maluku_utara_gatang_kenari.jpeg',
    '6': 'maluku_utara_popeda.jpeg',
    '7': 'papua_papeda.jpeg',
    '8': 'papua_ikan_asar.jpeg',
    '9': 'papua_kue_lontar.jpeg',
    '10': 'papua_barat_ikan_bakar_manokwari.jpeg',
    '11': 'papua_barat_aunu_senebre.jpeg',
    '12': 'papua_barat_ikan_bungkus.jpeg',
    '13': 'papua_udang_selingkuh.jpeg',
    '14': 'papua_selatan_sagu_sep.jpeg',
    '15': 'papua_keladi_tumbuk.jpeg'
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

console.log("Maluku Papua Image Sync Complete!");
