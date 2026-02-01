
    -- Import Province Data
    -- Clears existing if needed, or better, just inserts new.
    
  
INSERT INTO public.recipes (slug, title, description, image, "prepTime", "cookTime", servings, difficulty, ingredients, instructions, province)
VALUES (
  'mie-aceh-aceh',
  'Mie Aceh',
  'Mie kuning tebal dengan irisan daging sapi, kambing atau makanan laut, disajikan dalam sup sejenis kari yang gurih dan pedas.',
  '/images/hero.png',
  '30 Menit',
  '45 Menit',
  4,
  'Sedang',
  '["Bahan A","Bahan B","Bumbu Halus"]'::jsonb,
  '["Siapkan bahan.","Masak hingga matang.","Sajikan."]'::jsonb,
  'Aceh'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.recipes (slug, title, description, image, "prepTime", "cookTime", servings, difficulty, ingredients, instructions, province)
VALUES (
  'ayam-tangkap-aceh',
  'Ayam Tangkap',
  'Masakan ayam goreng khas Aceh yang dimasak dengan bumbu rempah-rempah dan daun-daunan aromatik seperti daun pandan dan daun kari.',
  '/images/hero.png',
  '30 Menit',
  '45 Menit',
  4,
  'Sedang',
  '["Bahan A","Bahan B","Bumbu Halus"]'::jsonb,
  '["Siapkan bahan.","Masak hingga matang.","Sajikan."]'::jsonb,
  'Aceh'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.recipes (slug, title, description, image, "prepTime", "cookTime", servings, difficulty, ingredients, instructions, province)
VALUES (
  'kuah-pliek-u-aceh',
  'Kuah Pliek U',
  'Gulai khas Aceh yang terbuat dari ampas kelapa sisa pembuatan minyak kelapa, dimasak dengan aneka sayuran.',
  '/images/hero.png',
  '30 Menit',
  '45 Menit',
  4,
  'Sedang',
  '["Bahan A","Bahan B","Bumbu Halus"]'::jsonb,
  '["Siapkan bahan.","Masak hingga matang.","Sajikan."]'::jsonb,
  'Aceh'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.recipes (slug, title, description, image, "prepTime", "cookTime", servings, difficulty, ingredients, instructions, province)
VALUES (
  'arsik-ikan-mas-sumatera-utara',
  'Arsik Ikan Mas',
  'Masakan khas Batak Toba yang menggunakan ikan mas, dimasak dengan bumbu kuning dan andaliman yang khas.',
  '/images/hero.png',
  '30 Menit',
  '45 Menit',
  4,
  'Sedang',
  '["Bahan A","Bahan B","Bumbu Halus"]'::jsonb,
  '["Siapkan bahan.","Masak hingga matang.","Sajikan."]'::jsonb,
  'Sumatera Utara'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.recipes (slug, title, description, image, "prepTime", "cookTime", servings, difficulty, ingredients, instructions, province)
VALUES (
  'soto-medan-sumatera-utara',
  'Soto Medan',
  'Soto bersantan yang kaya rempah dengan isian daging ayam atau sapi, perkedel, dan tauge.',
  '/images/hero.png',
  '30 Menit',
  '45 Menit',
  4,
  'Sedang',
  '["Bahan A","Bahan B","Bumbu Halus"]'::jsonb,
  '["Siapkan bahan.","Masak hingga matang.","Sajikan."]'::jsonb,
  'Sumatera Utara'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.recipes (slug, title, description, image, "prepTime", "cookTime", servings, difficulty, ingredients, instructions, province)
VALUES (
  'bika-ambon-sumatera-utara',
  'Bika Ambon',
  'Kue pipih berwarna kuning dengan permukaan yang seperti pori-pori kulit manusia, bertekstur kenyal dan manis legit.',
  '/images/hero.png',
  '30 Menit',
  '45 Menit',
  4,
  'Sedang',
  '["Bahan A","Bahan B","Bumbu Halus"]'::jsonb,
  '["Siapkan bahan.","Masak hingga matang.","Sajikan."]'::jsonb,
  'Sumatera Utara'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.recipes (slug, title, description, image, "prepTime", "cookTime", servings, difficulty, ingredients, instructions, province)
VALUES (
  'rendang-sapi-sumatera-barat',
  'Rendang Sapi',
  'Masakan daging sapi yang dimasak dalam santan dengan rempah-rempah hingga kering dan bumbunya meresap sempurna.',
  '/images/hero.png',
  '30 Menit',
  '45 Menit',
  4,
  'Sedang',
  '["Bahan A","Bahan B","Bumbu Halus"]'::jsonb,
  '["Siapkan bahan.","Masak hingga matang.","Sajikan."]'::jsonb,
  'Sumatera Barat'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.recipes (slug, title, description, image, "prepTime", "cookTime", servings, difficulty, ingredients, instructions, province)
VALUES (
  'sate-padang-sumatera-barat',
  'Sate Padang',
  'Sate daging sapi yang disajikan dengan kuah kental berwarna kuning atau merah yang kaya akan rempah.',
  '/images/hero.png',
  '30 Menit',
  '45 Menit',
  4,
  'Sedang',
  '["Bahan A","Bahan B","Bumbu Halus"]'::jsonb,
  '["Siapkan bahan.","Masak hingga matang.","Sajikan."]'::jsonb,
  'Sumatera Barat'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.recipes (slug, title, description, image, "prepTime", "cookTime", servings, difficulty, ingredients, instructions, province)
VALUES (
  'dendeng-balado-sumatera-barat',
  'Dendeng Balado',
  'Irisan daging sapi tipis yang digoreng kering dan disiram dengan sambal balado merah yang pedas.',
  '/images/hero.png',
  '30 Menit',
  '45 Menit',
  4,
  'Sedang',
  '["Bahan A","Bahan B","Bumbu Halus"]'::jsonb,
  '["Siapkan bahan.","Masak hingga matang.","Sajikan."]'::jsonb,
  'Sumatera Barat'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.recipes (slug, title, description, image, "prepTime", "cookTime", servings, difficulty, ingredients, instructions, province)
VALUES (
  'gulai-ikan-patin-riau',
  'Gulai Ikan Patin',
  'Gulai ikan patin dengan kuah kuning yang kental dan rasa asam pedas dari tempoyak (durian fermentasi).',
  '/images/hero.png',
  '30 Menit',
  '45 Menit',
  4,
  'Sedang',
  '["Bahan A","Bahan B","Bumbu Halus"]'::jsonb,
  '["Siapkan bahan.","Masak hingga matang.","Sajikan."]'::jsonb,
  'Riau'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.recipes (slug, title, description, image, "prepTime", "cookTime", servings, difficulty, ingredients, instructions, province)
VALUES (
  'asam-pedas-baung-riau',
  'Asam Pedas Baung',
  'Ikan baung yang dimasak dengan kuah asam pedas yang segar tanpa santan.',
  '/images/hero.png',
  '30 Menit',
  '45 Menit',
  4,
  'Sedang',
  '["Bahan A","Bahan B","Bumbu Halus"]'::jsonb,
  '["Siapkan bahan.","Masak hingga matang.","Sajikan."]'::jsonb,
  'Riau'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.recipes (slug, title, description, image, "prepTime", "cookTime", servings, difficulty, ingredients, instructions, province)
VALUES (
  'mie-sagu-riau',
  'Mie Sagu',
  'Mie yang terbuat dari tepung sagu, dimasak goreng atau berkuah dengan tambahan tauge dan ikan teri.',
  '/images/hero.png',
  '30 Menit',
  '45 Menit',
  4,
  'Sedang',
  '["Bahan A","Bahan B","Bumbu Halus"]'::jsonb,
  '["Siapkan bahan.","Masak hingga matang.","Sajikan."]'::jsonb,
  'Riau'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.recipes (slug, title, description, image, "prepTime", "cookTime", servings, difficulty, ingredients, instructions, province)
VALUES (
  'gonggong-kepulauan-riau',
  'Gonggong',
  'Siput laut khas Kepri yang direbus dan disajikan dengan sambal khas.',
  '/images/hero.png',
  '30 Menit',
  '45 Menit',
  4,
  'Sedang',
  '["Bahan A","Bahan B","Bumbu Halus"]'::jsonb,
  '["Siapkan bahan.","Masak hingga matang.","Sajikan."]'::jsonb,
  'Kepulauan Riau'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.recipes (slug, title, description, image, "prepTime", "cookTime", servings, difficulty, ingredients, instructions, province)
VALUES (
  'mie-lendir-kepulauan-riau',
  'Mie Lendir',
  'Mie rebus dengan kuah kacang kental yang gurih dan manis.',
  '/images/hero.png',
  '30 Menit',
  '45 Menit',
  4,
  'Sedang',
  '["Bahan A","Bahan B","Bumbu Halus"]'::jsonb,
  '["Siapkan bahan.","Masak hingga matang.","Sajikan."]'::jsonb,
  'Kepulauan Riau'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.recipes (slug, title, description, image, "prepTime", "cookTime", servings, difficulty, ingredients, instructions, province)
VALUES (
  'laksa-kepulauan-riau',
  'Laksa',
  'Mie tebal dari sagu yang disiram dengan kuah kari ikan yang gurih dam berempah.',
  '/images/hero.png',
  '30 Menit',
  '45 Menit',
  4,
  'Sedang',
  '["Bahan A","Bahan B","Bumbu Halus"]'::jsonb,
  '["Siapkan bahan.","Masak hingga matang.","Sajikan."]'::jsonb,
  'Kepulauan Riau'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.recipes (slug, title, description, image, "prepTime", "cookTime", servings, difficulty, ingredients, instructions, province)
VALUES (
  'tempoyak-ikan-patin-jambi',
  'Tempoyak Ikan Patin',
  'Masakan ikan patin yang dimasak dengan fermentasi durian (tempoyak), memberikan rasa asam manis yang unik.',
  '/images/hero.png',
  '30 Menit',
  '45 Menit',
  4,
  'Sedang',
  '["Bahan A","Bahan B","Bumbu Halus"]'::jsonb,
  '["Siapkan bahan.","Masak hingga matang.","Sajikan."]'::jsonb,
  'Jambi'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.recipes (slug, title, description, image, "prepTime", "cookTime", servings, difficulty, ingredients, instructions, province)
VALUES (
  'nasi-gemuk-jambi',
  'Nasi Gemuk',
  'Nasi gurih yang dimasak dengan santan, mirip nasi uduk, disajikan dengan lauk pauk lengkap.',
  '/images/hero.png',
  '30 Menit',
  '45 Menit',
  4,
  'Sedang',
  '["Bahan A","Bahan B","Bumbu Halus"]'::jsonb,
  '["Siapkan bahan.","Masak hingga matang.","Sajikan."]'::jsonb,
  'Jambi'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.recipes (slug, title, description, image, "prepTime", "cookTime", servings, difficulty, ingredients, instructions, province)
VALUES (
  'gulai-tepek-ikan-jambi',
  'Gulai Tepek Ikan',
  'Gulai dengan isian pempek ikan yang lembut, dimasak dalam kuah santan kental.',
  '/images/hero.png',
  '30 Menit',
  '45 Menit',
  4,
  'Sedang',
  '["Bahan A","Bahan B","Bumbu Halus"]'::jsonb,
  '["Siapkan bahan.","Masak hingga matang.","Sajikan."]'::jsonb,
  'Jambi'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.recipes (slug, title, description, image, "prepTime", "cookTime", servings, difficulty, ingredients, instructions, province)
VALUES (
  'pempek-palembang-sumatera-selatan',
  'Pempek Palembang',
  'Makanan khas dari adonan ikan dan sagu, disajikan dengan kuah cuko yang pedas manis asam.',
  '/images/hero.png',
  '30 Menit',
  '45 Menit',
  4,
  'Sedang',
  '["Bahan A","Bahan B","Bumbu Halus"]'::jsonb,
  '["Siapkan bahan.","Masak hingga matang.","Sajikan."]'::jsonb,
  'Sumatera Selatan'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.recipes (slug, title, description, image, "prepTime", "cookTime", servings, difficulty, ingredients, instructions, province)
VALUES (
  'tekwan-sumatera-selatan',
  'Tekwan',
  'Sup bola-bola ikan sejenis bakso ikan, disajikan dengan kuah udang yang segar, bengkuang, dan jamur kuping.',
  '/images/hero.png',
  '30 Menit',
  '45 Menit',
  4,
  'Sedang',
  '["Bahan A","Bahan B","Bumbu Halus"]'::jsonb,
  '["Siapkan bahan.","Masak hingga matang.","Sajikan."]'::jsonb,
  'Sumatera Selatan'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.recipes (slug, title, description, image, "prepTime", "cookTime", servings, difficulty, ingredients, instructions, province)
VALUES (
  'pindang-patin-sumatera-selatan',
  'Pindang Patin',
  'Sup ikan patin dengan kuah bening yang segar, berpadu rasa asam dari nanas dan pedas cabai.',
  '/images/hero.png',
  '30 Menit',
  '45 Menit',
  4,
  'Sedang',
  '["Bahan A","Bahan B","Bumbu Halus"]'::jsonb,
  '["Siapkan bahan.","Masak hingga matang.","Sajikan."]'::jsonb,
  'Sumatera Selatan'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.recipes (slug, title, description, image, "prepTime", "cookTime", servings, difficulty, ingredients, instructions, province)
VALUES (
  'lempah-kuning-bangka-belitung',
  'Lempah Kuning',
  'Sup ikan dengan kuah kuning kunyit yang asam segar, biasanya menggunakan ikan tenggiri atau kakap.',
  '/images/hero.png',
  '30 Menit',
  '45 Menit',
  4,
  'Sedang',
  '["Bahan A","Bahan B","Bumbu Halus"]'::jsonb,
  '["Siapkan bahan.","Masak hingga matang.","Sajikan."]'::jsonb,
  'Bangka Belitung'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.recipes (slug, title, description, image, "prepTime", "cookTime", servings, difficulty, ingredients, instructions, province)
VALUES (
  'mie-belitung-bangka-belitung',
  'Mie Belitung',
  'Mie kuning yang disiram dengan kuah udang kental yang gurih, disajikan dengan udang, tahu, dan tauge.',
  '/images/hero.png',
  '30 Menit',
  '45 Menit',
  4,
  'Sedang',
  '["Bahan A","Bahan B","Bumbu Halus"]'::jsonb,
  '["Siapkan bahan.","Masak hingga matang.","Sajikan."]'::jsonb,
  'Bangka Belitung'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.recipes (slug, title, description, image, "prepTime", "cookTime", servings, difficulty, ingredients, instructions, province)
VALUES (
  'otak-otak-bangka-belitung',
  'Otak-otak',
  'Olahan ikan tenggiri yang dibungkus daun pisang dan dibakar, disajikan dengan sambal cuka atau kacang.',
  '/images/hero.png',
  '30 Menit',
  '45 Menit',
  4,
  'Sedang',
  '["Bahan A","Bahan B","Bumbu Halus"]'::jsonb,
  '["Siapkan bahan.","Masak hingga matang.","Sajikan."]'::jsonb,
  'Bangka Belitung'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.recipes (slug, title, description, image, "prepTime", "cookTime", servings, difficulty, ingredients, instructions, province)
VALUES (
  'pendap-bengkulu',
  'Pendap',
  'Ikan yang dibumbui dengan rempah-rempah kelapa parut, dibungkus daun talas, dan direbus hingga matang.',
  '/images/hero.png',
  '30 Menit',
  '45 Menit',
  4,
  'Sedang',
  '["Bahan A","Bahan B","Bumbu Halus"]'::jsonb,
  '["Siapkan bahan.","Masak hingga matang.","Sajikan."]'::jsonb,
  'Bengkulu'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.recipes (slug, title, description, image, "prepTime", "cookTime", servings, difficulty, ingredients, instructions, province)
VALUES (
  'bagar-hiu-bengkulu',
  'Bagar Hiu',
  'Masakan berbahan dasar daging ikan hiu yang dimasak dengan bumbu kari namun tidak menggunakan santan.',
  '/images/hero.png',
  '30 Menit',
  '45 Menit',
  4,
  'Sedang',
  '["Bahan A","Bahan B","Bumbu Halus"]'::jsonb,
  '["Siapkan bahan.","Masak hingga matang.","Sajikan."]'::jsonb,
  'Bengkulu'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.recipes (slug, title, description, image, "prepTime", "cookTime", servings, difficulty, ingredients, instructions, province)
VALUES (
  'gulai-kemba-ang-bengkulu',
  'Gulai Kemba''ang',
  'Gulai iga sapi yang dimasak dengan bumbu rempah dan santan kental, masakan khas daerah Mukomuko.',
  '/images/hero.png',
  '30 Menit',
  '45 Menit',
  4,
  'Sedang',
  '["Bahan A","Bahan B","Bumbu Halus"]'::jsonb,
  '["Siapkan bahan.","Masak hingga matang.","Sajikan."]'::jsonb,
  'Bengkulu'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.recipes (slug, title, description, image, "prepTime", "cookTime", servings, difficulty, ingredients, instructions, province)
VALUES (
  'seruit-lampung',
  'Seruit',
  'Ikan bakar atau goreng yang dicampur dengan sambal terasi, tempoyak (durian fermentasi), atau mangga.',
  '/images/hero.png',
  '30 Menit',
  '45 Menit',
  4,
  'Sedang',
  '["Bahan A","Bahan B","Bumbu Halus"]'::jsonb,
  '["Siapkan bahan.","Masak hingga matang.","Sajikan."]'::jsonb,
  'Lampung'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.recipes (slug, title, description, image, "prepTime", "cookTime", servings, difficulty, ingredients, instructions, province)
VALUES (
  'gulai-taboh-lampung',
  'Gulai Taboh',
  'Gulai bersantan yang berisi ikan sungai atau laut yang diasap, ditambah sayuran dan kacang-kacangan.',
  '/images/hero.png',
  '30 Menit',
  '45 Menit',
  4,
  'Sedang',
  '["Bahan A","Bahan B","Bumbu Halus"]'::jsonb,
  '["Siapkan bahan.","Masak hingga matang.","Sajikan."]'::jsonb,
  'Lampung'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.recipes (slug, title, description, image, "prepTime", "cookTime", servings, difficulty, ingredients, instructions, province)
VALUES (
  'geguduh-lampung',
  'Geguduh',
  'Kue tradisional dari pisang yang dihaluskan, dicampur tepung terigu, dan digoreng manis.',
  '/images/hero.png',
  '30 Menit',
  '45 Menit',
  4,
  'Sedang',
  '["Bahan A","Bahan B","Bumbu Halus"]'::jsonb,
  '["Siapkan bahan.","Masak hingga matang.","Sajikan."]'::jsonb,
  'Lampung'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.recipes (slug, title, description, image, "prepTime", "cookTime", servings, difficulty, ingredients, instructions, province)
VALUES (
  'soto-betawi-dki-jakarta',
  'Soto Betawi',
  'Soto daging sapi dengan kuah santan dan susu yang gurih, disajikan dengan emping dan acar.',
  '/images/hero.png',
  '30 Menit',
  '45 Menit',
  4,
  'Sedang',
  '["Bahan A","Bahan B","Bumbu Halus"]'::jsonb,
  '["Siapkan bahan.","Masak hingga matang.","Sajikan."]'::jsonb,
  'DKI Jakarta'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.recipes (slug, title, description, image, "prepTime", "cookTime", servings, difficulty, ingredients, instructions, province)
VALUES (
  'kerak-telor-dki-jakarta',
  'Kerak Telor',
  'Makanan ringan dari beras ketan putih dan telur ayam/bebek yang dimasak kering dengan kelapa sangrai.',
  '/images/hero.png',
  '30 Menit',
  '45 Menit',
  4,
  'Sedang',
  '["Bahan A","Bahan B","Bumbu Halus"]'::jsonb,
  '["Siapkan bahan.","Masak hingga matang.","Sajikan."]'::jsonb,
  'DKI Jakarta'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.recipes (slug, title, description, image, "prepTime", "cookTime", servings, difficulty, ingredients, instructions, province)
VALUES (
  'ketoprak-dki-jakarta',
  'Ketoprak',
  'Tahu, bihun, ketupat, dan tauge yang disiram dengan bumbu kacang yang legit dan kecap manis.',
  '/images/hero.png',
  '30 Menit',
  '45 Menit',
  4,
  'Sedang',
  '["Bahan A","Bahan B","Bumbu Halus"]'::jsonb,
  '["Siapkan bahan.","Masak hingga matang.","Sajikan."]'::jsonb,
  'DKI Jakarta'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.recipes (slug, title, description, image, "prepTime", "cookTime", servings, difficulty, ingredients, instructions, province)
VALUES (
  'sate-bandeng-banten',
  'Sate Bandeng',
  'Ikan bandeng yang durinya sudah dibuang, dagingnya dibumbui, dimasukkan kembali ke kulitnya, lalu dibakar.',
  '/images/hero.png',
  '30 Menit',
  '45 Menit',
  4,
  'Sedang',
  '["Bahan A","Bahan B","Bumbu Halus"]'::jsonb,
  '["Siapkan bahan.","Masak hingga matang.","Sajikan."]'::jsonb,
  'Banten'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.recipes (slug, title, description, image, "prepTime", "cookTime", servings, difficulty, ingredients, instructions, province)
VALUES (
  'rabeg-banten',
  'Rabeg',
  'Masakan daging dan jeroan kambing yang dimasak dengan bumbu rempah agak manis, mirip semur namun lebih berempah.',
  '/images/hero.png',
  '30 Menit',
  '45 Menit',
  4,
  'Sedang',
  '["Bahan A","Bahan B","Bumbu Halus"]'::jsonb,
  '["Siapkan bahan.","Masak hingga matang.","Sajikan."]'::jsonb,
  'Banten'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.recipes (slug, title, description, image, "prepTime", "cookTime", servings, difficulty, ingredients, instructions, province)
VALUES (
  'angeun-lada-banten',
  'Angeun Lada',
  'Sayur lodeh khas Banten berisi jeroan sapi atau kerbau dengan kuah merah pedas dan aroma daun walang.',
  '/images/hero.png',
  '30 Menit',
  '45 Menit',
  4,
  'Sedang',
  '["Bahan A","Bahan B","Bumbu Halus"]'::jsonb,
  '["Siapkan bahan.","Masak hingga matang.","Sajikan."]'::jsonb,
  'Banten'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.recipes (slug, title, description, image, "prepTime", "cookTime", servings, difficulty, ingredients, instructions, province)
VALUES (
  'karedok-jawa-barat',
  'Karedok',
  'Salad sayuran mentah dengan bumbu kacang yang kencur-nya terasa kuat dan segar.',
  '/images/hero.png',
  '30 Menit',
  '45 Menit',
  4,
  'Sedang',
  '["Bahan A","Bahan B","Bumbu Halus"]'::jsonb,
  '["Siapkan bahan.","Masak hingga matang.","Sajikan."]'::jsonb,
  'Jawa Barat'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.recipes (slug, title, description, image, "prepTime", "cookTime", servings, difficulty, ingredients, instructions, province)
VALUES (
  'empal-gentong-jawa-barat',
  'Empal Gentong',
  'Sup daging sapi khas Cirebon yang dimasak dalam gentong tanah liat dengan kuah santan kuning.',
  '/images/hero.png',
  '30 Menit',
  '45 Menit',
  4,
  'Sedang',
  '["Bahan A","Bahan B","Bumbu Halus"]'::jsonb,
  '["Siapkan bahan.","Masak hingga matang.","Sajikan."]'::jsonb,
  'Jawa Barat'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.recipes (slug, title, description, image, "prepTime", "cookTime", servings, difficulty, ingredients, instructions, province)
VALUES (
  'nasi-liwet-jawa-barat',
  'Nasi Liwet',
  'Nasi gurih yang dimasak dengan santan, kaldu ayam, salam, dan serai, disajikan dengan lauk pauk Sunda.',
  '/images/hero.png',
  '30 Menit',
  '45 Menit',
  4,
  'Sedang',
  '["Bahan A","Bahan B","Bumbu Halus"]'::jsonb,
  '["Siapkan bahan.","Masak hingga matang.","Sajikan."]'::jsonb,
  'Jawa Barat'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.recipes (slug, title, description, image, "prepTime", "cookTime", servings, difficulty, ingredients, instructions, province)
VALUES (
  'gudeg-jawa-tengah',
  'Gudeg',
  'Nangka muda yang dimasak lama dengan santan dan gula merah hingga berwarna coklat, manis dan gurih.',
  '/images/hero.png',
  '30 Menit',
  '45 Menit',
  4,
  'Sedang',
  '["Bahan A","Bahan B","Bumbu Halus"]'::jsonb,
  '["Siapkan bahan.","Masak hingga matang.","Sajikan."]'::jsonb,
  'Jawa Tengah'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.recipes (slug, title, description, image, "prepTime", "cookTime", servings, difficulty, ingredients, instructions, province)
VALUES (
  'garang-asem-jawa-tengah',
  'Garang Asem',
  'Ayam yang dimasak dengan santan dan belimbing wuluh, dibungkus daun pisang dan dikukus.',
  '/images/hero.png',
  '30 Menit',
  '45 Menit',
  4,
  'Sedang',
  '["Bahan A","Bahan B","Bumbu Halus"]'::jsonb,
  '["Siapkan bahan.","Masak hingga matang.","Sajikan."]'::jsonb,
  'Jawa Tengah'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.recipes (slug, title, description, image, "prepTime", "cookTime", servings, difficulty, ingredients, instructions, province)
VALUES (
  'lumpia-semarang-jawa-tengah',
  'Lumpia Semarang',
  'Lumpia dengan isian rebung (bambu muda) yang manis gurih, disajikan dengan saus kental dan acar.',
  '/images/hero.png',
  '30 Menit',
  '45 Menit',
  4,
  'Sedang',
  '["Bahan A","Bahan B","Bumbu Halus"]'::jsonb,
  '["Siapkan bahan.","Masak hingga matang.","Sajikan."]'::jsonb,
  'Jawa Tengah'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.recipes (slug, title, description, image, "prepTime", "cookTime", servings, difficulty, ingredients, instructions, province)
VALUES (
  'sate-klatak-di-yogyakarta',
  'Sate Klatak',
  'Sate kambing muda yang ditusuk dengan jeruji besi sepeda, dibumbui minimalis hanya garam dan merica.',
  '/images/hero.png',
  '30 Menit',
  '45 Menit',
  4,
  'Sedang',
  '["Bahan A","Bahan B","Bumbu Halus"]'::jsonb,
  '["Siapkan bahan.","Masak hingga matang.","Sajikan."]'::jsonb,
  'DI Yogyakarta'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.recipes (slug, title, description, image, "prepTime", "cookTime", servings, difficulty, ingredients, instructions, province)
VALUES (
  'mangut-lele-di-yogyakarta',
  'Mangut Lele',
  'Ikan lele goreng yang dimasak kembali dengan kuah santan pedas dan kemangi.',
  '/images/hero.png',
  '30 Menit',
  '45 Menit',
  4,
  'Sedang',
  '["Bahan A","Bahan B","Bumbu Halus"]'::jsonb,
  '["Siapkan bahan.","Masak hingga matang.","Sajikan."]'::jsonb,
  'DI Yogyakarta'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.recipes (slug, title, description, image, "prepTime", "cookTime", servings, difficulty, ingredients, instructions, province)
VALUES (
  'oseng-mercon-di-yogyakarta',
  'Oseng Mercon',
  'Tumisan daging sapi dan lemak (tetelan) dengan cabai rawit yang sangat banyak dan pedas.',
  '/images/hero.png',
  '30 Menit',
  '45 Menit',
  4,
  'Sedang',
  '["Bahan A","Bahan B","Bumbu Halus"]'::jsonb,
  '["Siapkan bahan.","Masak hingga matang.","Sajikan."]'::jsonb,
  'DI Yogyakarta'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.recipes (slug, title, description, image, "prepTime", "cookTime", servings, difficulty, ingredients, instructions, province)
VALUES (
  'rawon-jawa-timur',
  'Rawon',
  'Sup daging sapi dengan kuah hitam pekat dari kluwek, memiliki rasa gurih yang khas.',
  '/images/hero.png',
  '30 Menit',
  '45 Menit',
  4,
  'Sedang',
  '["Bahan A","Bahan B","Bumbu Halus"]'::jsonb,
  '["Siapkan bahan.","Masak hingga matang.","Sajikan."]'::jsonb,
  'Jawa Timur'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.recipes (slug, title, description, image, "prepTime", "cookTime", servings, difficulty, ingredients, instructions, province)
VALUES (
  'soto-lamongan-jawa-timur',
  'Soto Lamongan',
  'Soto ayam dengan kuah kuning bening yang segar, ciri khasnya adalah taburan bubuk koya yang gurih.',
  '/images/hero.png',
  '30 Menit',
  '45 Menit',
  4,
  'Sedang',
  '["Bahan A","Bahan B","Bumbu Halus"]'::jsonb,
  '["Siapkan bahan.","Masak hingga matang.","Sajikan."]'::jsonb,
  'Jawa Timur'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.recipes (slug, title, description, image, "prepTime", "cookTime", servings, difficulty, ingredients, instructions, province)
VALUES (
  'rujak-cingur-jawa-timur',
  'Rujak Cingur',
  'Salad sayuran dan buah yang dicampur dengan irisan cingur (hidung sapi) dan bumbu petis udang.',
  '/images/hero.png',
  '30 Menit',
  '45 Menit',
  4,
  'Sedang',
  '["Bahan A","Bahan B","Bumbu Halus"]'::jsonb,
  '["Siapkan bahan.","Masak hingga matang.","Sajikan."]'::jsonb,
  'Jawa Timur'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.recipes (slug, title, description, image, "prepTime", "cookTime", servings, difficulty, ingredients, instructions, province)
VALUES (
  'ayam-betutu-bali',
  'Ayam Betutu',
  'Ayam utuh yang diisi bumbu rempah lengkap (base genep), dibungkus daun pisang, dan dipanggang lama.',
  '/images/hero.png',
  '30 Menit',
  '45 Menit',
  4,
  'Sedang',
  '["Bahan A","Bahan B","Bumbu Halus"]'::jsonb,
  '["Siapkan bahan.","Masak hingga matang.","Sajikan."]'::jsonb,
  'Bali'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.recipes (slug, title, description, image, "prepTime", "cookTime", servings, difficulty, ingredients, instructions, province)
VALUES (
  'sate-lilit-bali',
  'Sate Lilit',
  'Sate dari daging cincang (ikan atau ayam) yang dicampur parutan kelapa dan bumbu, dililitkan pada batang serai.',
  '/images/hero.png',
  '30 Menit',
  '45 Menit',
  4,
  'Sedang',
  '["Bahan A","Bahan B","Bumbu Halus"]'::jsonb,
  '["Siapkan bahan.","Masak hingga matang.","Sajikan."]'::jsonb,
  'Bali'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.recipes (slug, title, description, image, "prepTime", "cookTime", servings, difficulty, ingredients, instructions, province)
VALUES (
  'lawar-bali',
  'Lawar',
  'Campuran sayuran, daging cincang, dan parutan kelapa yang dibumbui rempah Bali yang kaya rasa.',
  '/images/hero.png',
  '30 Menit',
  '45 Menit',
  4,
  'Sedang',
  '["Bahan A","Bahan B","Bumbu Halus"]'::jsonb,
  '["Siapkan bahan.","Masak hingga matang.","Sajikan."]'::jsonb,
  'Bali'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.recipes (slug, title, description, image, "prepTime", "cookTime", servings, difficulty, ingredients, instructions, province)
VALUES (
  'ayam-taliwang-nusa-tenggara-barat',
  'Ayam Taliwang',
  'Ayam kampung muda yang dibakar dengan bumbu pedas menyengat khas Lombok.',
  '/images/hero.png',
  '30 Menit',
  '45 Menit',
  4,
  'Sedang',
  '["Bahan A","Bahan B","Bumbu Halus"]'::jsonb,
  '["Siapkan bahan.","Masak hingga matang.","Sajikan."]'::jsonb,
  'Nusa Tenggara Barat'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.recipes (slug, title, description, image, "prepTime", "cookTime", servings, difficulty, ingredients, instructions, province)
VALUES (
  'plecing-kangkung-nusa-tenggara-barat',
  'Plecing Kangkung',
  'Kangkung rebus yang disajikan dengan sambal tomat terasi yang segar dan pedas.',
  '/images/hero.png',
  '30 Menit',
  '45 Menit',
  4,
  'Sedang',
  '["Bahan A","Bahan B","Bumbu Halus"]'::jsonb,
  '["Siapkan bahan.","Masak hingga matang.","Sajikan."]'::jsonb,
  'Nusa Tenggara Barat'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.recipes (slug, title, description, image, "prepTime", "cookTime", servings, difficulty, ingredients, instructions, province)
VALUES (
  'sate-rembiga-nusa-tenggara-barat',
  'Sate Rembiga',
  'Sate daging sapi dengan bumbu manis pedas yang meresap hingga ke dalam daging.',
  '/images/hero.png',
  '30 Menit',
  '45 Menit',
  4,
  'Sedang',
  '["Bahan A","Bahan B","Bumbu Halus"]'::jsonb,
  '["Siapkan bahan.","Masak hingga matang.","Sajikan."]'::jsonb,
  'Nusa Tenggara Barat'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.recipes (slug, title, description, image, "prepTime", "cookTime", servings, difficulty, ingredients, instructions, province)
VALUES (
  'se-i-sapi-nusa-tenggara-timur',
  'Se''i Sapi',
  'Daging sapi yang diiris memanjang dan diasap dengan kayu kusambi, memberikan aroma khas.',
  '/images/hero.png',
  '30 Menit',
  '45 Menit',
  4,
  'Sedang',
  '["Bahan A","Bahan B","Bumbu Halus"]'::jsonb,
  '["Siapkan bahan.","Masak hingga matang.","Sajikan."]'::jsonb,
  'Nusa Tenggara Timur'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.recipes (slug, title, description, image, "prepTime", "cookTime", servings, difficulty, ingredients, instructions, province)
VALUES (
  'jagung-bose-nusa-tenggara-timur',
  'Jagung Bose',
  'Bubur jagung putih yang dimasak dengan santan dan kacang-kacangan, makanan pokok pengganti nasi.',
  '/images/hero.png',
  '30 Menit',
  '45 Menit',
  4,
  'Sedang',
  '["Bahan A","Bahan B","Bumbu Halus"]'::jsonb,
  '["Siapkan bahan.","Masak hingga matang.","Sajikan."]'::jsonb,
  'Nusa Tenggara Timur'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.recipes (slug, title, description, image, "prepTime", "cookTime", servings, difficulty, ingredients, instructions, province)
VALUES (
  'catemak-jagung-nusa-tenggara-timur',
  'Catemak Jagung',
  'Makanan penutup dari jagung, labu lilin, dan kacang hijau yang dimasak manis.',
  '/images/hero.png',
  '30 Menit',
  '45 Menit',
  4,
  'Sedang',
  '["Bahan A","Bahan B","Bumbu Halus"]'::jsonb,
  '["Siapkan bahan.","Masak hingga matang.","Sajikan."]'::jsonb,
  'Nusa Tenggara Timur'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.recipes (slug, title, description, image, "prepTime", "cookTime", servings, difficulty, ingredients, instructions, province)
VALUES (
  'bubur-pedas-kalimantan-barat',
  'Bubur Pedas',
  'Bubur beras yang dimasak dengan aneka sayuran pakis dan daun kesum yang aromatik.',
  '/images/hero.png',
  '30 Menit',
  '45 Menit',
  4,
  'Sedang',
  '["Bahan A","Bahan B","Bumbu Halus"]'::jsonb,
  '["Siapkan bahan.","Masak hingga matang.","Sajikan."]'::jsonb,
  'Kalimantan Barat'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.recipes (slug, title, description, image, "prepTime", "cookTime", servings, difficulty, ingredients, instructions, province)
VALUES (
  'pengkang-kalimantan-barat',
  'Pengkang',
  'Ketan isi ebi yang dibungkus daun pisang membentuk segitiga dan dijepit bambu lalu dibakar.',
  '/images/hero.png',
  '30 Menit',
  '45 Menit',
  4,
  'Sedang',
  '["Bahan A","Bahan B","Bumbu Halus"]'::jsonb,
  '["Siapkan bahan.","Masak hingga matang.","Sajikan."]'::jsonb,
  'Kalimantan Barat'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.recipes (slug, title, description, image, "prepTime", "cookTime", servings, difficulty, ingredients, instructions, province)
VALUES (
  'sotong-pangkong-kalimantan-barat',
  'Sotong Pangkong',
  'Cumi-cumi kering yang dipukul-pukul hingga pipih dan disajikan dengan sambal kacang atau cuka.',
  '/images/hero.png',
  '30 Menit',
  '45 Menit',
  4,
  'Sedang',
  '["Bahan A","Bahan B","Bumbu Halus"]'::jsonb,
  '["Siapkan bahan.","Masak hingga matang.","Sajikan."]'::jsonb,
  'Kalimantan Barat'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.recipes (slug, title, description, image, "prepTime", "cookTime", servings, difficulty, ingredients, instructions, province)
VALUES (
  'juhu-singkah-kalimantan-tengah',
  'Juhu Singkah',
  'Gulai rotan muda (umbut rotan) yang dimasak dengan ikan sungai dan bumbu kuning.',
  '/images/hero.png',
  '30 Menit',
  '45 Menit',
  4,
  'Sedang',
  '["Bahan A","Bahan B","Bumbu Halus"]'::jsonb,
  '["Siapkan bahan.","Masak hingga matang.","Sajikan."]'::jsonb,
  'Kalimantan Tengah'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.recipes (slug, title, description, image, "prepTime", "cookTime", servings, difficulty, ingredients, instructions, province)
VALUES (
  'wadi-kalimantan-tengah',
  'Wadi',
  'Ikan yang difermentasi dengan garam dan beras sangrai, memiliki rasa asin dan asam yang unik.',
  '/images/hero.png',
  '30 Menit',
  '45 Menit',
  4,
  'Sedang',
  '["Bahan A","Bahan B","Bumbu Halus"]'::jsonb,
  '["Siapkan bahan.","Masak hingga matang.","Sajikan."]'::jsonb,
  'Kalimantan Tengah'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.recipes (slug, title, description, image, "prepTime", "cookTime", servings, difficulty, ingredients, instructions, province)
VALUES (
  'kue-gagatas-kalimantan-tengah',
  'Kue Gagatas',
  'Kue tradisional dari tepung ketan dan gula merah yang digoreng.',
  '/images/hero.png',
  '30 Menit',
  '45 Menit',
  4,
  'Sedang',
  '["Bahan A","Bahan B","Bumbu Halus"]'::jsonb,
  '["Siapkan bahan.","Masak hingga matang.","Sajikan."]'::jsonb,
  'Kalimantan Tengah'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.recipes (slug, title, description, image, "prepTime", "cookTime", servings, difficulty, ingredients, instructions, province)
VALUES (
  'soto-banjar-kalimantan-selatan',
  'Soto Banjar',
  'Soto ayam dengan kuah bening yang harum rempah (kayu manis, cengkeh), disajikan dengan ketupat.',
  '/images/hero.png',
  '30 Menit',
  '45 Menit',
  4,
  'Sedang',
  '["Bahan A","Bahan B","Bumbu Halus"]'::jsonb,
  '["Siapkan bahan.","Masak hingga matang.","Sajikan."]'::jsonb,
  'Kalimantan Selatan'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.recipes (slug, title, description, image, "prepTime", "cookTime", servings, difficulty, ingredients, instructions, province)
VALUES (
  'ketupat-kandangan-kalimantan-selatan',
  'Ketupat Kandangan',
  'Ketupat yang disajikan dengan ikan gabus asap yang dimasak dalam kuah santan kental gurih.',
  '/images/hero.png',
  '30 Menit',
  '45 Menit',
  4,
  'Sedang',
  '["Bahan A","Bahan B","Bumbu Halus"]'::jsonb,
  '["Siapkan bahan.","Masak hingga matang.","Sajikan."]'::jsonb,
  'Kalimantan Selatan'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.recipes (slug, title, description, image, "prepTime", "cookTime", servings, difficulty, ingredients, instructions, province)
VALUES (
  'manday-kalimantan-selatan',
  'Manday',
  'Lauk dari kulit cempedak yang difermentasi, kemudian digoreng atau ditumis dengan bumbu pedas.',
  '/images/hero.png',
  '30 Menit',
  '45 Menit',
  4,
  'Sedang',
  '["Bahan A","Bahan B","Bumbu Halus"]'::jsonb,
  '["Siapkan bahan.","Masak hingga matang.","Sajikan."]'::jsonb,
  'Kalimantan Selatan'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.recipes (slug, title, description, image, "prepTime", "cookTime", servings, difficulty, ingredients, instructions, province)
VALUES (
  'ayam-cincane-kalimantan-timur',
  'Ayam Cincane',
  'Ayam kampung yang dibumbui merah dan dibakar, rasanya gurih dan sedikit pedas.',
  '/images/hero.png',
  '30 Menit',
  '45 Menit',
  4,
  'Sedang',
  '["Bahan A","Bahan B","Bumbu Halus"]'::jsonb,
  '["Siapkan bahan.","Masak hingga matang.","Sajikan."]'::jsonb,
  'Kalimantan Timur'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.recipes (slug, title, description, image, "prepTime", "cookTime", servings, difficulty, ingredients, instructions, province)
VALUES (
  'gence-ruan-kalimantan-timur',
  'Gence Ruan',
  'Ikan gabus (haruan) bakar yang disiram dengan sambal goreng pedas manis.',
  '/images/hero.png',
  '30 Menit',
  '45 Menit',
  4,
  'Sedang',
  '["Bahan A","Bahan B","Bumbu Halus"]'::jsonb,
  '["Siapkan bahan.","Masak hingga matang.","Sajikan."]'::jsonb,
  'Kalimantan Timur'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.recipes (slug, title, description, image, "prepTime", "cookTime", servings, difficulty, ingredients, instructions, province)
VALUES (
  'nasi-bekepor-kalimantan-timur',
  'Nasi Bekepor',
  'Nasi liwet khas Kutai yang dimasak dengan minyak sayur dan rempah, disajikan dengan daging masak bumi hangus.',
  '/images/hero.png',
  '30 Menit',
  '45 Menit',
  4,
  'Sedang',
  '["Bahan A","Bahan B","Bumbu Halus"]'::jsonb,
  '["Siapkan bahan.","Masak hingga matang.","Sajikan."]'::jsonb,
  'Kalimantan Timur'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.recipes (slug, title, description, image, "prepTime", "cookTime", servings, difficulty, ingredients, instructions, province)
VALUES (
  'kepiting-soka-kalimantan-utara',
  'Kepiting Soka',
  'Masakan kepiting cangkang lunak yang digoreng atau ditumis dengan aneka saus.',
  '/images/hero.png',
  '30 Menit',
  '45 Menit',
  4,
  'Sedang',
  '["Bahan A","Bahan B","Bumbu Halus"]'::jsonb,
  '["Siapkan bahan.","Masak hingga matang.","Sajikan."]'::jsonb,
  'Kalimantan Utara'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.recipes (slug, title, description, image, "prepTime", "cookTime", servings, difficulty, ingredients, instructions, province)
VALUES (
  'lawas-kalimantan-utara',
  'Lawas',
  'Olahan kerang khas daerah pesisir Kaltara.',
  '/images/hero.png',
  '30 Menit',
  '45 Menit',
  4,
  'Sedang',
  '["Bahan A","Bahan B","Bumbu Halus"]'::jsonb,
  '["Siapkan bahan.","Masak hingga matang.","Sajikan."]'::jsonb,
  'Kalimantan Utara'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.recipes (slug, title, description, image, "prepTime", "cookTime", servings, difficulty, ingredients, instructions, province)
VALUES (
  'tudai-kalimantan-utara',
  'Tudai',
  'Jenis kerang dara yang dimasak rebus atau tumis pedas.',
  '/images/hero.png',
  '30 Menit',
  '45 Menit',
  4,
  'Sedang',
  '["Bahan A","Bahan B","Bumbu Halus"]'::jsonb,
  '["Siapkan bahan.","Masak hingga matang.","Sajikan."]'::jsonb,
  'Kalimantan Utara'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.recipes (slug, title, description, image, "prepTime", "cookTime", servings, difficulty, ingredients, instructions, province)
VALUES (
  'tinutuan-sulawesi-utara',
  'Tinutuan',
  'Bubur Manado yang berisi campuran labu kuning, jagung, bayam, kangkung, dan kemangi.',
  '/images/hero.png',
  '30 Menit',
  '45 Menit',
  4,
  'Sedang',
  '["Bahan A","Bahan B","Bumbu Halus"]'::jsonb,
  '["Siapkan bahan.","Masak hingga matang.","Sajikan."]'::jsonb,
  'Sulawesi Utara'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.recipes (slug, title, description, image, "prepTime", "cookTime", servings, difficulty, ingredients, instructions, province)
VALUES (
  'ayam-woku-sulawesi-utara',
  'Ayam Woku',
  'Ayam dimasak dengan bumbu woku yang kaya rempah daun (pandan, kunyit, kemangi, jeruk).',
  '/images/hero.png',
  '30 Menit',
  '45 Menit',
  4,
  'Sedang',
  '["Bahan A","Bahan B","Bumbu Halus"]'::jsonb,
  '["Siapkan bahan.","Masak hingga matang.","Sajikan."]'::jsonb,
  'Sulawesi Utara'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.recipes (slug, title, description, image, "prepTime", "cookTime", servings, difficulty, ingredients, instructions, province)
VALUES (
  'cakalang-fufu-sulawesi-utara',
  'Cakalang Fufu',
  'Ikan cakalang (tongkol) yang diasap (fufu) kemudian disuwir dan dimasak pedas.',
  '/images/hero.png',
  '30 Menit',
  '45 Menit',
  4,
  'Sedang',
  '["Bahan A","Bahan B","Bumbu Halus"]'::jsonb,
  '["Siapkan bahan.","Masak hingga matang.","Sajikan."]'::jsonb,
  'Sulawesi Utara'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.recipes (slug, title, description, image, "prepTime", "cookTime", servings, difficulty, ingredients, instructions, province)
VALUES (
  'binte-biluhuta-gorontalo',
  'Binte Biluhuta',
  'Sup jagung siram khas Gorontalo dengan udang, kelapa parut, dan jeruk nipis.',
  '/images/hero.png',
  '30 Menit',
  '45 Menit',
  4,
  'Sedang',
  '["Bahan A","Bahan B","Bumbu Halus"]'::jsonb,
  '["Siapkan bahan.","Masak hingga matang.","Sajikan."]'::jsonb,
  'Gorontalo'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.recipes (slug, title, description, image, "prepTime", "cookTime", servings, difficulty, ingredients, instructions, province)
VALUES (
  'ayam-iloni-gorontalo',
  'Ayam Iloni',
  'Ayam bakar khas Gorontalo yang dimasak dengan santan dan bumbu pedas sebelum dibakar.',
  '/images/hero.png',
  '30 Menit',
  '45 Menit',
  4,
  'Sedang',
  '["Bahan A","Bahan B","Bumbu Halus"]'::jsonb,
  '["Siapkan bahan.","Masak hingga matang.","Sajikan."]'::jsonb,
  'Gorontalo'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.recipes (slug, title, description, image, "prepTime", "cookTime", servings, difficulty, ingredients, instructions, province)
VALUES (
  'tili-aya-gorontalo',
  'Tili Aya',
  'Kue tradisional dari gula merah, santan, dan telur, teksturnya lembut seperti srikaya.',
  '/images/hero.png',
  '30 Menit',
  '45 Menit',
  4,
  'Sedang',
  '["Bahan A","Bahan B","Bumbu Halus"]'::jsonb,
  '["Siapkan bahan.","Masak hingga matang.","Sajikan."]'::jsonb,
  'Gorontalo'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.recipes (slug, title, description, image, "prepTime", "cookTime", servings, difficulty, ingredients, instructions, province)
VALUES (
  'kaledo-sulawesi-tengah',
  'Kaledo',
  'Sup kaki lembu donggala, sup tulang kaki sapi dengan kuah asam pedas yang bening.',
  '/images/hero.png',
  '30 Menit',
  '45 Menit',
  4,
  'Sedang',
  '["Bahan A","Bahan B","Bumbu Halus"]'::jsonb,
  '["Siapkan bahan.","Masak hingga matang.","Sajikan."]'::jsonb,
  'Sulawesi Tengah'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.recipes (slug, title, description, image, "prepTime", "cookTime", servings, difficulty, ingredients, instructions, province)
VALUES (
  'uta-dada-sulawesi-tengah',
  'Uta Dada',
  'Ayam atau ikan yang dimasak dalam kuah santan pedas dengan aroma daun kemangi.',
  '/images/hero.png',
  '30 Menit',
  '45 Menit',
  4,
  'Sedang',
  '["Bahan A","Bahan B","Bumbu Halus"]'::jsonb,
  '["Siapkan bahan.","Masak hingga matang.","Sajikan."]'::jsonb,
  'Sulawesi Tengah'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.recipes (slug, title, description, image, "prepTime", "cookTime", servings, difficulty, ingredients, instructions, province)
VALUES (
  'duo-sale-sulawesi-tengah',
  'Duo Sale',
  'Sambal khas Palu yang terbuat dari ikan teri kering yang digoreng dengan bumbu pedas.',
  '/images/hero.png',
  '30 Menit',
  '45 Menit',
  4,
  'Sedang',
  '["Bahan A","Bahan B","Bumbu Halus"]'::jsonb,
  '["Siapkan bahan.","Masak hingga matang.","Sajikan."]'::jsonb,
  'Sulawesi Tengah'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.recipes (slug, title, description, image, "prepTime", "cookTime", servings, difficulty, ingredients, instructions, province)
VALUES (
  'bau-peapi-sulawesi-barat',
  'Bau Peapi',
  'Ikan masak kuah kuning asam pedas khas Mandar dengan minyak kelapa murni.',
  '/images/hero.png',
  '30 Menit',
  '45 Menit',
  4,
  'Sedang',
  '["Bahan A","Bahan B","Bumbu Halus"]'::jsonb,
  '["Siapkan bahan.","Masak hingga matang.","Sajikan."]'::jsonb,
  'Sulawesi Barat'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.recipes (slug, title, description, image, "prepTime", "cookTime", servings, difficulty, ingredients, instructions, province)
VALUES (
  'jepa-sulawesi-barat',
  'Jepa',
  'Makanan pokok berbentuk piringan tipis yang terbuat dari singkong parut dan kelapa.',
  '/images/hero.png',
  '30 Menit',
  '45 Menit',
  4,
  'Sedang',
  '["Bahan A","Bahan B","Bumbu Halus"]'::jsonb,
  '["Siapkan bahan.","Masak hingga matang.","Sajikan."]'::jsonb,
  'Sulawesi Barat'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.recipes (slug, title, description, image, "prepTime", "cookTime", servings, difficulty, ingredients, instructions, province)
VALUES (
  'golai-kambu-sulawesi-barat',
  'Golai Kambu',
  'Gulai rebung yang dimasak dengan kacang hijau dan santan.',
  '/images/hero.png',
  '30 Menit',
  '45 Menit',
  4,
  'Sedang',
  '["Bahan A","Bahan B","Bumbu Halus"]'::jsonb,
  '["Siapkan bahan.","Masak hingga matang.","Sajikan."]'::jsonb,
  'Sulawesi Barat'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.recipes (slug, title, description, image, "prepTime", "cookTime", servings, difficulty, ingredients, instructions, province)
VALUES (
  'coto-makassar-sulawesi-selatan',
  'Coto Makassar',
  'Soto daging sapi dengan kuah kental dari kacang tanah dan air cucian beras.',
  '/images/hero.png',
  '30 Menit',
  '45 Menit',
  4,
  'Sedang',
  '["Bahan A","Bahan B","Bumbu Halus"]'::jsonb,
  '["Siapkan bahan.","Masak hingga matang.","Sajikan."]'::jsonb,
  'Sulawesi Selatan'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.recipes (slug, title, description, image, "prepTime", "cookTime", servings, difficulty, ingredients, instructions, province)
VALUES (
  'sop-konro-sulawesi-selatan',
  'Sop Konro',
  'Sup iga sapi berkuah hitam (kluwek) dan kaya rempah, atau dibakar dengan bumbu kacang.',
  '/images/hero.png',
  '30 Menit',
  '45 Menit',
  4,
  'Sedang',
  '["Bahan A","Bahan B","Bumbu Halus"]'::jsonb,
  '["Siapkan bahan.","Masak hingga matang.","Sajikan."]'::jsonb,
  'Sulawesi Selatan'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.recipes (slug, title, description, image, "prepTime", "cookTime", servings, difficulty, ingredients, instructions, province)
VALUES (
  'pallubasa-sulawesi-selatan',
  'Pallubasa',
  'Mirip Coto Makassar tapi dengan kuah yang lebih kental karena tambahan kelapa sangrai.',
  '/images/hero.png',
  '30 Menit',
  '45 Menit',
  4,
  'Sedang',
  '["Bahan A","Bahan B","Bumbu Halus"]'::jsonb,
  '["Siapkan bahan.","Masak hingga matang.","Sajikan."]'::jsonb,
  'Sulawesi Selatan'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.recipes (slug, title, description, image, "prepTime", "cookTime", servings, difficulty, ingredients, instructions, province)
VALUES (
  'sinonggi-sulawesi-tenggara',
  'Sinonggi',
  'Makanan pokok dari pati sagu yang dimakan dengan kuah ikan pedas, mirip papeda.',
  '/images/hero.png',
  '30 Menit',
  '45 Menit',
  4,
  'Sedang',
  '["Bahan A","Bahan B","Bumbu Halus"]'::jsonb,
  '["Siapkan bahan.","Masak hingga matang.","Sajikan."]'::jsonb,
  'Sulawesi Tenggara'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.recipes (slug, title, description, image, "prepTime", "cookTime", servings, difficulty, ingredients, instructions, province)
VALUES (
  'sate-gogos-sulawesi-tenggara',
  'Sate Gogos',
  'Sate kerang (pokea) yang disajikan dengan gogos (ketan bakar).',
  '/images/hero.png',
  '30 Menit',
  '45 Menit',
  4,
  'Sedang',
  '["Bahan A","Bahan B","Bumbu Halus"]'::jsonb,
  '["Siapkan bahan.","Masak hingga matang.","Sajikan."]'::jsonb,
  'Sulawesi Tenggara'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.recipes (slug, title, description, image, "prepTime", "cookTime", servings, difficulty, ingredients, instructions, province)
VALUES (
  'lapa-lapa-sulawesi-tenggara',
  'Lapa-lapa',
  'Beras ketan yang dimasak dengan santan, dibungkus daun kelapa muda, dan direbus.',
  '/images/hero.png',
  '30 Menit',
  '45 Menit',
  4,
  'Sedang',
  '["Bahan A","Bahan B","Bumbu Halus"]'::jsonb,
  '["Siapkan bahan.","Masak hingga matang.","Sajikan."]'::jsonb,
  'Sulawesi Tenggara'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.recipes (slug, title, description, image, "prepTime", "cookTime", servings, difficulty, ingredients, instructions, province)
VALUES (
  'ikan-kuah-pala-maluku',
  'Ikan Kuah Pala',
  'Sup ikan segar dengan rasa asam segar dan aroma buah pala yang kuat khas Banda.',
  '/images/hero.png',
  '30 Menit',
  '45 Menit',
  4,
  'Sedang',
  '["Bahan A","Bahan B","Bumbu Halus"]'::jsonb,
  '["Siapkan bahan.","Masak hingga matang.","Sajikan."]'::jsonb,
  'Maluku'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.recipes (slug, title, description, image, "prepTime", "cookTime", servings, difficulty, ingredients, instructions, province)
VALUES (
  'papeda-maluku',
  'Papeda',
  'Bubur sagu yang lengket seperti lem, disajikan dengan ikan kuah kuning.',
  '/images/hero.png',
  '30 Menit',
  '45 Menit',
  4,
  'Sedang',
  '["Bahan A","Bahan B","Bumbu Halus"]'::jsonb,
  '["Siapkan bahan.","Masak hingga matang.","Sajikan."]'::jsonb,
  'Maluku'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.recipes (slug, title, description, image, "prepTime", "cookTime", servings, difficulty, ingredients, instructions, province)
VALUES (
  'gohu-ikan-maluku',
  'Gohu Ikan',
  'Sashimi ala Ternate, ikan tuna mentah dipotong dadu dan dicampur dengan kenari, cabai, dan jeruk nipis.',
  '/images/hero.png',
  '30 Menit',
  '45 Menit',
  4,
  'Sedang',
  '["Bahan A","Bahan B","Bumbu Halus"]'::jsonb,
  '["Siapkan bahan.","Masak hingga matang.","Sajikan."]'::jsonb,
  'Maluku'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.recipes (slug, title, description, image, "prepTime", "cookTime", servings, difficulty, ingredients, instructions, province)
VALUES (
  'gatogato-maluku-utara',
  'Gatogato',
  'Masakan berbahan dasar ubi jalar atau sukun.',
  '/images/hero.png',
  '30 Menit',
  '45 Menit',
  4,
  'Sedang',
  '["Bahan A","Bahan B","Bumbu Halus"]'::jsonb,
  '["Siapkan bahan.","Masak hingga matang.","Sajikan."]'::jsonb,
  'Maluku Utara'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.recipes (slug, title, description, image, "prepTime", "cookTime", servings, difficulty, ingredients, instructions, province)
VALUES (
  'ikan-asap-fufu-maluku-utara',
  'Ikan Asap Fufu',
  'Ikan cakalang yang diasap hingga kering, awet dan beraroma khas.',
  '/images/hero.png',
  '30 Menit',
  '45 Menit',
  4,
  'Sedang',
  '["Bahan A","Bahan B","Bumbu Halus"]'::jsonb,
  '["Siapkan bahan.","Masak hingga matang.","Sajikan."]'::jsonb,
  'Maluku Utara'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.recipes (slug, title, description, image, "prepTime", "cookTime", servings, difficulty, ingredients, instructions, province)
VALUES (
  'popeda-maluku-utara',
  'Popeda',
  'Sama seperti di Maluku, bubur sagu disantap dengan kuah ikan.',
  '/images/hero.png',
  '30 Menit',
  '45 Menit',
  4,
  'Sedang',
  '["Bahan A","Bahan B","Bumbu Halus"]'::jsonb,
  '["Siapkan bahan.","Masak hingga matang.","Sajikan."]'::jsonb,
  'Maluku Utara'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.recipes (slug, title, description, image, "prepTime", "cookTime", servings, difficulty, ingredients, instructions, province)
VALUES (
  'papeda-papua',
  'Papeda',
  'Makanan pokok sagu yang disiram kuah ikan kuning.',
  '/images/hero.png',
  '30 Menit',
  '45 Menit',
  4,
  'Sedang',
  '["Bahan A","Bahan B","Bumbu Halus"]'::jsonb,
  '["Siapkan bahan.","Masak hingga matang.","Sajikan."]'::jsonb,
  'Papua'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.recipes (slug, title, description, image, "prepTime", "cookTime", servings, difficulty, ingredients, instructions, province)
VALUES (
  'ikan-bungkus-papua',
  'Ikan Bungkus',
  'Ikan yang dibumbui rempah daun dan dibungkus daun talas kemudian dibakar.',
  '/images/hero.png',
  '30 Menit',
  '45 Menit',
  4,
  'Sedang',
  '["Bahan A","Bahan B","Bumbu Halus"]'::jsonb,
  '["Siapkan bahan.","Masak hingga matang.","Sajikan."]'::jsonb,
  'Papua'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.recipes (slug, title, description, image, "prepTime", "cookTime", servings, difficulty, ingredients, instructions, province)
VALUES (
  'udang-selingkuh-papua',
  'Udang Selingkuh',
  'Udang air tawar besar dengan capit seperti kepiting, biasanya direbus atau digoreng.',
  '/images/hero.png',
  '30 Menit',
  '45 Menit',
  4,
  'Sedang',
  '["Bahan A","Bahan B","Bumbu Halus"]'::jsonb,
  '["Siapkan bahan.","Masak hingga matang.","Sajikan."]'::jsonb,
  'Papua'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.recipes (slug, title, description, image, "prepTime", "cookTime", servings, difficulty, ingredients, instructions, province)
VALUES (
  'ikan-kuah-kuning-papua-barat',
  'Ikan Kuah Kuning',
  'Pasangan setia papeda, ikan dimasak kuah kuning segar tanpa santan.',
  '/images/hero.png',
  '30 Menit',
  '45 Menit',
  4,
  'Sedang',
  '["Bahan A","Bahan B","Bumbu Halus"]'::jsonb,
  '["Siapkan bahan.","Masak hingga matang.","Sajikan."]'::jsonb,
  'Papua Barat'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.recipes (slug, title, description, image, "prepTime", "cookTime", servings, difficulty, ingredients, instructions, province)
VALUES (
  'kue-lontar-papua-barat',
  'Kue Lontar',
  'Pie susu khas Papua yang lembut dan manis, adaptasi dari kue Belanda.',
  '/images/hero.png',
  '30 Menit',
  '45 Menit',
  4,
  'Sedang',
  '["Bahan A","Bahan B","Bumbu Halus"]'::jsonb,
  '["Siapkan bahan.","Masak hingga matang.","Sajikan."]'::jsonb,
  'Papua Barat'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.recipes (slug, title, description, image, "prepTime", "cookTime", servings, difficulty, ingredients, instructions, province)
VALUES (
  'sate-ulat-sagu-papua-barat',
  'Sate Ulat Sagu',
  'Ulat sagu yang kaya protein dibakar menjadi sate, rasanya gurih dan creamy.',
  '/images/hero.png',
  '30 Menit',
  '45 Menit',
  4,
  'Sedang',
  '["Bahan A","Bahan B","Bumbu Halus"]'::jsonb,
  '["Siapkan bahan.","Masak hingga matang.","Sajikan."]'::jsonb,
  'Papua Barat'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.recipes (slug, title, description, image, "prepTime", "cookTime", servings, difficulty, ingredients, instructions, province)
VALUES (
  'bakar-batu-papua-pegunungan',
  'Bakar Batu',
  'Tradisi memasak bersama ubi, sayur, dan daging babi (bisa diganti) di atas batu panas.',
  '/images/hero.png',
  '30 Menit',
  '45 Menit',
  4,
  'Sedang',
  '["Bahan A","Bahan B","Bumbu Halus"]'::jsonb,
  '["Siapkan bahan.","Masak hingga matang.","Sajikan."]'::jsonb,
  'Papua Pegunungan'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.recipes (slug, title, description, image, "prepTime", "cookTime", servings, difficulty, ingredients, instructions, province)
VALUES (
  'ubi-bakar-papua-pegunungan',
  'Ubi Bakar',
  'Ubi manis yang dibakar di abu panas (makanan pokok).',
  '/images/hero.png',
  '30 Menit',
  '45 Menit',
  4,
  'Sedang',
  '["Bahan A","Bahan B","Bumbu Halus"]'::jsonb,
  '["Siapkan bahan.","Masak hingga matang.","Sajikan."]'::jsonb,
  'Papua Pegunungan'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.recipes (slug, title, description, image, "prepTime", "cookTime", servings, difficulty, ingredients, instructions, province)
VALUES (
  'sayur-lilin-papua-pegunungan',
  'Sayur Lilin',
  'Sayuran khas sejenis tebu telur yang dimasak kuah.',
  '/images/hero.png',
  '30 Menit',
  '45 Menit',
  4,
  'Sedang',
  '["Bahan A","Bahan B","Bumbu Halus"]'::jsonb,
  '["Siapkan bahan.","Masak hingga matang.","Sajikan."]'::jsonb,
  'Papua Pegunungan'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.recipes (slug, title, description, image, "prepTime", "cookTime", servings, difficulty, ingredients, instructions, province)
VALUES (
  'sagu-sep-papua-selatan',
  'Sagu Sep',
  'Sagu yang dicampur daging dan kelapa parut kemudian dibakar di atas batu.',
  '/images/hero.png',
  '30 Menit',
  '45 Menit',
  4,
  'Sedang',
  '["Bahan A","Bahan B","Bumbu Halus"]'::jsonb,
  '["Siapkan bahan.","Masak hingga matang.","Sajikan."]'::jsonb,
  'Papua Selatan'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.recipes (slug, title, description, image, "prepTime", "cookTime", servings, difficulty, ingredients, instructions, province)
VALUES (
  'daging-rusa-papua-selatan',
  'Daging Rusa',
  'Olahan daging rusa (dendeng atau sate) yang umum di Merauke.',
  '/images/hero.png',
  '30 Menit',
  '45 Menit',
  4,
  'Sedang',
  '["Bahan A","Bahan B","Bumbu Halus"]'::jsonb,
  '["Siapkan bahan.","Masak hingga matang.","Sajikan."]'::jsonb,
  'Papua Selatan'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.recipes (slug, title, description, image, "prepTime", "cookTime", servings, difficulty, ingredients, instructions, province)
VALUES (
  'abon-gulung-papua-selatan',
  'Abon Gulung',
  'Roti gulung berisi abon sapi/rusa yang terkenal sebagai oleh-oleh.',
  '/images/hero.png',
  '30 Menit',
  '45 Menit',
  4,
  'Sedang',
  '["Bahan A","Bahan B","Bumbu Halus"]'::jsonb,
  '["Siapkan bahan.","Masak hingga matang.","Sajikan."]'::jsonb,
  'Papua Selatan'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.recipes (slug, title, description, image, "prepTime", "cookTime", servings, difficulty, ingredients, instructions, province)
VALUES (
  'kue-sagu-papua-tengah',
  'Kue Sagu',
  'Olahan sagu kering.',
  '/images/hero.png',
  '30 Menit',
  '45 Menit',
  4,
  'Sedang',
  '["Bahan A","Bahan B","Bumbu Halus"]'::jsonb,
  '["Siapkan bahan.","Masak hingga matang.","Sajikan."]'::jsonb,
  'Papua Tengah'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.recipes (slug, title, description, image, "prepTime", "cookTime", servings, difficulty, ingredients, instructions, province)
VALUES (
  'ikan-bakar-manokwari-papua-tengah',
  'Ikan Bakar Manokwari',
  'Ikan bakar dengan sambal mentah yang pedas khas.',
  '/images/hero.png',
  '30 Menit',
  '45 Menit',
  4,
  'Sedang',
  '["Bahan A","Bahan B","Bumbu Halus"]'::jsonb,
  '["Siapkan bahan.","Masak hingga matang.","Sajikan."]'::jsonb,
  'Papua Tengah'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.recipes (slug, title, description, image, "prepTime", "cookTime", servings, difficulty, ingredients, instructions, province)
VALUES (
  'colo-colo-papua-tengah',
  'Colo-colo',
  'Sambal irisan tomat, kemangi, cabai, dan kecap.',
  '/images/hero.png',
  '30 Menit',
  '45 Menit',
  4,
  'Sedang',
  '["Bahan A","Bahan B","Bumbu Halus"]'::jsonb,
  '["Siapkan bahan.","Masak hingga matang.","Sajikan."]'::jsonb,
  'Papua Tengah'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.recipes (slug, title, description, image, "prepTime", "cookTime", servings, difficulty, ingredients, instructions, province)
VALUES (
  'ikan-kuah-asam-papua-barat-daya',
  'Ikan Kuah Asam',
  'Sup ikan segar.',
  '/images/hero.png',
  '30 Menit',
  '45 Menit',
  4,
  'Sedang',
  '["Bahan A","Bahan B","Bumbu Halus"]'::jsonb,
  '["Siapkan bahan.","Masak hingga matang.","Sajikan."]'::jsonb,
  'Papua Barat Daya'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.recipes (slug, title, description, image, "prepTime", "cookTime", servings, difficulty, ingredients, instructions, province)
VALUES (
  'papeda-papua-barat-daya',
  'Papeda',
  'Makanan pokok.',
  '/images/hero.png',
  '30 Menit',
  '45 Menit',
  4,
  'Sedang',
  '["Bahan A","Bahan B","Bumbu Halus"]'::jsonb,
  '["Siapkan bahan.","Masak hingga matang.","Sajikan."]'::jsonb,
  'Papua Barat Daya'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.recipes (slug, title, description, image, "prepTime", "cookTime", servings, difficulty, ingredients, instructions, province)
VALUES (
  'keladi-tumbuk-papua-barat-daya',
  'Keladi Tumbuk',
  'Talas yang ditumbuk halus dan disajikan dengan sayur.',
  '/images/hero.png',
  '30 Menit',
  '45 Menit',
  4,
  'Sedang',
  '["Bahan A","Bahan B","Bumbu Halus"]'::jsonb,
  '["Siapkan bahan.","Masak hingga matang.","Sajikan."]'::jsonb,
  'Papua Barat Daya'
) ON CONFLICT (slug) DO NOTHING;

