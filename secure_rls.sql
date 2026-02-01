-- Lock down RLS Policies

-- Drop existing permissive policies
drop policy if exists "Admins can insert recipes." on public.recipes;
drop policy if exists "Admins can update recipes." on public.recipes;
drop policy if exists "Admins can delete recipes." on public.recipes;

-- Create restrictive policies (only allowing Service Role, which bypasses RLS)
-- Since Service Role bypasses RLS, we effectively just need to NOT allow public/anon access for writes.
-- We can create policies that just return false for auth.role() = 'anon' or just not have them (default deny).
-- Supabase default is deny if RLS enabled and no policy matches.

-- Ensure SELECT is still public
drop policy if exists "Public recipes are viewable by everyone." on public.recipes;
create policy "Public recipes are viewable by everyone."
  on public.recipes for select
  using ( true );

-- For writes, we want to allow NO ONE except the service role.
-- Since the service role bypasses RLS, we don't need a specific policy for it?
-- Actually, if we delete the write policies, then NO ONE (except service key) can write.
-- This effectively secures the database against client-side tampering.

-- Do the same for site_settings
drop policy if exists "Admins can update settings." on public.site_settings;
drop policy if exists "Admins can insert settings." on public.site_settings;

drop policy if exists "Settings are viewable by everyone." on public.site_settings;
create policy "Settings are viewable by everyone."
  on public.site_settings for select
  using ( true );
