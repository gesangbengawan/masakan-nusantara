const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseKey) {
    console.error("Missing Supabase credentials in .env.local");
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function verify() {
    console.log("Verifying Live Database Content...");

    // Check total count
    const { count, error: countError } = await supabase.from('recipes').select('*', { count: 'exact', head: true });
    if (countError) {
        console.error("Error fetching count:", countError);
        return;
    }
    console.log(`Total Recipes in DB: ${count}`);

    // Check for "hero.png" (old placeholder)
    const { data: oldImages, error: oldError } = await supabase
        .from('recipes')
        .select('title, image')
        .ilike('image', '%hero.png%');

    if (oldError) {
        console.error("Error checking old images:", oldError);
    } else {
        if (oldImages.length > 0) {
            console.log(`⚠️  Found ${oldImages.length} recipes with OLD placeholder images (hero.png):`);
            oldImages.forEach(r => console.log(`  - ${r.title}: ${r.image}`));
        } else {
            console.log("✅ No placeholder 'hero.png' images found in DB.");
        }
    }

    // Check for EMPTY images
    const { data: emptyImages, error: emptyError } = await supabase
        .from('recipes')
        .select('title')
        .is('image', null);

    if (emptyError) {
        console.error("Error checking empty images:", emptyError);
    } else if (emptyImages && emptyImages.length > 0) {
        console.log(`⚠️  Found ${emptyImages.length} recipes with NULL images.`);
    } else {
        console.log("✅ No NULL images found.");
    }

    // Sample check of specific recent updates
    const { data: sample } = await supabase.from('recipes').select('title, image').eq('slug', 'sate-madura-asli').single();
    if (sample) {
        console.log(`Sample 'Sate Madura': ${sample.image}`);
    }
}

verify();
