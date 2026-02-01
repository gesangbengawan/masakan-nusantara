import RecipeEditor from "@/components/admin/RecipeEditor";

export default function AddRecipePage() {
    return (
        <div className="min-h-screen bg-background p-8">
            <div className="max-w-4xl mx-auto mb-8">
                <h1 className="text-3xl font-bold">Tambah Resep Baru</h1>
            </div>
            <RecipeEditor />
        </div>
    );
}
