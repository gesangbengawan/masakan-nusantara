require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseKey) {
    console.error("Missing keys.");
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function seed() {
    const dataDir = path.join(__dirname, '../src/data/grand_master');

    // Read all files in grand_master
    if (!fs.existsSync(dataDir)) {
        console.error("Directory not found:", dataDir);
        return;
    }

    const files = fs.readdirSync(dataDir).filter(f => f.endsWith('.js'));
    console.log(`🚀 GRAND SEEDING: Formatting & Upserting from ${files.length} Master Files...`);

    let total = 0;

    for (const file of files) {
        console.log(`\n📦 Processing Batch: ${file}`);
        const recipes = require(path.join(dataDir, file));

        for (const r of recipes) {
            const payload = {
                slug: r.slug,
                title: r.title,
                province: r.province,
                description: r.description,
                image: `/images/${r.image}`, // Ensure path prefix is correct (assuming filename only in data)
                prepTime: r.prepTime,
                cookTime: r.cookTime,
                servings: r.servings || 4,
                difficulty: r.difficulty || "Sedang",
                ingredients: r.ingredients,
                instructions: r.instructions,
                tips: r.tips || []
            };

            // Fix image path if it already has /images/
            if (r.image.startsWith('/images/')) {
                payload.image = r.image;
            } else if (!r.image.startsWith('http')) {
                payload.image = `/images/${r.image}`;
            }

            const { error } = await supabase.from('recipes').upsert(payload, { onConflict: 'slug' });

            if (error) {
                console.error(`  ❌ Failed: ${r.title}`, error.message);
            } else {
                console.log(`  ✅ Upserted: ${r.title}`);
                total++;
            }
        }
    }
    console.log(`\n🎉 Grand Consolidation Complete! ${total} Recipes Updated to Premium Standard.`);
}

seed();
