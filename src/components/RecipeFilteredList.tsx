"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Clock, Flame } from "lucide-react";
import { Recipe } from "@/types/recipe"; // Ensure type exists

const PROVINCES = [
    "Semua",
    "Sumatera Barat",
    "Aceh",
    "Sumatera Selatan",
    "DKI Jakarta",
    "Jawa Barat",
    "DI Yogyakarta",
    "Jawa Timur",
    "Bali"
];

export function RecipeFilteredList({ initialRecipes }: { initialRecipes: Recipe[] }) {
    const [filter, setFilter] = useState("Semua");

    const filtered = filter === "Semua"
        ? initialRecipes
        : initialRecipes.filter(r => r.province === filter);

    return (
        <>
            <div className="flex gap-3 overflow-x-auto pb-6 mb-8 scrollbar-hide">
                {PROVINCES.map(p => (
                    <button
                        key={p}
                        onClick={() => setFilter(p)}
                        className={`px-5 py-2 rounded-full whitespace-nowrap transition-all border ${filter === p
                                ? "bg-black text-white border-black"
                                : "bg-white text-stone-600 border-stone-200 hover:border-black"
                            }`}
                    >
                        {p}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filtered.map((recipe) => (
                    <Link href={`/resep/${recipe.slug}`} key={recipe.id} className="group">
                        <article className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-stone-100 h-full flex flex-col">
                            <div className="relative h-64 overflow-hidden">
                                <Image
                                    src={recipe.image || "/images/hero.png"}
                                    alt={recipe.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-stone-800">
                                    {recipe.province}
                                </div>
                            </div>
                            <div className="p-6 flex flex-col flex-grow">
                                <h2 className="font-serif font-bold text-xl mb-3 group-hover:text-amber-700 transition-colors">
                                    {recipe.title}
                                </h2>
                                <p className="text-stone-500 text-sm line-clamp-2 mb-4 flex-grow">
                                    {recipe.description}
                                </p>
                                <div className="flex items-center gap-4 text-xs text-stone-400 font-medium pt-4 border-t border-stone-100">
                                    <div className="flex items-center gap-1">
                                        <Clock className="w-4 h-4" /> {recipe.cookTime}
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Flame className="w-4 h-4" /> {recipe.difficulty}
                                    </div>
                                </div>
                            </div>
                        </article>
                    </Link>
                ))}
            </div>

            {filtered.length === 0 && (
                <div className="text-center py-20 text-stone-400">
                    Belum ada resep untuk provinsi ini dalam koleksi Premium kami.
                </div>
            )}
        </>
    );
}
