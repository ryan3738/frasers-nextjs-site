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
  getGalleryGridDocument: GalleryGridDocument;
  getGalleryGridList: GalleryGridConnection;
  getBusinessInfoDocument: BusinessInfoDocument;
  getBusinessInfoList: BusinessInfoConnection;
  getMenuDocument: MenuDocument;
  getMenuList: MenuConnection;
  getDoubleFeatureDocument: DoubleFeatureDocument;
  getDoubleFeatureList: DoubleFeatureConnection;
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


export type QueryGetGalleryGridDocumentArgs = {
  relativePath?: InputMaybe<Scalars['String']>;
};


export type QueryGetGalleryGridListArgs = {
  before?: InputMaybe<Scalars['String']>;
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type QueryGetBusinessInfoDocumentArgs = {
  relativePath?: InputMaybe<Scalars['String']>;
};


export type QueryGetBusinessInfoListArgs = {
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


export type QueryGetDoubleFeatureDocumentArgs = {
  relativePath?: InputMaybe<Scalars['String']>;
};


export type QueryGetDoubleFeatureListArgs = {
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

export type DocumentNode = GalleryGridDocument | BusinessInfoDocument | MenuDocument | DoubleFeatureDocument | PostsDocument;

export type GalleryGridImages = {
  __typename?: 'GalleryGridImages';
  alt: Scalars['String'];
  image?: Maybe<Scalars['String']>;
  format?: Maybe<Scalars['String']>;
};

export type GalleryGrid = {
  __typename?: 'GalleryGrid';
  images?: Maybe<Array<Maybe<GalleryGridImages>>>;
};

export type GalleryGridDocument = Node & Document & {
  __typename?: 'GalleryGridDocument';
  id: Scalars['ID'];
  sys: SystemInfo;
  data: GalleryGrid;
  form: Scalars['JSON'];
  values: Scalars['JSON'];
  dataJSON: Scalars['JSON'];
};

export type GalleryGridConnectionEdges = {
  __typename?: 'GalleryGridConnectionEdges';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<GalleryGridDocument>;
};

export type GalleryGridConnection = Connection & {
  __typename?: 'GalleryGridConnection';
  pageInfo?: Maybe<PageInfo>;
  totalCount: Scalars['Int'];
  edges?: Maybe<Array<Maybe<GalleryGridConnectionEdges>>>;
};

export type BusinessInfoAddress = {
  __typename?: 'BusinessInfoAddress';
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
  street2?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  zip?: Maybe<Scalars['String']>;
  directions?: Maybe<Scalars['String']>;
};

export type BusinessInfoHours = {
  __typename?: 'BusinessInfoHours';
  day?: Maybe<Scalars['String']>;
  hours?: Maybe<Scalars['String']>;
};

export type BusinessInfo = {
  __typename?: 'BusinessInfo';
  name?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  address?: Maybe<BusinessInfoAddress>;
  hours?: Maybe<Array<Maybe<BusinessInfoHours>>>;
};

export type BusinessInfoDocument = Node & Document & {
  __typename?: 'BusinessInfoDocument';
  id: Scalars['ID'];
  sys: SystemInfo;
  data: BusinessInfo;
  form: Scalars['JSON'];
  values: Scalars['JSON'];
  dataJSON: Scalars['JSON'];
};

export type BusinessInfoConnectionEdges = {
  __typename?: 'BusinessInfoConnectionEdges';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<BusinessInfoDocument>;
};

export type BusinessInfoConnection = Connection & {
  __typename?: 'BusinessInfoConnection';
  pageInfo?: Maybe<PageInfo>;
  totalCount: Scalars['Int'];
  edges?: Maybe<Array<Maybe<BusinessInfoConnectionEdges>>>;
};

export type MenuSectionsItemsModifiers = {
  __typename?: 'MenuSectionsItemsModifiers';
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
};

export type MenuSectionsItemsImages = {
  __typename?: 'MenuSectionsItemsImages';
  alt: Scalars['String'];
  image?: Maybe<Scalars['String']>;
};

export type MenuSectionsItems = {
  __typename?: 'MenuSectionsItems';
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
  dietary?: Maybe<Array<Maybe<Scalars['String']>>>;
  modifiers?: Maybe<Array<Maybe<MenuSectionsItemsModifiers>>>;
  available?: Maybe<Scalars['Boolean']>;
  images?: Maybe<Array<Maybe<MenuSectionsItemsImages>>>;
};

export type MenuSections = {
  __typename?: 'MenuSections';
  name: Scalars['String'];
  items?: Maybe<Array<Maybe<MenuSectionsItems>>>;
};

export type Menu = {
  __typename?: 'Menu';
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  available?: Maybe<Scalars['Boolean']>;
  sections?: Maybe<Array<Maybe<MenuSections>>>;
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

export type DoubleFeatureImage = {
  __typename?: 'DoubleFeatureImage';
  src?: Maybe<Scalars['String']>;
  alt: Scalars['String'];
};

export type DoubleFeature = {
  __typename?: 'DoubleFeature';
  title?: Maybe<Scalars['String']>;
  subtitle?: Maybe<Scalars['String']>;
  image?: Maybe<DoubleFeatureImage>;
  elemntId?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
};

export type DoubleFeatureDocument = Node & Document & {
  __typename?: 'DoubleFeatureDocument';
  id: Scalars['ID'];
  sys: SystemInfo;
  data: DoubleFeature;
  form: Scalars['JSON'];
  values: Scalars['JSON'];
  dataJSON: Scalars['JSON'];
};

export type DoubleFeatureConnectionEdges = {
  __typename?: 'DoubleFeatureConnectionEdges';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<DoubleFeatureDocument>;
};

export type DoubleFeatureConnection = Connection & {
  __typename?: 'DoubleFeatureConnection';
  pageInfo?: Maybe<PageInfo>;
  totalCount: Scalars['Int'];
  edges?: Maybe<Array<Maybe<DoubleFeatureConnectionEdges>>>;
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
  updateGalleryGridDocument: GalleryGridDocument;
  createGalleryGridDocument: GalleryGridDocument;
  updateBusinessInfoDocument: BusinessInfoDocument;
  createBusinessInfoDocument: BusinessInfoDocument;
  updateMenuDocument: MenuDocument;
  createMenuDocument: MenuDocument;
  updateDoubleFeatureDocument: DoubleFeatureDocument;
  createDoubleFeatureDocument: DoubleFeatureDocument;
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


export type MutationUpdateGalleryGridDocumentArgs = {
  relativePath: Scalars['String'];
  params: GalleryGridMutation;
};


export type MutationCreateGalleryGridDocumentArgs = {
  relativePath: Scalars['String'];
  params: GalleryGridMutation;
};


export type MutationUpdateBusinessInfoDocumentArgs = {
  relativePath: Scalars['String'];
  params: BusinessInfoMutation;
};


export type MutationCreateBusinessInfoDocumentArgs = {
  relativePath: Scalars['String'];
  params: BusinessInfoMutation;
};


export type MutationUpdateMenuDocumentArgs = {
  relativePath: Scalars['String'];
  params: MenuMutation;
};


export type MutationCreateMenuDocumentArgs = {
  relativePath: Scalars['String'];
  params: MenuMutation;
};


export type MutationUpdateDoubleFeatureDocumentArgs = {
  relativePath: Scalars['String'];
  params: DoubleFeatureMutation;
};


export type MutationCreateDoubleFeatureDocumentArgs = {
  relativePath: Scalars['String'];
  params: DoubleFeatureMutation;
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
  galleryGrid?: InputMaybe<GalleryGridMutation>;
  businessInfo?: InputMaybe<BusinessInfoMutation>;
  menu?: InputMaybe<MenuMutation>;
  doubleFeature?: InputMaybe<DoubleFeatureMutation>;
  posts?: InputMaybe<PostsMutation>;
};

export type GalleryGridImagesMutation = {
  alt?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  format?: InputMaybe<Scalars['String']>;
};

export type GalleryGridMutation = {
  images?: InputMaybe<Array<InputMaybe<GalleryGridImagesMutation>>>;
};

export type BusinessInfoAddressMutation = {
  name?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  street?: InputMaybe<Scalars['String']>;
  street2?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  region?: InputMaybe<Scalars['String']>;
  zip?: InputMaybe<Scalars['String']>;
  directions?: InputMaybe<Scalars['String']>;
};

export type BusinessInfoHoursMutation = {
  day?: InputMaybe<Scalars['String']>;
  hours?: InputMaybe<Scalars['String']>;
};

export type BusinessInfoMutation = {
  name?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  address?: InputMaybe<BusinessInfoAddressMutation>;
  hours?: InputMaybe<Array<InputMaybe<BusinessInfoHoursMutation>>>;
};

export type MenuSectionsItemsModifiersMutation = {
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Int']>;
};

export type MenuSectionsItemsImagesMutation = {
  alt?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
};

export type MenuSectionsItemsMutation = {
  name?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Int']>;
  dietary?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  modifiers?: InputMaybe<Array<InputMaybe<MenuSectionsItemsModifiersMutation>>>;
  available?: InputMaybe<Scalars['Boolean']>;
  images?: InputMaybe<Array<InputMaybe<MenuSectionsItemsImagesMutation>>>;
};

export type MenuSectionsMutation = {
  name?: InputMaybe<Scalars['String']>;
  items?: InputMaybe<Array<InputMaybe<MenuSectionsItemsMutation>>>;
};

export type MenuMutation = {
  name?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  available?: InputMaybe<Scalars['Boolean']>;
  sections?: InputMaybe<Array<InputMaybe<MenuSectionsMutation>>>;
};

export type DoubleFeatureImageMutation = {
  src?: InputMaybe<Scalars['String']>;
  alt?: InputMaybe<Scalars['String']>;
};

export type DoubleFeatureMutation = {
  title?: InputMaybe<Scalars['String']>;
  subtitle?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<DoubleFeatureImageMutation>;
  elemntId?: InputMaybe<Scalars['String']>;
  body?: InputMaybe<Scalars['String']>;
};

export type PostsMutation = {
  title?: InputMaybe<Scalars['String']>;
  body?: InputMaybe<Scalars['String']>;
};

export type GalleryGridPartsFragment = { __typename?: 'GalleryGrid', images?: Array<{ __typename: 'GalleryGridImages', alt: string, image?: string | null | undefined, format?: string | null | undefined } | null | undefined> | null | undefined };

export type BusinessInfoPartsFragment = { __typename?: 'BusinessInfo', name?: string | null | undefined, phoneNumber?: string | null | undefined, email?: string | null | undefined, address?: { __typename: 'BusinessInfoAddress', name: string, description?: string | null | undefined, street?: string | null | undefined, street2?: string | null | undefined, city?: string | null | undefined, region?: string | null | undefined, zip?: string | null | undefined, directions?: string | null | undefined } | null | undefined, hours?: Array<{ __typename: 'BusinessInfoHours', day?: string | null | undefined, hours?: string | null | undefined } | null | undefined> | null | undefined };

export type MenuPartsFragment = { __typename?: 'Menu', name?: string | null | undefined, description?: string | null | undefined, available?: boolean | null | undefined, sections?: Array<{ __typename: 'MenuSections', name: string, items?: Array<{ __typename: 'MenuSectionsItems', name: string, description?: string | null | undefined, price?: number | null | undefined, dietary?: Array<string | null | undefined> | null | undefined, available?: boolean | null | undefined, modifiers?: Array<{ __typename: 'MenuSectionsItemsModifiers', name?: string | null | undefined, price?: number | null | undefined } | null | undefined> | null | undefined, images?: Array<{ __typename: 'MenuSectionsItemsImages', alt: string, image?: string | null | undefined } | null | undefined> | null | undefined } | null | undefined> | null | undefined } | null | undefined> | null | undefined };

export type DoubleFeaturePartsFragment = { __typename?: 'DoubleFeature', title?: string | null | undefined, subtitle?: string | null | undefined, elemntId?: string | null | undefined, body?: string | null | undefined, image?: { __typename: 'DoubleFeatureImage', src?: string | null | undefined, alt: string } | null | undefined };

export type PostsPartsFragment = { __typename?: 'Posts', title?: string | null | undefined, body?: string | null | undefined };

export type GetGalleryGridDocumentQueryVariables = Exact<{
  relativePath: Scalars['String'];
}>;


export type GetGalleryGridDocumentQuery = { __typename?: 'Query', getGalleryGridDocument: { __typename?: 'GalleryGridDocument', id: string, sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string }, data: { __typename?: 'GalleryGrid', images?: Array<{ __typename: 'GalleryGridImages', alt: string, image?: string | null | undefined, format?: string | null | undefined } | null | undefined> | null | undefined } } };

export type GetGalleryGridListQueryVariables = Exact<{ [key: string]: never; }>;


export type GetGalleryGridListQuery = { __typename?: 'Query', getGalleryGridList: { __typename?: 'GalleryGridConnection', totalCount: number, edges?: Array<{ __typename?: 'GalleryGridConnectionEdges', node?: { __typename?: 'GalleryGridDocument', id: string, sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string }, data: { __typename?: 'GalleryGrid', images?: Array<{ __typename: 'GalleryGridImages', alt: string, image?: string | null | undefined, format?: string | null | undefined } | null | undefined> | null | undefined } } | null | undefined } | null | undefined> | null | undefined } };

export type GetBusinessInfoDocumentQueryVariables = Exact<{
  relativePath: Scalars['String'];
}>;


export type GetBusinessInfoDocumentQuery = { __typename?: 'Query', getBusinessInfoDocument: { __typename?: 'BusinessInfoDocument', id: string, sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string }, data: { __typename?: 'BusinessInfo', name?: string | null | undefined, phoneNumber?: string | null | undefined, email?: string | null | undefined, address?: { __typename: 'BusinessInfoAddress', name: string, description?: string | null | undefined, street?: string | null | undefined, street2?: string | null | undefined, city?: string | null | undefined, region?: string | null | undefined, zip?: string | null | undefined, directions?: string | null | undefined } | null | undefined, hours?: Array<{ __typename: 'BusinessInfoHours', day?: string | null | undefined, hours?: string | null | undefined } | null | undefined> | null | undefined } } };

export type GetBusinessInfoListQueryVariables = Exact<{ [key: string]: never; }>;


export type GetBusinessInfoListQuery = { __typename?: 'Query', getBusinessInfoList: { __typename?: 'BusinessInfoConnection', totalCount: number, edges?: Array<{ __typename?: 'BusinessInfoConnectionEdges', node?: { __typename?: 'BusinessInfoDocument', id: string, sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string }, data: { __typename?: 'BusinessInfo', name?: string | null | undefined, phoneNumber?: string | null | undefined, email?: string | null | undefined, address?: { __typename: 'BusinessInfoAddress', name: string, description?: string | null | undefined, street?: string | null | undefined, street2?: string | null | undefined, city?: string | null | undefined, region?: string | null | undefined, zip?: string | null | undefined, directions?: string | null | undefined } | null | undefined, hours?: Array<{ __typename: 'BusinessInfoHours', day?: string | null | undefined, hours?: string | null | undefined } | null | undefined> | null | undefined } } | null | undefined } | null | undefined> | null | undefined } };

export type GetMenuDocumentQueryVariables = Exact<{
  relativePath: Scalars['String'];
}>;


export type GetMenuDocumentQuery = { __typename?: 'Query', getMenuDocument: { __typename?: 'MenuDocument', id: string, sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string }, data: { __typename?: 'Menu', name?: string | null | undefined, description?: string | null | undefined, available?: boolean | null | undefined, sections?: Array<{ __typename: 'MenuSections', name: string, items?: Array<{ __typename: 'MenuSectionsItems', name: string, description?: string | null | undefined, price?: number | null | undefined, dietary?: Array<string | null | undefined> | null | undefined, available?: boolean | null | undefined, modifiers?: Array<{ __typename: 'MenuSectionsItemsModifiers', name?: string | null | undefined, price?: number | null | undefined } | null | undefined> | null | undefined, images?: Array<{ __typename: 'MenuSectionsItemsImages', alt: string, image?: string | null | undefined } | null | undefined> | null | undefined } | null | undefined> | null | undefined } | null | undefined> | null | undefined } } };

