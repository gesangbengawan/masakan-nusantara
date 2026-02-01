require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');
const recipes = require('../src/data/part4_authentic.js');

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseKey) {
    console.error("Missing keys.");
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function seed() {
    console.log(`🚀 Seeding PART 4: ${recipes.length} Ultra-Authentic Recipes (Bali, NTB, Sumut, etc)...`);

    for (const r of recipes) {
        const payload = {
            slug: r.slug,
            title: r.title,
            province: r.province,
            description: r.description,
            image: r.image,
            prepTime: r.prepTime,
            cookTime: r.cookTime,
            servings: r.servings || 4,
            difficulty: r.difficulty || "Sedang",
            ingredients: r.ingredients,
            instructions: r.instructions,
            tips: r.tips || []
        };

        const { error } = await supabase.from('recipes').upsert(payload, { onConflict: 'slug' });

        if (error) {
            console.error(`❌ Failed: ${r.title}`, error.message);
        } else {
            console.log(`✅ Upserted: ${r.title}`);
        }
    }
    console.log("🎉 Part 4 Seeding Complete!");
}

seed();
