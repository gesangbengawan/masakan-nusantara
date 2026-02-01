import RecipeEditor from "@/components/admin/RecipeEditor";
import { supabase } from "@/lib/supabase";
import { Recipe } from "@/types/recipe";

interface Props {
    params: Promise<{ id: string }>;
}

export default async function EditRecipePage({ params }: Props) {
    const { id } = await params;

    const { data: recipe } = await supabase
        .from("recipes")
        .select("*")
        .eq("id", id)
        .single();

    if (!recipe) {
        return <div>Resep tidak ditemukan</div>;
    }

    return (
        <div className="min-h-screen bg-background p-8">
            <div className="max-w-4xl mx-auto mb-8">
                <h1 className="text-3xl font-bold">Edit Resep</h1>
            </div>
            <RecipeEditor initialData={recipe as Recipe} />
        </div>
    );
}
