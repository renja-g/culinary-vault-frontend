import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent,
} from '@/components/ui/card';
import Image from 'next/image'
import Link from 'next/link'
import { Separator } from '@/components/ui/separator';
import { RecipePreview as RecipePreviewType } from '@/types/recipe';

// Updated component that works with the new data structure only
const RecipePreview = ({ recipe }: { recipe: RecipePreviewType }) => {
  const { id, title, description, prepTime, cookTime, images } = recipe;
  
  // Get the first image URL or use placeholder
  const imageUrl = images[0]?.url || '/recipe-placeholder.jpg';
  
  return (
    <Link href={`/recipes/${id}`} className="block w-full">
      <Card className="w-full max-w-md overflow-hidden flex flex-col p-0 transition-all duration-200 hover:shadow-md">
        <div className="w-full h-48 relative overflow-hidden">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover"
            priority
          />
        </div>
        
        <CardHeader className="mt-2">
          <CardTitle className="scroll-m-20 text-2xl font-semibold tracking-tight">{title}</CardTitle>
          <CardDescription className="line-clamp-2 text-muted-foreground">{description}</CardDescription>
        </CardHeader>
        
        <div className="px-4">
          <Separator />
        </div>
        
        <CardContent className="pb-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col items-center p-2 bg-muted/30 rounded-lg">
              <span className="text-muted-foreground text-sm">Prep Time</span>
              <span className="font-medium">{prepTime} mins</span>
            </div>
            <div className="flex flex-col items-center p-2 bg-muted/30 rounded-lg">
              <span className="text-muted-foreground text-sm">Cook Time</span>
              <span className="font-medium">{cookTime} mins</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default RecipePreview;
