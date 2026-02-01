const fs = require('fs');
const path = require('path');

const masterDir = path.join(__dirname, '../src/data/grand_master');
const promptFile = path.join(__dirname, '../image_prompts.md');

// 1. Get All Master Images
const masterFiles = fs.readdirSync(masterDir).filter(f => f.endsWith('.js'));
let masterImages = [];
let masterRecipes = [];

masterFiles.forEach(f => {
    const recipes = require(path.join(masterDir, f));
    recipes.forEach(r => {
        // Handle image path (remove /images/ prefix if present)
        let img = r.image.replace('/images/', '').replace('images/', '');
        masterImages.push(img);
        masterRecipes.push({
            province: r.province,
            title: r.title,
            image: img,
            description: r.description
        });
    });
});

// 2. Get Existing Prompts
const promptContent = fs.readFileSync(promptFile, 'utf8');
const existingImages = [];
const lines = promptContent.split('\n');
lines.forEach(line => {
    if (line.includes('|')) {
        const parts = line.split('|').map(s => s.trim());
        if (parts.length > 4) {
            // Filename is usually in the 4th column (index 3) but check for extension
            const imgPart = parts.find(p => p.endsWith('.png') || p.endsWith('.jpg'));
            if (imgPart) {
                // Remove backticks if present
                const cleanImg = imgPart.replace(/`/g, '');
                existingImages.push(cleanImg);
            }
        }
    }
});

// 3. Compare
const missing = masterRecipes.filter(r => !existingImages.includes(r.image));

console.log(`Total Master Recipes: ${masterRecipes.length}`);
console.log(`Total Existing Prompts: ${existingImages.length}`);
console.log(`Missing Prompts: ${missing.length}`);
console.log(JSON.stringify(missing, null, 2));
