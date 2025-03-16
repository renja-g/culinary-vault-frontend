'use client';
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import StepTimer from "./StepTimer";

interface StepIngredient {
  node: {
    quantity: number;
    recipe_ingredient?: {
      ingredient?: {
        name: string;
      } | null;
    } | null;
  };
}

interface InstructionStepProps {
  stepNumber: number;
  instruction: string;
  timer?: number | null;
  ingredients?: {
    edges?: Array<StepIngredient>;
  } | null;
  recipeIngredients?: Array<{
    node: {
      ingredient?: {
        name: string;
      } | null;
      unit?: string | null;
    };
  }> | null;
}

const InstructionStep = ({
  stepNumber,
  instruction,
  timer,
  ingredients,
  recipeIngredients
}: InstructionStepProps) => {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-6">
        <div className="flex items-center mb-3">
          <Badge variant="outline" className="mr-2">
            Step {stepNumber}
          </Badge>
          {timer && <StepTimer duration={timer} />}
        </div>
        <p className="text-sm">{instruction}</p>
        
        {ingredients?.edges && ingredients.edges.length > 0 && (
          <div className="mt-3">
            <div className="flex flex-wrap gap-1 mt-1">
              {ingredients.edges.map((ingredientEdge, i) => {
                const recipeIngredient = recipeIngredients?.find(
                  recipeEdge => recipeEdge.node.ingredient?.name === ingredientEdge.node.recipe_ingredient?.ingredient?.name
                );
                
                const unit = recipeIngredient?.node.unit || '';
                
                return (
                  <Badge key={i} variant="secondary" className="text-xs">
                    {ingredientEdge.node.quantity} {unit} {ingredientEdge.node.recipe_ingredient?.ingredient?.name || ''}
                  </Badge>
                );
              })}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default InstructionStep;