"use client";

import React, { useEffect, useState } from "react";
import { Heart } from "lucide-react";

export function FavoriteButton({ slug }: { slug: string }) {
    const [isFavorite, setIsFavorite] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const stored = localStorage.getItem('favorites');
        if (stored) {
            const favs = JSON.parse(stored);
            if (favs.includes(slug)) setIsFavorite(true);
        }
    }, [slug]);

    const toggleFavorite = () => {
        const stored = localStorage.getItem('favorites');
        let favs = stored ? JSON.parse(stored) : [];

        if (isFavorite) {
            favs = favs.filter((s: string) => s !== slug);
        } else {
            favs.push(slug);
        }

        localStorage.setItem('favorites', JSON.stringify(favs));
        setIsFavorite(!isFavorite);
    };

    if (!mounted) return null; // Avoid hydration mismatch

    return (
        <button
            onClick={toggleFavorite}
            className="mb-4 inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/30 text-white hover:bg-white/20 transition-all shadow-lg group"
        >
            <Heart className={`w-6 h-6 transition-all duration-300 ${isFavorite ? "fill-red-500 text-red-500 scale-110" : "text-white group-hover:scale-110"}`} />
            <span className="font-medium tracking-wide">{isFavorite ? "Tersimpan" : "Simpan Resep"}</span>
        </button>
    );
}
