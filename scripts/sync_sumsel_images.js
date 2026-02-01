const fs = require('fs');
const path = require('path');

// Source and Target
const sourceDir = "C:\\Users\\ASUS\\Downloads\\sumsel";
const targetDir = "C:\\Users\\ASUS\\.gemini\\antigravity\\scratch\\masakan-nusantara\\public\\images";

// Mapping based on image_prompts_sumsel.md
const mapping = {
    "1": "sumsel_mie_celor.jpeg",
    "2": "sumsel_laksan.jpeg",
    "3": "sumsel_celimpungan.jpeg",
    "4": "sumsel_burgo.jpeg",
    "5": "sumsel_pindang_tulang.jpeg",
    "6": "sumsel_malbi_daging.jpeg",
    "7": "sumsel_es_kacang_merah.jpeg"
};

if (!fs.existsSync(sourceDir)) {
    console.error("Source directory not found:", sourceDir);
    process.exit(1);
}

const files = fs.readdirSync(sourceDir);

files.forEach(file => {
    // Extract the number from the filename _N_...
    const match = file.match(/_(\d+)__/);
    if (match) {
        const num = match[1];
        if (mapping[num]) {
            const oldPath = path.join(sourceDir, file);
            const newPath = path.join(targetDir, mapping[num]);

            console.log(`Moving ${file} -> ${mapping[num]}`);
            fs.copyFileSync(oldPath, newPath);
        } else {
            console.warn(`No mapping found for number ${num} in file ${file}`);
        }
    } else {
        console.warn(`Skipping unmatched file: ${file}`);
    }
});

console.log("Sync complete!");
