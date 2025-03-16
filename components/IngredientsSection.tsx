'use client';
import { Card, CardContent } from "./ui/card";
import { useServingsStore } from "@/store/useServingsStore";
import { scaleQuantity } from "@/utils/recipeUtils";

interface IngredientsProps {
  ingredients?: {
    edges?: Array<{
      node: {
        quantity: number;
        unit?: string | null;
        ingredient?: {
          name: string;
        } | null;
      };
    }>;
  } | null;
}

const IngredientsSection = ({ ingredients }: IngredientsProps) => {
  const { getScalingFactor } = useServingsStore();
  const scalingFactor = getScalingFactor();
  
  return (
    <div className="md:col-span-1">
      <h2 className="text-xl font-semibold mb-4">Ingredients</h2>
      <Card>
        <CardContent className="pt-6">
          <ul className="space-y-2">
            {ingredients?.edges?.map((edge, index) => {
              const scaledQuantity = scaleQuantity(edge.node.quantity, scalingFactor);
              
              return (
                <li key={index} className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>
                    {scaledQuantity} {edge.node.unit}
                    {edge.node.ingredient?.name && ` ${edge.node.ingredient.name}`}
                  </span>
                </li>
              );
            }) || (
              <li>No ingredients available</li>
            )}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default IngredientsSection;
