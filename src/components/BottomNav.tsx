"use client";

import { Home, Search, Heart, ChefHat } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export function BottomNav() {
    const pathname = usePathname();

    const isActive = (path: string) => {
        if (path === "/" && pathname === "/") return true;
        if (path !== "/" && pathname.startsWith(path)) return true;
        return false;
    };

    const navItems = [
        { href: "/", icon: Home, label: "Beranda" },
        { href: "/resep", icon: Search, label: "Cari" },
        { href: "/favorit", icon: Heart, label: "Favorit" }, // Nanti diimplementasi
        { href: "/tentang", icon: ChefHat, label: "Tentang" },
    ];

    return (
        <div className="fixed bottom-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="bg-black/80 backdrop-blur-md border border-white/10 text-white shadow-2xl rounded-full px-6 py-3 flex gap-8 items-center pointer-events-auto"
            >
                {navItems.map((item) => {
                    const active = isActive(item.href);
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
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
