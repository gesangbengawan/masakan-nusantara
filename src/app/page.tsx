import { HeroSection } from "@/components/HeroSection";
import { RecipeCard } from "@/components/RecipeCard";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { supabase } from "@/lib/supabase";
import { Recipe } from "@/types/recipe";

export default async function Home() {
  const { data: featuredRecipes } = await supabase
    .from('recipes')
    .select('*')
    .limit(3);

  const recipes = featuredRecipes || [];

  return (
    <main className="min-h-screen bg-background">
      <HeroSection />

      {/* Featured Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <span className="text-primary font-medium tracking-wider text-sm uppercase">Pilihan Chef</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mt-2">Resep Terpopuler</h2>
          </div>
          <Link href="/resep">
            <Button variant="ghost" className="group">
              Lihat Semuanya
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe as Recipe} />
          ))}
        </div>
      </section>

      {/* Highlight/Teaser Section (simulating a "Why Us" or "Ebook features") */}
      <section className="bg-card py-20 border-y border-border/50">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif font-bold mb-6">Mengapa Masakan Nusantara?</h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
            Kumpulan resep ini dikurasi khusus untuk membawa cita rasa otentik Indonesia ke dapur Anda,
            lengkap dengan tips rahasia agar masakan Anda selalu berhasil.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-background rounded-lg border border-border/30">
              <div className="text-4xl mb-4">📸</div>
              <h3 className="font-bold text-lg mb-2">Visual Realistis</h3>
              <p className="text-sm text-muted-foreground">Setiap resep dilengkapi foto berkualitas tinggi yang menggugah selera.</p>
            </div>
            <div className="p-6 bg-background rounded-lg border border-border/30">
              <div className="text-4xl mb-4">🌶️</div>
              <h3 className="font-bold text-lg mb-2">Bumbu Otentik</h3>
              <p className="text-sm text-muted-foreground">Takaran bumbu yang pas sesuai warisan turun temurun.</p>
            </div>
            <div className="p-6 bg-background rounded-lg border border-border/30">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="font-bold text-lg mb-2">Akses Mudah</h3>
              <p className="text-sm text-muted-foreground">Dapat diakses kapan saja melalui website dan aplikasi (segera).</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 text-center text-sm text-muted-foreground border-t border-border">
        <p>&copy; {new Date().getFullYear()} Masakan Nusantara Ebook. Dibuat dengan cinta untuk kuliner Indonesia.</p>
      </footer>
    </main>
  );
}