export type GetMenuListQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMenuListQuery = { __typename?: 'Query', getMenuList: { __typename?: 'MenuConnection', totalCount: number, edges?: Array<{ __typename?: 'MenuConnectionEdges', node?: { __typename?: 'MenuDocument', id: string, sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string }, data: { __typename?: 'Menu', name?: string | null | undefined, description?: string | null | undefined, available?: boolean | null | undefined, sections?: Array<{ __typename: 'MenuSections', name: string, items?: Array<{ __typename: 'MenuSectionsItems', name: string, description?: string | null | undefined, price?: number | null | undefined, dietary?: Array<string | null | undefined> | null | undefined, available?: boolean | null | undefined, modifiers?: Array<{ __typename: 'MenuSectionsItemsModifiers', name?: string | null | undefined, price?: number | null | undefined } | null | undefined> | null | undefined, images?: Array<{ __typename: 'MenuSectionsItemsImages', alt: string, image?: string | null | undefined } | null | undefined> | null | undefined } | null | undefined> | null | undefined } | null | undefined> | null | undefined } } | null | undefined } | null | undefined> | null | undefined } };

export type GetDoubleFeatureDocumentQueryVariables = Exact<{
  relativePath: Scalars['String'];
}>;


export type GetDoubleFeatureDocumentQuery = { __typename?: 'Query', getDoubleFeatureDocument: { __typename?: 'DoubleFeatureDocument', id: string, sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string }, data: { __typename?: 'DoubleFeature', title?: string | null | undefined, subtitle?: string | null | undefined, elemntId?: string | null | undefined, body?: string | null | undefined, image?: { __typename: 'DoubleFeatureImage', src?: string | null | undefined, alt: string } | null | undefined } } };

