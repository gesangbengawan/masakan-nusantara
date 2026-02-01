require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY
);

async function checkPaths() {
    console.log("Checking DB Image Paths...");
    // Check specific problematic recipes
    const { data, error } = await supabase
        .from('recipes')
        .select('title, slug, image')
        .in('slug', ['rendang-minang-otentik', 'dendeng-batokok-lado-mudo', 'sate-padang-panjang', 'mie-celor-palembang-26-ilir'])
        .limit(10);

    if (error) {
        console.error("DB Error:", error);
        return;
    }

    console.table(data);
}

checkPaths();
