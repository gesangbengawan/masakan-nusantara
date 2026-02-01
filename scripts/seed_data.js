const fs = require('fs');

const provinces = [
    {
        name: "Aceh",
        recipes: [
            { title: "Mie Aceh", desc: "Mie kuning tebal dengan irisan daging sapi, kambing atau makanan laut, disajikan dalam sup sejenis kari yang gurih dan pedas." },
            { title: "Ayam Tangkap", desc: "Masakan ayam goreng khas Aceh yang dimasak dengan bumbu rempah-rempah dan daun-daunan aromatik seperti daun pandan dan daun kari." },
            { title: "Kuah Pliek U", desc: "Gulai khas Aceh yang terbuat dari ampas kelapa sisa pembuatan minyak kelapa, dimasak dengan aneka sayuran." }
        ]
    },
    {
        name: "Sumatera Utara",
        recipes: [
            { title: "Arsik Ikan Mas", desc: "Masakan khas Batak Toba yang menggunakan ikan mas, dimasak dengan bumbu kuning dan andaliman yang khas." },
            { title: "Soto Medan", desc: "Soto bersantan yang kaya rempah dengan isian daging ayam atau sapi, perkedel, dan tauge." },
            { title: "Bika Ambon", desc: "Kue pipih berwarna kuning dengan permukaan yang seperti pori-pori kulit manusia, bertekstur kenyal dan manis legit." }
        ]
    },
    {
        name: "Sumatera Barat",
        recipes: [
            { title: "Rendang Sapi", desc: "Masakan daging sapi yang dimasak dalam santan dengan rempah-rempah hingga kering dan bumbunya meresap sempurna." },
            { title: "Sate Padang", desc: "Sate daging sapi yang disajikan dengan kuah kental berwarna kuning atau merah yang kaya akan rempah." },
            { title: "Dendeng Balado", desc: "Irisan daging sapi tipis yang digoreng kering dan disiram dengan sambal balado merah yang pedas." }
        ]
    },
    {
        name: "Riau",
        recipes: [
            { title: "Gulai Ikan Patin", desc: "Gulai ikan patin dengan kuah kuning yang kental dan rasa asam pedas dari tempoyak (durian fermentasi)." },
            { title: "Asam Pedas Baung", desc: "Ikan baung yang dimasak dengan kuah asam pedas yang segar tanpa santan." },
            { title: "Mie Sagu", desc: "Mie yang terbuat dari tepung sagu, dimasak goreng atau berkuah dengan tambahan tauge dan ikan teri." }
        ]
    },
    {
        name: "Kepulauan Riau",
        recipes: [
            { title: "Gonggong", desc: "Siput laut khas Kepri yang direbus dan disajikan dengan sambal khas." },
            { title: "Mie Lendir", desc: "Mie rebus dengan kuah kacang kental yang gurih dan manis." },
            { title: "Laksa", desc: "Mie tebal dari sagu yang disiram dengan kuah kari ikan yang gurih dam berempah." }
        ]
    },
    {
        name: "Jambi",
        recipes: [
            { title: "Tempoyak Ikan Patin", desc: "Masakan ikan patin yang dimasak dengan fermentasi durian (tempoyak), memberikan rasa asam manis yang unik." },
            { title: "Nasi Gemuk", desc: "Nasi gurih yang dimasak dengan santan, mirip nasi uduk, disajikan dengan lauk pauk lengkap." },
            { title: "Gulai Tepek Ikan", desc: "Gulai dengan isian pempek ikan yang lembut, dimasak dalam kuah santan kental." }
        ]
    },
    {
        name: "Sumatera Selatan",
        recipes: [
            { title: "Pempek Palembang", desc: "Makanan khas dari adonan ikan dan sagu, disajikan dengan kuah cuko yang pedas manis asam." },
            { title: "Tekwan", desc: "Sup bola-bola ikan sejenis bakso ikan, disajikan dengan kuah udang yang segar, bengkuang, dan jamur kuping." },
            { title: "Pindang Patin", desc: "Sup ikan patin dengan kuah bening yang segar, berpadu rasa asam dari nanas dan pedas cabai." }
        ]
    },
    {
        name: "Bangka Belitung",
        recipes: [
            { title: "Lempah Kuning", desc: "Sup ikan dengan kuah kuning kunyit yang asam segar, biasanya menggunakan ikan tenggiri atau kakap." },
            { title: "Mie Belitung", desc: "Mie kuning yang disiram dengan kuah udang kental yang gurih, disajikan dengan udang, tahu, dan tauge." },
            { title: "Otak-otak", desc: "Olahan ikan tenggiri yang dibungkus daun pisang dan dibakar, disajikan dengan sambal cuka atau kacang." }
        ]
    },
    {
        name: "Bengkulu",
        recipes: [
            { title: "Pendap", desc: "Ikan yang dibumbui dengan rempah-rempah kelapa parut, dibungkus daun talas, dan direbus hingga matang." },
            { title: "Bagar Hiu", desc: "Masakan berbahan dasar daging ikan hiu yang dimasak dengan bumbu kari namun tidak menggunakan santan." },
            { title: "Gulai Kemba'ang", desc: "Gulai iga sapi yang dimasak dengan bumbu rempah dan santan kental, masakan khas daerah Mukomuko." }
        ]
    },
    {
        name: "Lampung",
        recipes: [
            { title: "Seruit", desc: "Ikan bakar atau goreng yang dicampur dengan sambal terasi, tempoyak (durian fermentasi), atau mangga." },
            { title: "Gulai Taboh", desc: "Gulai bersantan yang berisi ikan sungai atau laut yang diasap, ditambah sayuran dan kacang-kacangan." },
            { title: "Geguduh", desc: "Kue tradisional dari pisang yang dihaluskan, dicampur tepung terigu, dan digoreng manis." }
        ]
    },
    {
        name: "DKI Jakarta",
        recipes: [
            { title: "Soto Betawi", desc: "Soto daging sapi dengan kuah santan dan susu yang gurih, disajikan dengan emping dan acar." },
            { title: "Kerak Telor", desc: "Makanan ringan dari beras ketan putih dan telur ayam/bebek yang dimasak kering dengan kelapa sangrai." },
            { title: "Ketoprak", desc: "Tahu, bihun, ketupat, dan tauge yang disiram dengan bumbu kacang yang legit dan kecap manis." }
        ]
    },
    {
        name: "Banten",
        recipes: [
            { title: "Sate Bandeng", desc: "Ikan bandeng yang durinya sudah dibuang, dagingnya dibumbui, dimasukkan kembali ke kulitnya, lalu dibakar." },
            { title: "Rabeg", desc: "Masakan daging dan jeroan kambing yang dimasak dengan bumbu rempah agak manis, mirip semur namun lebih berempah." },
            { title: "Angeun Lada", desc: "Sayur lodeh khas Banten berisi jeroan sapi atau kerbau dengan kuah merah pedas dan aroma daun walang." }
        ]
    },
    {
        name: "Jawa Barat",
        recipes: [
            { title: "Karedok", desc: "Salad sayuran mentah dengan bumbu kacang yang kencur-nya terasa kuat dan segar." },
            { title: "Empal Gentong", desc: "Sup daging sapi khas Cirebon yang dimasak dalam gentong tanah liat dengan kuah santan kuning." },
            { title: "Nasi Liwet", desc: "Nasi gurih yang dimasak dengan santan, kaldu ayam, salam, dan serai, disajikan dengan lauk pauk Sunda." }
        ]
    },
    {
        name: "Jawa Tengah",
        recipes: [
            { title: "Gudeg", desc: "Nangka muda yang dimasak lama dengan santan dan gula merah hingga berwarna coklat, manis dan gurih." },
            { title: "Garang Asem", desc: "Ayam yang dimasak dengan santan dan belimbing wuluh, dibungkus daun pisang dan dikukus." },
            { title: "Lumpia Semarang", desc: "Lumpia dengan isian rebung (bambu muda) yang manis gurih, disajikan dengan saus kental dan acar." }
        ]
    },
    {
        name: "DI Yogyakarta",
        recipes: [
            { title: "Sate Klatak", desc: "Sate kambing muda yang ditusuk dengan jeruji besi sepeda, dibumbui minimalis hanya garam dan merica." },
            { title: "Mangut Lele", desc: "Ikan lele goreng yang dimasak kembali dengan kuah santan pedas dan kemangi." },
            { title: "Oseng Mercon", desc: "Tumisan daging sapi dan lemak (tetelan) dengan cabai rawit yang sangat banyak dan pedas." }
        ]
    },
    {
        name: "Jawa Timur",
        recipes: [
            { title: "Rawon", desc: "Sup daging sapi dengan kuah hitam pekat dari kluwek, memiliki rasa gurih yang khas." },
            { title: "Soto Lamongan", desc: "Soto ayam dengan kuah kuning bening yang segar, ciri khasnya adalah taburan bubuk koya yang gurih." },
            { title: "Rujak Cingur", desc: "Salad sayuran dan buah yang dicampur dengan irisan cingur (hidung sapi) dan bumbu petis udang." }
        ]
    },
    {
        name: "Bali",
        recipes: [
            { title: "Ayam Betutu", desc: "Ayam utuh yang diisi bumbu rempah lengkap (base genep), dibungkus daun pisang, dan dipanggang lama." },
            { title: "Sate Lilit", desc: "Sate dari daging cincang (ikan atau ayam) yang dicampur parutan kelapa dan bumbu, dililitkan pada batang serai." },
            { title: "Lawar", desc: "Campuran sayuran, daging cincang, dan parutan kelapa yang dibumbui rempah Bali yang kaya rasa." }
        ]
    },
    {
        name: "Nusa Tenggara Barat",
        recipes: [
            { title: "Ayam Taliwang", desc: "Ayam kampung muda yang dibakar dengan bumbu pedas menyengat khas Lombok." },
            { title: "Plecing Kangkung", desc: "Kangkung rebus yang disajikan dengan sambal tomat terasi yang segar dan pedas." },
            { title: "Sate Rembiga", desc: "Sate daging sapi dengan bumbu manis pedas yang meresap hingga ke dalam daging." }
        ]
    },
    {
        name: "Nusa Tenggara Timur",
        recipes: [
            { title: "Se'i Sapi", desc: "Daging sapi yang diiris memanjang dan diasap dengan kayu kusambi, memberikan aroma khas." },
            { title: "Jagung Bose", desc: "Bubur jagung putih yang dimasak dengan santan dan kacang-kacangan, makanan pokok pengganti nasi." },
            { title: "Catemak Jagung", desc: "Makanan penutup dari jagung, labu lilin, dan kacang hijau yang dimasak manis." }
        ]
    },
    {
        name: "Kalimantan Barat",
        recipes: [
            { title: "Bubur Pedas", desc: "Bubur beras yang dimasak dengan aneka sayuran pakis dan daun kesum yang aromatik." },
            { title: "Pengkang", desc: "Ketan isi ebi yang dibungkus daun pisang membentuk segitiga dan dijepit bambu lalu dibakar." },
            { title: "Sotong Pangkong", desc: "Cumi-cumi kering yang dipukul-pukul hingga pipih dan disajikan dengan sambal kacang atau cuka." }
        ]
    },
    {
        name: "Kalimantan Tengah",
        recipes: [
            { title: "Juhu Singkah", desc: "Gulai rotan muda (umbut rotan) yang dimasak dengan ikan sungai dan bumbu kuning." },
            { title: "Wadi", desc: "Ikan yang difermentasi dengan garam dan beras sangrai, memiliki rasa asin dan asam yang unik." },
            { title: "Kue Gagatas", desc: "Kue tradisional dari tepung ketan dan gula merah yang digoreng." }
        ]
    },
    {
        name: "Kalimantan Selatan",
        recipes: [
            { title: "Soto Banjar", desc: "Soto ayam dengan kuah bening yang harum rempah (kayu manis, cengkeh), disajikan dengan ketupat." },
            { title: "Ketupat Kandangan", desc: "Ketupat yang disajikan dengan ikan gabus asap yang dimasak dalam kuah santan kental gurih." },
            { title: "Manday", desc: "Lauk dari kulit cempedak yang difermentasi, kemudian digoreng atau ditumis dengan bumbu pedas." }
        ]
    },
    {
        name: "Kalimantan Timur",
        recipes: [
            { title: "Ayam Cincane", desc: "Ayam kampung yang dibumbui merah dan dibakar, rasanya gurih dan sedikit pedas." },
            { title: "Gence Ruan", desc: "Ikan gabus (haruan) bakar yang disiram dengan sambal goreng pedas manis." },
            { title: "Nasi Bekepor", desc: "Nasi liwet khas Kutai yang dimasak dengan minyak sayur dan rempah, disajikan dengan daging masak bumi hangus." }
        ]
    },
    {
        name: "Kalimantan Utara",
        recipes: [
            { title: "Kepiting Soka", desc: "Masakan kepiting cangkang lunak yang digoreng atau ditumis dengan aneka saus." },
            { title: "Lawas", desc: "Olahan kerang khas daerah pesisir Kaltara." },
            { title: "Tudai", desc: "Jenis kerang dara yang dimasak rebus atau tumis pedas." }
        ]
    },
    {
        name: "Sulawesi Utara",
        recipes: [
            { title: "Tinutuan", desc: "Bubur Manado yang berisi campuran labu kuning, jagung, bayam, kangkung, dan kemangi." },
            { title: "Ayam Woku", desc: "Ayam dimasak dengan bumbu woku yang kaya rempah daun (pandan, kunyit, kemangi, jeruk)." },
            { title: "Cakalang Fufu", desc: "Ikan cakalang (tongkol) yang diasap (fufu) kemudian disuwir dan dimasak pedas." }
        ]
    },
    {
        name: "Gorontalo",
        recipes: [
            { title: "Binte Biluhuta", desc: "Sup jagung siram khas Gorontalo dengan udang, kelapa parut, dan jeruk nipis." },
            { title: "Ayam Iloni", desc: "Ayam bakar khas Gorontalo yang dimasak dengan santan dan bumbu pedas sebelum dibakar." },
            { title: "Tili Aya", desc: "Kue tradisional dari gula merah, santan, dan telur, teksturnya lembut seperti srikaya." }
        ]
    },
    {
        name: "Sulawesi Tengah",
        recipes: [
            { title: "Kaledo", desc: "Sup kaki lembu donggala, sup tulang kaki sapi dengan kuah asam pedas yang bening." },
            { title: "Uta Dada", desc: "Ayam atau ikan yang dimasak dalam kuah santan pedas dengan aroma daun kemangi." },
            { title: "Duo Sale", desc: "Sambal khas Palu yang terbuat dari ikan teri kering yang digoreng dengan bumbu pedas." }
        ]
    },
    {
        name: "Sulawesi Barat",
        recipes: [
            { title: "Bau Peapi", desc: "Ikan masak kuah kuning asam pedas khas Mandar dengan minyak kelapa murni." },
            { title: "Jepa", desc: "Makanan pokok berbentuk piringan tipis yang terbuat dari singkong parut dan kelapa." },
            { title: "Golai Kambu", desc: "Gulai rebung yang dimasak dengan kacang hijau dan santan." }
        ]
    },
    {
        name: "Sulawesi Selatan",
        recipes: [
            { title: "Coto Makassar", desc: "Soto daging sapi dengan kuah kental dari kacang tanah dan air cucian beras." },
            { title: "Sop Konro", desc: "Sup iga sapi berkuah hitam (kluwek) dan kaya rempah, atau dibakar dengan bumbu kacang." },
            { title: "Pallubasa", desc: "Mirip Coto Makassar tapi dengan kuah yang lebih kental karena tambahan kelapa sangrai." }
        ]
    },
    {
        name: "Sulawesi Tenggara",
        recipes: [
            { title: "Sinonggi", desc: "Makanan pokok dari pati sagu yang dimakan dengan kuah ikan pedas, mirip papeda." },
            { title: "Sate Gogos", desc: "Sate kerang (pokea) yang disajikan dengan gogos (ketan bakar)." },
            { title: "Lapa-lapa", desc: "Beras ketan yang dimasak dengan santan, dibungkus daun kelapa muda, dan direbus." }
        ]
    },
    {
        name: "Maluku",
        recipes: [
            { title: "Ikan Kuah Pala", desc: "Sup ikan segar dengan rasa asam segar dan aroma buah pala yang kuat khas Banda." },
            { title: "Papeda", desc: "Bubur sagu yang lengket seperti lem, disajikan dengan ikan kuah kuning." },
            { title: "Gohu Ikan", desc: "Sashimi ala Ternate, ikan tuna mentah dipotong dadu dan dicampur dengan kenari, cabai, dan jeruk nipis." }
        ]
    },
    {
        name: "Maluku Utara",
        recipes: [
            { title: "Gatogato", desc: "Masakan berbahan dasar ubi jalar atau sukun." },
            { title: "Ikan Asap Fufu", desc: "Ikan cakalang yang diasap hingga kering, awet dan beraroma khas." },
            { title: "Popeda", desc: "Sama seperti di Maluku, bubur sagu disantap dengan kuah ikan." }
        ]
    },
    {
        name: "Papua",
        recipes: [
            { title: "Papeda", desc: "Makanan pokok sagu yang disiram kuah ikan kuning." },
            { title: "Ikan Bungkus", desc: "Ikan yang dibumbui rempah daun dan dibungkus daun talas kemudian dibakar." },
            { title: "Udang Selingkuh", desc: "Udang air tawar besar dengan capit seperti kepiting, biasanya direbus atau digoreng." }
        ]
    },
    {
        name: "Papua Barat",
        recipes: [
            { title: "Ikan Kuah Kuning", desc: "Pasangan setia papeda, ikan dimasak kuah kuning segar tanpa santan." },
            { title: "Kue Lontar", desc: "Pie susu khas Papua yang lembut dan manis, adaptasi dari kue Belanda." },
            { title: "Sate Ulat Sagu", desc: "Ulat sagu yang kaya protein dibakar menjadi sate, rasanya gurih dan creamy." }
        ]
    },
    // Adding placeholder for generic Papua regions as culinary variations are subtle/overlapping
    { name: "Papua Pegunungan", recipes: [{ title: "Bakar Batu", desc: "Tradisi memasak bersama ubi, sayur, dan daging babi (bisa diganti) di atas batu panas." }, { title: "Ubi Bakar", desc: "Ubi manis yang dibakar di abu panas (makanan pokok)." }, { title: "Sayur Lilin", desc: "Sayuran khas sejenis tebu telur yang dimasak kuah." }] },
    { name: "Papua Selatan", recipes: [{ title: "Sagu Sep", desc: "Sagu yang dicampur daging dan kelapa parut kemudian dibakar di atas batu." }, { title: "Daging Rusa", desc: "Olahan daging rusa (dendeng atau sate) yang umum di Merauke." }, { title: "Abon Gulung", desc: "Roti gulung berisi abon sapi/rusa yang terkenal sebagai oleh-oleh." }] },
    { name: "Papua Tengah", recipes: [{ title: "Kue Sagu", desc: "Olahan sagu kering." }, { title: "Ikan Bakar Manokwari", desc: "Ikan bakar dengan sambal mentah yang pedas khas." }, { title: "Colo-colo", desc: "Sambal irisan tomat, kemangi, cabai, dan kecap." }] },
    { name: "Papua Barat Daya", recipes: [{ title: "Ikan Kuah Asam", desc: "Sup ikan segar." }, { title: "Papeda", desc: "Makanan pokok." }, { title: "Keladi Tumbuk", desc: "Talas yang ditumbuk halus dan disajikan dengan sayur." }] }
];

