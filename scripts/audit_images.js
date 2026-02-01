const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '../src/data/grand_master');
const imagesDir = path.join(__dirname, '../public/images');

// 1. Get all expected images from recipes
const recipesFiles = fs.readdirSync(dataDir).filter(f => f.endsWith('.js'));
let expectedImages = [];

console.log("--- Scanning Recipe Files ---");
recipesFiles.forEach(file => {
    const filePath = path.join(dataDir, file);
    try {
        const recipes = require(filePath);
        recipes.forEach(recipe => {
            if (recipe.image) {
                // Remove leading slash if present for filesystem check
                const cleanName = recipe.image.startsWith('/')
                    ? recipe.image.slice(1).replace('images/', '')
                    : recipe.image;

                expectedImages.push({
                    file: file,
                    recipe: recipe.title,
                    imageName: cleanName,
                    originalPath: recipe.image
                });
            }
        });
    } catch (e) {
        console.error(`Error reading ${file}:`, e.message);
    }
});

// 2. Check against filesystem
console.log(`\n--- Auditing ${expectedImages.length} Images ---`);
let missingCount = 0;
let corruptCount = 0;
let caseMismatchCount = 0;

expectedImages.forEach(item => {
    const fullPath = path.join(imagesDir, item.imageName);

    // Existence Check
    if (!fs.existsSync(fullPath)) {
        console.error(`[MISSING] ${item.imageName}`);
        console.error(`  --> Used in: ${item.recipe} (${item.file})`);
        missingCount++;
        return;
    }

    // Integrity Check (Size)
    const stats = fs.statSync(fullPath);
    if (stats.size === 0) {
        console.error(`[CORRUPT/ZERO BYTE] ${item.imageName}`);
        corruptCount++;
    } else if (stats.size < 1000) {
        console.warn(`[SUSPICIOUSLY SMALL] ${item.imageName} (${stats.size} bytes)`);
    }

    // Case Sensitivity Check (Crucial for Vercel/Linux)
    const actualFileName = fs.readdirSync(imagesDir).find(f => f.toLowerCase() === item.imageName.toLowerCase());
    if (actualFileName && actualFileName !== item.imageName) {
        console.error(`[CASE MISMATCH] DB expects: ${item.imageName}, Found: ${actualFileName}`);
        console.error(`  --> Linux will fail to load this.`);
        caseMismatchCount++;
    }
});

console.log("\n--- Audit Summary ---");
console.log(`Total Expected: ${expectedImages.length}`);
console.log(`Missing: ${missingCount}`);
console.log(`Corrupt (0 byte): ${corruptCount}`);
console.log(`Case Mismatches: ${caseMismatchCount}`);

if (missingCount === 0 && corruptCount === 0 && caseMismatchCount === 0) {
    console.log("\n✅ All images look healthy locally!");
} else {
    console.log("\n❌ Issues found. See details above.");
}
