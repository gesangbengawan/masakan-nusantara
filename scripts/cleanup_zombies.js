const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

async function cleanup() {
    console.log("🧹 Starting Zombie Cleanup...");

    // Safety check: Count how many to verify we aren't deleting everything
    const { count, error: countError } = await supabase
        .from('recipes')
        .select('*', { count: 'exact', head: true })
        .ilike('image', '%hero.png%');

    if (countError) {
        console.error("Check Error:", countError);
        return;
    }

    console.log(`Found ${count} zombie recipes with 'hero.png'.`);

    if (count === 0) {
        console.log("No zombies found. Exiting.");
        return;
    }

    if (count > 50) {
        console.warn("⚠️ Too many zombies (>50). Aborting for safety. Verify manually.");
        return;
    }

    // Execute Delete
    const { data, error } = await supabase
        .from('recipes')
        .delete()
        .ilike('image', '%hero.png%');

    if (error) {
        console.error("Delete Error:", error);
    } else {
        console.log("✅ Successfully DELETED zombie recipes.");
    }
}

cleanup();
