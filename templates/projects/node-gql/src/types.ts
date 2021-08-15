import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
};

export type MutateVersionRequest = {
  body?: Maybe<Scalars['String']>,
};

export type MutateVersionResponse = {
   __typename?: 'MutateVersionResponse',
  response?: Maybe<MutateVersionResponseEnum>,
};

export enum MutateVersionResponseEnum {
  Ok = 'OK',
  Error = 'ERROR'
}

export type Mutation = {
   __typename?: 'Mutation',
  mutateVersion?: Maybe<MutateVersionResponse>,
  root?: Maybe<Scalars['String']>,
};


export type MutationMutateVersionArgs = {
  payload?: Maybe<MutateVersionRequest>
};

export type Query = {
   __typename?: 'Query',
  queryVersion?: Maybe<QueryVersionResponse>,
  root?: Maybe<Scalars['String']>,
};

export type QueryVersionResponse = {
   __typename?: 'QueryVersionResponse',
  name?: Maybe<Scalars['String']>,
  version?: Maybe<Scalars['String']>,
  node?: Maybe<Scalars['String']>,
};



export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;


export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Query: ResolverTypeWrapper<{}>,
  QueryVersionResponse: ResolverTypeWrapper<QueryVersionResponse>,
  String: ResolverTypeWrapper<Scalars['String']>,
  Mutation: ResolverTypeWrapper<{}>,
  MutateVersionRequest: MutateVersionRequest,
  MutateVersionResponse: ResolverTypeWrapper<MutateVersionResponse>,
  MutateVersionResponseEnum: MutateVersionResponseEnum,
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>,
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {},
  QueryVersionResponse: QueryVersionResponse,
  String: Scalars['String'],
  Mutation: {},
  MutateVersionRequest: MutateVersionRequest,
  MutateVersionResponse: MutateVersionResponse,
  MutateVersionResponseEnum: MutateVersionResponseEnum,
  Boolean: Scalars['Boolean'],
};

export type MutateVersionResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['MutateVersionResponse'] = ResolversParentTypes['MutateVersionResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['MutateVersionResponseEnum']>, ParentType, ContextType>,
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  mutateVersion?: Resolver<Maybe<ResolversTypes['MutateVersionResponse']>, ParentType, ContextType, MutationMutateVersionArgs>,
  root?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  queryVersion?: Resolver<Maybe<ResolversTypes['QueryVersionResponse']>, ParentType, ContextType>,
  root?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type QueryVersionResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['QueryVersionResponse'] = ResolversParentTypes['QueryVersionResponse']> = {
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  node?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type Resolvers<ContextType = any> = {
  MutateVersionResponse?: MutateVersionResponseResolvers<ContextType>,
  Mutation?: MutationResolvers<ContextType>,
  Query?: QueryResolvers<ContextType>,
  QueryVersionResponse?: QueryVersionResponseResolvers<ContextType>,
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
*/
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
