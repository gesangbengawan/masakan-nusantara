"use server";

import { supabaseAdmin } from "@/lib/supabase";
import { Recipe } from "@/types/recipe";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

// Helper to check auth
async function checkAdmin() {
    const cookieStore = await cookies();
    const session = cookieStore.get("admin_session");
    if (!session) {
        throw new Error("Unauthorized");
    }
}

export async function upsertRecipe(recipe: Partial<Recipe>) {
    await checkAdmin();

    // If ID is present but empty string, delete it to let DB generate UUID (for insert)
    // Actually, for insert we usually don't pass ID unless we want to force it.
    // Supabase upsert needs ID to update, or unique column.

    if (!recipe.id) {
        delete recipe.id;
    }

    const { data, error } = await supabaseAdmin
        .from("recipes")
        .upsert(recipe)
        .select()
        .single();

    if (error) {
        throw new Error(error.message);
    }

    revalidatePath("/admin");
    revalidatePath("/resep");
    revalidatePath("/");

    return { success: true, data };
}

export async function deleteRecipe(id: string) {
    await checkAdmin();

    const { error } = await supabaseAdmin
        .from("recipes")
        .delete()
        .eq("id", id);

    if (error) {
        throw new Error(error.message);
    }

    revalidatePath("/admin");
    return { success: true };
}
