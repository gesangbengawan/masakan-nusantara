import { supabase } from "@/lib/supabase";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Plus, Edit, Trash } from "lucide-react";

export const revalidate = 0;

export default async function AdminDashboard() {
    const { data: recipes } = await supabase
        .from("recipes")
        .select("*")
        .order("created_at", { ascending: false });

    return (
        <div className="min-h-screen bg-background p-8">
            <div className="max-w-6xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold">Admin Panel</h1>
                    <Link href="/admin/resep/baru">
                        <Button>
                            <Plus className="mr-2 h-4 w-4" /> Tambah Resep
                        </Button>
                    </Link>
                </div>

                <div className="bg-card rounded-xl border border-border overflow-hidden shadow-sm">
                    <table className="w-full text-left">
                        <thead className="bg-muted">
                            <tr>
                                <th className="p-4 font-medium">Judul</th>
                                <th className="p-4 font-medium">Slug</th>
                                <th className="p-4 font-medium">Level</th>
                                <th className="p-4 font-medium text-right">Aksi</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border">
                            {recipes?.map((recipe) => (
                                <tr key={recipe.id} className="hover:bg-muted/50">
                                    <td className="p-4 font-medium">{recipe.title}</td>
                                    <td className="p-4 text-muted-foreground">{recipe.slug}</td>
                                    <td className="p-4">
                                        <span
                                            className={`inline-flex px-2 py-1 rounded-full text-xs font-bold ${recipe.difficulty === "Mudah"
                                                    ? "bg-green-100 text-green-700"
                                                    : recipe.difficulty === "Sedang"
                                                        ? "bg-yellow-100 text-yellow-700"
                                                        : "bg-red-100 text-red-700"
                                                }`}
                                        >
                                            {recipe.difficulty}
                                        </span>
                                    </td>
                                    <td className="p-4 text-right space-x-2">
                                        <Link href={`/admin/resep/${recipe.id}`}>
                                            <Button variant="outline" size="sm">
                                                <Edit className="h-4 w-4" />
                                            </Button>
                                        </Link>
                                        {/* Delete button would go here (requires client component for interactivity) */}
                                    </td>
                                </tr>
                            ))}
                            {(!recipes || recipes.length === 0) && (
                                <tr>
                                    <td colSpan={4} className="p-8 text-center text-muted-foreground">
                                        Belum ada resep. Silakan tambah baru.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
