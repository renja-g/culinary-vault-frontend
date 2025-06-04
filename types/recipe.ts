/**
 * Type definitions for recipe data
 */

export interface Duration {
  duration: string;
  unit: string;
}

export interface Image {
  url: string;
  alt: string;
}

export interface Ingredient {
  name: string;
  quantity: string;
  unit: string;
}

export interface InstructionIngredient {
  ingredientListIndex: number;
  quantity: string;
}

export interface Instruction {
  step: number;
  instruction: string;
  ingredients: InstructionIngredient[];
  timer: Duration | null;
  images: Image[];
}

export interface Recipe {
  id: string;
  title: string;
  description: string;
  prepTime: Duration;
  cookTime: Duration;
  servings: number;
  images: Image[];
  ingredients: Ingredient[];
  instructions: Instruction[];
}

// New simplified interfaces for JSON data
export interface RecipePreview {
  id: string;
  title: string;
  description: string;
  prepTime: number;
  cookTime: number;
  servings: number;
  images: Image[];
}

export interface RecipePreviewListSimple {
  recipes: RecipePreview[];
}

export interface RecipeIngredientSimple {
  name: string;
  quantity: number;
  unit: string | null;
}

export interface RecipeStepIngredientSimple {
  quantity: number;
  name: string;
}

export interface RecipeStepImageSimple {
  url: string;
  index: number;
}

export interface RecipeStepSimple {
  stepNumber: number;
  instruction: string;
  timer: number | null;
  ingredients: RecipeStepIngredientSimple[];
  images: RecipeStepImageSimple[];
}

export interface RecipeDetail {
  id: string;
  title: string;
  prepTime: number;
  cookTime: number;
  servings: number;
  ingredients: RecipeIngredientSimple[];
  images: Image[];
  steps: RecipeStepSimple[];
}

export interface RecipeDetailResponse {
  recipe: RecipeDetail | null;
}

// Legacy GraphQL-style interfaces (kept for backward compatibility)
// These will be deprecated in future versions

export interface RecipePreviewNode {
  nodeId: string;
  name: string;
  description: string;
  prep_time: number;
  cook_time: number;
  servings: number;
  recipe_imagesCollection: {
    edges: Array<{
      node: {
        image_url: string;
      };
    }>;
  };
}

export interface RecipePreviewList {
  data: {
    recipeCollection: {
      edges: Array<{
        node: RecipePreviewNode;
      }>;
    };
  };
}

export interface RecipeIngredientNode {
  ingredient: {
    name: string;
  };
  quantity: number;
  unit: string | null;
}

export interface RecipeStepIngredientNode {
  quantity: number;
  recipe_ingredient: {
    ingredient: {
      name: string;
    };
  } | null;
}

export interface RecipeStepImageNode {
  image_url: string;
  index: number;
}

export interface RecipeStepNode {
  step_number: number;
  instruction: string;
  timer: number | null;
  step_ingredientCollection: {
    edges: Array<{
      node: RecipeStepIngredientNode;
    }>;
  } | null;
  step_imagesCollection: {
    edges: Array<{
      node: RecipeStepImageNode;
    }>;
  } | null;
}

export interface RecipeDetailsNode {
  nodeId: string;
  name: string;
  prep_time: number;
  cook_time: number;
  servings: number;
  recipe_ingredientCollection: {
    edges: Array<{
      node: RecipeIngredientNode;
    }>;
  };
  recipe_imagesCollection: {
    edges: Array<{
      node: {
        image_url: string;
      };
    }>;
  };
  stepCollection: {
    edges: Array<{
      node: RecipeStepNode;
    }>;
  };
}

export interface RecipeDetails {
  data: {
    recipe: RecipeDetailsNode;
  };
}