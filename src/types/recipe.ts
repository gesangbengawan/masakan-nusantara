export interface Recipe {
    id: string;
    slug: string;
    title: string;
    description: string;
    image: string;
    prepTime: string;
    cookTime: string;
    servings: number;
    difficulty: "Mudah" | "Sedang" | "Sulit";
    province?: string;
    ingredients: string[];
    instructions: string[];
    tips?: string[];
}
