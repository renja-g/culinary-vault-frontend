/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A high precision floating point value represented as a string */
  BigFloat: { input: any; output: any; }
  /** An arbitrary size integer represented as a string */
  BigInt: { input: any; output: any; }
  /** An opaque string using for tracking a position in results during pagination */
  Cursor: { input: any; output: any; }
  /** A date without time information */
  Date: { input: any; output: any; }
  /** A date and time */
  Datetime: { input: any; output: any; }
  /** A Javascript Object Notation value serialized as a string */
  JSON: { input: any; output: any; }
  /** Any type not handled by the type system */
  Opaque: { input: any; output: any; }
  /** A time without date information */
  Time: { input: any; output: any; }
  /** A universally unique identifier */
  UUID: { input: any; output: any; }
};

/** Boolean expression comparing fields on type "BigFloat" */
export type BigFloatFilter = {
  eq?: InputMaybe<Scalars['BigFloat']['input']>;
  gt?: InputMaybe<Scalars['BigFloat']['input']>;
  gte?: InputMaybe<Scalars['BigFloat']['input']>;
  in?: InputMaybe<Array<Scalars['BigFloat']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['BigFloat']['input']>;
  lte?: InputMaybe<Scalars['BigFloat']['input']>;
  neq?: InputMaybe<Scalars['BigFloat']['input']>;
};

/** Boolean expression comparing fields on type "BigFloatList" */
export type BigFloatListFilter = {
  containedBy?: InputMaybe<Array<Scalars['BigFloat']['input']>>;
  contains?: InputMaybe<Array<Scalars['BigFloat']['input']>>;
  eq?: InputMaybe<Array<Scalars['BigFloat']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['BigFloat']['input']>>;
};

/** Boolean expression comparing fields on type "BigInt" */
export type BigIntFilter = {
  eq?: InputMaybe<Scalars['BigInt']['input']>;
  gt?: InputMaybe<Scalars['BigInt']['input']>;
  gte?: InputMaybe<Scalars['BigInt']['input']>;
  in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['BigInt']['input']>;
  lte?: InputMaybe<Scalars['BigInt']['input']>;
  neq?: InputMaybe<Scalars['BigInt']['input']>;
};

