import RecipePreview from "@/components/recipe/RecipePreview";
import { getRecipesList } from "@/lib/data/recipeService";

export default async function RecipesPage() {
  const { recipes } = await getRecipesList();

  return (
    <main className="container mx-auto py-10 px-4 md:px-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-fr">
        {recipes.map((recipe) => (
          <RecipePreview key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </main>
  );
}
