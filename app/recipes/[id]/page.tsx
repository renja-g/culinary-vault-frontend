import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
} from '@/components/ui/card';
import { notFound } from 'next/navigation';
import { fetchRecipeDetails } from "@/gql/queries/fetchRecipeDetails";
import RecipeOverview from '@/components/RecipeOverview';
import IngredientsSection from '@/components/IngredientsSection';
import StepsSection from '@/components/StepsSection';

export default async function RecipePage({
    params,
}: {
    params: Promise<{ id: string }>
}) {
    const { id } = await params;
    const decodedId = decodeURIComponent(id);
    const data = await fetchRecipeDetails(decodedId);
    const node = data?.data?.recipe;
    if (!node || node.__typename !== "recipe") {
        return notFound();
    }
    const recipe = node;
    
    return (
        <main className="container mx-auto py-10 px-4 md:px-6">
            <Link href="/" className="flex items-center text-muted-foreground mb-6 hover:text-primary">
                <ChevronLeft className="w-4 h-4 mr-1" />
                Back to recipes
            </Link>
            <Card className="w-full mb-8">
                <CardHeader className="pb-2">
                    <CardTitle className="text-3xl font-bold">{recipe.name}</CardTitle>
                </CardHeader>
                <CardContent>
                    <RecipeOverview prepTime={recipe.prep_time} cookTime={recipe.cook_time} servings={recipe.servings} />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                        <IngredientsSection ingredients={recipe.recipe_ingredientCollection} />
                        <StepsSection 
                            steps={recipe.stepCollection} 
                            recipeIngredients={recipe.recipe_ingredientCollection?.edges} 
                        />
                    </div>
                </CardContent>
            </Card>
        </main>
    )
}
