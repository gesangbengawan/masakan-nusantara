"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Clock, Flame, ArrowRight } from "lucide-react";
import { Recipe } from "@/types/recipe"; // Ensure type exists

const PROVINCES = [
    "Semua",
    "Aceh", "Sumatera Utara", "Sumatera Barat", "Riau", "Kepulauan Riau", "Jambi", "Sumatera Selatan", "Bengkulu", "Lampung", "Bangka Belitung",
    "DKI Jakarta", "Jawa Barat", "Banten", "Jawa Tengah", "DI Yogyakarta", "Jawa Timur",
    "Bali", "Nusa Tenggara Barat", "Nusa Tenggara Timur",
    "Kalimantan Barat", "Kalimantan Tengah", "Kalimantan Selatan", "Kalimantan Timur", "Kalimantan Utara",
    "Sulawesi Utara", "Gorontalo", "Sulawesi Tengah", "Sulawesi Barat", "Sulawesi Selatan", "Sulawesi Tenggara",
    "Maluku", "Maluku Utara", "Papua"
];

export function RecipeFilteredList({ initialRecipes }: { initialRecipes: Recipe[] }) {
    const [filter, setFilter] = useState("Semua");
    const [search, setSearch] = useState("");
    const [isExpanded, setIsExpanded] = useState(false); // State for minimize/maximize

    const filtered = initialRecipes.filter(r => {
        const matchProvince = filter === "Semua"
            ? true
            : filter === "Papua"
                ? r.province.includes("Papua") // Any province containing "Papua" (Barat, Pegunungan, etc)
                : r.province === filter;

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

                {/* Province Filter Section */}
                <div className="max-w-4xl mx-auto">
                    <div className="flex justify-between items-center mb-4 px-2">
                        <h3 className="font-serif text-xl font-bold text-amber-500">Jelajahi Provinsi</h3>
                        <button
                            onClick={() => setIsExpanded(!isExpanded)}
                            className="text-amber-600 hover:text-amber-800 text-lg font-bold flex items-center gap-1 transition-colors"
                        >
                            {isExpanded ? "Sembunyikan" : "Lihat Semua"}
                            <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 transition-transform ${isExpanded ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                    </div>

                    {/* Collapsible Grid (Refined Panel) */}
                    <div className={`transition-all duration-500 ease-in-out overflow-hidden ${isExpanded ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"}`}>
                        <div className="bg-stone-50/50 backdrop-blur-sm p-6 rounded-2xl border border-stone-100 shadow-inner mb-6">
                            <div className="flex flex-wrap gap-2 justify-center">
                                {PROVINCES.map(p => (
                                    <button
                                        key={p}
                                        onClick={() => setFilter(p)}
                                        className={`px-4 py-2 rounded-lg text-sm transition-all duration-200 border relative overflow-hidden group ${filter === p
                                            ? "bg-amber-600 text-white border-amber-600 shadow-md font-bold"
                                            : "bg-white text-stone-600 border-stone-200 hover:border-amber-400 hover:text-amber-700 font-medium"
                                            }`}
                                    >
                                        <span className="relative z-10">{p}</span>
                                        {filter !== p && (
                                            <span className="absolute inset-0 bg-amber-50 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-200 ease-out z-0"></span>
                                        )}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                    {!isExpanded && (
                        <div className="text-center text-xs text-stone-400 mt-2">
                            ...klik "Lihat Semua" untuk provinsi lainnya
                        </div>
                    )}
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
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                                {/* Content Overlay */}
                                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 via-black/60 to-transparent pt-12 transform transition-all duration-300">
                                    {/* Title Always Visible */}
                                    <div className="transform transition-transform duration-300 group-hover:-translate-y-2">
                                        <span className="inline-block px-2 py-1 mb-2 text-xs font-semibold tracking-wider text-amber-400 border border-amber-400/30 rounded-full bg-black/30 backdrop-blur-sm">
                                            {recipe.province}
                                        </span>
                                        <h3 className="text-xl font-bold text-white font-serif leading-tight mb-1">
                                            {recipe.title}
                                        </h3>

                                        {/* Meta Always Visible */}
                                        <div className="flex items-center gap-4 text-xs text-white/80 mt-2">
                                            <span className="flex items-center gap-1">
                                                <Clock className="w-3 h-3 text-amber-500" /> {recipe.cookTime}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <Flame className="w-3 h-3 text-amber-500" /> {recipe.difficulty}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Description Revealed on Hover */}
                                    <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-out">
                                        <div className="overflow-hidden">
                                            <p className="text-sm text-white/70 mt-3 line-clamp-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 font-light leading-relaxed">
                                                {recipe.description}
                                            </p>
                                            <div className="mt-4 flex items-center text-amber-400 text-xs font-medium tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                                                Lihat Resep Lengkap <ArrowRight className="w-3 h-3 ml-1" />
                                            </div>
                                        </div>
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
