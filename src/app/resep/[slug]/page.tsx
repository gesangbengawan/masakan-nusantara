import { notFound } from "next/navigation";
import Image from "next/image";
import { Clock, Users, ChefHat, Lightbulb, Flame, Utensils } from "lucide-react"; // Import Icons
import { Metadata } from "next";
import { supabase } from "@/lib/supabase";
import { Recipe } from "@/types/recipe";
import Link from "next/link";
import { BottomNav } from "@/components/BottomNav"; // Ensure context

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
        <main className="min-h-screen bg-[#FDFBF7] pb-32"> {/* Creamy background for magazine feel */}
            {/* Hero Section */}
            <div className="relative h-[60vh] w-full group">
                <Image
                    src={recipe.image || "/images/hero.png"}
                    alt={recipe.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16 max-w-5xl mx-auto text-center">
                    <motion_h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 drop-shadow-2xl leading-tight">
                        {recipe.title}
                    </motion_h1>
                    <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto font-light leading-relaxed">
                        {recipe.description}
                    </p>
                </div>
            </div>

            <div className="max-w-5xl mx-auto px-6 -mt-10 relative z-10">
                {/* Stats Card */}
                <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 flex flex-wrap justify-between items-center gap-6 border border-stone-100">
                    <div className="flex items-center gap-3">
                        <div className="p-3 bg-orange-100 text-orange-600 rounded-full"><Clock className="w-6 h-6" /></div>
                        <div>
                            <p className="text-xs text-muted-foreground uppercase tracking-wider">Persiapan</p>
                            <p className="font-semibold text-lg text-stone-800">{recipe.prepTime}</p>
                        </div>
                    </div>
                    <div className="w-px h-12 bg-stone-200 hidden md:block" />
                    <div className="flex items-center gap-3">
                        <div className="p-3 bg-red-100 text-red-600 rounded-full"><Flame className="w-6 h-6" /></div>
                        <div>
                            <p className="text-xs text-muted-foreground uppercase tracking-wider">Memasak</p>
                            <p className="font-semibold text-lg text-stone-800">{recipe.cookTime}</p>
                        </div>
                    </div>
                    <div className="w-px h-12 bg-stone-200 hidden md:block" />
                    <div className="flex items-center gap-3">
                        <div className="p-3 bg-blue-100 text-blue-600 rounded-full"><Users className="w-6 h-6" /></div>
                        <div>
                            <p className="text-xs text-muted-foreground uppercase tracking-wider">Porsi</p>
                            <p className="font-semibold text-lg text-stone-800">{recipe.servings} Orang</p>
                        </div>
                    </div>
                    <div className="w-px h-12 bg-stone-200 hidden md:block" />
                    <div className="flex items-center gap-3">
                        <div className="p-3 bg-green-100 text-green-600 rounded-full"><Utensils className="w-6 h-6" /></div>
                        <div>
                            <p className="text-xs text-muted-foreground uppercase tracking-wider">Level</p>
                            <p className="font-semibold text-lg text-stone-800">{recipe.difficulty}</p>
                        </div>
                    </div>
                </div>

                <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Ingredients Column */}
                    <div className="lg:col-span-5 space-y-8">
                        <div className="sticky top-24">
                            <h3 className="text-2xl font-serif font-bold mb-6 text-stone-800 border-b-2 border-stone-200 pb-2 inline-block">
                                Bahan-Bahan
                            </h3>
                            <ul className="space-y-4">
                                {recipe.ingredients?.map((item, index) => {
                                    if (item.trim().startsWith("##")) {
                                        return (
                                            <h4 key={index} className="text-lg font-bold text-stone-700 mt-6 pt-2 first:mt-0">
                                                {item.replace(/##/g, "").trim()}
                                            </h4>
                                        );
                                    }
                                    return (
                                        <li key={index} className="flex items-start gap-3 group">
                                            <span className="w-2 h-2 mt-2 rounded-full bg-orange-400 group-hover:bg-orange-600 transition-colors flex-shrink-0" />
                                            <span className="text-stone-700 leading-relaxed group-hover:text-stone-900 transition-colors">
                                                {item}
                                            </span>
                                        </li>
                                    );
                                })}
                            </ul>

                            {/* Tips Section for Desktop Layout */}
                            {recipe.tips && recipe.tips.length > 0 && (
                                <div className="mt-10 p-6 bg-yellow-50 border border-yellow-200 rounded-xl shadow-sm">
                                    <h4 className="font-serif font-bold text-lg mb-3 flex items-center gap-2 text-yellow-800">
                                        <Lightbulb className="w-5 h-5" /> Tips Rahasia Chef
                                    </h4>
                                    <ul className="space-y-3">
                                        {recipe.tips.map((tip, idx) => (
                                            <li key={idx} className="text-sm text-yellow-900/80 italic flex gap-2">
                                                <span className="font-bold">•</span>
                                                {tip}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Instructions Column */}
                    <div className="lg:col-span-7">
                        <h3 className="text-2xl font-serif font-bold mb-8 text-stone-800 border-b-2 border-stone-200 pb-2 inline-block">
                            Cara Memasak
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
                                                <h4 className="text-lg font-bold text-stone-800 mb-2">{stepTitle}</h4>
                                            )}
                                            <p className="text-lg text-stone-600 leading-relaxed font-light group-hover:text-stone-800 transition-colors">
                                                {isHeaderStep ? stepText : step}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
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

// Simple workaround for framer motion elements in server component (if needed, usually use context or client wrapper)
function motion_h1({ children, className }: { children: React.ReactNode, className: string }) {
    return <h1 className={className}>{children}</h1>;
}
