import { notFound } from "next/navigation";
import Image from "next/image";
import { Clock, Users, ChefHat, Lightbulb, Flame, Utensils } from "lucide-react"; // Import Icons
import { Metadata } from "next";
import { supabase } from "@/lib/supabase";
import { Recipe } from "@/types/recipe";
import { FavoriteButton } from "@/components/FavoriteButton"; // Import Client Component

interface Props {
    params: Promise<{ slug: string }>;
}

export const revalidate = 3600;

export async function generateStaticParams() {
    const { data: recipes } = await supabase.from('recipes').select('slug');
    return recipes?.map(({ slug }) => ({ slug })) || [];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const { data: recipe } = await supabase.from('recipes').select('*').eq('slug', slug).single();
    if (!recipe) return { title: "Resep Tidak Ditemukan" };
    return { title: `${recipe.title} | Masakan Nusantara`, description: recipe.description };
}

export default async function RecipeDetailPage({ params }: Props) {
    const { slug } = await params;
    const { data: recipeData } = await supabase.from('recipes').select('*').eq('slug', slug).single();
    const recipe = recipeData as Recipe | null;

    if (!recipe) notFound();

    return (
        <main className="min-h-screen bg-stone-950 pb-32 relative text-stone-100">
            {/* Background Texture Pattern (Dark Premium) */}
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none mix-blend-overlay">
                <Image
                    src="/images/premium_rice_paper_texture.png"
                    alt="Texture"
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            {/* Hero Section - Immersive */}
            <div className="relative h-[70vh] w-full">
                <Image
                    src={recipe.image || "/images/hero.png"}
                    alt={recipe.title}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-stone-950" />

                {/* Floating Title Card */}
                <div className="absolute -bottom-12 left-0 right-0 px-4">
                    <div className="max-w-4xl mx-auto bg-stone-900/40 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-3xl shadow-2xl relative overflow-hidden">
                        {/* Shine Effect */}
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500/50 to-transparent opacity-50"></div>

                        <div className="flex flex-col md:flex-row gap-6 items-center justify-between relative z-10">
                            <div className="text-left flex-1">
                                <span className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-[0.2em] text-amber-400 uppercase border border-amber-400/20 rounded-full">
                                    {recipe.province}
                                </span>
                                <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4 leading-tight drop-shadow-lg">
                                    {recipe.title}
                                </h1>
                                <p className="text-stone-100 font-light text-lg leading-relaxed max-w-2xl drop-shadow-md">
                                    {recipe.description}
                                </p>
                            </div>

                            {/* Actions */}
                            <div className="flex flex-col gap-3 shrink-0">
                                <FavoriteButton slug={recipe.slug} />
                                <div className="flex items-center gap-4 text-sm font-medium text-stone-400 bg-stone-950/50 px-4 py-2 rounded-xl border border-white/5">
                                    <span className="flex items-center gap-2">
                                        <Clock className="w-4 h-4 text-amber-500" /> {recipe.cookTime}
                                    </span>
                                    <span className="w-px h-4 bg-white/10"></span>
                                    <span className="flex items-center gap-2">
                                        <Utensils className="w-4 h-4 text-amber-500" /> {recipe.servings} Porsi
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Container (Spacer for floating card) */}
            <div className="h-20"></div>

            {/* Main Content Two Column */}
            <div className="max-w-5xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-12 gap-12">

                {/* Left Column: Ingredients (4 cols) */}
                <div className="md:col-span-4 space-y-8">
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-8 sticky top-24 backdrop-blur-sm">
                        <h3 className="text-2xl font-serif font-bold text-amber-400 mb-6 flex items-center gap-3">
                            <Utensils className="w-5 h-5" /> Bahan-Bahan
                        </h3>
                        <ul className="space-y-4">
                            {recipe.ingredients.map((item, idx) => {
                                if (item.startsWith("##")) {
                                    return <h4 key={idx} className="text-lg font-bold text-white mt-6 pt-2 border-t border-white/10 first:border-0">{item.replace("##", "")}</h4>
                                }
                                return (
                                    <li key={idx} className="flex items-start gap-3 text-stone-300 text-sm leading-relaxed group">
                                        <span className="w-1.5 h-1.5 mt-2 rounded-full bg-amber-500 group-hover:scale-125 transition-transform shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>

                {/* Right Column: Instructions & Tips (8 cols) */}
                <div className="md:col-span-8 space-y-10">
                    {/* Instructions */}
                    <div className="space-y-8">
                        <h3 className="text-2xl font-serif font-bold text-amber-400 mb-6 flex items-center gap-3">
                            <ChefHat className="w-6 h-6" /> Cara Membuat
                        </h3>
                        <div className="space-y-8 relative">
                            {/* Vertical Line */}
                            <div className="absolute left-[19px] top-4 bottom-4 w-0.5 bg-stone-200" />

                            {recipe.instructions?.map((step, index) => {
                                // Check for bold header in step like "**Persiapan**:"
                                const isHeaderStep = step.trim().startsWith("**");
                                const stepText = isHeaderStep ? step.replace(/\*\*(.*?)\*\*:/g, "").trim() : step;
                                const stepTitle = isHeaderStep ? step.match(/\*\*(.*?)\*\*:/)?.[1] : null;

                                return (
                                    <div key={index} className="relative flex gap-6 group">
                                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white border-2 border-stone-300 text-stone-400 font-bold flex items-center justify-center z-10 group-hover:border-orange-500 group-hover:text-orange-500 transition-all bg-[#FDFBF7]">
                                            {index + 1}
                                        </div>
                                        <div className="pt-1 pb-8">
                                            {stepTitle && (
                                                <h4 className="text-xl font-serif font-bold text-amber-400 mb-3 tracking-wide drop-shadow-md">{stepTitle}</h4>
                                            )}
                                            <p className="text-lg text-stone-100 leading-relaxed font-normal group-hover:text-white transition-colors whitespace-pre-line drop-shadow-sm">
                                                {isHeaderStep ? stepText : step}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}

                            {/* Tips Section if available */}
                            {recipe.tips && recipe.tips.length > 0 && (
                                <div className="mt-12 bg-amber-50 p-6 rounded-2xl border border-amber-100">
                                    <h4 className="text-lg font-bold text-amber-800 mb-4 flex items-center gap-2">
                                        <Lightbulb className="w-5 h-5" /> Tips Rahasia
                                    </h4>
                                    <ul className="space-y-3">
                                        {recipe.tips.map((tip, idx) => (
                                            <li key={idx} className="text-amber-900/80 text-sm italic flex gap-2">
                                                <span>✨</span> {tip}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Helper for mock animation element because server component */}
            <div className="hidden">
                {/* motion_h1 replacement hack */}
            </div>
        </main>
    );
}
