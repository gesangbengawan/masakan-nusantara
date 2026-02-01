import { RecipeCard } from "@/components/RecipeCard";
import { Metadata } from "next";
import { supabase } from "@/lib/supabase";
import { Recipe } from "@/types/recipe";

export const revalidate = 3600; // Cache for 1 hour

export const metadata: Metadata = {
    title: "Daftar Resep | Masakan Nusantara",
    description: "Jelajahi berbagai resep masakan Indonesia pilihan.",
};

export default async function RecipesPage() {
    const { data: recipeList } = await supabase
        .from('recipes')
        .select('*');

    const recipes = recipeList || [];

    return (
        <main className="min-h-screen bg-background pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="mb-10 text-center">
                <h1 className="text-4xl font-serif font-bold mb-4">Koleksi Resep Nusantara</h1>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                    Temukan inspirasi memasak dengan panduan lengkap dari berbagai daerah di Indonesia.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {recipes.map((recipe) => (
                    <RecipeCard key={recipe.id} recipe={recipe as Recipe} />
                ))}
                {recipes.length === 0 && (
                    <div className="col-span-full text-center py-20 text-muted-foreground">
                        <p>Belum ada resep yang tersedia. Silakan cek kembali nanti atau tambahkan di panel admin.</p>
                    </div>
                )}
            </div>
        </main>
    );
}
