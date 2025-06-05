'use client';
import { Card, CardContent } from "@/components/ui/card";
import { useServingsStore } from "@/store/useServingsStore";
import { scaleQuantity } from "@/utils/recipeUtils";
import { Ingredient } from "@/types/recipe";

interface IngredientsProps {
  ingredients?: Ingredient[] | null;
}

const IngredientsSection = ({ ingredients }: IngredientsProps) => {
  const { getScalingFactor } = useServingsStore();
  const scalingFactor = getScalingFactor();

  const renderIngredients = () => {
    return ingredients?.map((ingredient, index) => {
      const scaledQuantity = ingredient.quantity === 'to taste' 
        ? ingredient.quantity 
        : scaleQuantity(ingredient.quantity, scalingFactor);
      
      return (
        <li key={index}>
          <span>
            {scaledQuantity} {ingredient.unit}
            {ingredient.name && ` ${ingredient.name}`}
          </span>
        </li>
      );
    }) || (
      <li>No ingredients available</li>
    );
  };

  
  return (
    <div className="md:col-span-1">
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 mb-4">Ingredients</h2>
      <Card>
        <CardContent>
          <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
            {renderIngredients()}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default IngredientsSection;