/** Boolean expression comparing fields on type "BigIntList" */
export type BigIntListFilter = {
  containedBy?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  eq?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

/** Boolean expression comparing fields on type "Boolean" */
export type BooleanFilter = {
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  is?: InputMaybe<FilterIs>;
};

/** Boolean expression comparing fields on type "BooleanList" */
export type BooleanListFilter = {
  containedBy?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  contains?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  eq?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['Boolean']['input']>>;
};

/** Boolean expression comparing fields on type "Date" */
export type DateFilter = {
  eq?: InputMaybe<Scalars['Date']['input']>;
  gt?: InputMaybe<Scalars['Date']['input']>;
  gte?: InputMaybe<Scalars['Date']['input']>;
  in?: InputMaybe<Array<Scalars['Date']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Date']['input']>;
  lte?: InputMaybe<Scalars['Date']['input']>;
  neq?: InputMaybe<Scalars['Date']['input']>;
};

/** Boolean expression comparing fields on type "DateList" */
export type DateListFilter = {
  containedBy?: InputMaybe<Array<Scalars['Date']['input']>>;
  contains?: InputMaybe<Array<Scalars['Date']['input']>>;
  eq?: InputMaybe<Array<Scalars['Date']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['Date']['input']>>;
};

/** Boolean expression comparing fields on type "Datetime" */
export type DatetimeFilter = {
  eq?: InputMaybe<Scalars['Datetime']['input']>;
  gt?: InputMaybe<Scalars['Datetime']['input']>;
  gte?: InputMaybe<Scalars['Datetime']['input']>;
  in?: InputMaybe<Array<Scalars['Datetime']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Datetime']['input']>;
  lte?: InputMaybe<Scalars['Datetime']['input']>;
  neq?: InputMaybe<Scalars['Datetime']['input']>;
};

/** Boolean expression comparing fields on type "DatetimeList" */
export type DatetimeListFilter = {
  containedBy?: InputMaybe<Array<Scalars['Datetime']['input']>>;
  contains?: InputMaybe<Array<Scalars['Datetime']['input']>>;
  eq?: InputMaybe<Array<Scalars['Datetime']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['Datetime']['input']>>;
};

export enum FilterIs {
  NotNull = 'NOT_NULL',
  Null = 'NULL'
}

/** Boolean expression comparing fields on type "Float" */
export type FloatFilter = {
  eq?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  neq?: InputMaybe<Scalars['Float']['input']>;
};

/** Boolean expression comparing fields on type "FloatList" */
export type FloatListFilter = {
  containedBy?: InputMaybe<Array<Scalars['Float']['input']>>;
  contains?: InputMaybe<Array<Scalars['Float']['input']>>;
  eq?: InputMaybe<Array<Scalars['Float']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['Float']['input']>>;
};

/** Boolean expression comparing fields on type "ID" */
export type IdFilter = {
  eq?: InputMaybe<Scalars['ID']['input']>;
};

/** Boolean expression comparing fields on type "Int" */
export type IntFilter = {
  eq?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  neq?: InputMaybe<Scalars['Int']['input']>;
};

/** Boolean expression comparing fields on type "IntList" */
export type IntListFilter = {
  containedBy?: InputMaybe<Array<Scalars['Int']['input']>>;
  contains?: InputMaybe<Array<Scalars['Int']['input']>>;
  eq?: InputMaybe<Array<Scalars['Int']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['Int']['input']>>;
};

/** The root type for creating and mutating data */
export type Mutation = {
  __typename?: 'Mutation';
  /** Deletes zero or more records from the `ingredient` collection */
  deleteFromingredientCollection: IngredientDeleteResponse;
  /** Deletes zero or more records from the `recipe` collection */
  deleteFromrecipeCollection: RecipeDeleteResponse;
  /** Deletes zero or more records from the `recipe_images` collection */
  deleteFromrecipe_imagesCollection: Recipe_ImagesDeleteResponse;
  /** Deletes zero or more records from the `recipe_ingredient` collection */
  deleteFromrecipe_ingredientCollection: Recipe_IngredientDeleteResponse;
  /** Deletes zero or more records from the `step` collection */
  deleteFromstepCollection: StepDeleteResponse;
  /** Deletes zero or more records from the `step_images` collection */
  deleteFromstep_imagesCollection: Step_ImagesDeleteResponse;
  /** Deletes zero or more records from the `step_ingredient` collection */
  deleteFromstep_ingredientCollection: Step_IngredientDeleteResponse;
  /** Deletes zero or more records from the `user_ingredient` collection */
  deleteFromuser_ingredientCollection: User_IngredientDeleteResponse;
  /** Adds one or more `ingredient` records to the collection */
  insertIntoingredientCollection?: Maybe<IngredientInsertResponse>;
  /** Adds one or more `recipe` records to the collection */
  insertIntorecipeCollection?: Maybe<RecipeInsertResponse>;
  /** Adds one or more `recipe_images` records to the collection */
  insertIntorecipe_imagesCollection?: Maybe<Recipe_ImagesInsertResponse>;
  /** Adds one or more `recipe_ingredient` records to the collection */
  insertIntorecipe_ingredientCollection?: Maybe<Recipe_IngredientInsertResponse>;
  /** Adds one or more `step` records to the collection */
  insertIntostepCollection?: Maybe<StepInsertResponse>;
  /** Adds one or more `step_images` records to the collection */
  insertIntostep_imagesCollection?: Maybe<Step_ImagesInsertResponse>;
  /** Adds one or more `step_ingredient` records to the collection */
  insertIntostep_ingredientCollection?: Maybe<Step_IngredientInsertResponse>;
  /** Adds one or more `user_ingredient` records to the collection */
  insertIntouser_ingredientCollection?: Maybe<User_IngredientInsertResponse>;
  /** Updates zero or more records in the `ingredient` collection */
  updateingredientCollection: IngredientUpdateResponse;
  /** Updates zero or more records in the `recipe` collection */
  updaterecipeCollection: RecipeUpdateResponse;
  /** Updates zero or more records in the `recipe_images` collection */
  updaterecipe_imagesCollection: Recipe_ImagesUpdateResponse;
  /** Updates zero or more records in the `recipe_ingredient` collection */
  updaterecipe_ingredientCollection: Recipe_IngredientUpdateResponse;
  /** Updates zero or more records in the `step` collection */
  updatestepCollection: StepUpdateResponse;
  /** Updates zero or more records in the `step_images` collection */
  updatestep_imagesCollection: Step_ImagesUpdateResponse;
  /** Updates zero or more records in the `step_ingredient` collection */
  updatestep_ingredientCollection: Step_IngredientUpdateResponse;
  /** Updates zero or more records in the `user_ingredient` collection */
  updateuser_ingredientCollection: User_IngredientUpdateResponse;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromingredientCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<IngredientFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromrecipeCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<RecipeFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromrecipe_ImagesCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Recipe_ImagesFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromrecipe_IngredientCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Recipe_IngredientFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromstepCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<StepFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromstep_ImagesCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Step_ImagesFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromstep_IngredientCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Step_IngredientFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromuser_IngredientCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<User_IngredientFilter>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoingredientCollectionArgs = {
  objects: Array<IngredientInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntorecipeCollectionArgs = {
  objects: Array<RecipeInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntorecipe_ImagesCollectionArgs = {
  objects: Array<Recipe_ImagesInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntorecipe_IngredientCollectionArgs = {
  objects: Array<Recipe_IngredientInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntostepCollectionArgs = {
  objects: Array<StepInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntostep_ImagesCollectionArgs = {
  objects: Array<Step_ImagesInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntostep_IngredientCollectionArgs = {
  objects: Array<Step_IngredientInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntouser_IngredientCollectionArgs = {
  objects: Array<User_IngredientInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationUpdateingredientCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<IngredientFilter>;
  set: IngredientUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdaterecipeCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<RecipeFilter>;
  set: RecipeUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdaterecipe_ImagesCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Recipe_ImagesFilter>;
  set: Recipe_ImagesUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdaterecipe_IngredientCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Recipe_IngredientFilter>;
  set: Recipe_IngredientUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdatestepCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<StepFilter>;
  set: StepUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdatestep_ImagesCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Step_ImagesFilter>;
  set: Step_ImagesUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdatestep_IngredientCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Step_IngredientFilter>;
  set: Step_IngredientUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateuser_IngredientCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<User_IngredientFilter>;
  set: User_IngredientUpdateInput;
};

export type Node = {
  /** Retrieves a record by `ID` */
  nodeId: Scalars['ID']['output'];
};

/** Boolean expression comparing fields on type "Opaque" */
export type OpaqueFilter = {
  eq?: InputMaybe<Scalars['Opaque']['input']>;
  is?: InputMaybe<FilterIs>;
};

/** Defines a per-field sorting order */
export enum OrderByDirection {
  /** Ascending order, nulls first */
  AscNullsFirst = 'AscNullsFirst',
  /** Ascending order, nulls last */
  AscNullsLast = 'AscNullsLast',
  /** Descending order, nulls first */
  DescNullsFirst = 'DescNullsFirst',
  /** Descending order, nulls last */
  DescNullsLast = 'DescNullsLast'
}

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  startCursor?: Maybe<Scalars['String']['output']>;
};

/** The root type for querying data */
export type Query = {
  __typename?: 'Query';
  /** A pagable collection of type `ingredient` */
  ingredientCollection?: Maybe<IngredientConnection>;
  /** Retrieve a record by its `ID` */
  node?: Maybe<Node>;
  /** A pagable collection of type `recipe` */
  recipeCollection?: Maybe<RecipeConnection>;
  /** A pagable collection of type `recipe_images` */
  recipe_imagesCollection?: Maybe<Recipe_ImagesConnection>;
  /** A pagable collection of type `recipe_ingredient` */
  recipe_ingredientCollection?: Maybe<Recipe_IngredientConnection>;
  /** A pagable collection of type `step` */
  stepCollection?: Maybe<StepConnection>;
  /** A pagable collection of type `step_images` */
  step_imagesCollection?: Maybe<Step_ImagesConnection>;
  /** A pagable collection of type `step_ingredient` */
  step_ingredientCollection?: Maybe<Step_IngredientConnection>;
  /** A pagable collection of type `user_ingredient` */
  user_ingredientCollection?: Maybe<User_IngredientConnection>;
};


/** The root type for querying data */
export type QueryIngredientCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<IngredientFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<IngredientOrderBy>>;
};


/** The root type for querying data */
export type QueryNodeArgs = {
  nodeId: Scalars['ID']['input'];
};


/** The root type for querying data */
export type QueryRecipeCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<RecipeFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<RecipeOrderBy>>;
};


/** The root type for querying data */
export type QueryRecipe_ImagesCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Recipe_ImagesFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Recipe_ImagesOrderBy>>;
};


/** The root type for querying data */
export type QueryRecipe_IngredientCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Recipe_IngredientFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Recipe_IngredientOrderBy>>;
};


/** The root type for querying data */
export type QueryStepCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<StepFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<StepOrderBy>>;
};


/** The root type for querying data */
export type QueryStep_ImagesCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Step_ImagesFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Step_ImagesOrderBy>>;
};


/** The root type for querying data */
export type QueryStep_IngredientCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Step_IngredientFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Step_IngredientOrderBy>>;
};


/** The root type for querying data */
export type QueryUser_IngredientCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<User_IngredientFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<User_IngredientOrderBy>>;
};

