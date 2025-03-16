import RecipePreview from '@/components/RecipePreview';
import { fetchRecipePreviewList } from '@/gql/queries/fetchRecipePreviewList';


export default async function Page() {
  const data = await fetchRecipePreviewList();
  return (
    <main className="container mx-auto py-10 px-4 md:px-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.data?.recipeCollection?.edges.map((recipe) => (
          <RecipePreview key={recipe.node.nodeId} recipe={recipe.node} />
        ))}
      </div>
    </main>
  );
}