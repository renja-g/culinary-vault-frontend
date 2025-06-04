import { RecipePreviewList, RecipePreviewListSimple } from '@/types/recipe';
import { getRecipeFiles, readRecipeFile, transformToPreviewNode, transformToRecipePreview } from './recipeService';

/**
 * Fetch a list of all recipes for the preview page
 * This replaces the fetchRecipePreviewList GraphQL query
 */
export async function getRecipes(): Promise<RecipePreviewList> {
  // Get all recipe files
  const recipeFiles = await getRecipeFiles();
  
  // Read and transform each recipe
  const recipeNodes = await Promise.all(
    recipeFiles.map(async (fileName) => {
      const recipe = await readRecipeFile(fileName);
      if (!recipe) return null;
      
      return {
        node: transformToPreviewNode(recipe, fileName)
      };
    })
  );
  
  // Filter out any null values and construct the response
  const validRecipeNodes = recipeNodes.filter(Boolean);
  
  // Return in the same format as the GraphQL query
  return {
    data: {
      recipeCollection: {
        edges: validRecipeNodes as any[]
      }
    }
  };
}

/**
 * Fetch a list of all recipes using the new simplified JSON structure
 */
export async function getRecipesList(): Promise<RecipePreviewListSimple> {
  // Get all recipe files
  const recipeFiles = await getRecipeFiles();
  
  // Read and transform each recipe
  const recipes = await Promise.all(
    recipeFiles.map(async (fileName) => {
      const recipe = await readRecipeFile(fileName);
      if (!recipe) return null;
      
      // Extract the ID from the filename (remove .json extension)
      const id = fileName.replace(/\.json$/, '');
      
      return transformToRecipePreview(recipe, id);
    })
  );
  
  // Filter out any null values
  const validRecipes = recipes.filter(Boolean);
  
  // Return in the new simplified format
  return {
    recipes: validRecipes as any[]
  };
}