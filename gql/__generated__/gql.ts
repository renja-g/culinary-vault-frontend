/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "\n  query GetRecipeByNodeId($nodeId: ID!) {\n    recipe: node(nodeId: $nodeId) {\n      ... on recipe {\n        nodeId\n        name\n        prep_time\n        cook_time\n        servings\n        user_id\n        recipe_ingredientCollection {\n          edges {\n            node {\n              ingredient {\n                name\n              }\n              quantity\n              unit\n            }\n          }\n        }\n        recipe_imagesCollection(first: 1) {\n          edges {\n            node {\n              image_url\n            }\n          }\n        }\n        stepCollection {\n          edges {\n            node {\n              step_number\n              instruction\n              timer\n              step_ingredientCollection {\n                edges {\n                  node {\n                    quantity\n                    recipe_ingredient {\n                      ingredient {\n                        name\n                      }\n                    }\n                  }\n                }\n              }\n              step_imagesCollection(first: 1) {\n                edges {\n                  node {\n                    image_url\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n": typeof types.GetRecipeByNodeIdDocument,
    "\n  query GetAllRecipes {\n    recipeCollection(first: 20) {\n      edges {\n        node {\n          nodeId\n          name\n          description\n          prep_time\n          cook_time\n          servings\n          user_id\n          recipe_imagesCollection(first: 1) {\n            edges {\n              node {\n                image_url\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n": typeof types.GetAllRecipesDocument,
};
const documents: Documents = {
    "\n  query GetRecipeByNodeId($nodeId: ID!) {\n    recipe: node(nodeId: $nodeId) {\n      ... on recipe {\n        nodeId\n        name\n        prep_time\n        cook_time\n        servings\n        user_id\n        recipe_ingredientCollection {\n          edges {\n            node {\n              ingredient {\n                name\n              }\n              quantity\n              unit\n            }\n          }\n        }\n        recipe_imagesCollection(first: 1) {\n          edges {\n            node {\n              image_url\n            }\n          }\n        }\n        stepCollection {\n          edges {\n            node {\n              step_number\n              instruction\n              timer\n              step_ingredientCollection {\n                edges {\n                  node {\n                    quantity\n                    recipe_ingredient {\n                      ingredient {\n                        name\n                      }\n                    }\n                  }\n                }\n              }\n              step_imagesCollection(first: 1) {\n                edges {\n                  node {\n                    image_url\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n": types.GetRecipeByNodeIdDocument,
    "\n  query GetAllRecipes {\n    recipeCollection(first: 20) {\n      edges {\n        node {\n          nodeId\n          name\n          description\n          prep_time\n          cook_time\n          servings\n          user_id\n          recipe_imagesCollection(first: 1) {\n            edges {\n              node {\n                image_url\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n": types.GetAllRecipesDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetRecipeByNodeId($nodeId: ID!) {\n    recipe: node(nodeId: $nodeId) {\n      ... on recipe {\n        nodeId\n        name\n        prep_time\n        cook_time\n        servings\n        user_id\n        recipe_ingredientCollection {\n          edges {\n            node {\n              ingredient {\n                name\n              }\n              quantity\n              unit\n            }\n          }\n        }\n        recipe_imagesCollection(first: 1) {\n          edges {\n            node {\n              image_url\n            }\n          }\n        }\n        stepCollection {\n          edges {\n            node {\n              step_number\n              instruction\n              timer\n              step_ingredientCollection {\n                edges {\n                  node {\n                    quantity\n                    recipe_ingredient {\n                      ingredient {\n                        name\n                      }\n                    }\n                  }\n                }\n              }\n              step_imagesCollection(first: 1) {\n                edges {\n                  node {\n                    image_url\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetRecipeByNodeId($nodeId: ID!) {\n    recipe: node(nodeId: $nodeId) {\n      ... on recipe {\n        nodeId\n        name\n        prep_time\n        cook_time\n        servings\n        user_id\n        recipe_ingredientCollection {\n          edges {\n            node {\n              ingredient {\n                name\n              }\n              quantity\n              unit\n            }\n          }\n        }\n        recipe_imagesCollection(first: 1) {\n          edges {\n            node {\n              image_url\n            }\n          }\n        }\n        stepCollection {\n          edges {\n            node {\n              step_number\n              instruction\n              timer\n              step_ingredientCollection {\n                edges {\n                  node {\n                    quantity\n                    recipe_ingredient {\n                      ingredient {\n                        name\n                      }\n                    }\n                  }\n                }\n              }\n              step_imagesCollection(first: 1) {\n                edges {\n                  node {\n                    image_url\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetAllRecipes {\n    recipeCollection(first: 20) {\n      edges {\n        node {\n          nodeId\n          name\n          description\n          prep_time\n          cook_time\n          servings\n          user_id\n          recipe_imagesCollection(first: 1) {\n            edges {\n              node {\n                image_url\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetAllRecipes {\n    recipeCollection(first: 20) {\n      edges {\n        node {\n          nodeId\n          name\n          description\n          prep_time\n          cook_time\n          servings\n          user_id\n          recipe_imagesCollection(first: 1) {\n            edges {\n              node {\n                image_url\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;