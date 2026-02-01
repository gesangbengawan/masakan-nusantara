const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

async function checkProvinces() {
    console.log("Checking Province Data...");

    const { data, error } = await supabase
        .from('recipes')
        .select('province');

    if (error) {
        console.error("DB Error:", error);
        return;
    }

    const counts = {};
    data.forEach(r => {
        counts[r.province] = (counts[r.province] || 0) + 1;
    });

    console.log("Current Provinces in DB:");
    Object.keys(counts).sort().forEach(p => {
        console.log(`- "${p}" : ${counts[p]} recipes`);
    });
}

checkProvinces();
