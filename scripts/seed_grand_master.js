require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');
const part1 = require('../src/data/part1_authentic.js');
const part2 = require('../src/data/part2_authentic.js');

const recipes = [...part1, ...part2];

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
if (!supabaseUrl || !supabaseKey) { console.error("Missing keys"); process.exit(1); }
const supabase = createClient(supabaseUrl, supabaseKey);

async function seed() {
    console.log("⚠️  TRUNCATING All Recipes for Grand Master Upgrade...");
    const { error: delError } = await supabase.from('recipes').delete().neq('slug', 'dummy');
    if (delError) console.error("Delete Error:", delError);

    console.log(`Seeding ${recipes.length} GRAND MASTER RECIPES (Part 1 & 2)...`);
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
            difficulty: r.difficulty || "Sedang",
            ingredients: r.ingredients || [],
            instructions: r.instructions || [],
            tips: r.tips || []
        };
        const { error } = await supabase.from('recipes').upsert(payload, { onConflict: 'slug' });
        if (error) console.error(`Error ${r.slug}:`, error.message);
        else console.log(`+ GRAND MASTER: ${r.title} (${r.province})`);
    }
}
seed();
