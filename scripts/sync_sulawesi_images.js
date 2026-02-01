const fs = require('fs');
const path = require('path');

// CONFIG
const SOURCE_DIR = 'C:\\Users\\ASUS\\Downloads\\sulawesi';
const TARGET_DIR = path.join(__dirname, '../public/images');

// MAPPING
const MAPPING = {
    '1': 'sulawesi_utara_bubur_manado.jpeg',
    '2': 'sulawesi_utara_ayam_woku.jpeg',
    '3': 'sulawesi_utara_cakalang_fufu.jpeg',
    '4': 'gorontalo_binte_biluhuta.jpeg',
    '5': 'gorontalo_ayam_iloni.jpeg',
    '6': 'gorontalo_sate_tuna.jpeg',
    '7': 'sulawesi_tengah_kaledo.jpeg',
    '8': 'sulawesi_tengah_uta_dada.jpeg',
    '9': 'sulawesi_tengah_duo_saleh.jpeg',
    '10': 'sulawesi_barat_bau_peapi.jpeg',
    '11': 'sulawesi_barat_jepa.jpeg',
    '12': 'sulawesi_barat_golla_kambu.jpeg',
    '13': 'sulawesi_selatan_coto_makassar.jpeg',
    '14': 'sulawesi_selatan_pallubasa.jpeg',
    '15': 'sulawesi_selatan_konro_bakar_iga.jpeg',
    '16': 'sulawesi_tenggara_sinonggi.jpeg',
    '17': 'sulawesi_tenggara_ikan_parende.jpeg',
    '18': 'sulawesi_tenggara_kabuto.jpeg'
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

console.log("Sulawesi Image Sync Complete!");
