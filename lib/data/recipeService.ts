import fs from 'fs';
import path from 'path';
import { 
  Recipe, 
  RecipePreviewNode, 
  RecipeDetailsNode, 
  RecipePreview,
  RecipeDetail,
  RecipeStepSimple,
  RecipeIngredientSimple
} from '@/types/recipe';
import { createNodeId, getNumericId } from '@/utils/nodeIdHelpers';

// Path to the recipes directory
const recipesDirectory = path.join(process.cwd(), 'data', 'recipes');

/**
 * Get all recipe files from the data directory
 */
export async function getRecipeFiles(): Promise<string[]> {
  try {
    const fileNames = await fs.promises.readdir(recipesDirectory);
    return fileNames.filter(fileName => fileName.endsWith('.json'));
  } catch (error) {
    console.error('Error reading recipe directory:', error);
    return [];
  }
}

/**
 * Read a recipe file and parse its contents
 */
export async function readRecipeFile(fileName: string): Promise<Recipe | null> {
  try {
    const filePath = path.join(recipesDirectory, fileName);
    const fileContents = await fs.promises.readFile(filePath, 'utf8');
    return JSON.parse(fileContents) as Recipe;
  } catch (error) {
    console.error(`Error reading recipe file ${fileName}:`, error);
    return null;
  }
}

/**
 * Transform a raw recipe into the format expected by the RecipePreview component
 * using the legacy GraphQL-style structure
 */
export function transformToPreviewNode(recipe: Recipe, fileName: string): RecipePreviewNode {
  // Extract the ID from the filename (remove .json extension)
  const id = fileName.replace(/\.json$/, '');
  
  // Create a nodeId using the same format as the GraphQL API
  const nodeId = createNodeId('recipe', id);
  
  // Transform the recipe data to match the expected structure
  return {
    nodeId,
    name: recipe.title,
    description: recipe.description,
    prep_time: parseInt(recipe.prepTime.duration),
    cook_time: parseInt(recipe.cookTime.duration),
    servings: recipe.servings || 1,
    recipe_imagesCollection: {
      edges: recipe.images.map(image => ({
        node: {
          image_url: image.url
        }
      }))
    }
  };
}

/**
 * Transform a raw recipe into the format expected by the recipe details page
 * using the legacy GraphQL-style structure
 */
export function transformToDetailsNode(recipe: Recipe, fileName: string): RecipeDetailsNode {
  // Extract the ID from the filename (remove .json extension)
  const id = fileName.replace(/\.json$/, '');
  
  // Create a nodeId using the same format as the GraphQL API
  const nodeId = createNodeId('recipe', id);
  
  // Transform the recipe data to match the expected structure
  return {
    nodeId,
    name: recipe.title,
    prep_time: parseInt(recipe.prepTime.duration),
    cook_time: parseInt(recipe.cookTime.duration),
    servings: recipe.servings || 1,
    recipe_ingredientCollection: {
      edges: recipe.ingredients.map((ingredient, index) => ({
        node: {
          ingredient: {
            name: ingredient.name
          },
          quantity: parseFloat(ingredient.quantity),
          unit: ingredient.unit
        }
      }))
    },
    recipe_imagesCollection: {
      edges: recipe.images.map(image => ({
        node: {
          image_url: image.url
        }
      }))
    },
    stepCollection: {
      edges: recipe.instructions.map(instruction => ({
        node: {
          step_number: instruction.step,
          instruction: instruction.instruction,
          timer: instruction.timer ? parseInt(instruction.timer.duration) : null,
          step_ingredientCollection: {
            edges: instruction.ingredients.map(ingredient => ({
              node: {
                quantity: parseFloat(ingredient.quantity),
                recipe_ingredient: {
                  ingredient: {
                    name: recipe.ingredients[ingredient.ingredientListIndex].name
                  }
                }
              }
            }))
          },
          step_imagesCollection: {
            edges: instruction.images.map((image, index) => ({
              node: {
                image_url: image.url,
                index
              }
            }))
          }
        }
      }))
    }
  };
}

/**
 * Transform a raw recipe into the new simplified RecipePreview format
 */
export function transformToRecipePreview(recipe: Recipe, id: string): RecipePreview {
  return {
    id,
    title: recipe.title,
    description: recipe.description,
    prepTime: parseInt(recipe.prepTime.duration),
    cookTime: parseInt(recipe.cookTime.duration),
    servings: recipe.servings || 1,
    images: recipe.images
  };
}

/**
 * Transform a raw recipe into the new simplified RecipeDetail format
 */
export function transformToRecipeDetail(recipe: Recipe, id: string): RecipeDetail {
  // Transform ingredients
  const ingredients: RecipeIngredientSimple[] = recipe.ingredients.map(ingredient => ({
    name: ingredient.name,
    quantity: parseFloat(ingredient.quantity),
    unit: ingredient.unit
  }));

  // Transform steps
  const steps: RecipeStepSimple[] = recipe.instructions.map(instruction => ({
    stepNumber: instruction.step,
    instruction: instruction.instruction,
    timer: instruction.timer ? parseInt(instruction.timer.duration) : null,
    ingredients: instruction.ingredients.map(ingredient => ({
      quantity: parseFloat(ingredient.quantity),
      name: recipe.ingredients[ingredient.ingredientListIndex].name
    })),
    images: instruction.images.map((image, index) => ({
      url: image.url,
      index
    }))
  }));

  return {
    id,
    title: recipe.title,
    prepTime: parseInt(recipe.prepTime.duration),
    cookTime: parseInt(recipe.cookTime.duration),
    servings: recipe.servings || 1,
    ingredients,
    images: recipe.images,
    steps
  };
}