export type GetDoubleFeatureListQueryVariables = Exact<{ [key: string]: never; }>;


export type GetDoubleFeatureListQuery = { __typename?: 'Query', getDoubleFeatureList: { __typename?: 'DoubleFeatureConnection', totalCount: number, edges?: Array<{ __typename?: 'DoubleFeatureConnectionEdges', node?: { __typename?: 'DoubleFeatureDocument', id: string, sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string }, data: { __typename?: 'DoubleFeature', title?: string | null | undefined, subtitle?: string | null | undefined, elemntId?: string | null | undefined, body?: string | null | undefined, image?: { __typename: 'DoubleFeatureImage', src?: string | null | undefined, alt: string } | null | undefined } } | null | undefined } | null | undefined> | null | undefined } };

export type GetPostsDocumentQueryVariables = Exact<{
  relativePath: Scalars['String'];
}>;


export type GetPostsDocumentQuery = { __typename?: 'Query', getPostsDocument: { __typename?: 'PostsDocument', id: string, sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string }, data: { __typename?: 'Posts', title?: string | null | undefined, body?: string | null | undefined } } };

export type GetPostsListQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPostsListQuery = { __typename?: 'Query', getPostsList: { __typename?: 'PostsConnection', totalCount: number, edges?: Array<{ __typename?: 'PostsConnectionEdges', node?: { __typename?: 'PostsDocument', id: string, sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string }, data: { __typename?: 'Posts', title?: string | null | undefined, body?: string | null | undefined } } | null | undefined } | null | undefined> | null | undefined } };

