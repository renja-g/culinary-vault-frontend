import { graphql } from '@/gql/__generated__/gql'
import { client } from "@/gql/client";

const GetRecipeDetailsQuery = graphql(/* GraphQL */ `
  query GetRecipeByNodeId($nodeId: ID!) {
    recipe: node(nodeId: $nodeId) {
      ... on recipe {
        nodeId
        name
        prep_time
        cook_time
        servings
        user_id
        recipe_ingredientCollection {
          edges {
            node {
              ingredient {
                name
              }
              quantity
              unit
            }
          }
        }
        recipe_imagesCollection(first: 1) {
          edges {
            node {
              image_url
            }
          }
        }
        stepCollection {
          edges {
            node {
              step_number
              instruction
              timer
              step_ingredientCollection {
                edges {
                  node {
                    quantity
                    recipe_ingredient {
                      ingredient {
                        name
                      }
                    }
                  }
                }
              }
              step_imagesCollection(first: 1) {
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
    }
  }
`);

export const fetchRecipeDetails = async (nodeId: string) => 
  await client.query(GetRecipeDetailsQuery, { nodeId }).toPromise();