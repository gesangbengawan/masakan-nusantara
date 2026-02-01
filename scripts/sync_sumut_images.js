const fs = require('fs');
const path = require('path');

// Source and Target
const sourceDir = "C:\\Users\\ASUS\\Downloads\\sumut";
const targetDir = "C:\\Users\\ASUS\\.gemini\\antigravity\\scratch\\masakan-nusantara\\public\\images";

// Mapping based on image_prompts_sumut.md
const mapping = {
    "1": "sumut_mie_gomak.jpeg",
    "2": "sumut_naniura.jpeg",
    "3": "sumut_daun_ubi_tumbuk.jpeg",
    "4": "sumut_saksang_sapi.jpeg",
    "5": "sumut_lontong_medan.jpeg",
    "6": "sumut_lemang.jpeg",
    "7": "sumut_ombus_ombus.jpeg"
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
