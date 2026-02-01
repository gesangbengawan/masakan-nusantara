require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');
const recipes = require('../src/data/master_authentic.js');

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
if (!supabaseUrl || !supabaseKey) { console.error("Missing keys"); process.exit(1); }
const supabase = createClient(supabaseUrl, supabaseKey);

async function seed() {
    console.log("⚠️  TRUNCATING Existing Recipes to Start Clean...");
    // Hack: Delete all by ID > 0 or slug is not null
    const { error: delError } = await supabase.from('recipes').delete().neq('slug', 'dummy');
    if (delError) console.error("Delete Error:", delError);

    console.log(`Seeding 7 MASTER AUTHENTIC RECIPES...`);
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
            instructions: r.instructions,
            tips: r.tips || []
        };
        const { error } = await supabase.from('recipes').upsert(payload, { onConflict: 'slug' });
        if (error) console.error(error);
        else console.log(`+ AUTHENTIC: ${r.title}`);
    }
}
seed();
