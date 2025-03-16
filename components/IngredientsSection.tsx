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
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 mb-4">Ingredients</h2>
      <Card>
        <CardContent>
          <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
            {ingredients?.edges?.map((edge, index) => {
              const scaledQuantity = scaleQuantity(edge.node.quantity, scalingFactor);
              
              return (
                <li key={index}>
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
