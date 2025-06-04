# Culinary Vault Frontend

A recipe management application built with Next.js that uses local JSON files as a backend.

## Project Structure

- `/app` - Next.js app router pages
- `/components` - React components
- `/data/recipes` - JSON files containing recipe data
- `/lib/data` - Data service layer for accessing recipe data
- `/types` - TypeScript type definitions
- `/utils` - Utility functions

## Getting Started

1. Clone the repository
2. Install dependencies
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```
3. Run the development server
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Adding Recipes

To add a new recipe, create a new JSON file in the `/data/recipes` directory. The file should be named with a numeric ID (e.g., `1.json`, `2.json`, etc.) and follow this structure:

```json
{
  "title": "Recipe Title",
  "description": "Recipe description",
  "prepTime": {
    "duration": "10",
    "unit": "minutes"
  },
  "cookTime": {
    "duration": "20",
    "unit": "minutes"
  },
  "servings": 4,
  "images": [
    {
      "url": "https://example.com/image.jpg",
      "alt": "Recipe Image"
    }
  ],
  "ingredients": [
    {
      "name": "Ingredient 1",
      "quantity": "200",
      "unit": "g"
    },
    {
      "name": "Ingredient 2",
      "quantity": "1",
      "unit": "tbsp"
    }
  ],
  "instructions": [
    {
      "step": 1,
      "instruction": "Step 1 instructions",
      "ingredients": [
        {
          "ingredientListIndex": 0,
          "quantity": "200"
        }
      ],
      "timer": null,
      "images": []
    },
    {
      "step": 2,
      "instruction": "Step 2 instructions",
      "ingredients": [
        {
          "ingredientListIndex": 1,
          "quantity": "1"
        }
      ],
      "timer": {
        "duration": "5",
        "unit": "minutes"
      },
      "images": []
    }
  ]
}
```

## Data Layer

The application uses a data service layer to read recipe data from JSON files. The service layer is located in `/lib/data` and includes:

- `recipeService.ts` - Core functions for reading and transforming recipe data
- `getRecipes.ts` - Function to get all recipes for the recipe list page
- `getRecipeById.ts` - Function to get a specific recipe by ID

## License

MIT
