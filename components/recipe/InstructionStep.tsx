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
import { InstructionIngredient, RecipeImage, Ingredient, InstructionTimer } from "@/types/recipe";

interface InstructionStepProps {
  stepNumber: number;
  instruction: string;
  timer?: InstructionTimer | null;
  ingredients?: InstructionIngredient[] | null;
  images?: RecipeImage[] | null;
  allIngredients: Ingredient[];
}

const InstructionStep = (props: InstructionStepProps) => {
  const { getScalingFactor } = useServingsStore();
  const scalingFactor = getScalingFactor();
  
  // Extract props
  const { stepNumber, instruction, timer, ingredients, images, allIngredients } = props;
  
  // Create a list of only step ingredient names to highlight
  const ingredientNames = useMemo(() => {
    const names: string[] = [];
    
    // Add names from ingredients using ingredientListIndex
    ingredients?.forEach(ingredient => {
      const ingredientFromList = allIngredients[ingredient.ingredientListIndex];
      if (ingredientFromList?.name) names.push(ingredientFromList.name);
    });
    
    // Sort by length (descending) to replace longer names first
    return names.sort((a, b) => b.length - a.length);
  }, [ingredients, allIngredients]);
  
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
      let quantity: number | "to taste" = 0;
      
      // Find in ingredients using ingredientListIndex
      const ingredient = ingredients?.find(
        ing => {
          const ingredientFromList = allIngredients[ing.ingredientListIndex];
          return ingredientFromList?.name.toLowerCase() === ingredientName.toLowerCase();
        }
      );
      if (ingredient) {
        quantity = ingredient.quantity;
      }
      
      const scaledQuantity = typeof quantity === 'number' && quantity > 0 ? scaleQuantity(quantity, scalingFactor) : quantity;
      
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
              <p>{scaledQuantity} {ingredientName}</p>
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
  }, [instruction, ingredientNames, ingredients, scalingFactor]);

  // Determine if we have multiple images
  const hasMultipleImages = images && images.length > 1;
  
  // Render ingredients
  const renderIngredients = () => {
    if (ingredients && ingredients.length > 0) {
      return (
        <div className="mt-3">
          <div className="flex flex-wrap gap-1 mt-1">
            {ingredients.map((ingredient, i) => {
              const ingredientFromList = allIngredients[ingredient.ingredientListIndex];
              const scaledQuantity = typeof ingredient.quantity === 'number' 
                ? scaleQuantity(ingredient.quantity, scalingFactor)
                : ingredient.quantity;
              
              return (
                <Badge key={i} variant="secondary" className="text-xs">
                  {scaledQuantity} {ingredientFromList?.name || 'Unknown ingredient'}
                </Badge>
              );
            })}
          </div>
        </div>
      );
    }
    
    return null;
  };
  
  // Render images
  const renderImages = () => {
    if (images && images.length > 0) {
      if (hasMultipleImages) {
        return (
          <Carousel className="relative">
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="w-full aspect-video overflow-hidden relative rounded-md">
                    <Image src={image.url} fill className="object-cover" alt="Step image"/>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2" />
            <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2" />
          </Carousel>
        );
      } else {
        return (
          <div className="w-full aspect-video overflow-hidden relative rounded-md">
            <Image 
              src={images[0].url} 
              fill 
              className="object-cover" 
              alt="Step image"
            />
          </div>
        );
      }
    }
    
    return null;
  };
  
  return (
    <Card className="overflow-hidden p-0">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="flex items-center mb-3">
              <Badge variant="outline" className="mr-2">
                Step {stepNumber}
              </Badge>
              {timer && <StepTimer timer={timer} />}
            </div>
            <p className="leading-7">
              {highlightedInstruction}
            </p>
            
            {renderIngredients()}
          </div>

          <div className="w-full md:w-1/2 lg:w-2/5 xl:w-2/5 flex-shrink-0">
            {renderImages()}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default InstructionStep;