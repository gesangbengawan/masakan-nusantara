const fs = require('fs');
const path = require('path');

// Source and Target
const sourceDir = "C:\\Users\\ASUS\\Downloads\\sumbar";
const targetDir = "C:\\Users\\ASUS\\.gemini\\antigravity\\scratch\\masakan-nusantara\\public\\images";

// Mapping based on image_prompts_sumbar.md
const mapping = {
    "1": "sumbar_gulai_tunjang.jpeg",
    "2": "sumbar_ayam_pop.jpeg",
    "3": "sumbar_ikan_asam_padeh.jpeg",
    "4": "sumbar_gulai_pakis.jpeg",
    "5": "sumbar_soto_padang.jpeg",
    "6": "sumbar_itiak_lado_mudo.jpeg",
    "7": "sumbar_bubur_kampiun.jpeg"
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