/** Boolean expression comparing fields on type "String" */
export type StringFilter = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  iregex?: InputMaybe<Scalars['String']['input']>;
  is?: InputMaybe<FilterIs>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  neq?: InputMaybe<Scalars['String']['input']>;
  regex?: InputMaybe<Scalars['String']['input']>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

/** Boolean expression comparing fields on type "StringList" */
export type StringListFilter = {
  containedBy?: InputMaybe<Array<Scalars['String']['input']>>;
  contains?: InputMaybe<Array<Scalars['String']['input']>>;
  eq?: InputMaybe<Array<Scalars['String']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** Boolean expression comparing fields on type "Time" */
export type TimeFilter = {
  eq?: InputMaybe<Scalars['Time']['input']>;
  gt?: InputMaybe<Scalars['Time']['input']>;
  gte?: InputMaybe<Scalars['Time']['input']>;
  in?: InputMaybe<Array<Scalars['Time']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Time']['input']>;
  lte?: InputMaybe<Scalars['Time']['input']>;
  neq?: InputMaybe<Scalars['Time']['input']>;
};

/** Boolean expression comparing fields on type "TimeList" */
export type TimeListFilter = {
  containedBy?: InputMaybe<Array<Scalars['Time']['input']>>;
  contains?: InputMaybe<Array<Scalars['Time']['input']>>;
  eq?: InputMaybe<Array<Scalars['Time']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['Time']['input']>>;
};

/** Boolean expression comparing fields on type "UUID" */
export type UuidFilter = {
  eq?: InputMaybe<Scalars['UUID']['input']>;
  in?: InputMaybe<Array<Scalars['UUID']['input']>>;
  is?: InputMaybe<FilterIs>;
  neq?: InputMaybe<Scalars['UUID']['input']>;
};

/** Boolean expression comparing fields on type "UUIDList" */
export type UuidListFilter = {
  containedBy?: InputMaybe<Array<Scalars['UUID']['input']>>;
  contains?: InputMaybe<Array<Scalars['UUID']['input']>>;
  eq?: InputMaybe<Array<Scalars['UUID']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['UUID']['input']>>;
};

export type Ingredient = Node & {
  __typename?: 'ingredient';
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  recipe_ingredientCollection?: Maybe<Recipe_IngredientConnection>;
};


export type IngredientRecipe_IngredientCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Recipe_IngredientFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Recipe_IngredientOrderBy>>;
};

