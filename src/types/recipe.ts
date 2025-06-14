/**
 * Type definitions for recipe data
 */

export enum TimeUnit {
  SECONDS = "seconds",
  MINUTES = "minutes",
  HOURS = "hours",
}

export enum IngredientUnit {
  G = "g",
  KG = "kg",
  MG = "mg",
  OZ = "oz",
  LB = "lb",
  ML = "ml",
  L = "l",
  DL = "dl",
  CL = "cl",
  TSP = "tsp",
  TBSP = "tbsp",
  C = "c",
  PT = "pt",
  QT = "qt",
  GAL = "gal",
  FL_OZ = "fl oz",
  PINCH = "pinch",
  DASH = "dash",
  DROP = "drop",
  SCOOP = "scoop",
  SPRIG = "sprig",
  CLOVE = "clove",
  SLICE = "slice",
  PIECE = "piece",
  CAN = "can",
  JAR = "jar",
  PACKAGE = "package",
  STICK = "stick",
  LEAF = "leaf",
  STALK = "stalk",
  BUNCH = "bunch",
  HEAD = "head",
  FILLET = "fillet",
  DESSERTSPOON = "dessertspoon",
  JIGGER = "jigger",
  CC = "cc",
  CM = "cm",
  MM = "mm",
  INCH = "inch",
}

export interface TimeDuration {
  duration: number;
  timeUnit: TimeUnit;
}

export interface RecipeImage {
  url: string;
  alt: string;
}

export interface RecipePreview {
  id: string;
  title: string;
  description: string;
  prepTime: TimeDuration;
  cookTime: TimeDuration;
  servings: number;
  images: RecipeImage[];
}

export interface Ingredient {
  name: string;
  quantity: number | "to taste";
  unit?: IngredientUnit;
}

export interface InstructionIngredient {
  ingredientListIndex: number;
  quantity: number | "to taste";
}

export interface InstructionTimer {
  duration: number;
  timeUnit: TimeUnit;
}

export interface Instruction {
  step: number;
  instruction: string;
  ingredients: InstructionIngredient[];
  timer?: InstructionTimer;
  images?: RecipeImage[];
}

export interface Recipe {
  title: string;
  description: string;
  servings: number;
  prepTime: TimeDuration;
  cookTime: TimeDuration;
  images: RecipeImage[];
  ingredients: Ingredient[];
  instructions: Instruction[];
}
