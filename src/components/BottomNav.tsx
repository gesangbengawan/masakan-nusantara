"use client";

import { Home, Search, Heart, ChefHat, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";

export function BottomNav() {
    const pathname = usePathname();
    const router = useRouter();

    const isActive = (path: string) => {
        if (path === "/" && pathname === "/") return true;
        if (path !== "/" && pathname.startsWith(path)) return true;
        return false;
    };

    const navItems = [
        { name: "Home", icon: Home, path: "/" },
        { name: "Jelajahi", icon: Search, path: "/resep" },
        { name: "Favorit", icon: Heart, path: "/favorit" },
        { name: "Tentang", icon: ChefHat, path: "/tentang" },
    ];

    return (
        <div className="fixed bottom-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="bg-black/80 backdrop-blur-md border border-white/10 text-white shadow-2xl rounded-full px-6 py-3 flex gap-8 items-center pointer-events-auto"
            >
                {/* Back Button */}
                <button
                    onClick={() => router.back()}
                    className="flex flex-col items-center gap-1 transition-colors relative group text-white/60 hover:text-white"
                    aria-label="Kembali"
                >
                    <div className="p-2 rounded-full transition-all">
                        <ArrowLeft className="w-5 h-5" />
                    </div>
                </button>

                {navItems.map((item) => {
                    const active = isActive(item.path);
                    return (
                        <Link
                            key={item.path}
                            href={item.path}
                            className={`flex flex-col items-center gap-1 transition-colors relative group ${active ? "text-primary-foreground" : "text-white/60 hover:text-white"}`}
                        >
                            <div className={`p-2 rounded-full transition-all ${active ? "bg-white/20" : ""}`}>
                                <item.icon className={`w-5 h-5 ${active ? "stroke-[3px]" : ""}`} />
                            </div>
                            {/* Aktif indikator dot */}
                            {active && (
                                <motion.div
                                    layoutId="nav-dot"
                                    className="absolute -bottom-1 w-1 h-1 bg-white rounded-full"
                                />
                            )}
                        </Link>
                    );
                })}
            </motion.div>
        </div>
    );
}
