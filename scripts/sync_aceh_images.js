const fs = require('fs');
const path = require('path');

// Source and Target
const sourceDir = "C:\\Users\\ASUS\\Downloads\\aceh";
const targetDir = "C:\\Users\\ASUS\\.gemini\\antigravity\\scratch\\masakan-nusantara\\public\\images";

// Mapping based on image_prompts_aceh.md
const mapping = {
    "1": "aceh_kuah_beulangong.jpeg",
    "2": "aceh_sate_matang.jpeg",
    "3": "aceh_sie_reuboh.jpeg",
    "4": "aceh_martabak.jpeg",
    "5": "aceh_timphan.jpeg",
    "6": "aceh_rujak_kweni.jpeg",
    "7": "aceh_es_timun_serut.jpeg"
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