export type IngredientConnection = {
  __typename?: 'ingredientConnection';
  edges: Array<IngredientEdge>;
  pageInfo: PageInfo;
};

export type IngredientDeleteResponse = {
  __typename?: 'ingredientDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Ingredient>;
};

export type IngredientEdge = {
  __typename?: 'ingredientEdge';
  cursor: Scalars['String']['output'];
  node: Ingredient;
};

export type IngredientFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<IngredientFilter>>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<IngredientFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<IngredientFilter>>;
};

export type IngredientInsertInput = {
  name?: InputMaybe<Scalars['String']['input']>;
};

export type IngredientInsertResponse = {
  __typename?: 'ingredientInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Ingredient>;
};

export type IngredientOrderBy = {
  id?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<OrderByDirection>;
};

export type IngredientUpdateInput = {
  name?: InputMaybe<Scalars['String']['input']>;
};

export type IngredientUpdateResponse = {
  __typename?: 'ingredientUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Ingredient>;
};

export type Recipe = Node & {
  __typename?: 'recipe';
  cook_time: Scalars['Int']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  prep_time: Scalars['Int']['output'];
  recipe_imagesCollection?: Maybe<Recipe_ImagesConnection>;
  recipe_ingredientCollection?: Maybe<Recipe_IngredientConnection>;
  servings: Scalars['Int']['output'];
  stepCollection?: Maybe<StepConnection>;
  user_id: Scalars['UUID']['output'];
};


export type RecipeRecipe_ImagesCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Recipe_ImagesFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Recipe_ImagesOrderBy>>;
};


export type RecipeRecipe_IngredientCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Recipe_IngredientFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Recipe_IngredientOrderBy>>;
};


export type RecipeStepCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<StepFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<StepOrderBy>>;
};

