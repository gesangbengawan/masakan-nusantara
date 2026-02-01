const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

async function fixProvinces() {
    console.log("Standardizing Province Names...");

    // 1. Fix Aceh
    const { data: aceh, error: err1 } = await supabase
        .from('recipes')
        .update({ province: 'Aceh' })
        .eq('province', 'Nanggroe Aceh Darussalam')
        .select();

    if (aceh) console.log(`Updated ${aceh.length} recipes from 'Nanggroe Aceh Darussalam' to 'Aceh'.`);

    // 2. Fix Papua Barat (Check if any 'Papua' should be 'Papua Barat')
    // Based on previous file reads, 'papua_barat_...' images imply Papua Barat province.
    // Let's check slugs or images.

    const { data: papuaBaratCandidates } = await supabase
        .from('recipes')
        .select('*')
        .like('image', 'papua_barat_%') // Check images starting with papua_barat
        .eq('province', 'Papua'); // But labeled as Papua

    if (papuaBaratCandidates && papuaBaratCandidates.length > 0) {
        console.log(`Found ${papuaBaratCandidates.length} mislabeled Papua Barat recipes.`);
        for (const r of papuaBaratCandidates) {
            await supabase
                .from('recipes')
                .update({ province: 'Papua Barat' })
                .eq('id', r.id);
            console.log(`  - Fixed: ${r.title} -> Papua Barat`);
        }
    }
}

fixProvinces();
