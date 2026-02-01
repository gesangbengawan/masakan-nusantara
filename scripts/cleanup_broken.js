const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

const BROKEN_IMAGES = [
    'bali_sate_lilit_ikan_laut.png',
    'nusa_tenggara_barat_ayam_taliwang_bakar.png',
    'nusa_tenggara_barat_sate_rembiga.png',
    'nusa_tenggara_timur_se_i_sapi_asap.png',
    'bali_ayam_pelalah.png',
    'nusa_tenggara_barat_plecing_kangkung.png',
    'nusa_tenggara_timur_rumpu_rampe.png',
    'nusa_tenggara_timur_ikan_kuah_asam.png',
    'bali_ayam_betutu_kuah.png', // Also clean up .png versions if they exist
    'bali_sate_lilit.png',
    'bali_lawar.png'
];

async function cleanup() {
    console.log("🧹 Cleaning up Broken/Orphan Recipes...");
    let deletedCount = 0;

    for (const img of BROKEN_IMAGES) {
        // Try deleting with /images/ prefix and without
        const patterns = [`%${img}%`, `%${img.replace('.png', '.jpeg')}%`];

        // Wait, for orphans like ayam_pelalah, we just want to delete the ROW where image matches the broken one.
        const { error, count } = await supabase
            .from('recipes')
            .delete({ count: 'exact' })
            .ilike('image', `%${img}%`); // Delete match

        if (error) {
            console.error(`Error deleting ${img}:`, error.message);
        } else {
            if (count > 0) {
                console.log(`✅ Deleted ${count} entries matching '${img}'`);
                deletedCount += count;
            }
        }
    }

    console.log(`\nCleanup Done. Removing specific known zombies.`);
}

cleanup();
