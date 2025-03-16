import { Clock, Users } from "lucide-react";


interface RecipeOverviewProps {
    prepTime: number;
    cookTime: number;
    servings: number;
}

const RecipeOverview: React.FC<RecipeOverviewProps> = ({ prepTime, cookTime, servings }) => (
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
            <span className="text-sm">Serves: {servings}</span>
        </div>
    </div>
);

export default RecipeOverview;