export type RecipeConnection = {
  __typename?: 'recipeConnection';
  edges: Array<RecipeEdge>;
  pageInfo: PageInfo;
};

export type RecipeDeleteResponse = {
  __typename?: 'recipeDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Recipe>;
};

export type RecipeEdge = {
  __typename?: 'recipeEdge';
  cursor: Scalars['String']['output'];
  node: Recipe;
};

export type RecipeFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<RecipeFilter>>;
  cook_time?: InputMaybe<IntFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<RecipeFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<RecipeFilter>>;
  prep_time?: InputMaybe<IntFilter>;
  servings?: InputMaybe<IntFilter>;
  user_id?: InputMaybe<UuidFilter>;
};

export type RecipeInsertInput = {
  cook_time?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  prep_time?: InputMaybe<Scalars['Int']['input']>;
  servings?: InputMaybe<Scalars['Int']['input']>;
  user_id?: InputMaybe<Scalars['UUID']['input']>;
};

export type RecipeInsertResponse = {
  __typename?: 'recipeInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Recipe>;
};

export type RecipeOrderBy = {
  cook_time?: InputMaybe<OrderByDirection>;
  description?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<OrderByDirection>;
  prep_time?: InputMaybe<OrderByDirection>;
  servings?: InputMaybe<OrderByDirection>;
  user_id?: InputMaybe<OrderByDirection>;
};

export type RecipeUpdateInput = {
  cook_time?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  prep_time?: InputMaybe<Scalars['Int']['input']>;
  servings?: InputMaybe<Scalars['Int']['input']>;
  user_id?: InputMaybe<Scalars['UUID']['input']>;
};

export type RecipeUpdateResponse = {
  __typename?: 'recipeUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Recipe>;
};

export type Recipe_Images = Node & {
  __typename?: 'recipe_images';
  id: Scalars['BigInt']['output'];
  image_url: Scalars['String']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  recipe?: Maybe<Recipe>;
  recipe_id: Scalars['BigInt']['output'];
};

export type Recipe_ImagesConnection = {
  __typename?: 'recipe_imagesConnection';
  edges: Array<Recipe_ImagesEdge>;
  pageInfo: PageInfo;
};

export type Recipe_ImagesDeleteResponse = {
  __typename?: 'recipe_imagesDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Recipe_Images>;
};

export type Recipe_ImagesEdge = {
  __typename?: 'recipe_imagesEdge';
  cursor: Scalars['String']['output'];
  node: Recipe_Images;
};

export type Recipe_ImagesFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<Recipe_ImagesFilter>>;
  id?: InputMaybe<BigIntFilter>;
  image_url?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<Recipe_ImagesFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<Recipe_ImagesFilter>>;
  recipe_id?: InputMaybe<BigIntFilter>;
};

export type Recipe_ImagesInsertInput = {
  image_url?: InputMaybe<Scalars['String']['input']>;
  recipe_id?: InputMaybe<Scalars['BigInt']['input']>;
};

export type Recipe_ImagesInsertResponse = {
  __typename?: 'recipe_imagesInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Recipe_Images>;
};

export type Recipe_ImagesOrderBy = {
  id?: InputMaybe<OrderByDirection>;
  image_url?: InputMaybe<OrderByDirection>;
  recipe_id?: InputMaybe<OrderByDirection>;
};

export type Recipe_ImagesUpdateInput = {
  image_url?: InputMaybe<Scalars['String']['input']>;
  recipe_id?: InputMaybe<Scalars['BigInt']['input']>;
};

export type Recipe_ImagesUpdateResponse = {
  __typename?: 'recipe_imagesUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Recipe_Images>;
};

export type Recipe_Ingredient = Node & {
  __typename?: 'recipe_ingredient';
  id: Scalars['Int']['output'];
  ingredient?: Maybe<Ingredient>;
  ingredient_id?: Maybe<Scalars['Int']['output']>;
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  quantity: Scalars['Int']['output'];
  recipe?: Maybe<Recipe>;
  recipe_id: Scalars['Int']['output'];
  step_ingredientCollection?: Maybe<Step_IngredientConnection>;
  unit?: Maybe<Scalars['String']['output']>;
  user_ingredient?: Maybe<User_Ingredient>;
  user_ingredient_id?: Maybe<Scalars['BigInt']['output']>;
};


export type Recipe_IngredientStep_IngredientCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Step_IngredientFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Step_IngredientOrderBy>>;
};

export type Recipe_IngredientConnection = {
  __typename?: 'recipe_ingredientConnection';
  edges: Array<Recipe_IngredientEdge>;
  pageInfo: PageInfo;
};

