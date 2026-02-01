import { notFound } from "next/navigation";
import Image from "next/image";
import { Clock, Users, ChefHat } from "lucide-react";
import { Metadata } from "next";
import { supabase } from "@/lib/supabase";
import { Recipe } from "@/types/recipe";

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;

    const { data: recipe } = await supabase
        .from('recipes')
        .select('*')
        .eq('slug', slug)
        .single();

    if (!recipe) {
        return {
            title: "Resep Tidak Ditemukan",
        };
    }

    return {
        title: `${recipe.title} | Masakan Nusantara`,
        description: recipe.description,
    };
}

export default async function RecipeDetailPage({ params }: Props) {
    const { slug } = await params;

    const { data: recipeData } = await supabase
        .from('recipes')
        .select('*')
        .eq('slug', slug)
        .single();

    // Cast or handle potential null
    const recipe = recipeData as Recipe | null;

    if (!recipe) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-background pb-20">
            {/* Hero Image */}
            <div className="relative h-[50vh] w-full">
                <Image
                    src={recipe.image || "/images/hero.png"} // Fallback image
                    alt={recipe.title}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 max-w-7xl mx-auto">
                    <span className="inline-block py-1 px-3 rounded-full bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider mb-4">
                        {recipe.difficulty}
                    </span>
                    <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-4 drop-shadow-lg">
                        {recipe.title}
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl drop-shadow-md">
                        {recipe.description}
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Sidebar / Info */}
                    <div className="lg:col-span-1 space-y-6">
                        <div className="p-6 rounded-xl border border-border bg-card shadow-sm">
                            <h3 className="text-xl font-serif font-bold mb-4 flex items-center gap-2">
                                <Clock className="w-5 h-5 text-primary" /> Info Masak
                            </h3>
                            <div className="space-y-4 text-sm">
                                <div className="flex justify-between border-b border-border pb-2">
                                    <span className="text-muted-foreground">Persiapan</span>
                                    <span className="font-medium">{recipe.prepTime}</span>
                                </div>
                                <div className="flex justify-between border-b border-border pb-2">
                                    <span className="text-muted-foreground">Memasak</span>
                                    <span className="font-medium">{recipe.cookTime}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-muted-foreground">Porsi</span>
                                    <span className="font-medium">{recipe.servings} Orang</span>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 rounded-xl border border-border bg-card shadow-sm">
                            <h3 className="text-xl font-serif font-bold mb-4 flex items-center gap-2">
                                <ChefHat className="w-5 h-5 text-primary" /> Bahan-Bahan
                            </h3>
                            <ul className="space-y-3">
                                {recipe.ingredients?.map((ingredient, index) => (
                                    <li key={index} className="flex gap-3 text-sm">
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                                        <span>{ingredient}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Main Content / Instructions */}
                    <div className="lg:col-span-2">
                        <h2 className="text-3xl font-serif font-bold mb-8 pb-4 border-b border-border">Cara Memasak</h2>
                        <div className="space-y-8">
                            {recipe.instructions?.map((step, index) => (
                                <div key={index} className="flex gap-6 group">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center font-serif text-xl font-bold text-primary shadow-sm group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                        {index + 1}
                                    </div>
                                    <div className="pt-2">
                                        <p className="text-lg leading-relaxed text-foreground/90">{step}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
