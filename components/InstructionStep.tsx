'use client';
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import StepTimer from "./StepTimer";
import { useServingsStore } from "@/store/useServingsStore";
import { scaleQuantity } from "@/utils/recipeUtils";
import { useMemo } from "react";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";

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
  images?: {
    edges?: Array<{
      node: {
        image_url: string
        index: number
      }
    }>
  } | null
}

const InstructionStep = ({
  stepNumber,
  instruction,
  timer,
  ingredients,
  recipeIngredients,
  images
}: InstructionStepProps) => {
  const { getScalingFactor } = useServingsStore();
  const scalingFactor = getScalingFactor();
  
  // Create a list of all ingredient names to highlight
  const ingredientNames = useMemo(() => {
    const names: string[] = [];
    
    // Add names from step ingredients
    ingredients?.edges?.forEach(edge => {
      const name = edge.node.recipe_ingredient?.ingredient?.name;
      if (name) names.push(name);
    });
    
    // Add names from recipe ingredients
    recipeIngredients?.forEach(recipeEdge => {
      const name = recipeEdge.node.ingredient?.name;
      if (name && !names.includes(name)) names.push(name);
    });
    
    // Sort by length (descending) to replace longer names first
    return names.sort((a, b) => b.length - a.length);
  }, [ingredients, recipeIngredients]);
  
  // Function to highlight ingredient names in the instruction text
  const highlightedInstruction = useMemo(() => {
    if (!ingredientNames.length) return <>{instruction}</>;
    
    // Split the instruction text by ingredient names and create React elements
    const result = instruction;
    const parts: React.ReactNode[] = [];
    let lastIndex = 0;
    
    // Create a regex pattern that matches any of the ingredient names
    const pattern = ingredientNames
      .map(name => name.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')) // Escape special regex characters
      .join('|');
    
    const regex = new RegExp(`\\b(${pattern})\\b`, 'gi');
    let match;
    
    // Find all matches and build the parts array
    while ((match = regex.exec(result)) !== null) {
      // Add text before the match
      if (match.index > lastIndex) {
        parts.push(result.substring(lastIndex, match.index));
      }
      
      // Add the highlighted ingredient
      parts.push(
        <span 
          key={`${match[0]}-${match.index}`} 
          className="font-medium text-primary underline underline-offset-4"
        >
          {match[0]}
        </span>
      );
      
      lastIndex = match.index + match[0].length;
    }
    
    // Add any remaining text
    if (lastIndex < result.length) {
      parts.push(result.substring(lastIndex));
    }
    
    return <>{parts}</>;
  }, [instruction, ingredientNames]);

  const imageAmount = (images && images.edges && images.edges.length) || 0;
  
  return (
    <Card className="overflow-hidden p-0">
      <CardContent className="p-6">
        <div className="flex items-center mb-3">
          <Badge variant="outline" className="mr-2">
            Step {stepNumber}
          </Badge>
          {timer && <StepTimer duration={timer} />}
        </div>
        <div className={`${imageAmount === 1 ? "grid grid-cols-1 grid-rows-1 xl:grid-cols-3 xl:grid-rows-1 gap-4" : "grid grid-cols-1 gap-4"}`}>
          <p className="leading-7 [&:not(:first-child)]:mt-6 xl:col-span-2">
            {highlightedInstruction}
          </p>

          {imageAmount === 1 &&
            <div className="w-full aspect-video overflow-hidden relative rounded-md xl:col-start-3">
             {images!.edges!.map(image => <Image key={image.node.image_url} fill src={image.node.image_url} className="object-cover" alt=""/>) }
            </div>
          }
          {imageAmount > 1 && <div className="mx-12">
            <Carousel>
              <CarouselContent>
                {images!.edges!.sort((a, b)=> a.node.index - b.node.index).map((image) => <CarouselItem className="2xl:basis-1/5 xl:basis-1/4 lg:basis-1/3 md:basis-1/2" key={image.node.index}>
                  <div className="w-full aspect-video overflow-hidden relative rounded-md">
                    <Image src={image.node.image_url} fill className="object-cover" alt=""/>
                  </div>
                </CarouselItem>)}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>}

        </div>
        
        {ingredients?.edges && ingredients.edges.length > 0 && (
          <div className="mt-3">
            <div className="flex flex-wrap gap-1 mt-1">
              {ingredients.edges.map((ingredientEdge, i) => {
                const recipeIngredient = recipeIngredients?.find(
                  recipeEdge => recipeEdge.node.ingredient?.name === ingredientEdge.node.recipe_ingredient?.ingredient?.name
                );
                
                const unit = recipeIngredient?.node.unit || '';
                const scaledQuantity = scaleQuantity(ingredientEdge.node.quantity, scalingFactor);
                
                return (
                  <Badge key={i} variant="secondary" className="text-xs">
                    {scaledQuantity} {unit} {ingredientEdge.node.recipe_ingredient?.ingredient?.name || ''}
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