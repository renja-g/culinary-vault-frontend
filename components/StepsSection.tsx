'use client';
import { Card, CardContent } from "@/components/ui/card";
import InstructionStep from "@/components/InstructionStep";

interface StepNode {
  node: {
    step_number: number;
    instruction: string;
    timer?: number | null;
    step_ingredientCollection?: {
      edges?: Array<{
        node: {
          quantity: number;
          recipe_ingredient?: {
            ingredient?: {
              name: string;
            } | null;
          } | null;
        };
      }>;
    } | null;
  };
}

interface StepsSectionProps {
  steps?: {
    edges?: Array<StepNode>;
  } | null;
  recipeIngredients?: Array<{
    node: {
      ingredient?: {
        name: string;
      } | null;
      unit?: string | null;
    };
  }> | null;
  className?: string;
}

const StepsSection = ({ steps, recipeIngredients, className = "" }: StepsSectionProps) => {
  return (
    <div className={`md:col-span-2 ${className}`}>
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 mb-4">Instructions</h2>
      <div className="space-y-6">
        {steps?.edges
          ?.sort((a, b) => a.node.step_number - b.node.step_number)
          ?.map((edge, index) => (
            <InstructionStep
              key={index}
              stepNumber={edge.node.step_number}
              instruction={edge.node.instruction}
              timer={edge.node.timer}
              ingredients={edge.node.step_ingredientCollection}
              recipeIngredients={recipeIngredients}
            />
          )) || (
            <Card>
              <CardContent className="p-6">
                <p className="text-sm text-muted-foreground">No instructions available</p>
              </CardContent>
            </Card>
          )}
      </div>
    </div>
  );
};

export default StepsSection;