export const GalleryGridPartsFragmentDoc = gql`
    fragment GalleryGridParts on GalleryGrid {
  images {
    __typename
    alt
    image
    format
  }
}
    `;
export const BusinessInfoPartsFragmentDoc = gql`
    fragment BusinessInfoParts on BusinessInfo {
  name
  phoneNumber
  email
  address {
    __typename
    name
    description
    street
    street2
    city
    region
    zip
    directions
  }
  hours {
    __typename
    day
    hours
  }
}
    `;
export const MenuPartsFragmentDoc = gql`
    fragment MenuParts on Menu {
  name
  description
  available
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
      images {
        __typename
        alt
        image
      }
    }
  }
}
    `;
export const DoubleFeaturePartsFragmentDoc = gql`
    fragment DoubleFeatureParts on DoubleFeature {
  title
  subtitle
  image {
    __typename
    src
    alt
  }
  elemntId
  body
}
    `;
export const PostsPartsFragmentDoc = gql`
    fragment PostsParts on Posts {
  title
  body
}
    `;
export const GetGalleryGridDocumentDocument = gql`
    query getGalleryGridDocument($relativePath: String!) {
  getGalleryGridDocument(relativePath: $relativePath) {
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
      ...GalleryGridParts
    }
  }
}
    ${GalleryGridPartsFragmentDoc}`;
