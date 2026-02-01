-- Create Recipes Table
create table public.recipes (
  id uuid default gen_random_uuid() primary key,
  slug text unique not null,
  title text not null,
  description text,
  image text,
  "prepTime" text,
  "cookTime" text,
  servings int,
  difficulty text,
  ingredients jsonb default '[]'::jsonb,
  instructions jsonb default '[]'::jsonb,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Row Level Security (RLS)
alter table public.recipes enable row level security;

-- Policies
create policy "Public recipes are viewable by everyone."
  on public.recipes for select
  using ( true );

create policy "Admins can insert recipes."
  on public.recipes for insert
  with check ( true ); -- In a real app, check auth.uid()

create policy "Admins can update recipes."
  on public.recipes for update
  using ( true );

create policy "Admins can delete recipes."
  on public.recipes for delete
  using ( true );

-- Initial Data Seeding
insert into public.recipes (slug, title, description, image, "prepTime", "cookTime", servings, difficulty, ingredients, instructions)
values 
(
  'rendang-daging',
  'Rendang Daging Sapi',
  'Masakan daging sapi bercita rasa pedas yang menggunakan campuran dari berbagai bumbu dan rempah-rempah.',
  '/images/rendang.png',
  '30 menit',
  '4 jam',
  6,
  'Sulit',
  '[
    "1 kg daging sapi",
    "3 butir kelapa, ambil santan kental dan santan encer",
    "4 lembar daun jeruk",
    "2 batang serai, memarkan",
    "1 butir asam kandis",
    "100ml minyak goreng",
    "Bumbu halus: 100g cabai merah, 10 bawang merah, 5 bawang putih, jahe, lengkuas, kunyit"
  ]'::jsonb,
  '[
    "Tumis bumbu halus hingga harum.",
    "Masukkan daging, aduk hingga berubah warna.",
    "Tuang santan santan encer, masak hingga mendidih.",
    "Masukkan bumbu pelengkap dan santan kental.",
    "Masak dengan api kecil sambil terus diaduk hingga kering dan berminyak."
  ]'::jsonb
),
(
  'sate-ayam-madura',
  'Sate Ayam Madura',
  'Sate ayam dengan bumbu kacang yang gurih dan manis khas Madura.',
  '/images/sate.png',
  '20 menit',
  '30 menit',
  4,
  'Sedang',
  '[
    "500g dada ayam, potong dadu",
    "Tusuk sate secukupnya",
    "Kecap manis",
    "Jeruk limau",
    "Bumbu kacang: 250g kacang tanah goreng, 3 bawang putih, 4 bawang merah, kemiri, gula merah"
  ]'::jsonb,
  '[
    "Tusuk ayam dengan tusuk sate.",
    "Lumuri dengan sedikit bumbu kacang dan kecap.",
    "Bakar di atas arang hingga matang dan kecokelatan.",
    "Sajikan dengan sisa bumbu kacang, kecap, dan jeruk limau."
  ]'::jsonb
),
(
    'es-campur',
    'Es Campur Spesial',
    'Minuman penutup yang segar berisi aneka buah, agar-agar, dan tape.',
    '/images/escampur.png',
    '15 menit',
    '0 menit',
    4,
    'Mudah',
    '[
      "1 buah alpukat",
      "100g nangka",
      "100g kolang-kaling",
      "Cincau hitam",
      "Tape singkong",
      "Sirup merah (cocopandan)",
      "Susu kental manis",
      "Es serut"
    ]'::jsonb,
    '[
      "Potong-potong buah dan bahan pelengkap.",
      "Tata dalam mangkuk atau gelas.",
      "Beri es serut di atasnya.",
      "Siram dengan sirup dan susu kental manis."
    ]'::jsonb
  );
