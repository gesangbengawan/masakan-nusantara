"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Clock, Flame, Trash2 } from "lucide-react";
import { createClient } from "@supabase/supabase-js";
import { Recipe } from "@/types/recipe";

// Client-side fetch for favorites is simpler than passing all data from server
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

export default function FavoritesPage() {
    const [favorites, setFavorites] = useState<Recipe[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchFavorites() {
            const stored = localStorage.getItem('favorites');
            if (!stored) {
                setLoading(false);
                return;
            }

            const slugs = JSON.parse(stored);
            if (slugs.length === 0) {
                setLoading(false);
                return;
            }

            // Fetch recipes matching slugs
            const { data, error } = await supabase
                .from('recipes')
                .select('*')
                .in('slug', slugs);

            if (data) {
                setFavorites(data as Recipe[]);
            }
            setLoading(false);
        }

        fetchFavorites();
    }, []);

    const removeFavorite = (slug: string, e: React.MouseEvent) => {
        e.preventDefault();
        const stored = localStorage.getItem('favorites');
        if (stored) {
            let favs = JSON.parse(stored);
            favs = favs.filter((s: string) => s !== slug);
            localStorage.setItem('favorites', JSON.stringify(favs));
            setFavorites(favorites.filter(r => r.slug !== slug));
        }
    };

    return (
        <main className="min-h-screen bg-stone-50 pb-32">
            <div className="max-w-4xl mx-auto px-6 py-12">
                <div className="flex items-center gap-4 mb-8">
                    <Link href="/" className="p-2 rounded-full bg-white border border-stone-200 hover:bg-stone-100 transition-colors">
                        <ArrowLeft className="w-6 h-6 text-stone-600" />
                    </Link>
                    <h1 className="text-3xl font-serif font-bold text-stone-800">Resep Favorit Saya</h1>
                </div>

                {loading ? (
                    <div className="text-center py-20 text-stone-400 animate-pulse">Memuat favorit...</div>
                ) : favorites.length === 0 ? (
                    <div className="text-center py-20">
                        <div className="text-6xl mb-4">💔</div>
                        <h2 className="text-xl font-bold text-stone-600 mb-2">Belum ada favorit</h2>
                        <p className="text-stone-400 mb-6">Simpan resep yang Anda suka untuk dibaca nanti.</p>
                        <Link href="/resep" className="inline-block px-6 py-3 bg-amber-500 text-white rounded-full font-bold shadow-lg hover:grad-to-r hover:from-amber-600 hover:to-orange-600 transition-all">
                            Jelajahi Resep
                        </Link>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {favorites.map((recipe) => (
                            <Link href={`/resep/${recipe.slug}`} key={recipe.id} className="group relative">
                                <article className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-stone-100 flex h-32 md:h-40">
                                    <div className="relative w-32 md:w-40 h-full shrink-0">
                                        <Image
                                            src={recipe.image || "/images/hero.png"}
                                            alt={recipe.title}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="p-4 flex flex-col justify-between flex-grow">
                                        <div>
                                            <span className="text-[10px] font-bold tracking-wider text-amber-500 uppercase mb-1 block">
                                                {recipe.province}
                                            </span>
                                            <h3 className="font-serif font-bold text-stone-800 line-clamp-2 leading-tight group-hover:text-amber-700 transition-colors">
                                                {recipe.title}
                                            </h3>
                                        </div>
                                        <div className="flex items-center justify-between text-xs text-stone-400 mt-2">
                                            <div className="flex items-center gap-3">
                                                <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {recipe.cookTime}</span>
                                                <span className="flex items-center gap-1"><Flame className="w-3 h-3" /> {recipe.difficulty}</span>
                                            </div>
                                            <button
                                                onClick={(e) => removeFavorite(recipe.slug, e)}
                                                className="p-2 text-stone-300 hover:text-red-500 transition-colors z-20"
                                                title="Hapus dari favorit"
                                            >
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>
                                </article>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </main>
    );
}
