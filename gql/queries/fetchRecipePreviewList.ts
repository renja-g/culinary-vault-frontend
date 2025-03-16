import { graphql } from '@/gql/__generated__/gql'
import { client } from "@/gql/client";



const GetAllRecipesQuery = graphql(/* GraphQL */ `
  query GetAllRecipes {
    recipeCollection(first: 20) {
      edges {
        node {
          nodeId
          name
          description
          prep_time
          cook_time
          servings
          user_id
          recipe_imagesCollection(first: 1) {
            edges {
              node {
                image_url
              }
            }
          }
        }
      }
    }
  }
`);

export const fetchRecipePreviewList = async () => 
  await client.query(GetAllRecipesQuery, {}).toPromise();
