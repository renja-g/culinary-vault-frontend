import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
} from '@/components/ui/card';
import { notFound } from 'next/navigation';
import { getRecipeDetailById } from "@/lib/data/getRecipeById";
import RecipeOverview from '@/components/recipe/RecipeOverview';
import IngredientsSection from '@/components/recipe/IngredientsSection';
import StepsSection from '@/components/recipe/StepsSection';
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
    const { recipe } = await getRecipeDetailById(decodedId);
    if (!recipe) {
        return {};
    }
    return {
        title: recipe.title
    }
  }
   

export default async function RecipePage({
    params,
}: Props) {
    const { id } = await params;
    const decodedId = decodeURIComponent(id);
    // Use the new function to get recipe details
    const { recipe } = await getRecipeDetailById(decodedId);
    if (!recipe) {
        return notFound();
    }
    
    return (
        <main className="container mx-auto py-6 sm:py-10 px-3 sm:px-4 md:px-6 max-w-full">
            <Link href="/recipes" className="flex items-center text-muted-foreground mb-4 sm:mb-6 hover:text-primary">
                <ChevronLeft className="w-4 h-4 mr-1" />
                Back to recipes
            </Link>
            <Card className="w-full mb-6 sm:mb-8 border-0 sm:border">
                <CardHeader className="pb-1 sm:pb-2 px-3 sm:px-6">
                    <CardTitle className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">{recipe.title}</CardTitle>
                </CardHeader>
                <CardContent className="px-3 sm:px-6">
                    <RecipeOverview prepTime={recipe.prepTime} cookTime={recipe.cookTime} servings={recipe.servings} />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8 mt-6 sm:mt-8">
                        <div className="grid grid-rows-1 gap-4 h-fit">
                            {recipe.images && recipe.images.length >= 1 &&
                                <div className="rounded-xl w-full aspect-video overflow-hidden relative">
                                    <Image fill priority src={recipe.images[0].url} className="object-cover" alt={recipe.title} />
                                </div>
                            }
                            <IngredientsSection ingredients={recipe.ingredients} />
                        </div>
                        <div className="md:col-span-2">
                            <StepsSection 
                                steps={recipe.steps} 
                            />
                        </div>
                    </div>
                </CardContent>
            </Card>
        </main>
    )
}
