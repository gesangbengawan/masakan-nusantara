import { Metadata } from "next";
import { supabase } from "@/lib/supabase";
import { RecipeFilteredList } from "@/components/RecipeFilteredList";
import { Recipe } from "@/types/recipe";

export const revalidate = 0; // Ensure dynamic fetch

export const metadata: Metadata = {
    title: "Jelajah Resep Authentic | Masakan Nusantara",
    description: "Koleksi masakan Indonesia asli dengan resep premium yang teruji.",
};

export default async function RecipesPage() {
    const { data: recipeList } = await supabase
        .from('recipes')
        .select('*');

    const recipes = (recipeList || []) as Recipe[];

    return (
        <main className="min-h-screen pt-24 pb-32 px-4 max-w-7xl mx-auto">
            <h1 className="text-4xl font-serif font-bold text-center mb-8">Jelajah Nusantara</h1>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Koleksi resep premium otentik yang dikurasi dari berbagai provinsi.
            </p>

            <RecipeFilteredList initialRecipes={recipes} />
        </main>
    );
}
