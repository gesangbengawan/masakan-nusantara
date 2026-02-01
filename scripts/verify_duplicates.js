const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

async function verify() {
    console.log("Deep Verification...");

    // Check specific known updated slug
    const { data: premium, error: err1 } = await supabase.from('recipes').select('slug, title, image').eq('slug', 'soto-medan-premium');
    if (premium && premium.length > 0) {
        console.log(`✅ FOUND 'soto-medan-premium': ${premium[0].image}`);
    } else {
        console.log("❌ MISSING 'soto-medan-premium'");
    }

    // Check potential old slug
    const { data: old, error: err2 } = await supabase.from('recipes').select('slug, title, image').eq('slug', 'soto-medan');
    if (old && old.length > 0) {
        console.log(`⚠️  FOUND 'soto-medan' (Old): ${old[0].image}`);
    } else {
        console.log("✅ 'soto-medan' not found (clean)");
    }

    // List all with hero.png
    const { data: zombies } = await supabase.from('recipes').select('slug, title, image').ilike('image', '%hero.png%');
    console.log(`\nTotal ZOMBIES (hero.png): ${zombies.length}`);
    if (zombies.length > 0) {
        zombies.forEach(z => console.log(`  - [${z.slug}] ${z.title}`));
    }
}
verify();
