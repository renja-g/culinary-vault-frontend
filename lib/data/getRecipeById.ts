import { RecipeDetails, RecipeDetailResponse, RecipeDetail } from '@/types/recipe';
import { readRecipeFile, transformToDetailsNode, transformToRecipeDetail } from './recipeService';

/**
 * Fetch a recipe by ID for the recipe details page
 * This replaces the fetchRecipeDetails GraphQL query
 */
export async function getRecipeById(id: string): Promise<RecipeDetails> {
  try {
    // Read the recipe file
    const fileName = `${id}.json`;
    const recipe = await readRecipeFile(fileName);
    
    if (!recipe) {
      throw new Error(`Recipe with ID ${id} not found`);
    }
    
    // Transform the recipe to match the expected structure
    const recipeNode = transformToDetailsNode(recipe, fileName);
    
    // Return in the same format as the GraphQL query
    return {
      data: {
        recipe: recipeNode
      }
    };
  } catch (error) {
    console.error(`Error fetching recipe with ID ${id}:`, error);
    return {
      data: {
        recipe: null as any
      }
    };
  }
}

/**
 * Fetch a recipe by ID using the new simplified JSON structure
 */
export async function getRecipeDetailById(id: string): Promise<RecipeDetailResponse> {
  try {
    // Read the recipe file
    const fileName = `${id}.json`;
    const recipe = await readRecipeFile(fileName);
    
    if (!recipe) {
      throw new Error(`Recipe with ID ${id} not found`);
    }
    
    // Transform the recipe to the new simplified structure
    const recipeDetail = transformToRecipeDetail(recipe, id);
    
    return {
      recipe: recipeDetail
    };
  } catch (error) {
    console.error(`Error fetching recipe with ID ${id}:`, error);
    return {
      recipe: null
    };
  }
}