const generateSQL = () => {
    let sql = `
    -- Import Province Data
    -- Clears existing if needed, or better, just inserts new.
    
  `;

    const commonIngredients = JSON.stringify(["Bahan A", "Bahan B", "Bumbu Halus"]);
    const commonInstructions = JSON.stringify(["Siapkan bahan.", "Masak hingga matang.", "Sajikan."]);
    const defaultImage = "/images/hero.png"; // Placeholder

    provinces.forEach(prov => {
        prov.recipes.forEach(rec => {
            // Create a URL friendly slug
            const slug = rec.title.toLowerCase().replace(/[^a-z0-9]+/g, '-') + '-' + prov.name.toLowerCase().replace(/[^a-z0-9]+/g, '-');

            // Escape single quotes for SQL
            const title = rec.title.replace(/'/g, "''");
            const desc = rec.desc.replace(/'/g, "''");
            const province = prov.name.replace(/'/g, "''");

            sql += `
INSERT INTO public.recipes (slug, title, description, image, "prepTime", "cookTime", servings, difficulty, ingredients, instructions, province)
VALUES (
  '${slug}',
  '${title}',
  '${desc}',
  '${defaultImage}',
  '30 Menit',
  '45 Menit',
  4,
  'Sedang',
  '${commonIngredients}'::jsonb,
  '${commonInstructions}'::jsonb,
  '${province}'
) ON CONFLICT (slug) DO NOTHING;
`;
        });
    });

    console.log(sql);
};

generateSQL();
