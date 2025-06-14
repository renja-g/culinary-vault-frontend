import fs from "fs";
import path from "path";
import { Recipe, RecipePreview } from "@/types/recipe";

// Path to the recipes directory
const recipesDirectory = path.join(process.cwd(), "data", "recipes");

// In-memory cache for all recipes
let recipesCache: Map<string, Recipe> | null = null;

/**
 * Get all recipe files from the data directory
 */
export async function getRecipeFiles(): Promise<string[]> {
  try {
    const fileNames = await fs.promises.readdir(recipesDirectory);
    return fileNames.filter((fileName) => fileName.endsWith(".json"));
  } catch (error) {
    console.error("Error reading recipe directory:", error);
    return [];
  }
}

/**
 * Read a recipe file and parse its contents
 */
export async function readRecipeFile(fileName: string): Promise<Recipe | null> {
  try {
    const filePath = path.join(recipesDirectory, fileName);
    const fileContents = await fs.promises.readFile(filePath, "utf8");
    return JSON.parse(fileContents) as Recipe;
  } catch (error) {
    console.error(`Error reading recipe file ${fileName}:`, error);
    return null;
  }
}

/**
 * Load all recipes into memory cache
 */
async function loadAllRecipes(): Promise<Map<string, Recipe>> {
  if (recipesCache) {
    return recipesCache;
  }

  const recipeFiles = await getRecipeFiles();
  const recipes = new Map<string, Recipe>();

  for (const fileName of recipeFiles) {
    const recipe = await readRecipeFile(fileName);
    if (recipe) {
      const id = fileName.replace(".json", "");
      recipes.set(id, recipe);
    }
  }

  recipesCache = recipes;
  return recipes;
}

/**
 * Get all recipes for the list page
 */
export async function getRecipesList(): Promise<{ recipes: RecipePreview[] }> {
  const allRecipes = await loadAllRecipes();
  const recipes: RecipePreview[] = [];

  for (const [id, recipe] of allRecipes) {
    recipes.push({
      id,
      title: recipe.title,
      description: recipe.description,
      prepTime: recipe.prepTime,
      cookTime: recipe.cookTime,
      servings: recipe.servings,
      images: recipe.images,
    });
  }

  return { recipes };
}

/**
 * Get all recipes with full details (optimized version)
 */
export async function getAllRecipes(): Promise<{
  recipes: (Recipe & { id: string })[];
}> {
  const allRecipes = await loadAllRecipes();
  const recipes: (Recipe & { id: string })[] = [];

  for (const [id, recipe] of allRecipes) {
    recipes.push({ ...recipe, id });
  }

  return { recipes };
}

/**
 * Get a single recipe by ID from memory cache
 */
export async function getRecipeDetailById(
  id: string
): Promise<{ recipe: Recipe | null }> {
  try {
    const allRecipes = await loadAllRecipes();
    const recipe = allRecipes.get(id) || null;
    return { recipe };
  } catch (error) {
    console.error(`Error fetching recipe with ID ${id}:`, error);
    return { recipe: null };
  }
}

// Add this function to generate static paths for Next.js
export async function generateStaticParams() {
  const allRecipes = await loadAllRecipes();
  return Array.from(allRecipes.keys()).map((id) => ({
    id: id,
  }));
}