export type Recipe_IngredientDeleteResponse = {
  __typename?: 'recipe_ingredientDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Recipe_Ingredient>;
};

export type Recipe_IngredientEdge = {
  __typename?: 'recipe_ingredientEdge';
  cursor: Scalars['String']['output'];
  node: Recipe_Ingredient;
};

export type Recipe_IngredientFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<Recipe_IngredientFilter>>;
  id?: InputMaybe<IntFilter>;
  ingredient_id?: InputMaybe<IntFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<Recipe_IngredientFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<Recipe_IngredientFilter>>;
  quantity?: InputMaybe<IntFilter>;
  recipe_id?: InputMaybe<IntFilter>;
  unit?: InputMaybe<StringFilter>;
  user_ingredient_id?: InputMaybe<BigIntFilter>;
};

export type Recipe_IngredientInsertInput = {
  ingredient_id?: InputMaybe<Scalars['Int']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  recipe_id?: InputMaybe<Scalars['Int']['input']>;
  unit?: InputMaybe<Scalars['String']['input']>;
  user_ingredient_id?: InputMaybe<Scalars['BigInt']['input']>;
};

export type Recipe_IngredientInsertResponse = {
  __typename?: 'recipe_ingredientInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Recipe_Ingredient>;
};

export type Recipe_IngredientOrderBy = {
  id?: InputMaybe<OrderByDirection>;
  ingredient_id?: InputMaybe<OrderByDirection>;
  quantity?: InputMaybe<OrderByDirection>;
  recipe_id?: InputMaybe<OrderByDirection>;
  unit?: InputMaybe<OrderByDirection>;
  user_ingredient_id?: InputMaybe<OrderByDirection>;
};

export type Recipe_IngredientUpdateInput = {
  ingredient_id?: InputMaybe<Scalars['Int']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  recipe_id?: InputMaybe<Scalars['Int']['input']>;
  unit?: InputMaybe<Scalars['String']['input']>;
  user_ingredient_id?: InputMaybe<Scalars['BigInt']['input']>;
};

export type Recipe_IngredientUpdateResponse = {
  __typename?: 'recipe_ingredientUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Recipe_Ingredient>;
};

export type Step = Node & {
  __typename?: 'step';
  id: Scalars['Int']['output'];
  instruction: Scalars['String']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  recipe?: Maybe<Recipe>;
  recipe_id: Scalars['Int']['output'];
  step_imagesCollection?: Maybe<Step_ImagesConnection>;
  step_ingredientCollection?: Maybe<Step_IngredientConnection>;
  step_number: Scalars['Int']['output'];
  timer?: Maybe<Scalars['Int']['output']>;
};


export type StepStep_ImagesCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Step_ImagesFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Step_ImagesOrderBy>>;
};


export type StepStep_IngredientCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Step_IngredientFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Step_IngredientOrderBy>>;
};

export type StepConnection = {
  __typename?: 'stepConnection';
  edges: Array<StepEdge>;
  pageInfo: PageInfo;
};

export type StepDeleteResponse = {
  __typename?: 'stepDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Step>;
};

export type StepEdge = {
  __typename?: 'stepEdge';
  cursor: Scalars['String']['output'];
  node: Step;
};

export type StepFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<StepFilter>>;
  id?: InputMaybe<IntFilter>;
  instruction?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<StepFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<StepFilter>>;
  recipe_id?: InputMaybe<IntFilter>;
  step_number?: InputMaybe<IntFilter>;
  timer?: InputMaybe<IntFilter>;
};

export type StepInsertInput = {
  instruction?: InputMaybe<Scalars['String']['input']>;
  recipe_id?: InputMaybe<Scalars['Int']['input']>;
  step_number?: InputMaybe<Scalars['Int']['input']>;
  timer?: InputMaybe<Scalars['Int']['input']>;
};

export type StepInsertResponse = {
  __typename?: 'stepInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Step>;
};

export type StepOrderBy = {
  id?: InputMaybe<OrderByDirection>;
  instruction?: InputMaybe<OrderByDirection>;
  recipe_id?: InputMaybe<OrderByDirection>;
  step_number?: InputMaybe<OrderByDirection>;
  timer?: InputMaybe<OrderByDirection>;
};

export type StepUpdateInput = {
  instruction?: InputMaybe<Scalars['String']['input']>;
  recipe_id?: InputMaybe<Scalars['Int']['input']>;
  step_number?: InputMaybe<Scalars['Int']['input']>;
  timer?: InputMaybe<Scalars['Int']['input']>;
};

