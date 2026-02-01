const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');
require('dotenv').config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

const publicImagesDir = path.join(__dirname, '../public/images');

async function checkIntegrity() {
    console.log("Checking Asset Integrity...");

    // 1. Get all files in public/images
    if (!fs.existsSync(publicImagesDir)) {
        console.error("public/images dir not found!");
        return;
    }
    const files = fs.readdirSync(publicImagesDir);
    const fileSet = new Set(files);
    console.log(`Local Files: ${files.length}`);

    // 2. Get all recipes
    const { data: recipes, error } = await supabase.from('recipes').select('title, image');
    if (error) {
        console.error("DB Error:", error);
        return;
    }
    console.log(`DB Recipes: ${recipes.length}`);

    let missingCount = 0;

    recipes.forEach(r => {
        let dbImage = r.image;
        if (!dbImage) {
            console.log(`[NULL] ${r.title} has NO image.`);
            missingCount++;
            return;
        }

        // Remove /images/ prefix
        const filename = dbImage.replace('/images/', '');

        if (!fileSet.has(filename)) {
            console.log(`[MISSING] ${r.title}`);
            console.log(`   DB expects: ${filename}`);
            // Check for potential case mismatch or almost-match
            const match = files.find(f => f.toLowerCase() === filename.toLowerCase());
            if (match) {
                console.log(`   Did you mean: ${match}? (Case mismatch)`);
            } else {
                console.log(`   File does not exist.`);
            }
            missingCount++;
        }
    });

    if (missingCount === 0) {
        console.log("✅ All Database images exist locally.");
    } else {
        console.log(`❌ Found ${missingCount} Broken Links.`);
    }
}

checkIntegrity();
