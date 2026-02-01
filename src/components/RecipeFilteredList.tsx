"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Clock, Flame } from "lucide-react";
import { Recipe } from "@/types/recipe"; // Ensure type exists

const PROVINCES = [
    "Semua",
    "Aceh", "Sumatera Utara", "Sumatera Barat", "Riau", "Kepulauan Riau", "Jambi", "Sumatera Selatan", "Bengkulu", "Lampung", "Bangka Belitung",
    "DKI Jakarta", "Jawa Barat", "Banten", "Jawa Tengah", "DI Yogyakarta", "Jawa Timur",
    "Bali", "Nusa Tenggara Barat", "Nusa Tenggara Timur",
    "Kalimantan Barat", "Kalimantan Tengah", "Kalimantan Selatan", "Kalimantan Timur", "Kalimantan Utara",
    "Sulawesi Utara", "Gorontalo", "Sulawesi Tengah", "Sulawesi Barat", "Sulawesi Selatan", "Sulawesi Tenggara",
    "Maluku", "Maluku Utara", "Papua", "Papua Barat", "Papua Pegunungan"
];

export function RecipeFilteredList({ initialRecipes }: { initialRecipes: Recipe[] }) {
    const [filter, setFilter] = useState("Semua");
    const [search, setSearch] = useState("");

    const filtered = initialRecipes.filter(r => {
        const matchProvince = filter === "Semua" ? true : r.province === filter;
        const matchSearch = r.title.toLowerCase().includes(search.toLowerCase()) ||
            r.description.toLowerCase().includes(search.toLowerCase());
        return matchProvince && matchSearch;
    });

    return (
        <>
            {/* Search & Filter Container */}
            <div className="mb-10 space-y-6">
                {/* Search Bar */}
                <div className="relative max-w-xl mx-auto">
                    <input
                        type="text"
                        placeholder="Cari resep otentik (misal: Rendang, Soto, Ayam)..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full px-6 py-4 rounded-full border border-stone-200 shadow-sm focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none text-lg bg-white bg-opacity-80 backdrop-blur-sm transition-all"
                    />
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-400">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                </div>

                {/* Filter Scrollable */}
                <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide justify-start md:justify-center">
                    {PROVINCES.map(p => (
                        <button
                            key={p}
                            onClick={() => setFilter(p)}
                            className={`px-5 py-2 rounded-full whitespace-nowrap transition-all border font-medium ${filter === p
                                ? "bg-black text-white border-black shadow-md"
                                : "bg-white text-stone-600 border-stone-200 hover:border-black hover:bg-stone-50"
                                }`}
                        >
                            {p}
                        </button>
                    ))}
                </div>
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
