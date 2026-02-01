require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');
const recipes = require('../src/data/rendang_special.js');

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

async function seed() {
    console.log(`Seeding SPECIAL RENDANG...`);
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
            tips: r.tips
        };

        const { error } = await supabase.from('recipes').upsert(payload, { onConflict: 'slug' });
        if (error) console.error(error);
        else console.log(`+ Updated: ${r.title}`);
    }
}
seed();
