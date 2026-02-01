const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

async function listTitles() {
    const { data, error } = await supabase
        .from('recipes')
        .select('title')
        .order('title');

    if (error) {
        console.error(error);
        return;
    }

    console.log("=== CURRENT RECIPES ===");
    data.forEach(r => console.log(r.title));
}

listTitles();