export const GetGalleryGridListDocument = gql`
    query getGalleryGridList {
  getGalleryGridList {
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
          ...GalleryGridParts
        }
      }
    }
  }
}
    ${GalleryGridPartsFragmentDoc}`;
export const GetBusinessInfoDocumentDocument = gql`
    query getBusinessInfoDocument($relativePath: String!) {
  getBusinessInfoDocument(relativePath: $relativePath) {
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
      ...BusinessInfoParts
    }
  }
}
    ${BusinessInfoPartsFragmentDoc}`;
export const GetBusinessInfoListDocument = gql`
    query getBusinessInfoList {
  getBusinessInfoList {
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
          ...BusinessInfoParts
        }
      }
    }
  }
}
    ${BusinessInfoPartsFragmentDoc}`;
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
export const GetDoubleFeatureDocumentDocument = gql`
    query getDoubleFeatureDocument($relativePath: String!) {
  getDoubleFeatureDocument(relativePath: $relativePath) {
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
      ...DoubleFeatureParts
    }
  }
}
    ${DoubleFeaturePartsFragmentDoc}`;
export const GetDoubleFeatureListDocument = gql`
    query getDoubleFeatureList {
  getDoubleFeatureList {
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
          ...DoubleFeatureParts
        }
      }
    }
  }
}
    ${DoubleFeaturePartsFragmentDoc}`;
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
      getGalleryGridDocument(variables: GetGalleryGridDocumentQueryVariables, options?: C): Promise<{data: GetGalleryGridDocumentQuery, variables: GetGalleryGridDocumentQueryVariables, query: string}> {
        return requester<{data: GetGalleryGridDocumentQuery, variables: GetGalleryGridDocumentQueryVariables, query: string}, GetGalleryGridDocumentQueryVariables>(GetGalleryGridDocumentDocument, variables, options);
      },
    getGalleryGridList(variables?: GetGalleryGridListQueryVariables, options?: C): Promise<{data: GetGalleryGridListQuery, variables: GetGalleryGridListQueryVariables, query: string}> {
        return requester<{data: GetGalleryGridListQuery, variables: GetGalleryGridListQueryVariables, query: string}, GetGalleryGridListQueryVariables>(GetGalleryGridListDocument, variables, options);
      },
    getBusinessInfoDocument(variables: GetBusinessInfoDocumentQueryVariables, options?: C): Promise<{data: GetBusinessInfoDocumentQuery, variables: GetBusinessInfoDocumentQueryVariables, query: string}> {
        return requester<{data: GetBusinessInfoDocumentQuery, variables: GetBusinessInfoDocumentQueryVariables, query: string}, GetBusinessInfoDocumentQueryVariables>(GetBusinessInfoDocumentDocument, variables, options);
      },
    getBusinessInfoList(variables?: GetBusinessInfoListQueryVariables, options?: C): Promise<{data: GetBusinessInfoListQuery, variables: GetBusinessInfoListQueryVariables, query: string}> {
        return requester<{data: GetBusinessInfoListQuery, variables: GetBusinessInfoListQueryVariables, query: string}, GetBusinessInfoListQueryVariables>(GetBusinessInfoListDocument, variables, options);
      },
    getMenuDocument(variables: GetMenuDocumentQueryVariables, options?: C): Promise<{data: GetMenuDocumentQuery, variables: GetMenuDocumentQueryVariables, query: string}> {
        return requester<{data: GetMenuDocumentQuery, variables: GetMenuDocumentQueryVariables, query: string}, GetMenuDocumentQueryVariables>(GetMenuDocumentDocument, variables, options);
      },
    getMenuList(variables?: GetMenuListQueryVariables, options?: C): Promise<{data: GetMenuListQuery, variables: GetMenuListQueryVariables, query: string}> {
        return requester<{data: GetMenuListQuery, variables: GetMenuListQueryVariables, query: string}, GetMenuListQueryVariables>(GetMenuListDocument, variables, options);
      },
    getDoubleFeatureDocument(variables: GetDoubleFeatureDocumentQueryVariables, options?: C): Promise<{data: GetDoubleFeatureDocumentQuery, variables: GetDoubleFeatureDocumentQueryVariables, query: string}> {
        return requester<{data: GetDoubleFeatureDocumentQuery, variables: GetDoubleFeatureDocumentQueryVariables, query: string}, GetDoubleFeatureDocumentQueryVariables>(GetDoubleFeatureDocumentDocument, variables, options);
      },
    getDoubleFeatureList(variables?: GetDoubleFeatureListQueryVariables, options?: C): Promise<{data: GetDoubleFeatureListQuery, variables: GetDoubleFeatureListQueryVariables, query: string}> {
        return requester<{data: GetDoubleFeatureListQuery, variables: GetDoubleFeatureListQueryVariables, query: string}, GetDoubleFeatureListQueryVariables>(GetDoubleFeatureListDocument, variables, options);
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

