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
import { Metadata } from 'next';
import Image from 'next/image';

type Props = {
    params: Promise<{ id: string }>
}

export async function generateMetadata(
    { params }: Props,
  ): Promise<Metadata> {
    const { id } = await params
    const decodedId = decodeURIComponent(id);
    const data = await fetchRecipeDetails(decodedId);
    const node = data?.data?.recipe;
    if (!node || node.__typename !== "recipe") {
        return {};
    }
    const recipe = node;
    return {
        title: recipe.name
    }
  }
   

export default async function RecipePage({
    params,
}: Props) {
    const { id } = await params;
    const decodedId = decodeURIComponent(id);
    const data = await fetchRecipeDetails(decodedId);
    const node = data?.data?.recipe;
    if (!node || node.__typename !== "recipe") {
        return notFound();
    }
    const recipe = node;
    
    return (
        <main className="container mx-auto py-6 sm:py-10 px-3 sm:px-4 md:px-6 max-w-full">
            <Link href="/" className="flex items-center text-muted-foreground mb-4 sm:mb-6 hover:text-primary">
                <ChevronLeft className="w-4 h-4 mr-1" />
                Back to recipes
            </Link>
            <Card className="w-full mb-6 sm:mb-8 border-0 sm:border">
                <CardHeader className="pb-1 sm:pb-2 px-3 sm:px-6">
                    <CardTitle className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">{recipe.name}</CardTitle>
                </CardHeader>
                <CardContent className="px-3 sm:px-6">
                    <RecipeOverview prepTime={recipe.prep_time} cookTime={recipe.cook_time} servings={recipe.servings} />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8 mt-6 sm:mt-8">
                        <div className="grid grid-rows-1 gap-4 h-fit">
                            {recipe.recipe_imagesCollection && recipe.recipe_imagesCollection.edges.length >= 1 &&
                                <Image src={recipe.recipe_imagesCollection?.edges[0].node.image_url} className="rounded-xl w-full aspect-video object-cover" alt={recipe.name} />
                            }
                            <IngredientsSection ingredients={recipe.recipe_ingredientCollection} />
                        </div>
                        <div className="md:col-span-2">
                            <StepsSection 
                                steps={recipe.stepCollection} 
                                recipeIngredients={recipe.recipe_ingredientCollection?.edges} 
                            />
                        </div>
                    </div>
                </CardContent>
            </Card>
        </main>
    )
}
