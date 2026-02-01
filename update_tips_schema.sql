-- Add 'tips' column for chef's secrets
ALTER TABLE public.recipes 
ADD COLUMN IF NOT EXISTS tips text[] DEFAULT '{}';

-- We can use the existing 'ingredients' and 'instructions' arrays. 
-- To support sections like "## Bahan Utama", we will handle that in the UI rendering logic.
-- (e.g. if string starts with ## or bold, treat as header).

-- Ensure RLS is still correct (Service Role already bypasses, public read is on).
