"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowLeft, Search } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
    const router = useRouter();
    const [scrolled, setScrolled] = useState(false);

    // Smart Back Logic: Show back button if not on home
    const showBack = pathname !== "/";

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleBack = () => {
        // Logika "Smart Back": Kembali ke history sebelumnya, bukan paksa ke home
        // Kecuali jika history kosong (akses langsung link), maka ke home.
        if (window.history.length > 2) {
            router.back();
        } else {
            router.push("/");
        }
    };

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? "bg-background/80 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
                    }`}
            >
                <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
                    {/* LEFT: Smart Back or Hamburger */}
                    <div className="flex items-center gap-4">
                        {showBack ? (
                            <button
                                onClick={handleBack}
                                className="p-2 rounded-full bg-black/5 hover:bg-black/10 dark:bg-white/10 dark:hover:bg-white/20 transition-colors"
                            >
                                <ArrowLeft className="w-5 h-5" />
                            </button>
                        ) : (
                            <button
                                onClick={() => setIsOpen(true)}
                                className="p-2 -ml-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
                            >
                                <Menu className="w-6 h-6" />
                            </button>
                        )}

                        <Link href="/" className="font-serif font-bold text-xl tracking-tight">
                            Masakan<span className="text-primary">Nusantara</span>
                        </Link>
                    </div>

                    {/* RIGHT: Search icon */}
                    <Link href="/resep" className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10">
                        <Search className="w-5 h-5" />
                    </Link>
                </div>
            </motion.nav>

            {/* Full Screen Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-background/95 backdrop-blur-xl flex flex-col justify-center items-center"
                    >
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-6 left-6 p-2 rounded-full bg-black/5 hover:bg-black/10 dark:bg-white/10 transition-colors"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        <div className="space-y-8 text-center">
                            <Link href="/" onClick={() => setIsOpen(false)} className="block text-3xl font-serif font-bold hover:text-primary transition-colors">
                                Beranda
                            </Link>
                            <Link href="/resep" onClick={() => setIsOpen(false)} className="block text-3xl font-serif font-bold hover:text-primary transition-colors">
                                Jelajah Resep
                            </Link>
                            <Link href="/tentang" onClick={() => setIsOpen(false)} className="block text-3xl font-serif font-bold hover:text-primary transition-colors">
                                Tentang Kami
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
