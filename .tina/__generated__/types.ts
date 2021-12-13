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
  getSectionDocument: SectionDocument;
  getSectionList: SectionConnection;
  getMenuItemDocument: MenuItemDocument;
  getMenuItemList: MenuItemConnection;
  getMenuDocument: MenuDocument;
  getMenuList: MenuConnection;
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


export type QueryGetSectionDocumentArgs = {
  relativePath?: InputMaybe<Scalars['String']>;
};


export type QueryGetSectionListArgs = {
  before?: InputMaybe<Scalars['String']>;
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type QueryGetMenuItemDocumentArgs = {
  relativePath?: InputMaybe<Scalars['String']>;
};


export type QueryGetMenuItemListArgs = {
  before?: InputMaybe<Scalars['String']>;
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type QueryGetMenuDocumentArgs = {
  relativePath?: InputMaybe<Scalars['String']>;
};


export type QueryGetMenuListArgs = {
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

export type DocumentNode = SectionDocument | MenuItemDocument | MenuDocument | PostsDocument;

export type Section = {
  __typename?: 'Section';
  name?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type SectionDocument = Node & Document & {
  __typename?: 'SectionDocument';
  id: Scalars['ID'];
  sys: SystemInfo;
  data: Section;
  form: Scalars['JSON'];
  values: Scalars['JSON'];
  dataJSON: Scalars['JSON'];
};

export type SectionConnectionEdges = {
  __typename?: 'SectionConnectionEdges';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<SectionDocument>;
};

export type SectionConnection = Connection & {
  __typename?: 'SectionConnection';
  pageInfo?: Maybe<PageInfo>;
  totalCount: Scalars['Int'];
  edges?: Maybe<Array<Maybe<SectionConnectionEdges>>>;
};

export type MenuItemModifier = {
  __typename?: 'MenuItemModifier';
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
};

export type MenuItem = {
  __typename?: 'MenuItem';
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
  dietary?: Maybe<Array<Maybe<Scalars['String']>>>;
  modifier?: Maybe<Array<Maybe<MenuItemModifier>>>;
  available?: Maybe<Scalars['Boolean']>;
};

export type MenuItemDocument = Node & Document & {
  __typename?: 'MenuItemDocument';
  id: Scalars['ID'];
  sys: SystemInfo;
  data: MenuItem;
  form: Scalars['JSON'];
  values: Scalars['JSON'];
  dataJSON: Scalars['JSON'];
};

export type MenuItemConnectionEdges = {
  __typename?: 'MenuItemConnectionEdges';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<MenuItemDocument>;
};

export type MenuItemConnection = Connection & {
  __typename?: 'MenuItemConnection';
  pageInfo?: Maybe<PageInfo>;
  totalCount: Scalars['Int'];
  edges?: Maybe<Array<Maybe<MenuItemConnectionEdges>>>;
};

export type MenuSection1Document = SectionDocument;

export type MenuSectionItemModifier = {
  __typename?: 'MenuSectionItemModifier';
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
};

export type MenuSectionItem = {
  __typename?: 'MenuSectionItem';
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
  dietary?: Maybe<Array<Maybe<Scalars['String']>>>;
  modifier?: Maybe<Array<Maybe<MenuSectionItemModifier>>>;
  available?: Maybe<Scalars['Boolean']>;
};

export type MenuSection = {
  __typename?: 'MenuSection';
  name?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  item?: Maybe<Array<Maybe<MenuSectionItem>>>;
};

export type Menu = {
  __typename?: 'Menu';
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  section1?: Maybe<MenuSection1Document>;
  section?: Maybe<Array<Maybe<MenuSection>>>;
};

export type MenuDocument = Node & Document & {
  __typename?: 'MenuDocument';
  id: Scalars['ID'];
  sys: SystemInfo;
  data: Menu;
  form: Scalars['JSON'];
  values: Scalars['JSON'];
  dataJSON: Scalars['JSON'];
};

export type MenuConnectionEdges = {
  __typename?: 'MenuConnectionEdges';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<MenuDocument>;
};

export type MenuConnection = Connection & {
  __typename?: 'MenuConnection';
  pageInfo?: Maybe<PageInfo>;
  totalCount: Scalars['Int'];
  edges?: Maybe<Array<Maybe<MenuConnectionEdges>>>;
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
  updateSectionDocument: SectionDocument;
  createSectionDocument: SectionDocument;
  updateMenuItemDocument: MenuItemDocument;
  createMenuItemDocument: MenuItemDocument;
  updateMenuDocument: MenuDocument;
  createMenuDocument: MenuDocument;
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


export type MutationUpdateSectionDocumentArgs = {
  relativePath: Scalars['String'];
  params: SectionMutation;
};


export type MutationCreateSectionDocumentArgs = {
  relativePath: Scalars['String'];
  params: SectionMutation;
};


export type MutationUpdateMenuItemDocumentArgs = {
  relativePath: Scalars['String'];
  params: MenuItemMutation;
};


export type MutationCreateMenuItemDocumentArgs = {
  relativePath: Scalars['String'];
  params: MenuItemMutation;
};


export type MutationUpdateMenuDocumentArgs = {
  relativePath: Scalars['String'];
  params: MenuMutation;
};


export type MutationCreateMenuDocumentArgs = {
  relativePath: Scalars['String'];
  params: MenuMutation;
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
  section?: InputMaybe<SectionMutation>;
  menuItem?: InputMaybe<MenuItemMutation>;
  menu?: InputMaybe<MenuMutation>;
  posts?: InputMaybe<PostsMutation>;
};

export type SectionMutation = {
  name?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type MenuItemModifierMutation = {
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Int']>;
};

export type MenuItemMutation = {
  name?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Int']>;
  dietary?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  modifier?: InputMaybe<Array<InputMaybe<MenuItemModifierMutation>>>;
  available?: InputMaybe<Scalars['Boolean']>;
};

export type MenuSectionItemModifierMutation = {
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Int']>;
};

export type MenuSectionItemMutation = {
  name?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Int']>;
  dietary?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  modifier?: InputMaybe<Array<InputMaybe<MenuSectionItemModifierMutation>>>;
  available?: InputMaybe<Scalars['Boolean']>;
};

export type MenuSectionMutation = {
  name?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  item?: InputMaybe<Array<InputMaybe<MenuSectionItemMutation>>>;
};

export type MenuMutation = {
  name?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  section1?: InputMaybe<Scalars['String']>;
  section?: InputMaybe<Array<InputMaybe<MenuSectionMutation>>>;
};

export type PostsMutation = {
  title?: InputMaybe<Scalars['String']>;
  body?: InputMaybe<Scalars['String']>;
};

export type SectionPartsFragment = { __typename?: 'Section', name?: string | null | undefined, title?: string | null | undefined };

export type MenuItemPartsFragment = { __typename?: 'MenuItem', name?: string | null | undefined, description?: string | null | undefined, price?: number | null | undefined, dietary?: Array<string | null | undefined> | null | undefined, available?: boolean | null | undefined, modifier?: Array<{ __typename: 'MenuItemModifier', name?: string | null | undefined, price?: number | null | undefined } | null | undefined> | null | undefined };

export type MenuPartsFragment = { __typename?: 'Menu', name?: string | null | undefined, description?: string | null | undefined, section1?: { __typename?: 'SectionDocument', id: string } | null | undefined, section?: Array<{ __typename: 'MenuSection', name?: string | null | undefined, title?: string | null | undefined, item?: Array<{ __typename: 'MenuSectionItem', name?: string | null | undefined, description?: string | null | undefined, price?: number | null | undefined, dietary?: Array<string | null | undefined> | null | undefined, available?: boolean | null | undefined, modifier?: Array<{ __typename: 'MenuSectionItemModifier', name?: string | null | undefined, price?: number | null | undefined } | null | undefined> | null | undefined } | null | undefined> | null | undefined } | null | undefined> | null | undefined };

export type PostsPartsFragment = { __typename?: 'Posts', title?: string | null | undefined, body?: string | null | undefined };

export type GetSectionDocumentQueryVariables = Exact<{
  relativePath: Scalars['String'];
}>;


export type GetSectionDocumentQuery = { __typename?: 'Query', getSectionDocument: { __typename?: 'SectionDocument', id: string, sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string }, data: { __typename?: 'Section', name?: string | null | undefined, title?: string | null | undefined } } };

export type GetSectionListQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSectionListQuery = { __typename?: 'Query', getSectionList: { __typename?: 'SectionConnection', totalCount: number, edges?: Array<{ __typename?: 'SectionConnectionEdges', node?: { __typename?: 'SectionDocument', id: string, sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string }, data: { __typename?: 'Section', name?: string | null | undefined, title?: string | null | undefined } } | null | undefined } | null | undefined> | null | undefined } };

export type GetMenuItemDocumentQueryVariables = Exact<{
  relativePath: Scalars['String'];
}>;


export type GetMenuItemDocumentQuery = { __typename?: 'Query', getMenuItemDocument: { __typename?: 'MenuItemDocument', id: string, sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string }, data: { __typename?: 'MenuItem', name?: string | null | undefined, description?: string | null | undefined, price?: number | null | undefined, dietary?: Array<string | null | undefined> | null | undefined, available?: boolean | null | undefined, modifier?: Array<{ __typename: 'MenuItemModifier', name?: string | null | undefined, price?: number | null | undefined } | null | undefined> | null | undefined } } };

export type GetMenuItemListQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMenuItemListQuery = { __typename?: 'Query', getMenuItemList: { __typename?: 'MenuItemConnection', totalCount: number, edges?: Array<{ __typename?: 'MenuItemConnectionEdges', node?: { __typename?: 'MenuItemDocument', id: string, sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string }, data: { __typename?: 'MenuItem', name?: string | null | undefined, description?: string | null | undefined, price?: number | null | undefined, dietary?: Array<string | null | undefined> | null | undefined, available?: boolean | null | undefined, modifier?: Array<{ __typename: 'MenuItemModifier', name?: string | null | undefined, price?: number | null | undefined } | null | undefined> | null | undefined } } | null | undefined } | null | undefined> | null | undefined } };

export type GetMenuDocumentQueryVariables = Exact<{
  relativePath: Scalars['String'];
}>;


export type GetMenuDocumentQuery = { __typename?: 'Query', getMenuDocument: { __typename?: 'MenuDocument', id: string, sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string }, data: { __typename?: 'Menu', name?: string | null | undefined, description?: string | null | undefined, section1?: { __typename?: 'SectionDocument', id: string } | null | undefined, section?: Array<{ __typename: 'MenuSection', name?: string | null | undefined, title?: string | null | undefined, item?: Array<{ __typename: 'MenuSectionItem', name?: string | null | undefined, description?: string | null | undefined, price?: number | null | undefined, dietary?: Array<string | null | undefined> | null | undefined, available?: boolean | null | undefined, modifier?: Array<{ __typename: 'MenuSectionItemModifier', name?: string | null | undefined, price?: number | null | undefined } | null | undefined> | null | undefined } | null | undefined> | null | undefined } | null | undefined> | null | undefined } } };

export type GetMenuListQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMenuListQuery = { __typename?: 'Query', getMenuList: { __typename?: 'MenuConnection', totalCount: number, edges?: Array<{ __typename?: 'MenuConnectionEdges', node?: { __typename?: 'MenuDocument', id: string, sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string }, data: { __typename?: 'Menu', name?: string | null | undefined, description?: string | null | undefined, section1?: { __typename?: 'SectionDocument', id: string } | null | undefined, section?: Array<{ __typename: 'MenuSection', name?: string | null | undefined, title?: string | null | undefined, item?: Array<{ __typename: 'MenuSectionItem', name?: string | null | undefined, description?: string | null | undefined, price?: number | null | undefined, dietary?: Array<string | null | undefined> | null | undefined, available?: boolean | null | undefined, modifier?: Array<{ __typename: 'MenuSectionItemModifier', name?: string | null | undefined, price?: number | null | undefined } | null | undefined> | null | undefined } | null | undefined> | null | undefined } | null | undefined> | null | undefined } } | null | undefined } | null | undefined> | null | undefined } };

