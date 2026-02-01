
export interface Recipe {
    id: string;
    slug: string;
    title: string;
    description: string;
    image: string;
    prepTime: string;
    cookTime: string;
    servings: number;
    difficulty: "Mudah" | "Sedang" | "Sulit";
    ingredients: string[];
    instructions: string[];
}

export const recipes: Recipe[] = [
    {
        id: "1",
        slug: "rendang-daging",
        title: "Rendang Daging Sapi",
        description: "Masakan daging sapi bercita rasa pedas yang menggunakan campuran dari berbagai bumbu dan rempah-rempah. Masakan ini dihasilkan dari proses memasak yang memanaskan berulang-ulang dengan santan kelapa.",
        image: "/images/rendang.png",
        prepTime: "30 menit",
        cookTime: "4 jam",
        servings: 6,
        difficulty: "Sulit",
        ingredients: [
            "1 kg daging sapi",
            "3 butir kelapa, ambil santan kental dan santan encer",
            "4 lembar daun jeruk",
            "2 batang serai, memarkan",
            "1 butir asam kandis",
            "100ml minyak goreng",
            "Bumbu halus: 100g cabai merah, 10 bawang merah, 5 bawang putih, jahe, lengkuas, kunyit"
        ],
        instructions: [
            "Tumis bumbu halus hingga harum.",
            "Masukkan daging, aduk hingga berubah warna.",
            "Tuang santan santan encer, masak hingga mendidih.",
            "Masukkan bumbu pelengkap dan santan kental.",
            "Masak dengan api kecil sambil terus diaduk hingga kering dan berminyak."
        ]
    },
    {
        id: "2",
        slug: "sate-ayam-madura",
        title: "Sate Ayam Madura",
        description: "Sate ayam dengan bumbu kacang yang gurih dan manis khas Madura. Disajikan dengan lontong dan irisan bawang merah.",
        image: "/images/sate.png",
        prepTime: "20 menit",
        cookTime: "30 menit",
        servings: 4,
        difficulty: "Sedang",
        ingredients: [
            "500g dada ayam, potong dadu",
            "Tusuk sate secukupnya",
            "Kecap manis",
            "Jeruk limau",
            "Bumbu kacang: 250g kacang tanah goreng, 3 bawang putih, 4 bawang merah, kemiri, gula merah"
        ],
        instructions: [
            "Tusuk ayam dengan tusuk sate.",
            "Lumuri dengan sedikit bumbu kacang dan kecap.",
            "Bakar di atas arang hingga matang dan kecokelatan.",
            "Sajikan dengan sisa bumbu kacang, kecap, dan jeruk limau."
        ]
    },
    {
        id: "3",
        slug: "es-campur",
        title: "Es Campur Spesial",
        description: "Minuman penutup yang segar berisi aneka buah, agar-agar, dan tape, disiram dengan sirup dan susu kental manis.",
        image: "/images/escampur.png",
        prepTime: "15 menit",
        cookTime: "0 menit",
        servings: 4,
        difficulty: "Mudah",
        ingredients: [
            "1 buah alpukat",
            "100g nangka",
            "100g kolang-kaling",
            "Cincau hitam",
            "Tape singkong",
            "Sirup merah (cocopandan)",
            "Susu kental manis",
            "Es serut"
        ],
        instructions: [
            "Potong-potong buah dan bahan pelengkap.",
            "Tata dalam mangkuk atau gelas.",
            "Beri es serut di atasnya.",
            "Siram dengan sirup dan susu kental manis."
        ]
    }
];
