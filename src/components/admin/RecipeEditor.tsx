"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { supabase } from "@/lib/supabase";
import { Recipe } from "@/types/recipe";
import { Trash, Plus } from "lucide-react";

interface RecipeEditorProps {
    initialData?: Recipe | null;
}

export default function RecipeEditor({ initialData }: RecipeEditorProps) {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState<Partial<Recipe>>(
        initialData || {
            slug: "",
            title: "",
            description: "",
            image: "/images/hero.png", // Default placeholder
            prepTime: "",
            cookTime: "",
            servings: 2,
            difficulty: "Mudah",
            ingredients: [],
            instructions: [],
        }
    );

    const [ingredients, setIngredients] = useState<string[]>(initialData?.ingredients || []);
    const [instructions, setInstructions] = useState<string[]>(initialData?.instructions || []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Ingredients handlers
    const addIngredient = () => setIngredients([...ingredients, ""]);
    const updateIngredient = (index: number, value: string) => {
        const newIngredients = [...ingredients];
        newIngredients[index] = value;
        setIngredients(newIngredients);
    };
    const removeIngredient = (index: number) => {
        setIngredients(ingredients.filter((_, i) => i !== index));
    };

    // Instructions handlers
    const addInstruction = () => setInstructions([...instructions, ""]);
    const updateInstruction = (index: number, value: string) => {
        const newInstructions = [...instructions];
        newInstructions[index] = value;
        setInstructions(newInstructions);
    };
    const removeInstruction = (index: number) => {
        setInstructions(instructions.filter((_, i) => i !== index));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        const recipeData = {
            ...formData,
            ingredients,
            instructions,
        };

        let error;

        if (initialData?.id) {
            const { error: updateError } = await supabase
                .from("recipes")
                .update(recipeData)
                .eq("id", initialData.id);
            error = updateError;
        } else {
            const { error: insertError } = await supabase
                .from("recipes")
                .insert([recipeData]);
            error = insertError;
        }

        setLoading(false);

        if (error) {
            alert("Error: " + error.message);
        } else {
            router.push("/admin");
            router.refresh();
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-8 max-w-4xl mx-auto pb-20">
            <div className="space-y-4 bg-card p-6 rounded-lg border border-border">
                <h2 className="text-xl font-bold border-b pb-2">Informasi Dasar</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium mb-1">Judul Resep</label>
                        <input
                            required
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            className="w-full p-2 rounded bg-background border border-border"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Slug (URL)</label>
                        <input
                            required
                            name="slug"
                            value={formData.slug}
                            onChange={handleChange}
                            className="w-full p-2 rounded bg-background border border-border"
                        />
                    </div>
                    <div className="md:col-span-2">
                        <label className="block text-sm font-medium mb-1">Deskripsi Singkat</label>
                        <textarea
                            required
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            rows={3}
                            className="w-full p-2 rounded bg-background border border-border"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">URL Gambar</label>
                        <input
                            required
                            name="image"
                            value={formData.image}
                            onChange={handleChange}
                            className="w-full p-2 rounded bg-background border border-border"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Tingkat Kesulitan</label>
                        <select
                            name="difficulty"
                            value={formData.difficulty}
                            onChange={handleChange}
                            className="w-full p-2 rounded bg-background border border-border"
                        >
                            <option value="Mudah">Mudah</option>
                            <option value="Sedang">Sedang</option>
                            <option value="Sulit">Sulit</option>
                        </select>
                    </div>
                    <div className="grid grid-cols-3 gap-4 md:col-span-2">
                        <div>
                            <label className="block text-sm font-medium mb-1">Waktu Persiapan</label>
                            <input name="prepTime" value={formData.prepTime} onChange={handleChange} className="w-full p-2 rounded bg-background border border-border" placeholder="e.g. 10 menit" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Waktu Masak</label>
                            <input name="cookTime" value={formData.cookTime} onChange={handleChange} className="w-full p-2 rounded bg-background border border-border" placeholder="e.g. 1 jam" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Porsi</label>
                            <input type="number" name="servings" value={formData.servings} onChange={handleChange} className="w-full p-2 rounded bg-background border border-border" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="space-y-4 bg-card p-6 rounded-lg border border-border">
                <h2 className="text-xl font-bold border-b pb-2">Bahan-Bahan</h2>
                {ingredients.map((ing, idx) => (
                    <div key={idx} className="flex gap-2">
                        <input
                            value={ing}
                            onChange={(e) => updateIngredient(idx, e.target.value)}
                            className="flex-grow p-2 rounded bg-background border border-border"
                            placeholder="Contoh: 500g Daging Sapi"
                        />
                        <Button type="button" variant="outline" size="icon" onClick={() => removeIngredient(idx)}>
                            <Trash className="w-4 h-4 text-red-500" />
                        </Button>
                    </div>
                ))}
                <Button type="button" variant="secondary" onClick={addIngredient} className="w-full">
                    <Plus className="w-4 h-4 mr-2" /> Tambah Bahan
                </Button>
            </div>

            <div className="space-y-4 bg-card p-6 rounded-lg border border-border">
                <h2 className="text-xl font-bold border-b pb-2">Langkah Memasak</h2>
                {instructions.map((inst, idx) => (
                    <div key={idx} className="flex gap-2 items-start">
                        <span className="mt-2 font-bold text-muted-foreground w-6">{idx + 1}.</span>
                        <textarea
                            value={inst}
                            onChange={(e) => updateInstruction(idx, e.target.value)}
                            className="flex-grow p-2 rounded bg-background border border-border"
                            rows={2}
                            placeholder="Contoh: Panaskan minyak..."
                        />
                        <Button type="button" variant="outline" size="icon" onClick={() => removeInstruction(idx)}>
                            <Trash className="w-4 h-4 text-red-500" />
                        </Button>
                    </div>
                ))}
                <Button type="button" variant="secondary" onClick={addInstruction} className="w-full">
                    <Plus className="w-4 h-4 mr-2" /> Tambah Langkah
                </Button>
            </div>

            <div className="flex justify-end gap-4">
                <Button type="button" variant="outline" onClick={() => router.back()}>Batal</Button>
                <Button type="submit" disabled={loading}>{loading ? "Menyimpan..." : "Simpan Resep"}</Button>
            </div>
        </form>
    );
}
