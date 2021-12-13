//@ts-nocheck
// DO NOT MODIFY THIS FILE. This file is automatically generated by Tina
import { gql } from 'tinacms';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** References another document, used as a foreign key */
  Reference: any;
  JSON: any;
};

export type SystemInfo = {
  __typename?: 'SystemInfo';
  filename: Scalars['String'];
  basename: Scalars['String'];
  breadcrumbs: Array<Scalars['String']>;
  path: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  template: Scalars['String'];
  collection: Collection;
};


export type SystemInfoBreadcrumbsArgs = {
  excludeExtension?: InputMaybe<Scalars['Boolean']>;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  hasPreviousPage: Scalars['Boolean'];
  hasNextPage: Scalars['Boolean'];
  startCursor: Scalars['String'];
  endCursor: Scalars['String'];
};

export type Node = {
  id: Scalars['ID'];
};

export type Document = {
  sys?: Maybe<SystemInfo>;
  id: Scalars['ID'];
  form: Scalars['JSON'];
  values: Scalars['JSON'];
};

/** A relay-compliant pagination connection */
export type Connection = {
  totalCount: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  getCollection: Collection;
  getCollections: Array<Collection>;
  node: Node;
  getDocument: DocumentNode;
  getDocumentList: DocumentConnection;
  getDocumentFields: Scalars['JSON'];
  getMenusDocument: MenusDocument;
  getMenusList: MenusConnection;
  getPostsDocument: PostsDocument;
  getPostsList: PostsConnection;
};


export type QueryGetCollectionArgs = {
  collection?: InputMaybe<Scalars['String']>;
};


export type QueryNodeArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type QueryGetDocumentArgs = {
  collection?: InputMaybe<Scalars['String']>;
  relativePath?: InputMaybe<Scalars['String']>;
};


