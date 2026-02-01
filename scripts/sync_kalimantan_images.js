const fs = require('fs');
const path = require('path');

// CONFIG
const SOURCE_DIR = 'C:\\Users\\ASUS\\Downloads\\kalimantan';
const TARGET_DIR = path.join(__dirname, '../public/images');

// MAPPING
const MAPPING = {
    '1': 'kalimantan_barat_bubur_pedas_sambas.jpeg',
    '2': 'kalimantan_barat_asam_pedas_tempoyak.jpeg',
    '3': 'kalimantan_barat_choipan.jpeg',
    '4': 'kalimantan_selatan_soto_banjar.jpeg',
    '5': 'kalimantan_selatan_ketupat_kandangan.jpeg',
    '6': 'kalimantan_selatan_ikan_patin_bakar.jpeg',
    '7': 'kalimantan_tengah_juhu_singkah.jpeg',
    '8': 'kalimantan_tengah_wadi_ikan.jpeg',
    '9': 'kalimantan_tengah_tumis_kalakai.jpeg',
    '10': 'kalimantan_timur_ayam_cincane.jpeg',
    '11': 'kalimantan_timur_nasi_bekepor.jpeg',
    '12': 'kalimantan_timur_gence_ruan.jpeg',
    '13': 'kalimantan_utara_kepiting_soka.jpeg',
    '14': 'kalimantan_utara_lawa_timun.jpeg',
    '15': 'kalimantan_utara_sate_temburung.jpeg'
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

console.log("Kalimantan Image Sync Complete!");
