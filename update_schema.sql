-- Add province column to recipes
alter table public.recipes 
add column if not exists province text;

-- Create site_settings table
create table if not exists public.site_settings (
  key text primary key,
  value jsonb not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- RLS for site_settings
alter table public.site_settings enable row level security;

create policy "Settings are viewable by everyone."
  on public.site_settings for select
  using ( true );

create policy "Admins can update settings."
  on public.site_settings for update
  using ( true );

create policy "Admins can insert settings."
  on public.site_settings for insert
  with check ( true );

-- Seed initial settings
insert into public.site_settings (key, value)
values 
('general', '{"siteTitle": "Masakan Nusantara", "heroTitle": "Cita Rasa Kuliner Indonesia", "heroDescription": "Jelajahi kekayaan rasa dari Sabang sampai Merauke. Kumpulan resep otentik warisan leluhur.", "primaryColor": "#d97706"}'::jsonb)
on conflict (key) do nothing;