export type QueryGetDocumentListArgs = {
  before?: InputMaybe<Scalars['String']>;
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type QueryGetMenusDocumentArgs = {
  relativePath?: InputMaybe<Scalars['String']>;
};


export type QueryGetMenusListArgs = {
  before?: InputMaybe<Scalars['String']>;
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type QueryGetPostsDocumentArgs = {
  relativePath?: InputMaybe<Scalars['String']>;
};


export type QueryGetPostsListArgs = {
  before?: InputMaybe<Scalars['String']>;
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

export type DocumentConnectionEdges = {
  __typename?: 'DocumentConnectionEdges';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<DocumentNode>;
};

export type DocumentConnection = Connection & {
  __typename?: 'DocumentConnection';
  pageInfo?: Maybe<PageInfo>;
  totalCount: Scalars['Int'];
  edges?: Maybe<Array<Maybe<DocumentConnectionEdges>>>;
};

export type Collection = {
  __typename?: 'Collection';
  name: Scalars['String'];
  slug: Scalars['String'];
  label: Scalars['String'];
  path: Scalars['String'];
  format?: Maybe<Scalars['String']>;
  matches?: Maybe<Scalars['String']>;
  templates?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  fields?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  documents: DocumentConnection;
};


export type CollectionDocumentsArgs = {
  before?: InputMaybe<Scalars['String']>;
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

export type DocumentNode = MenusDocument | PostsDocument;

export type MenusMenuSectionsItemsModifiers = {
  __typename?: 'MenusMenuSectionsItemsModifiers';
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
};

export type MenusMenuSectionsItemsImage = {
  __typename?: 'MenusMenuSectionsItemsImage';
  name: Scalars['String'];
  src: Scalars['String'];
};

export type MenusMenuSectionsItems = {
  __typename?: 'MenusMenuSectionsItems';
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
  dietary?: Maybe<Array<Maybe<Scalars['String']>>>;
  modifiers?: Maybe<Array<Maybe<MenusMenuSectionsItemsModifiers>>>;
  available?: Maybe<Scalars['Boolean']>;
  image?: Maybe<Array<Maybe<MenusMenuSectionsItemsImage>>>;
};

export type MenusMenuSections = {
  __typename?: 'MenusMenuSections';
  name?: Maybe<Scalars['String']>;
  items?: Maybe<Array<Maybe<MenusMenuSectionsItems>>>;
};

export type MenusMenu = {
  __typename?: 'MenusMenu';
  name?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  sections?: Maybe<Array<Maybe<MenusMenuSections>>>;
};

export type Menus = {
  __typename?: 'Menus';
  menu?: Maybe<Array<Maybe<MenusMenu>>>;
};

export type MenusDocument = Node & Document & {
  __typename?: 'MenusDocument';
  id: Scalars['ID'];
  sys: SystemInfo;
  data: Menus;
  form: Scalars['JSON'];
  values: Scalars['JSON'];
  dataJSON: Scalars['JSON'];
};

export type MenusConnectionEdges = {
  __typename?: 'MenusConnectionEdges';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<MenusDocument>;
};

export type MenusConnection = Connection & {
  __typename?: 'MenusConnection';
  pageInfo?: Maybe<PageInfo>;
  totalCount: Scalars['Int'];
  edges?: Maybe<Array<Maybe<MenusConnectionEdges>>>;
};

export type Posts = {
  __typename?: 'Posts';
  title?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
};

export type PostsDocument = Node & Document & {
  __typename?: 'PostsDocument';
  id: Scalars['ID'];
  sys: SystemInfo;
  data: Posts;
  form: Scalars['JSON'];
  values: Scalars['JSON'];
  dataJSON: Scalars['JSON'];
};

export type PostsConnectionEdges = {
  __typename?: 'PostsConnectionEdges';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<PostsDocument>;
};

export type PostsConnection = Connection & {
  __typename?: 'PostsConnection';
  pageInfo?: Maybe<PageInfo>;
  totalCount: Scalars['Int'];
  edges?: Maybe<Array<Maybe<PostsConnectionEdges>>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addPendingDocument: DocumentNode;
  updateDocument: DocumentNode;
  createDocument: DocumentNode;
  updateMenusDocument: MenusDocument;
  createMenusDocument: MenusDocument;
  updatePostsDocument: PostsDocument;
  createPostsDocument: PostsDocument;
};


export type MutationAddPendingDocumentArgs = {
  collection: Scalars['String'];
  relativePath: Scalars['String'];
  template?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateDocumentArgs = {
  collection?: InputMaybe<Scalars['String']>;
  relativePath: Scalars['String'];
  params: DocumentMutation;
};


export type MutationCreateDocumentArgs = {
  collection?: InputMaybe<Scalars['String']>;
  relativePath: Scalars['String'];
  params: DocumentMutation;
};


export type MutationUpdateMenusDocumentArgs = {
  relativePath: Scalars['String'];
  params: MenusMutation;
};


export type MutationCreateMenusDocumentArgs = {
  relativePath: Scalars['String'];
  params: MenusMutation;
};


export type MutationUpdatePostsDocumentArgs = {
  relativePath: Scalars['String'];
  params: PostsMutation;
};


export type MutationCreatePostsDocumentArgs = {
  relativePath: Scalars['String'];
  params: PostsMutation;
};

export type DocumentMutation = {
  menus?: InputMaybe<MenusMutation>;
  posts?: InputMaybe<PostsMutation>;
};

export type MenusMenuSectionsItemsModifiersMutation = {
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Int']>;
};

export type MenusMenuSectionsItemsImageMutation = {
  name?: InputMaybe<Scalars['String']>;
  src?: InputMaybe<Scalars['String']>;
};

export type MenusMenuSectionsItemsMutation = {
  name?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Int']>;
  dietary?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  modifiers?: InputMaybe<Array<InputMaybe<MenusMenuSectionsItemsModifiersMutation>>>;
  available?: InputMaybe<Scalars['Boolean']>;
  image?: InputMaybe<Array<InputMaybe<MenusMenuSectionsItemsImageMutation>>>;
};

export type MenusMenuSectionsMutation = {
  name?: InputMaybe<Scalars['String']>;
  items?: InputMaybe<Array<InputMaybe<MenusMenuSectionsItemsMutation>>>;
};

export type MenusMenuMutation = {
  name?: InputMaybe<Scalars['String']>;
  label?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  sections?: InputMaybe<Array<InputMaybe<MenusMenuSectionsMutation>>>;
};

export type MenusMutation = {
  menu?: InputMaybe<Array<InputMaybe<MenusMenuMutation>>>;
};

export type PostsMutation = {
  title?: InputMaybe<Scalars['String']>;
  body?: InputMaybe<Scalars['String']>;
};

export type MenusPartsFragment = { __typename?: 'Menus', menu?: Array<{ __typename: 'MenusMenu', name?: string | null | undefined, label?: string | null | undefined, description?: string | null | undefined, sections?: Array<{ __typename: 'MenusMenuSections', name?: string | null | undefined, items?: Array<{ __typename: 'MenusMenuSectionsItems', name?: string | null | undefined, description?: string | null | undefined, price?: number | null | undefined, dietary?: Array<string | null | undefined> | null | undefined, available?: boolean | null | undefined, modifiers?: Array<{ __typename: 'MenusMenuSectionsItemsModifiers', name?: string | null | undefined, price?: number | null | undefined } | null | undefined> | null | undefined, image?: Array<{ __typename: 'MenusMenuSectionsItemsImage', name: string, src: string } | null | undefined> | null | undefined } | null | undefined> | null | undefined } | null | undefined> | null | undefined } | null | undefined> | null | undefined };

export type PostsPartsFragment = { __typename?: 'Posts', title?: string | null | undefined, body?: string | null | undefined };

export type GetMenusDocumentQueryVariables = Exact<{
  relativePath: Scalars['String'];
}>;


export type GetMenusDocumentQuery = { __typename?: 'Query', getMenusDocument: { __typename?: 'MenusDocument', id: string, sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string }, data: { __typename?: 'Menus', menu?: Array<{ __typename: 'MenusMenu', name?: string | null | undefined, label?: string | null | undefined, description?: string | null | undefined, sections?: Array<{ __typename: 'MenusMenuSections', name?: string | null | undefined, items?: Array<{ __typename: 'MenusMenuSectionsItems', name?: string | null | undefined, description?: string | null | undefined, price?: number | null | undefined, dietary?: Array<string | null | undefined> | null | undefined, available?: boolean | null | undefined, modifiers?: Array<{ __typename: 'MenusMenuSectionsItemsModifiers', name?: string | null | undefined, price?: number | null | undefined } | null | undefined> | null | undefined, image?: Array<{ __typename: 'MenusMenuSectionsItemsImage', name: string, src: string } | null | undefined> | null | undefined } | null | undefined> | null | undefined } | null | undefined> | null | undefined } | null | undefined> | null | undefined } } };

export type GetMenusListQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMenusListQuery = { __typename?: 'Query', getMenusList: { __typename?: 'MenusConnection', totalCount: number, edges?: Array<{ __typename?: 'MenusConnectionEdges', node?: { __typename?: 'MenusDocument', id: string, sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string }, data: { __typename?: 'Menus', menu?: Array<{ __typename: 'MenusMenu', name?: string | null | undefined, label?: string | null | undefined, description?: string | null | undefined, sections?: Array<{ __typename: 'MenusMenuSections', name?: string | null | undefined, items?: Array<{ __typename: 'MenusMenuSectionsItems', name?: string | null | undefined, description?: string | null | undefined, price?: number | null | undefined, dietary?: Array<string | null | undefined> | null | undefined, available?: boolean | null | undefined, modifiers?: Array<{ __typename: 'MenusMenuSectionsItemsModifiers', name?: string | null | undefined, price?: number | null | undefined } | null | undefined> | null | undefined, image?: Array<{ __typename: 'MenusMenuSectionsItemsImage', name: string, src: string } | null | undefined> | null | undefined } | null | undefined> | null | undefined } | null | undefined> | null | undefined } | null | undefined> | null | undefined } } | null | undefined } | null | undefined> | null | undefined } };

export type GetPostsDocumentQueryVariables = Exact<{
  relativePath: Scalars['String'];
}>;


export type GetPostsDocumentQuery = { __typename?: 'Query', getPostsDocument: { __typename?: 'PostsDocument', id: string, sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string }, data: { __typename?: 'Posts', title?: string | null | undefined, body?: string | null | undefined } } };

export type GetPostsListQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPostsListQuery = { __typename?: 'Query', getPostsList: { __typename?: 'PostsConnection', totalCount: number, edges?: Array<{ __typename?: 'PostsConnectionEdges', node?: { __typename?: 'PostsDocument', id: string, sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string }, data: { __typename?: 'Posts', title?: string | null | undefined, body?: string | null | undefined } } | null | undefined } | null | undefined> | null | undefined } };

export const MenusPartsFragmentDoc = gql`
    fragment MenusParts on Menus {
  menu {
    __typename
    name
    label
    description
    sections {
      __typename
      name
      items {
        __typename
        name
        description
        price
        dietary
        modifiers {
          __typename
          name
          price
        }
        available
        image {
          __typename
          name
          src
        }
      }
    }
  }
}
    `;
export const PostsPartsFragmentDoc = gql`
    fragment PostsParts on Posts {
  title
  body
}
    `;
export const GetMenusDocumentDocument = gql`
    query getMenusDocument($relativePath: String!) {
  getMenusDocument(relativePath: $relativePath) {
    sys {
      filename
      basename
      breadcrumbs
      path
      relativePath
      extension
    }
    id
    data {
      ...MenusParts
    }
  }
}
    ${MenusPartsFragmentDoc}`;
export const GetMenusListDocument = gql`
    query getMenusList {
  getMenusList {
    totalCount
    edges {
      node {
        id
        sys {
          filename
          basename
          breadcrumbs
          path
          relativePath
          extension
        }
        data {
          ...MenusParts
        }
      }
    }
  }
}
    ${MenusPartsFragmentDoc}`;
export const GetPostsDocumentDocument = gql`
    query getPostsDocument($relativePath: String!) {
  getPostsDocument(relativePath: $relativePath) {
    sys {
      filename
      basename
      breadcrumbs
      path
      relativePath
      extension
    }
    id
    data {
      ...PostsParts
    }
  }
}
    ${PostsPartsFragmentDoc}`;
export const GetPostsListDocument = gql`
    query getPostsList {
  getPostsList {
    totalCount
    edges {
      node {
        id
        sys {
          filename
          basename
          breadcrumbs
          path
          relativePath
          extension
        }
        data {
          ...PostsParts
        }
      }
    }
  }
}
    ${PostsPartsFragmentDoc}`;
export type Requester<C= {}> = <R, V>(doc: DocumentNode, vars?: V, options?: C) => Promise<R>
  export function getSdk<C>(requester: Requester<C>) {
    return {
      getMenusDocument(variables: GetMenusDocumentQueryVariables, options?: C): Promise<{data: GetMenusDocumentQuery, variables: GetMenusDocumentQueryVariables, query: string}> {
        return requester<{data: GetMenusDocumentQuery, variables: GetMenusDocumentQueryVariables, query: string}, GetMenusDocumentQueryVariables>(GetMenusDocumentDocument, variables, options);
      },
    getMenusList(variables?: GetMenusListQueryVariables, options?: C): Promise<{data: GetMenusListQuery, variables: GetMenusListQueryVariables, query: string}> {
        return requester<{data: GetMenusListQuery, variables: GetMenusListQueryVariables, query: string}, GetMenusListQueryVariables>(GetMenusListDocument, variables, options);
      },
    getPostsDocument(variables: GetPostsDocumentQueryVariables, options?: C): Promise<{data: GetPostsDocumentQuery, variables: GetPostsDocumentQueryVariables, query: string}> {
        return requester<{data: GetPostsDocumentQuery, variables: GetPostsDocumentQueryVariables, query: string}, GetPostsDocumentQueryVariables>(GetPostsDocumentDocument, variables, options);
      },
    getPostsList(variables?: GetPostsListQueryVariables, options?: C): Promise<{data: GetPostsListQuery, variables: GetPostsListQueryVariables, query: string}> {
        return requester<{data: GetPostsListQuery, variables: GetPostsListQueryVariables, query: string}, GetPostsListQueryVariables>(GetPostsListDocument, variables, options);
      }
    };
  }
  export type Sdk = ReturnType<typeof getSdk>;

// TinaSDK generated code
import { getStaticPropsForTina } from 'tinacms'
const requester: (doc: any, vars?: any, options?: any) => Promise<any> = async (
  doc,
  vars,
  _options
) => {
  // const data = await tinaClient.request(doc, { variables: vars }); 
  const res = await await getStaticPropsForTina({query: doc, variables: vars})
  return res
};

/**
 * @experimental this class can be used but may change in the future
 **/
export const ExperimentalGetTinaClient = ()=>getSdk(requester)