export type GetPostsDocumentQueryVariables = Exact<{
  relativePath: Scalars['String'];
}>;


export type GetPostsDocumentQuery = { __typename?: 'Query', getPostsDocument: { __typename?: 'PostsDocument', id: string, sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string }, data: { __typename?: 'Posts', title?: string | null | undefined, body?: string | null | undefined } } };

export type GetPostsListQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPostsListQuery = { __typename?: 'Query', getPostsList: { __typename?: 'PostsConnection', totalCount: number, edges?: Array<{ __typename?: 'PostsConnectionEdges', node?: { __typename?: 'PostsDocument', id: string, sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string }, data: { __typename?: 'Posts', title?: string | null | undefined, body?: string | null | undefined } } | null | undefined } | null | undefined> | null | undefined } };

export const SectionPartsFragmentDoc = gql`
    fragment SectionParts on Section {
  name
  title
}
    `;
export const MenuItemPartsFragmentDoc = gql`
    fragment MenuItemParts on MenuItem {
  name
  description
  price
  dietary
  modifier {
    __typename
    name
    price
  }
  available
}
    `;
export const MenuPartsFragmentDoc = gql`
    fragment MenuParts on Menu {
  name
  description
  section1 {
    ... on Document {
      id
    }
  }
  section {
    __typename
    name
    title
    item {
      __typename
      name
      description
      price
      dietary
      modifier {
        __typename
        name
        price
      }
      available
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
export const GetSectionDocumentDocument = gql`
    query getSectionDocument($relativePath: String!) {
  getSectionDocument(relativePath: $relativePath) {
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
      ...SectionParts
    }
  }
}
    ${SectionPartsFragmentDoc}`;
export const GetSectionListDocument = gql`
    query getSectionList {
  getSectionList {
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
          ...SectionParts
        }
      }
    }
  }
}
    ${SectionPartsFragmentDoc}`;
export const GetMenuItemDocumentDocument = gql`
    query getMenuItemDocument($relativePath: String!) {
  getMenuItemDocument(relativePath: $relativePath) {
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
      ...MenuItemParts
    }
  }
}
    ${MenuItemPartsFragmentDoc}`;
export const GetMenuItemListDocument = gql`
    query getMenuItemList {
  getMenuItemList {
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
          ...MenuItemParts
        }
      }
    }
  }
}
    ${MenuItemPartsFragmentDoc}`;
export const GetMenuDocumentDocument = gql`
    query getMenuDocument($relativePath: String!) {
  getMenuDocument(relativePath: $relativePath) {
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
      ...MenuParts
    }
  }
}
    ${MenuPartsFragmentDoc}`;
export const GetMenuListDocument = gql`
    query getMenuList {
  getMenuList {
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
          ...MenuParts
        }
      }
    }
  }
}
    ${MenuPartsFragmentDoc}`;
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
      getSectionDocument(variables: GetSectionDocumentQueryVariables, options?: C): Promise<{data: GetSectionDocumentQuery, variables: GetSectionDocumentQueryVariables, query: string}> {
        return requester<{data: GetSectionDocumentQuery, variables: GetSectionDocumentQueryVariables, query: string}, GetSectionDocumentQueryVariables>(GetSectionDocumentDocument, variables, options);
      },
    getSectionList(variables?: GetSectionListQueryVariables, options?: C): Promise<{data: GetSectionListQuery, variables: GetSectionListQueryVariables, query: string}> {
        return requester<{data: GetSectionListQuery, variables: GetSectionListQueryVariables, query: string}, GetSectionListQueryVariables>(GetSectionListDocument, variables, options);
      },
    getMenuItemDocument(variables: GetMenuItemDocumentQueryVariables, options?: C): Promise<{data: GetMenuItemDocumentQuery, variables: GetMenuItemDocumentQueryVariables, query: string}> {
        return requester<{data: GetMenuItemDocumentQuery, variables: GetMenuItemDocumentQueryVariables, query: string}, GetMenuItemDocumentQueryVariables>(GetMenuItemDocumentDocument, variables, options);
      },
    getMenuItemList(variables?: GetMenuItemListQueryVariables, options?: C): Promise<{data: GetMenuItemListQuery, variables: GetMenuItemListQueryVariables, query: string}> {
        return requester<{data: GetMenuItemListQuery, variables: GetMenuItemListQueryVariables, query: string}, GetMenuItemListQueryVariables>(GetMenuItemListDocument, variables, options);
      },
    getMenuDocument(variables: GetMenuDocumentQueryVariables, options?: C): Promise<{data: GetMenuDocumentQuery, variables: GetMenuDocumentQueryVariables, query: string}> {
        return requester<{data: GetMenuDocumentQuery, variables: GetMenuDocumentQueryVariables, query: string}, GetMenuDocumentQueryVariables>(GetMenuDocumentDocument, variables, options);
      },
    getMenuList(variables?: GetMenuListQueryVariables, options?: C): Promise<{data: GetMenuListQuery, variables: GetMenuListQueryVariables, query: string}> {
        return requester<{data: GetMenuListQuery, variables: GetMenuListQueryVariables, query: string}, GetMenuListQueryVariables>(GetMenuListDocument, variables, options);
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

