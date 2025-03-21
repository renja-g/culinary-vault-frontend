'use client';
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import StepTimer from "@/components/recipe/StepTimer";
import { useServingsStore } from "@/store/useServingsStore";
import { scaleQuantity } from "@/utils/recipeUtils";
import { useMemo } from "react";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

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
  
  // Create a list of only step ingredient names to highlight
  const ingredientNames = useMemo(() => {
    const names: string[] = [];
    
    // Add names from step ingredients only
    ingredients?.edges?.forEach(edge => {
      const name = edge.node.recipe_ingredient?.ingredient?.name;
      if (name) names.push(name);
    });
    
    // Sort by length (descending) to replace longer names first
    return names.sort((a, b) => b.length - a.length);
  }, [ingredients]);
  
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
      
      // Find the ingredient details for the tooltip
      const ingredientName = match[0];
      const ingredientEdge = ingredients?.edges?.find(
        edge => edge.node.recipe_ingredient?.ingredient?.name?.toLowerCase() === ingredientName.toLowerCase()
      );
      
      const recipeIngredient = recipeIngredients?.find(
        recipeEdge => recipeEdge.node.ingredient?.name?.toLowerCase() === ingredientName.toLowerCase()
      );
      
      const unit = recipeIngredient?.node.unit || '';
      const quantity = ingredientEdge?.node.quantity;
      const scaledQuantity = quantity ? scaleQuantity(quantity, scalingFactor) : '';
      
      // Add the highlighted ingredient with tooltip
      parts.push(
        <TooltipProvider key={`${match[0]}-${match.index}`}>
          <Tooltip>
            <TooltipTrigger asChild>
              <span 
                className="font-medium text-primary underline underline-offset-4 cursor-help"
              >
                {match[0]}
              </span>
            </TooltipTrigger>
            <TooltipContent>
              <p>{scaledQuantity} {unit} {ingredientName}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      );
      
      lastIndex = match.index + match[0].length;
    }
    
    // Add any remaining text
    if (lastIndex < result.length) {
      parts.push(result.substring(lastIndex));
    }
    
    return <>{parts}</>;
  }, [instruction, ingredientNames, ingredients, recipeIngredients, scalingFactor]);

  const hasMultipleImages = images?.edges && images.edges.length > 1;
  
  return (
    <Card className="overflow-hidden p-0">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="flex items-center mb-3">
              <Badge variant="outline" className="mr-2">
                Step {stepNumber}
              </Badge>
              {timer && <StepTimer duration={timer} />}
            </div>
            <p className="leading-7">
              {highlightedInstruction}
            </p>
            
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
          </div>

          {images?.edges && images.edges.length > 0 && (
            <div className="w-full md:w-1/2 lg:w-2/5 xl:w-2/5 flex-shrink-0">
              {hasMultipleImages ? (
                <Carousel className="relative">
                  <CarouselContent>
                    {images.edges.sort((a, b) => a.node.index - b.node.index).map((image) => (
                      <CarouselItem key={image.node.index}>
                        <div className="w-full aspect-video overflow-hidden relative rounded-md">
                          <Image src={image.node.image_url} fill className="object-cover" alt="Step image"/>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2" />
                  <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2" />
                </Carousel>
              ) : (
                <div className="w-full aspect-video overflow-hidden relative rounded-md">
                  <Image 
                    src={images.edges[0].node.image_url} 
                    fill 
                    className="object-cover" 
                    alt="Step image"
                  />
                </div>
              )}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default InstructionStep;