export type StepUpdateResponse = {
  __typename?: 'stepUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Step>;
};

export type Step_Images = Node & {
  __typename?: 'step_images';
  created_at?: Maybe<Scalars['Datetime']['output']>;
  id: Scalars['BigInt']['output'];
  image_url?: Maybe<Scalars['String']['output']>;
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  step?: Maybe<Step>;
  step_id?: Maybe<Scalars['BigInt']['output']>;
};

export type Step_ImagesConnection = {
  __typename?: 'step_imagesConnection';
  edges: Array<Step_ImagesEdge>;
  pageInfo: PageInfo;
};

export type Step_ImagesDeleteResponse = {
  __typename?: 'step_imagesDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Step_Images>;
};

export type Step_ImagesEdge = {
  __typename?: 'step_imagesEdge';
  cursor: Scalars['String']['output'];
  node: Step_Images;
};

export type Step_ImagesFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<Step_ImagesFilter>>;
  created_at?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<BigIntFilter>;
  image_url?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<Step_ImagesFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<Step_ImagesFilter>>;
  step_id?: InputMaybe<BigIntFilter>;
};

export type Step_ImagesInsertInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  image_url?: InputMaybe<Scalars['String']['input']>;
  step_id?: InputMaybe<Scalars['BigInt']['input']>;
};

export type Step_ImagesInsertResponse = {
  __typename?: 'step_imagesInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Step_Images>;
};

export type Step_ImagesOrderBy = {
  created_at?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  image_url?: InputMaybe<OrderByDirection>;
  step_id?: InputMaybe<OrderByDirection>;
};

export type Step_ImagesUpdateInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  image_url?: InputMaybe<Scalars['String']['input']>;
  step_id?: InputMaybe<Scalars['BigInt']['input']>;
};

export type Step_ImagesUpdateResponse = {
  __typename?: 'step_imagesUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Step_Images>;
};

export type Step_Ingredient = Node & {
  __typename?: 'step_ingredient';
  id: Scalars['Int']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  quantity: Scalars['Int']['output'];
  recipe_ingredient?: Maybe<Recipe_Ingredient>;
  recipe_ingredient_id: Scalars['Int']['output'];
  step?: Maybe<Step>;
  step_id: Scalars['Int']['output'];
};

export type Step_IngredientConnection = {
  __typename?: 'step_ingredientConnection';
  edges: Array<Step_IngredientEdge>;
  pageInfo: PageInfo;
};

export type Step_IngredientDeleteResponse = {
  __typename?: 'step_ingredientDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Step_Ingredient>;
};

export type Step_IngredientEdge = {
  __typename?: 'step_ingredientEdge';
  cursor: Scalars['String']['output'];
  node: Step_Ingredient;
};

export type Step_IngredientFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<Step_IngredientFilter>>;
  id?: InputMaybe<IntFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<Step_IngredientFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<Step_IngredientFilter>>;
  quantity?: InputMaybe<IntFilter>;
  recipe_ingredient_id?: InputMaybe<IntFilter>;
  step_id?: InputMaybe<IntFilter>;
};

export type Step_IngredientInsertInput = {
  quantity?: InputMaybe<Scalars['Int']['input']>;
  recipe_ingredient_id?: InputMaybe<Scalars['Int']['input']>;
  step_id?: InputMaybe<Scalars['Int']['input']>;
};

export type Step_IngredientInsertResponse = {
  __typename?: 'step_ingredientInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Step_Ingredient>;
};

export type Step_IngredientOrderBy = {
  id?: InputMaybe<OrderByDirection>;
  quantity?: InputMaybe<OrderByDirection>;
  recipe_ingredient_id?: InputMaybe<OrderByDirection>;
  step_id?: InputMaybe<OrderByDirection>;
};

export type Step_IngredientUpdateInput = {
  quantity?: InputMaybe<Scalars['Int']['input']>;
  recipe_ingredient_id?: InputMaybe<Scalars['Int']['input']>;
  step_id?: InputMaybe<Scalars['Int']['input']>;
};

export type Step_IngredientUpdateResponse = {
  __typename?: 'step_ingredientUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Step_Ingredient>;
};

export type User_Ingredient = Node & {
  __typename?: 'user_ingredient';
  id: Scalars['BigInt']['output'];
  name: Scalars['String']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  recipe_ingredientCollection?: Maybe<Recipe_IngredientConnection>;
  user_id: Scalars['UUID']['output'];
};


