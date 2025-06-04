import RecipePreview from '@/components/recipe/RecipePreview';
import { getRecipes, getRecipesList } from '@/lib/data/getRecipes';


export default async function RecipesPage() {
  // Fetch recipes using the new simplified structure
  const { recipes } = await getRecipesList();
  
  return (
    <main className="container mx-auto py-10 px-4 md:px-6">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-8">
        Culinary Vault
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {recipes.map((recipe) => (
          <RecipePreview key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </main>
  );
}