import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent,
} from '@/components/ui/card';
import { type GetAllRecipesQuery } from '@/gql/__generated__/graphql';
import Image from 'next/image'
import Link from 'next/link'
import { Separator } from '@/components/ui/separator';
import { getNumericId } from '@/utils/nodeIdHelpers';

type RecipeNode = NonNullable<
  NonNullable<GetAllRecipesQuery['recipeCollection']>['edges'][0]
>['node'];

const RecipePreview = ({ recipe }: { recipe: RecipeNode }) => {
  const numericId = getNumericId(recipe.nodeId);
  
  return (
    <Link href={`/recipes/${numericId}`} className="block w-full">
      <Card className="w-full max-w-md overflow-hidden flex flex-col p-0 transition-all duration-200 hover:shadow-md">
        <div className="w-full h-48 relative overflow-hidden">
          <Image
            src={recipe.recipe_imagesCollection?.edges[0]?.node.image_url || '/placeholder-recipe.jpg'}
            alt={recipe.name}
            fill
            className="object-cover"
            priority
          />
        </div>
        
        <CardHeader className="mt-2">
          <CardTitle className="scroll-m-20 text-2xl font-semibold tracking-tight">{recipe.name}</CardTitle>
          <CardDescription className="line-clamp-2 text-muted-foreground">{recipe.description}</CardDescription>
        </CardHeader>
        
        <div className="px-4">
          <Separator />
        </div>
        
        <CardContent className="pb-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col items-center p-2 bg-muted/30 rounded-lg">
              <span className="text-muted-foreground text-sm">Prep Time</span>
              <span className="font-medium">{recipe.prep_time} mins</span>
            </div>
            <div className="flex flex-col items-center p-2 bg-muted/30 rounded-lg">
              <span className="text-muted-foreground text-sm">Cook Time</span>
              <span className="font-medium">{recipe.cook_time} mins</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default RecipePreview;
