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
    ingredients: string[];
    instructions: string[];
}
