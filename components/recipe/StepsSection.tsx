'use client';
import { Card, CardContent } from "@/components/ui/card";
import InstructionStep from "@/components/recipe/InstructionStep";
import { Instruction, Ingredient } from "@/types/recipe";


interface StepsSectionProps {
  steps?: Instruction[] | null;
  allIngredients: Ingredient[];
  className?: string;
}

const StepsSection = (props: StepsSectionProps) => {
  const { className = "", steps, allIngredients } = props;

  // Render steps
  const renderSteps = () => {
    if (steps && steps.length > 0) {
      // Sort steps by step number
      const sortedSteps = [...steps].sort(
        (a: Instruction, b: Instruction) => a.step - b.step
      );

      return sortedSteps.map((step: Instruction, index: number) => (
        <InstructionStep
          key={index}
          stepNumber={step.step}
          instruction={step.instruction}
          timer={step.timer}
          ingredients={step.ingredients}
          images={step.images}
          allIngredients={allIngredients}
        />
      ));
    }
    
    return (
      <Card>
        <CardContent className="p-6">
          <p className="text-sm text-muted-foreground">No instructions available</p>
        </CardContent>
      </Card>
    );
  };

  return (
    <div className={`md:col-span-2 ${className}`}>
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 mb-4">Instructions</h2>
      <div className="space-y-6">
        {renderSteps()}
      </div>
    </div>
  );
};

export default StepsSection;
