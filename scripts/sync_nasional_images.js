const fs = require('fs');
const path = require('path');

// Source and Target
const sourceDir = "C:\\Users\\ASUS\\Downloads\\foto masakan 3";
const targetDir = "C:\\Users\\ASUS\\.gemini\\antigravity\\scratch\\masakan-nusantara\\public\\images";

// Mapping based on image_prompts_nasional.md
const mapping = {
    "1": "nasional_nasi_goreng_kampung.jpeg",
    "2": "nasional_bakso_malang.jpeg",
    "3": "nasional_sop_buntut.jpeg",
    "4": "nasional_gado_gado.jpeg",
    "5": "nasional_iga_bakar_madu.jpeg",
    "6": "nasional_tongseng_kambing.jpeg",
    "7": "nasional_ayam_penyet.jpeg",
    "8": "nasional_sayur_asem.jpeg"
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
            fs.copyFileSync(oldPath, newPath); // Use copy to be safe
            // fs.unlinkSync(oldPath); // Uncomment to move instead of copy
        } else {
            console.warn(`No mapping found for number ${num} in file ${file}`);
        }
    } else {
        console.warn(`Skipping unmatched file: ${file}`);
    }
});

console.log("Sync complete!");
