'use client';
import { Clock, Users, Minus, Plus } from "lucide-react";
import { Button } from "./ui/button";
import { useServingsStore } from "@/store/useServingsStore";
import { useEffect } from "react";

interface RecipeOverviewProps {
    prepTime: number;
    cookTime: number;
    servings: number;
}

const RecipeOverview: React.FC<RecipeOverviewProps> = ({ prepTime, cookTime, servings }) => {
    const { 
        currentServings, 
        setOriginalServings, 
        increaseServings, 
        decreaseServings 
    } = useServingsStore();

    // Initialize the store with the original servings when the component mounts
    useEffect(() => {
        setOriginalServings(servings);
    }, [servings, setOriginalServings]);

    return (
        <div className="flex flex-wrap gap-4 mb-6">
            <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2 text-muted-foreground" />
                <span className="text-sm">Prep: {prepTime} mins</span>
            </div>
            <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2 text-muted-foreground" />
                <span className="text-sm">Cook: {cookTime} mins</span>
            </div>
            <div className="flex items-center">
                <Users className="w-5 h-5 mr-2 text-muted-foreground" />
                <span className="text-sm">Serves:</span>
                <div className="flex items-center ml-2">
                    <Button 
                        variant="outline" 
                        size="icon" 
                        className="h-6 w-6" 
                        onClick={decreaseServings}
                        disabled={currentServings <= 1}
                    >
                        <Minus className="h-3 w-3" />
                    </Button>
                    <span className="mx-2 text-sm">{currentServings}</span>
                    <Button 
                        variant="outline" 
                        size="icon" 
                        className="h-6 w-6" 
                        onClick={increaseServings}
                    >
                        <Plus className="h-3 w-3" />
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default RecipeOverview;
