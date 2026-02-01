require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');
const partialRecipes = require('../src/data/full_recipes.js');

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseKey) {
    console.error("Missing credentials.");
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

// Full list of provinces and their signature dishes
const masterList = [
    { name: "Aceh", dishes: ["Mie Aceh", "Ayam Tangkap", "Kuah Pliek U"] },
    { name: "Sumatera Utara", dishes: ["Arsik Ikan Mas", "Soto Medan", "Bika Ambon"] },
    { name: "Sumatera Barat", dishes: ["Rendang Sapi", "Sate Padang", "Dendeng Balado"] },
    { name: "Riau", dishes: ["Gulai Ikan Patin", "Asam Pedas Baung", "Mie Sagu"] },
    { name: "Kepulauan Riau", dishes: ["Gonggong", "Mie Lendir", "Laksa Kepri"] },
    { name: "Jambi", dishes: ["Tempoyak Ikan", "Nasi Gemuk", "Gulai Tepek Ikan"] },
    { name: "Sumatera Selatan", dishes: ["Pempek Palembang", "Tekwan", "Pindang Patin"] },
    { name: "Bangka Belitung", dishes: ["Lempah Kuning", "Mie Belitung", "Otak-otak"] },
    { name: "Bengkulu", dishes: ["Pendap", "Bagar Hiu", "Gulai Kemba'ang"] },
    { name: "Lampung", dishes: ["Seruit", "Gulai Taboh", "Geguduh"] },
    { name: "DKI Jakarta", dishes: ["Soto Betawi", "Kerak Telor", "Ketoprak"] },
    { name: "Banten", dishes: ["Sate Bandeng", "Rabeg", "Angeun Lada"] },
    { name: "Jawa Barat", dishes: ["Karedok", "Empal Gentong", "Nasi Liwet"] },
    { name: "Jawa Tengah", dishes: ["Gudeg Jogja", "Garang Asem", "Lumpia Semarang"] },
    { name: "DI Yogyakarta", dishes: ["Sate Klatak", "Mangut Lele", "Oseng Mercon"] },
    { name: "Jawa Timur", dishes: ["Rawon", "Soto Lamongan", "Rujak Cingur"] },
    { name: "Bali", dishes: ["Ayam Betutu", "Sate Lilit", "Lawar"] },
    { name: "Nusa Tenggara Barat", dishes: ["Ayam Taliwang", "Plecing Kangkung", "Sate Rembiga"] },
    { name: "Nusa Tenggara Timur", dishes: ["Se'i Sapi", "Jagung Bose", "Catemak Jagung"] },
    { name: "Kalimantan Barat", dishes: ["Bubur Pedas", "Pengkang", "Sotong Pangkong"] },
    { name: "Kalimantan Tengah", dishes: ["Juhu Singkah", "Wadi", "Kue Gagatas"] },
    { name: "Kalimantan Selatan", dishes: ["Soto Banjar", "Ketupat Kandangan", "Manday"] },
    { name: "Kalimantan Timur", dishes: ["Ayam Cincane", "Gence Ruan", "Nasi Bekepor"] },
    { name: "Kalimantan Utara", dishes: ["Kepiting Soka", "Lawas", "Tudai"] },
    { name: "Sulawesi Utara", dishes: ["Tinutuan (Bubur Manado)", "Ayam Woku", "Cakalang Fufu"] },
    { name: "Gorontalo", dishes: ["Binte Biluhuta", "Ayam Iloni", "Tili Aya"] },
    { name: "Sulawesi Tengah", dishes: ["Kaledo", "Uta Dada", "Duo Sale"] },
    { name: "Sulawesi Barat", dishes: ["Bau Peapi", "Jepa", "Golai Kambu"] },
    { name: "Sulawesi Selatan", dishes: ["Coto Makassar", "Sop Konro", "Pallubasa"] },
    { name: "Sulawesi Tenggara", dishes: ["Sinonggi", "Sate Gogos", "Lapa-lapa"] },
    { name: "Maluku", dishes: ["Ikan Kuah Pala", "Papeda", "Gohu Ikan"] },
    { name: "Maluku Utara", dishes: ["Gatogato", "Ikan Asap", "Popeda"] },
    { name: "Papua", dishes: ["Papeda", "Ikan Bungkus", "Udang Selingkuh"] },
    { name: "Papua Barat", dishes: ["Ikan Kuah Kuning", "Kue Lontar", "Sate Ulat Sagu"] },
    // Simplified Papua regions
    { name: "Papua Pegunungan", dishes: ["Bakar Batu", "Ubi Bakar", "Sayur Lilin"] },
    { name: "Papua Selatan", dishes: ["Sagu Sep", "Dendeng Rusa", "Abon Gulung"] },
    { name: "Papua Tengah", dishes: ["Kue Sagu", "Ikan Bakar Manokwari", "Colo-colo"] },
    { name: "Papua Barat Daya", dishes: ["Ikan Kuah Asam", "Papeda", "Keladi Tumbuk"] }
];

// Helper to determine image
function getImage(title) {
    const t = title.toLowerCase();
    if (t.includes('rendang')) return '/images/rendang-complete.png';
    if (t.includes('sate')) return '/images/sate.png';
    if (t.includes('soto')) return '/images/soto-ayam.png';
    if (t.includes('es ') || t.includes('campur')) return '/images/escampur.png';
    if (t.includes('ayam') || t.includes('bebek')) return '/images/hero.png'; // Fallback to hero/feast
    return '/images/hero.png';
}

function getDetails(title) {
    // Check if we have manually written details in partialRecipes
    const manual = partialRecipes.find(r => r.title === title);
    if (manual) return manual;

    // Otherwise generate generic but structured details
    return {
        ingredients: [
            "500g Bahan Utama (Ikan/Daging/Sayur)",
            "3 siung Bawang Putih",
            "5 siung Bawang Merah",
            "Cabai sesuai selera",
            "Garam dan Gula secukupnya",
            "Rempah khas daerah"
        ],
        instructions: [
            "Bersihkan bahan utama.",
            "Haluskan bumbu-bumbu.",
            "Tumis bumbu hingga harum.",
            "Masukkan bahan utama dan masak hingga matang.",
            "Sajikan hangat."
        ],
        desc: `Masakan khas daerah yang populer dengan cita rasa otentik dan bumbu rempah yang khas.`
    };
}

async function seed() {
    console.log("Starting massive seed...");
    let count = 0;

    for (const prov of masterList) {
        for (const dishName of prov.dishes) {
            const details = getDetails(dishName);
            const slug = dishName.toLowerCase().replace(/[^a-z0-9]+/g, '-') + '-' + prov.name.toLowerCase().replace(/[^a-z0-9]+/g, '-');

            const payload = {
                slug: slug,
                title: dishName,
                province: prov.name,
                description: details.desc,
                image: getImage(dishName),
                prepTime: "30 Menit",
                cookTime: "45 Menit",
                servings: 4,
                difficulty: "Sedang",
                ingredients: details.ingredients,
                instructions: details.instructions
            };

            const { error } = await supabase.from('recipes').upsert(payload, { onConflict: 'slug' });
            if (error) console.error("Error " + dishName, error.message);
            else count++;
        }
    }
    console.log(`Finished. Seeded ${count} recipes.`);
}

seed();
