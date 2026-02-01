"use client";

import Image from "next/image";
import Link from "next/link";
import { Clock, Users } from "lucide-react";
import { Recipe } from "@/types/recipe";
import { cn } from "@/lib/utils";

interface RecipeCardProps {
    recipe: Recipe;
    className?: string;
}

export function RecipeCard({ recipe, className }: RecipeCardProps) {
    return (
        <Link
            href={`/resep/${recipe.slug}`}
            className={cn(
                "group relative flex flex-col overflow-hidden rounded-xl bg-card border border-border/50 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 block",
                className
            )}
        >
            <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                    src={recipe.image}
                    alt={recipe.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-xl font-serif font-bold text-foreground mb-2 line-clamp-1 group-hover:text-primary transition-colors">
                    {recipe.title}
                </h3>
                <p className="text-muted-foreground text-sm line-clamp-2 mb-4 flex-grow">
                    {recipe.description}
                </p>
                <div className="flex items-center justify-between text-xs text-muted-foreground mt-auto">
                    <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{recipe.prepTime}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        <span>{recipe.servings} porsi</span>
                    </div>
                </div>
            </div>
        </Link>
    );
}
