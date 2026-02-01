require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');
const recipes = require('../src/data/batch_5.js');

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseKey) {
    console.error("Missing credentials.");
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function seed() {
    console.log(`Seeding Batch 5 PREMUM (${recipes.length} recipes) - Kalimantan to Papua...`);
    let count = 0;

    for (const r of recipes) {
        const payload = {
            slug: r.slug,
            title: r.title,
            province: r.province,
            description: r.description,
            image: r.image,
            prepTime: r.prepTime,
            cookTime: r.cookTime,
            servings: r.servings,
            difficulty: r.difficulty,
            ingredients: r.ingredients,
            instructions: r.instructions
        };

        const { error } = await supabase.from('recipes').upsert(payload, { onConflict: 'slug' });

        if (error) {
            console.error(`Failed to insert ${r.title}:`, error.message);
        } else {
            console.log(`+ Inserted PREMIUM: ${r.title}`);
            count++;
        }
    }
    console.log(`Batch 5 Complete. ${count} premium recipes inserted.`);
}

seed();