export type User_IngredientRecipe_IngredientCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Recipe_IngredientFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Recipe_IngredientOrderBy>>;
};

export type User_IngredientConnection = {
  __typename?: 'user_ingredientConnection';
  edges: Array<User_IngredientEdge>;
  pageInfo: PageInfo;
};

export type User_IngredientDeleteResponse = {
  __typename?: 'user_ingredientDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<User_Ingredient>;
};

export type User_IngredientEdge = {
  __typename?: 'user_ingredientEdge';
  cursor: Scalars['String']['output'];
  node: User_Ingredient;
};

export type User_IngredientFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<User_IngredientFilter>>;
  id?: InputMaybe<BigIntFilter>;
  name?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<User_IngredientFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<User_IngredientFilter>>;
  user_id?: InputMaybe<UuidFilter>;
};

export type User_IngredientInsertInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['UUID']['input']>;
};

export type User_IngredientInsertResponse = {
  __typename?: 'user_ingredientInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<User_Ingredient>;
};

export type User_IngredientOrderBy = {
  id?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<OrderByDirection>;
  user_id?: InputMaybe<OrderByDirection>;
};

export type User_IngredientUpdateInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['UUID']['input']>;
};

export type User_IngredientUpdateResponse = {
  __typename?: 'user_ingredientUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<User_Ingredient>;
};

export type GetRecipeByNodeIdQueryVariables = Exact<{
  nodeId: Scalars['ID']['input'];
}>;


export type GetRecipeByNodeIdQuery = { __typename?: 'Query', recipe?: { __typename?: 'ingredient' } | { __typename?: 'recipe', nodeId: string, name: string, prep_time: number, cook_time: number, servings: number, user_id: any, recipe_ingredientCollection?: { __typename?: 'recipe_ingredientConnection', edges: Array<{ __typename?: 'recipe_ingredientEdge', node: { __typename?: 'recipe_ingredient', quantity: number, unit?: string | null, ingredient?: { __typename?: 'ingredient', name: string } | null } }> } | null, stepCollection?: { __typename?: 'stepConnection', edges: Array<{ __typename?: 'stepEdge', node: { __typename?: 'step', step_number: number, instruction: string, timer?: number | null, step_ingredientCollection?: { __typename?: 'step_ingredientConnection', edges: Array<{ __typename?: 'step_ingredientEdge', node: { __typename?: 'step_ingredient', quantity: number, recipe_ingredient?: { __typename?: 'recipe_ingredient', ingredient?: { __typename?: 'ingredient', name: string } | null } | null } }> } | null } }> } | null } | { __typename?: 'recipe_images' } | { __typename?: 'recipe_ingredient' } | { __typename?: 'step' } | { __typename?: 'step_images' } | { __typename?: 'step_ingredient' } | { __typename?: 'user_ingredient' } | null };

export type GetAllRecipesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllRecipesQuery = { __typename?: 'Query', recipeCollection?: { __typename?: 'recipeConnection', edges: Array<{ __typename?: 'recipeEdge', node: { __typename?: 'recipe', nodeId: string, name: string, description?: string | null, prep_time: number, cook_time: number, servings: number, user_id: any, recipe_imagesCollection?: { __typename?: 'recipe_imagesConnection', edges: Array<{ __typename?: 'recipe_imagesEdge', node: { __typename?: 'recipe_images', image_url: string } }> } | null } }> } | null };


export const GetRecipeByNodeIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetRecipeByNodeId"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"nodeId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"recipe"},"name":{"kind":"Name","value":"node"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"nodeId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"nodeId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"recipe"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodeId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"prep_time"}},{"kind":"Field","name":{"kind":"Name","value":"cook_time"}},{"kind":"Field","name":{"kind":"Name","value":"servings"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"recipe_ingredientCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ingredient"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"unit"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"stepCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"step_number"}},{"kind":"Field","name":{"kind":"Name","value":"instruction"}},{"kind":"Field","name":{"kind":"Name","value":"timer"}},{"kind":"Field","name":{"kind":"Name","value":"step_ingredientCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"recipe_ingredient"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ingredient"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetRecipeByNodeIdQuery, GetRecipeByNodeIdQueryVariables>;
export const GetAllRecipesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllRecipes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"recipeCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"20"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodeId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"prep_time"}},{"kind":"Field","name":{"kind":"Name","value":"cook_time"}},{"kind":"Field","name":{"kind":"Name","value":"servings"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"recipe_imagesCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"1"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image_url"}}]}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetAllRecipesQuery, GetAllRecipesQueryVariables>;