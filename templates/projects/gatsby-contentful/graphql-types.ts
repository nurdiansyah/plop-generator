export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * A date string, such as 2007-12-03, compliant with the ISO 8601 standard for
   * representation of dates and times using the Gregorian calendar.
   */
  Date: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};











export type BooleanQueryOperatorInput = {
  eq?: Maybe<Scalars['Boolean']>;
  ne?: Maybe<Scalars['Boolean']>;
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
};

export type ContentfulAsset = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  contentful_id?: Maybe<Scalars['String']>;
  spaceId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  file?: Maybe<ContentfulAssetFile>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  node_locale?: Maybe<Scalars['String']>;
  sys?: Maybe<ContentfulAssetSys>;
  fixed?: Maybe<ContentfulFixed>;
  /** @deprecated Resolutions was deprecated in Gatsby v2. It's been renamed to "fixed" https://example.com/write-docs-and-fix-this-example-link */
  resolutions?: Maybe<ContentfulResolutions>;
  fluid?: Maybe<ContentfulFluid>;
  /** @deprecated Sizes was deprecated in Gatsby v2. It's been renamed to "fluid" https://example.com/write-docs-and-fix-this-example-link */
  sizes?: Maybe<ContentfulSizes>;
  resize?: Maybe<ContentfulResize>;
};


export type ContentfulAssetCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulAssetUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulAssetFixedArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ContentfulImageFormat>;
  resizingBehavior?: Maybe<ImageResizingBehavior>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  background?: Maybe<Scalars['String']>;
};


export type ContentfulAssetResolutionsArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ContentfulImageFormat>;
  resizingBehavior?: Maybe<ImageResizingBehavior>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  background?: Maybe<Scalars['String']>;
};


export type ContentfulAssetFluidArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ContentfulImageFormat>;
  resizingBehavior?: Maybe<ImageResizingBehavior>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  background?: Maybe<Scalars['String']>;
  sizes?: Maybe<Scalars['String']>;
};


export type ContentfulAssetSizesArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ContentfulImageFormat>;
  resizingBehavior?: Maybe<ImageResizingBehavior>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  background?: Maybe<Scalars['String']>;
  sizes?: Maybe<Scalars['String']>;
};


export type ContentfulAssetResizeArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  resizingBehavior?: Maybe<ImageResizingBehavior>;
  toFormat?: Maybe<ContentfulImageFormat>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  background?: Maybe<Scalars['String']>;
};

export type ContentfulAssetConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulAssetEdge>;
  nodes: Array<ContentfulAsset>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulAssetGroupConnection>;
};


export type ContentfulAssetConnectionDistinctArgs = {
  field: ContentfulAssetFieldsEnum;
};


export type ContentfulAssetConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulAssetFieldsEnum;
};

export type ContentfulAssetEdge = {
  next?: Maybe<ContentfulAsset>;
  node: ContentfulAsset;
  previous?: Maybe<ContentfulAsset>;
};

export type ContentfulAssetFieldsEnum =
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'contentful_id'
  | 'spaceId'
  | 'createdAt'
  | 'updatedAt'
  | 'file___url'
  | 'file___details___size'
  | 'file___details___image___width'
  | 'file___details___image___height'
  | 'file___fileName'
  | 'file___contentType'
  | 'title'
  | 'description'
  | 'node_locale'
  | 'sys___revision'
  | 'fixed___base64'
  | 'fixed___tracedSVG'
  | 'fixed___aspectRatio'
  | 'fixed___width'
  | 'fixed___height'
  | 'fixed___src'
  | 'fixed___srcSet'
  | 'fixed___srcWebp'
  | 'fixed___srcSetWebp'
  | 'resolutions___base64'
  | 'resolutions___tracedSVG'
  | 'resolutions___aspectRatio'
  | 'resolutions___width'
  | 'resolutions___height'
  | 'resolutions___src'
  | 'resolutions___srcSet'
  | 'resolutions___srcWebp'
  | 'resolutions___srcSetWebp'
  | 'fluid___base64'
  | 'fluid___tracedSVG'
  | 'fluid___aspectRatio'
  | 'fluid___src'
  | 'fluid___srcSet'
  | 'fluid___srcWebp'
  | 'fluid___srcSetWebp'
  | 'fluid___sizes'
  | 'sizes___base64'
  | 'sizes___tracedSVG'
  | 'sizes___aspectRatio'
  | 'sizes___src'
  | 'sizes___srcSet'
  | 'sizes___srcWebp'
  | 'sizes___srcSetWebp'
  | 'sizes___sizes'
  | 'resize___base64'
  | 'resize___tracedSVG'
  | 'resize___src'
  | 'resize___width'
  | 'resize___height'
  | 'resize___aspectRatio';

export type ContentfulAssetFile = {
  url?: Maybe<Scalars['String']>;
  details?: Maybe<ContentfulAssetFileDetails>;
  fileName?: Maybe<Scalars['String']>;
  contentType?: Maybe<Scalars['String']>;
};

export type ContentfulAssetFileDetails = {
  size?: Maybe<Scalars['Int']>;
  image?: Maybe<ContentfulAssetFileDetailsImage>;
};

export type ContentfulAssetFileDetailsFilterInput = {
  size?: Maybe<IntQueryOperatorInput>;
  image?: Maybe<ContentfulAssetFileDetailsImageFilterInput>;
};

export type ContentfulAssetFileDetailsImage = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type ContentfulAssetFileDetailsImageFilterInput = {
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
};

export type ContentfulAssetFileFilterInput = {
  url?: Maybe<StringQueryOperatorInput>;
  details?: Maybe<ContentfulAssetFileDetailsFilterInput>;
  fileName?: Maybe<StringQueryOperatorInput>;
  contentType?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulAssetFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  file?: Maybe<ContentfulAssetFileFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  sys?: Maybe<ContentfulAssetSysFilterInput>;
  fixed?: Maybe<ContentfulFixedFilterInput>;
  resolutions?: Maybe<ContentfulResolutionsFilterInput>;
  fluid?: Maybe<ContentfulFluidFilterInput>;
  sizes?: Maybe<ContentfulSizesFilterInput>;
  resize?: Maybe<ContentfulResizeFilterInput>;
};

export type ContentfulAssetFilterListInput = {
  elemMatch?: Maybe<ContentfulAssetFilterInput>;
};

export type ContentfulAssetGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulAssetEdge>;
  nodes: Array<ContentfulAsset>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulAssetSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulAssetFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulAssetSys = {
  revision?: Maybe<Scalars['Int']>;
};

export type ContentfulAssetSysFilterInput = {
  revision?: Maybe<IntQueryOperatorInput>;
};

export type ContentfulBannerAlerts = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  title?: Maybe<Scalars['String']>;
  isEnabled?: Maybe<Scalars['Boolean']>;
  content?: Maybe<ContentfulBannerAlertsContentRichTextNode>;
  spaceId?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulBannerAlertsSys>;
  node_locale?: Maybe<Scalars['String']>;
  childContentfulBannerAlertsContentRichTextNode?: Maybe<ContentfulBannerAlertsContentRichTextNode>;
};


export type ContentfulBannerAlertsCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulBannerAlertsUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulBannerAlertsConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulBannerAlertsEdge>;
  nodes: Array<ContentfulBannerAlerts>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulBannerAlertsGroupConnection>;
};


export type ContentfulBannerAlertsConnectionDistinctArgs = {
  field: ContentfulBannerAlertsFieldsEnum;
};


export type ContentfulBannerAlertsConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulBannerAlertsFieldsEnum;
};

export type ContentfulBannerAlertsContentRichTextNode = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  content?: Maybe<Scalars['String']>;
  /** @deprecated This field is deprecated, please use 'json' instead. */
  nodeType?: Maybe<Scalars['String']>;
  json?: Maybe<Scalars['JSON']>;
};

export type ContentfulBannerAlertsContentRichTextNodeConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulBannerAlertsContentRichTextNodeEdge>;
  nodes: Array<ContentfulBannerAlertsContentRichTextNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulBannerAlertsContentRichTextNodeGroupConnection>;
};


export type ContentfulBannerAlertsContentRichTextNodeConnectionDistinctArgs = {
  field: ContentfulBannerAlertsContentRichTextNodeFieldsEnum;
};


export type ContentfulBannerAlertsContentRichTextNodeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulBannerAlertsContentRichTextNodeFieldsEnum;
};

export type ContentfulBannerAlertsContentRichTextNodeEdge = {
  next?: Maybe<ContentfulBannerAlertsContentRichTextNode>;
  node: ContentfulBannerAlertsContentRichTextNode;
  previous?: Maybe<ContentfulBannerAlertsContentRichTextNode>;
};

export type ContentfulBannerAlertsContentRichTextNodeFieldsEnum =
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'content'
  | 'nodeType'
  | 'json';

export type ContentfulBannerAlertsContentRichTextNodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  content?: Maybe<StringQueryOperatorInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  json?: Maybe<JsonQueryOperatorInput>;
};

export type ContentfulBannerAlertsContentRichTextNodeGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulBannerAlertsContentRichTextNodeEdge>;
  nodes: Array<ContentfulBannerAlertsContentRichTextNode>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulBannerAlertsContentRichTextNodeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulBannerAlertsContentRichTextNodeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulBannerAlertsEdge = {
  next?: Maybe<ContentfulBannerAlerts>;
  node: ContentfulBannerAlerts;
  previous?: Maybe<ContentfulBannerAlerts>;
};

export type ContentfulBannerAlertsFieldsEnum =
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'title'
  | 'isEnabled'
  | 'content___id'
  | 'content___parent___id'
  | 'content___parent___parent___id'
  | 'content___parent___parent___children'
  | 'content___parent___children'
  | 'content___parent___children___id'
  | 'content___parent___children___children'
  | 'content___parent___internal___content'
  | 'content___parent___internal___contentDigest'
  | 'content___parent___internal___description'
  | 'content___parent___internal___fieldOwners'
  | 'content___parent___internal___ignoreType'
  | 'content___parent___internal___mediaType'
  | 'content___parent___internal___owner'
  | 'content___parent___internal___type'
  | 'content___children'
  | 'content___children___id'
  | 'content___children___parent___id'
  | 'content___children___parent___children'
  | 'content___children___children'
  | 'content___children___children___id'
  | 'content___children___children___children'
  | 'content___children___internal___content'
  | 'content___children___internal___contentDigest'
  | 'content___children___internal___description'
  | 'content___children___internal___fieldOwners'
  | 'content___children___internal___ignoreType'
  | 'content___children___internal___mediaType'
  | 'content___children___internal___owner'
  | 'content___children___internal___type'
  | 'content___internal___content'
  | 'content___internal___contentDigest'
  | 'content___internal___description'
  | 'content___internal___fieldOwners'
  | 'content___internal___ignoreType'
  | 'content___internal___mediaType'
  | 'content___internal___owner'
  | 'content___internal___type'
  | 'content___content'
  | 'content___nodeType'
  | 'content___json'
  | 'spaceId'
  | 'contentful_id'
  | 'createdAt'
  | 'updatedAt'
  | 'sys___revision'
  | 'sys___contentType___sys___type'
  | 'sys___contentType___sys___linkType'
  | 'sys___contentType___sys___id'
  | 'sys___contentType___sys___contentful_id'
  | 'node_locale'
  | 'childContentfulBannerAlertsContentRichTextNode___id'
  | 'childContentfulBannerAlertsContentRichTextNode___parent___id'
  | 'childContentfulBannerAlertsContentRichTextNode___parent___parent___id'
  | 'childContentfulBannerAlertsContentRichTextNode___parent___parent___children'
  | 'childContentfulBannerAlertsContentRichTextNode___parent___children'
  | 'childContentfulBannerAlertsContentRichTextNode___parent___children___id'
  | 'childContentfulBannerAlertsContentRichTextNode___parent___children___children'
  | 'childContentfulBannerAlertsContentRichTextNode___parent___internal___content'
  | 'childContentfulBannerAlertsContentRichTextNode___parent___internal___contentDigest'
  | 'childContentfulBannerAlertsContentRichTextNode___parent___internal___description'
  | 'childContentfulBannerAlertsContentRichTextNode___parent___internal___fieldOwners'
  | 'childContentfulBannerAlertsContentRichTextNode___parent___internal___ignoreType'
  | 'childContentfulBannerAlertsContentRichTextNode___parent___internal___mediaType'
  | 'childContentfulBannerAlertsContentRichTextNode___parent___internal___owner'
  | 'childContentfulBannerAlertsContentRichTextNode___parent___internal___type'
  | 'childContentfulBannerAlertsContentRichTextNode___children'
  | 'childContentfulBannerAlertsContentRichTextNode___children___id'
  | 'childContentfulBannerAlertsContentRichTextNode___children___parent___id'
  | 'childContentfulBannerAlertsContentRichTextNode___children___parent___children'
  | 'childContentfulBannerAlertsContentRichTextNode___children___children'
  | 'childContentfulBannerAlertsContentRichTextNode___children___children___id'
  | 'childContentfulBannerAlertsContentRichTextNode___children___children___children'
  | 'childContentfulBannerAlertsContentRichTextNode___children___internal___content'
  | 'childContentfulBannerAlertsContentRichTextNode___children___internal___contentDigest'
  | 'childContentfulBannerAlertsContentRichTextNode___children___internal___description'
  | 'childContentfulBannerAlertsContentRichTextNode___children___internal___fieldOwners'
  | 'childContentfulBannerAlertsContentRichTextNode___children___internal___ignoreType'
  | 'childContentfulBannerAlertsContentRichTextNode___children___internal___mediaType'
  | 'childContentfulBannerAlertsContentRichTextNode___children___internal___owner'
  | 'childContentfulBannerAlertsContentRichTextNode___children___internal___type'
  | 'childContentfulBannerAlertsContentRichTextNode___internal___content'
  | 'childContentfulBannerAlertsContentRichTextNode___internal___contentDigest'
  | 'childContentfulBannerAlertsContentRichTextNode___internal___description'
  | 'childContentfulBannerAlertsContentRichTextNode___internal___fieldOwners'
  | 'childContentfulBannerAlertsContentRichTextNode___internal___ignoreType'
  | 'childContentfulBannerAlertsContentRichTextNode___internal___mediaType'
  | 'childContentfulBannerAlertsContentRichTextNode___internal___owner'
  | 'childContentfulBannerAlertsContentRichTextNode___internal___type'
  | 'childContentfulBannerAlertsContentRichTextNode___content'
  | 'childContentfulBannerAlertsContentRichTextNode___nodeType'
  | 'childContentfulBannerAlertsContentRichTextNode___json';

export type ContentfulBannerAlertsFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  isEnabled?: Maybe<BooleanQueryOperatorInput>;
  content?: Maybe<ContentfulBannerAlertsContentRichTextNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulBannerAlertsSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  childContentfulBannerAlertsContentRichTextNode?: Maybe<ContentfulBannerAlertsContentRichTextNodeFilterInput>;
};

export type ContentfulBannerAlertsGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulBannerAlertsEdge>;
  nodes: Array<ContentfulBannerAlerts>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulBannerAlertsSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulBannerAlertsFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulBannerAlertsSys = {
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulBannerAlertsSysContentType>;
};

export type ContentfulBannerAlertsSysContentType = {
  sys?: Maybe<ContentfulBannerAlertsSysContentTypeSys>;
};

export type ContentfulBannerAlertsSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulBannerAlertsSysContentTypeSysFilterInput>;
};

export type ContentfulBannerAlertsSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
};

export type ContentfulBannerAlertsSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulBannerAlertsSysFilterInput = {
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulBannerAlertsSysContentTypeFilterInput>;
};

export type ContentfulBlogPost = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  title?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  publishDate?: Maybe<Scalars['Date']>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  isExternalLink?: Maybe<Scalars['Boolean']>;
  heroImage?: Maybe<ContentfulAsset>;
  author?: Maybe<ContentfulPerson>;
  description?: Maybe<ContentfulBlogPostDescriptionTextNode>;
  body?: Maybe<ContentfulBlogPostBodyTextNode>;
  spaceId?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulBlogPostSys>;
  node_locale?: Maybe<Scalars['String']>;
  navigationmenu?: Maybe<Array<Maybe<ContentfulNavigationMenu>>>;
  childContentfulBlogPostDescriptionTextNode?: Maybe<ContentfulBlogPostDescriptionTextNode>;
  childContentfulBlogPostBodyTextNode?: Maybe<ContentfulBlogPostBodyTextNode>;
};


export type ContentfulBlogPostPublishDateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulBlogPostCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulBlogPostUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulBlogPostBodyTextNode = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  body?: Maybe<Scalars['String']>;
  childMarkdownRemark?: Maybe<MarkdownRemark>;
};

export type ContentfulBlogPostBodyTextNodeConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulBlogPostBodyTextNodeEdge>;
  nodes: Array<ContentfulBlogPostBodyTextNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulBlogPostBodyTextNodeGroupConnection>;
};


export type ContentfulBlogPostBodyTextNodeConnectionDistinctArgs = {
  field: ContentfulBlogPostBodyTextNodeFieldsEnum;
};


export type ContentfulBlogPostBodyTextNodeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulBlogPostBodyTextNodeFieldsEnum;
};

export type ContentfulBlogPostBodyTextNodeEdge = {
  next?: Maybe<ContentfulBlogPostBodyTextNode>;
  node: ContentfulBlogPostBodyTextNode;
  previous?: Maybe<ContentfulBlogPostBodyTextNode>;
};

export type ContentfulBlogPostBodyTextNodeFieldsEnum =
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'body'
  | 'childMarkdownRemark___id'
  | 'childMarkdownRemark___frontmatter___title'
  | 'childMarkdownRemark___excerpt'
  | 'childMarkdownRemark___rawMarkdownBody'
  | 'childMarkdownRemark___html'
  | 'childMarkdownRemark___htmlAst'
  | 'childMarkdownRemark___excerptAst'
  | 'childMarkdownRemark___headings'
  | 'childMarkdownRemark___headings___id'
  | 'childMarkdownRemark___headings___value'
  | 'childMarkdownRemark___headings___depth'
  | 'childMarkdownRemark___timeToRead'
  | 'childMarkdownRemark___tableOfContents'
  | 'childMarkdownRemark___wordCount___paragraphs'
  | 'childMarkdownRemark___wordCount___sentences'
  | 'childMarkdownRemark___wordCount___words'
  | 'childMarkdownRemark___parent___id'
  | 'childMarkdownRemark___parent___parent___id'
  | 'childMarkdownRemark___parent___parent___children'
  | 'childMarkdownRemark___parent___children'
  | 'childMarkdownRemark___parent___children___id'
  | 'childMarkdownRemark___parent___children___children'
  | 'childMarkdownRemark___parent___internal___content'
  | 'childMarkdownRemark___parent___internal___contentDigest'
  | 'childMarkdownRemark___parent___internal___description'
  | 'childMarkdownRemark___parent___internal___fieldOwners'
  | 'childMarkdownRemark___parent___internal___ignoreType'
  | 'childMarkdownRemark___parent___internal___mediaType'
  | 'childMarkdownRemark___parent___internal___owner'
  | 'childMarkdownRemark___parent___internal___type'
  | 'childMarkdownRemark___children'
  | 'childMarkdownRemark___children___id'
  | 'childMarkdownRemark___children___parent___id'
  | 'childMarkdownRemark___children___parent___children'
  | 'childMarkdownRemark___children___children'
  | 'childMarkdownRemark___children___children___id'
  | 'childMarkdownRemark___children___children___children'
  | 'childMarkdownRemark___children___internal___content'
  | 'childMarkdownRemark___children___internal___contentDigest'
  | 'childMarkdownRemark___children___internal___description'
  | 'childMarkdownRemark___children___internal___fieldOwners'
  | 'childMarkdownRemark___children___internal___ignoreType'
  | 'childMarkdownRemark___children___internal___mediaType'
  | 'childMarkdownRemark___children___internal___owner'
  | 'childMarkdownRemark___children___internal___type'
  | 'childMarkdownRemark___internal___content'
  | 'childMarkdownRemark___internal___contentDigest'
  | 'childMarkdownRemark___internal___description'
  | 'childMarkdownRemark___internal___fieldOwners'
  | 'childMarkdownRemark___internal___ignoreType'
  | 'childMarkdownRemark___internal___mediaType'
  | 'childMarkdownRemark___internal___owner'
  | 'childMarkdownRemark___internal___type';

export type ContentfulBlogPostBodyTextNodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  body?: Maybe<StringQueryOperatorInput>;
  childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>;
};

export type ContentfulBlogPostBodyTextNodeGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulBlogPostBodyTextNodeEdge>;
  nodes: Array<ContentfulBlogPostBodyTextNode>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulBlogPostBodyTextNodeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulBlogPostBodyTextNodeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulBlogPostConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulBlogPostEdge>;
  nodes: Array<ContentfulBlogPost>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulBlogPostGroupConnection>;
};


export type ContentfulBlogPostConnectionDistinctArgs = {
  field: ContentfulBlogPostFieldsEnum;
};


export type ContentfulBlogPostConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulBlogPostFieldsEnum;
};

export type ContentfulBlogPostContentfulLinkUnion = ContentfulBlogPost | ContentfulLink;

export type ContentfulBlogPostDescriptionTextNode = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  description?: Maybe<Scalars['String']>;
  childMarkdownRemark?: Maybe<MarkdownRemark>;
};

export type ContentfulBlogPostDescriptionTextNodeConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulBlogPostDescriptionTextNodeEdge>;
  nodes: Array<ContentfulBlogPostDescriptionTextNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulBlogPostDescriptionTextNodeGroupConnection>;
};


export type ContentfulBlogPostDescriptionTextNodeConnectionDistinctArgs = {
  field: ContentfulBlogPostDescriptionTextNodeFieldsEnum;
};


export type ContentfulBlogPostDescriptionTextNodeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulBlogPostDescriptionTextNodeFieldsEnum;
};

export type ContentfulBlogPostDescriptionTextNodeEdge = {
  next?: Maybe<ContentfulBlogPostDescriptionTextNode>;
  node: ContentfulBlogPostDescriptionTextNode;
  previous?: Maybe<ContentfulBlogPostDescriptionTextNode>;
};

export type ContentfulBlogPostDescriptionTextNodeFieldsEnum =
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'description'
  | 'childMarkdownRemark___id'
  | 'childMarkdownRemark___frontmatter___title'
  | 'childMarkdownRemark___excerpt'
  | 'childMarkdownRemark___rawMarkdownBody'
  | 'childMarkdownRemark___html'
  | 'childMarkdownRemark___htmlAst'
  | 'childMarkdownRemark___excerptAst'
  | 'childMarkdownRemark___headings'
  | 'childMarkdownRemark___headings___id'
  | 'childMarkdownRemark___headings___value'
  | 'childMarkdownRemark___headings___depth'
  | 'childMarkdownRemark___timeToRead'
  | 'childMarkdownRemark___tableOfContents'
  | 'childMarkdownRemark___wordCount___paragraphs'
  | 'childMarkdownRemark___wordCount___sentences'
  | 'childMarkdownRemark___wordCount___words'
  | 'childMarkdownRemark___parent___id'
  | 'childMarkdownRemark___parent___parent___id'
  | 'childMarkdownRemark___parent___parent___children'
  | 'childMarkdownRemark___parent___children'
  | 'childMarkdownRemark___parent___children___id'
  | 'childMarkdownRemark___parent___children___children'
  | 'childMarkdownRemark___parent___internal___content'
  | 'childMarkdownRemark___parent___internal___contentDigest'
  | 'childMarkdownRemark___parent___internal___description'
  | 'childMarkdownRemark___parent___internal___fieldOwners'
  | 'childMarkdownRemark___parent___internal___ignoreType'
  | 'childMarkdownRemark___parent___internal___mediaType'
  | 'childMarkdownRemark___parent___internal___owner'
  | 'childMarkdownRemark___parent___internal___type'
  | 'childMarkdownRemark___children'
  | 'childMarkdownRemark___children___id'
  | 'childMarkdownRemark___children___parent___id'
  | 'childMarkdownRemark___children___parent___children'
  | 'childMarkdownRemark___children___children'
  | 'childMarkdownRemark___children___children___id'
  | 'childMarkdownRemark___children___children___children'
  | 'childMarkdownRemark___children___internal___content'
  | 'childMarkdownRemark___children___internal___contentDigest'
  | 'childMarkdownRemark___children___internal___description'
  | 'childMarkdownRemark___children___internal___fieldOwners'
  | 'childMarkdownRemark___children___internal___ignoreType'
  | 'childMarkdownRemark___children___internal___mediaType'
  | 'childMarkdownRemark___children___internal___owner'
  | 'childMarkdownRemark___children___internal___type'
  | 'childMarkdownRemark___internal___content'
  | 'childMarkdownRemark___internal___contentDigest'
  | 'childMarkdownRemark___internal___description'
  | 'childMarkdownRemark___internal___fieldOwners'
  | 'childMarkdownRemark___internal___ignoreType'
  | 'childMarkdownRemark___internal___mediaType'
  | 'childMarkdownRemark___internal___owner'
  | 'childMarkdownRemark___internal___type';

export type ContentfulBlogPostDescriptionTextNodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  description?: Maybe<StringQueryOperatorInput>;
  childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>;
};

export type ContentfulBlogPostDescriptionTextNodeGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulBlogPostDescriptionTextNodeEdge>;
  nodes: Array<ContentfulBlogPostDescriptionTextNode>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulBlogPostDescriptionTextNodeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulBlogPostDescriptionTextNodeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulBlogPostEdge = {
  next?: Maybe<ContentfulBlogPost>;
  node: ContentfulBlogPost;
  previous?: Maybe<ContentfulBlogPost>;
};

export type ContentfulBlogPostFieldsEnum =
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'title'
  | 'slug'
  | 'url'
  | 'publishDate'
  | 'tags'
  | 'isExternalLink'
  | 'heroImage___id'
  | 'heroImage___parent___id'
  | 'heroImage___parent___parent___id'
  | 'heroImage___parent___parent___children'
  | 'heroImage___parent___children'
  | 'heroImage___parent___children___id'
  | 'heroImage___parent___children___children'
  | 'heroImage___parent___internal___content'
  | 'heroImage___parent___internal___contentDigest'
  | 'heroImage___parent___internal___description'
  | 'heroImage___parent___internal___fieldOwners'
  | 'heroImage___parent___internal___ignoreType'
  | 'heroImage___parent___internal___mediaType'
  | 'heroImage___parent___internal___owner'
  | 'heroImage___parent___internal___type'
  | 'heroImage___children'
  | 'heroImage___children___id'
  | 'heroImage___children___parent___id'
  | 'heroImage___children___parent___children'
  | 'heroImage___children___children'
  | 'heroImage___children___children___id'
  | 'heroImage___children___children___children'
  | 'heroImage___children___internal___content'
  | 'heroImage___children___internal___contentDigest'
  | 'heroImage___children___internal___description'
  | 'heroImage___children___internal___fieldOwners'
  | 'heroImage___children___internal___ignoreType'
  | 'heroImage___children___internal___mediaType'
  | 'heroImage___children___internal___owner'
  | 'heroImage___children___internal___type'
  | 'heroImage___internal___content'
  | 'heroImage___internal___contentDigest'
  | 'heroImage___internal___description'
  | 'heroImage___internal___fieldOwners'
  | 'heroImage___internal___ignoreType'
  | 'heroImage___internal___mediaType'
  | 'heroImage___internal___owner'
  | 'heroImage___internal___type'
  | 'heroImage___contentful_id'
  | 'heroImage___spaceId'
  | 'heroImage___createdAt'
  | 'heroImage___updatedAt'
  | 'heroImage___file___url'
  | 'heroImage___file___details___size'
  | 'heroImage___file___fileName'
  | 'heroImage___file___contentType'
  | 'heroImage___title'
  | 'heroImage___description'
  | 'heroImage___node_locale'
  | 'heroImage___sys___revision'
  | 'heroImage___fixed___base64'
  | 'heroImage___fixed___tracedSVG'
  | 'heroImage___fixed___aspectRatio'
  | 'heroImage___fixed___width'
  | 'heroImage___fixed___height'
  | 'heroImage___fixed___src'
  | 'heroImage___fixed___srcSet'
  | 'heroImage___fixed___srcWebp'
  | 'heroImage___fixed___srcSetWebp'
  | 'heroImage___resolutions___base64'
  | 'heroImage___resolutions___tracedSVG'
  | 'heroImage___resolutions___aspectRatio'
  | 'heroImage___resolutions___width'
  | 'heroImage___resolutions___height'
  | 'heroImage___resolutions___src'
  | 'heroImage___resolutions___srcSet'
  | 'heroImage___resolutions___srcWebp'
  | 'heroImage___resolutions___srcSetWebp'
  | 'heroImage___fluid___base64'
  | 'heroImage___fluid___tracedSVG'
  | 'heroImage___fluid___aspectRatio'
  | 'heroImage___fluid___src'
  | 'heroImage___fluid___srcSet'
  | 'heroImage___fluid___srcWebp'
  | 'heroImage___fluid___srcSetWebp'
  | 'heroImage___fluid___sizes'
  | 'heroImage___sizes___base64'
  | 'heroImage___sizes___tracedSVG'
  | 'heroImage___sizes___aspectRatio'
  | 'heroImage___sizes___src'
  | 'heroImage___sizes___srcSet'
  | 'heroImage___sizes___srcWebp'
  | 'heroImage___sizes___srcSetWebp'
  | 'heroImage___sizes___sizes'
  | 'heroImage___resize___base64'
  | 'heroImage___resize___tracedSVG'
  | 'heroImage___resize___src'
  | 'heroImage___resize___width'
  | 'heroImage___resize___height'
  | 'heroImage___resize___aspectRatio'
  | 'author___id'
  | 'author___parent___id'
  | 'author___parent___parent___id'
  | 'author___parent___parent___children'
  | 'author___parent___children'
  | 'author___parent___children___id'
  | 'author___parent___children___children'
  | 'author___parent___internal___content'
  | 'author___parent___internal___contentDigest'
  | 'author___parent___internal___description'
  | 'author___parent___internal___fieldOwners'
  | 'author___parent___internal___ignoreType'
  | 'author___parent___internal___mediaType'
  | 'author___parent___internal___owner'
  | 'author___parent___internal___type'
  | 'author___children'
  | 'author___children___id'
  | 'author___children___parent___id'
  | 'author___children___parent___children'
  | 'author___children___children'
  | 'author___children___children___id'
  | 'author___children___children___children'
  | 'author___children___internal___content'
  | 'author___children___internal___contentDigest'
  | 'author___children___internal___description'
  | 'author___children___internal___fieldOwners'
  | 'author___children___internal___ignoreType'
  | 'author___children___internal___mediaType'
  | 'author___children___internal___owner'
  | 'author___children___internal___type'
  | 'author___internal___content'
  | 'author___internal___contentDigest'
  | 'author___internal___description'
  | 'author___internal___fieldOwners'
  | 'author___internal___ignoreType'
  | 'author___internal___mediaType'
  | 'author___internal___owner'
  | 'author___internal___type'
  | 'author___name'
  | 'author___title'
  | 'author___company'
  | 'author___email'
  | 'author___phone'
  | 'author___facebook'
  | 'author___twitter'
  | 'author___github'
  | 'author___image___id'
  | 'author___image___parent___id'
  | 'author___image___parent___children'
  | 'author___image___children'
  | 'author___image___children___id'
  | 'author___image___children___children'
  | 'author___image___internal___content'
  | 'author___image___internal___contentDigest'
  | 'author___image___internal___description'
  | 'author___image___internal___fieldOwners'
  | 'author___image___internal___ignoreType'
  | 'author___image___internal___mediaType'
  | 'author___image___internal___owner'
  | 'author___image___internal___type'
  | 'author___image___contentful_id'
  | 'author___image___spaceId'
  | 'author___image___createdAt'
  | 'author___image___updatedAt'
  | 'author___image___file___url'
  | 'author___image___file___fileName'
  | 'author___image___file___contentType'
  | 'author___image___title'
  | 'author___image___description'
  | 'author___image___node_locale'
  | 'author___image___sys___revision'
  | 'author___image___fixed___base64'
  | 'author___image___fixed___tracedSVG'
  | 'author___image___fixed___aspectRatio'
  | 'author___image___fixed___width'
  | 'author___image___fixed___height'
  | 'author___image___fixed___src'
  | 'author___image___fixed___srcSet'
  | 'author___image___fixed___srcWebp'
  | 'author___image___fixed___srcSetWebp'
  | 'author___image___resolutions___base64'
  | 'author___image___resolutions___tracedSVG'
  | 'author___image___resolutions___aspectRatio'
  | 'author___image___resolutions___width'
  | 'author___image___resolutions___height'
  | 'author___image___resolutions___src'
  | 'author___image___resolutions___srcSet'
  | 'author___image___resolutions___srcWebp'
  | 'author___image___resolutions___srcSetWebp'
  | 'author___image___fluid___base64'
  | 'author___image___fluid___tracedSVG'
  | 'author___image___fluid___aspectRatio'
  | 'author___image___fluid___src'
  | 'author___image___fluid___srcSet'
  | 'author___image___fluid___srcWebp'
  | 'author___image___fluid___srcSetWebp'
  | 'author___image___fluid___sizes'
  | 'author___image___sizes___base64'
  | 'author___image___sizes___tracedSVG'
  | 'author___image___sizes___aspectRatio'
  | 'author___image___sizes___src'
  | 'author___image___sizes___srcSet'
  | 'author___image___sizes___srcWebp'
  | 'author___image___sizes___srcSetWebp'
  | 'author___image___sizes___sizes'
  | 'author___image___resize___base64'
  | 'author___image___resize___tracedSVG'
  | 'author___image___resize___src'
  | 'author___image___resize___width'
  | 'author___image___resize___height'
  | 'author___image___resize___aspectRatio'
  | 'author___blogpost'
  | 'author___blogpost___id'
  | 'author___blogpost___parent___id'
  | 'author___blogpost___parent___children'
  | 'author___blogpost___children'
  | 'author___blogpost___children___id'
  | 'author___blogpost___children___children'
  | 'author___blogpost___internal___content'
  | 'author___blogpost___internal___contentDigest'
  | 'author___blogpost___internal___description'
  | 'author___blogpost___internal___fieldOwners'
  | 'author___blogpost___internal___ignoreType'
  | 'author___blogpost___internal___mediaType'
  | 'author___blogpost___internal___owner'
  | 'author___blogpost___internal___type'
  | 'author___blogpost___title'
  | 'author___blogpost___slug'
  | 'author___blogpost___url'
  | 'author___blogpost___publishDate'
  | 'author___blogpost___tags'
  | 'author___blogpost___isExternalLink'
  | 'author___blogpost___heroImage___id'
  | 'author___blogpost___heroImage___children'
  | 'author___blogpost___heroImage___contentful_id'
  | 'author___blogpost___heroImage___spaceId'
  | 'author___blogpost___heroImage___createdAt'
  | 'author___blogpost___heroImage___updatedAt'
  | 'author___blogpost___heroImage___title'
  | 'author___blogpost___heroImage___description'
  | 'author___blogpost___heroImage___node_locale'
  | 'author___blogpost___author___id'
  | 'author___blogpost___author___children'
  | 'author___blogpost___author___name'
  | 'author___blogpost___author___title'
  | 'author___blogpost___author___company'
  | 'author___blogpost___author___email'
  | 'author___blogpost___author___phone'
  | 'author___blogpost___author___facebook'
  | 'author___blogpost___author___twitter'
  | 'author___blogpost___author___github'
  | 'author___blogpost___author___blogpost'
  | 'author___blogpost___author___spaceId'
  | 'author___blogpost___author___contentful_id'
  | 'author___blogpost___author___createdAt'
  | 'author___blogpost___author___updatedAt'
  | 'author___blogpost___author___node_locale'
  | 'author___blogpost___description___id'
  | 'author___blogpost___description___children'
  | 'author___blogpost___description___description'
  | 'author___blogpost___body___id'
  | 'author___blogpost___body___children'
  | 'author___blogpost___body___body'
  | 'author___blogpost___spaceId'
  | 'author___blogpost___contentful_id'
  | 'author___blogpost___createdAt'
  | 'author___blogpost___updatedAt'
  | 'author___blogpost___sys___revision'
  | 'author___blogpost___node_locale'
  | 'author___blogpost___navigationmenu'
  | 'author___blogpost___navigationmenu___id'
  | 'author___blogpost___navigationmenu___children'
  | 'author___blogpost___navigationmenu___label'
  | 'author___blogpost___navigationmenu___isExternalLink'
  | 'author___blogpost___navigationmenu___navigationlistsortorder'
  | 'author___blogpost___navigationmenu___spaceId'
  | 'author___blogpost___navigationmenu___contentful_id'
  | 'author___blogpost___navigationmenu___createdAt'
  | 'author___blogpost___navigationmenu___updatedAt'
  | 'author___blogpost___navigationmenu___node_locale'
  | 'author___blogpost___navigationmenu___url'
  | 'author___blogpost___navigationmenu___slug'
  | 'author___blogpost___childContentfulBlogPostDescriptionTextNode___id'
  | 'author___blogpost___childContentfulBlogPostDescriptionTextNode___children'
  | 'author___blogpost___childContentfulBlogPostDescriptionTextNode___description'
  | 'author___blogpost___childContentfulBlogPostBodyTextNode___id'
  | 'author___blogpost___childContentfulBlogPostBodyTextNode___children'
  | 'author___blogpost___childContentfulBlogPostBodyTextNode___body'
  | 'author___shortBio___id'
  | 'author___shortBio___parent___id'
  | 'author___shortBio___parent___children'
  | 'author___shortBio___children'
  | 'author___shortBio___children___id'
  | 'author___shortBio___children___children'
  | 'author___shortBio___internal___content'
  | 'author___shortBio___internal___contentDigest'
  | 'author___shortBio___internal___description'
  | 'author___shortBio___internal___fieldOwners'
  | 'author___shortBio___internal___ignoreType'
  | 'author___shortBio___internal___mediaType'
  | 'author___shortBio___internal___owner'
  | 'author___shortBio___internal___type'
  | 'author___shortBio___shortBio'
  | 'author___shortBio___childMarkdownRemark___id'
  | 'author___shortBio___childMarkdownRemark___excerpt'
  | 'author___shortBio___childMarkdownRemark___rawMarkdownBody'
  | 'author___shortBio___childMarkdownRemark___html'
  | 'author___shortBio___childMarkdownRemark___htmlAst'
  | 'author___shortBio___childMarkdownRemark___excerptAst'
  | 'author___shortBio___childMarkdownRemark___headings'
  | 'author___shortBio___childMarkdownRemark___timeToRead'
  | 'author___shortBio___childMarkdownRemark___tableOfContents'
  | 'author___shortBio___childMarkdownRemark___children'
  | 'author___spaceId'
  | 'author___contentful_id'
  | 'author___createdAt'
  | 'author___updatedAt'
  | 'author___sys___revision'
  | 'author___node_locale'
  | 'author___childContentfulPersonShortBioTextNode___id'
  | 'author___childContentfulPersonShortBioTextNode___parent___id'
  | 'author___childContentfulPersonShortBioTextNode___parent___children'
  | 'author___childContentfulPersonShortBioTextNode___children'
  | 'author___childContentfulPersonShortBioTextNode___children___id'
  | 'author___childContentfulPersonShortBioTextNode___children___children'
  | 'author___childContentfulPersonShortBioTextNode___internal___content'
  | 'author___childContentfulPersonShortBioTextNode___internal___contentDigest'
  | 'author___childContentfulPersonShortBioTextNode___internal___description'
  | 'author___childContentfulPersonShortBioTextNode___internal___fieldOwners'
  | 'author___childContentfulPersonShortBioTextNode___internal___ignoreType'
  | 'author___childContentfulPersonShortBioTextNode___internal___mediaType'
  | 'author___childContentfulPersonShortBioTextNode___internal___owner'
  | 'author___childContentfulPersonShortBioTextNode___internal___type'
  | 'author___childContentfulPersonShortBioTextNode___shortBio'
  | 'author___childContentfulPersonShortBioTextNode___childMarkdownRemark___id'
  | 'author___childContentfulPersonShortBioTextNode___childMarkdownRemark___excerpt'
  | 'author___childContentfulPersonShortBioTextNode___childMarkdownRemark___rawMarkdownBody'
  | 'author___childContentfulPersonShortBioTextNode___childMarkdownRemark___html'
  | 'author___childContentfulPersonShortBioTextNode___childMarkdownRemark___htmlAst'
  | 'author___childContentfulPersonShortBioTextNode___childMarkdownRemark___excerptAst'
  | 'author___childContentfulPersonShortBioTextNode___childMarkdownRemark___headings'
  | 'author___childContentfulPersonShortBioTextNode___childMarkdownRemark___timeToRead'
  | 'author___childContentfulPersonShortBioTextNode___childMarkdownRemark___tableOfContents'
  | 'author___childContentfulPersonShortBioTextNode___childMarkdownRemark___children'
  | 'description___id'
  | 'description___parent___id'
  | 'description___parent___parent___id'
  | 'description___parent___parent___children'
  | 'description___parent___children'
  | 'description___parent___children___id'
  | 'description___parent___children___children'
  | 'description___parent___internal___content'
  | 'description___parent___internal___contentDigest'
  | 'description___parent___internal___description'
  | 'description___parent___internal___fieldOwners'
  | 'description___parent___internal___ignoreType'
  | 'description___parent___internal___mediaType'
  | 'description___parent___internal___owner'
  | 'description___parent___internal___type'
  | 'description___children'
  | 'description___children___id'
  | 'description___children___parent___id'
  | 'description___children___parent___children'
  | 'description___children___children'
  | 'description___children___children___id'
  | 'description___children___children___children'
  | 'description___children___internal___content'
  | 'description___children___internal___contentDigest'
  | 'description___children___internal___description'
  | 'description___children___internal___fieldOwners'
  | 'description___children___internal___ignoreType'
  | 'description___children___internal___mediaType'
  | 'description___children___internal___owner'
  | 'description___children___internal___type'
  | 'description___internal___content'
  | 'description___internal___contentDigest'
  | 'description___internal___description'
  | 'description___internal___fieldOwners'
  | 'description___internal___ignoreType'
  | 'description___internal___mediaType'
  | 'description___internal___owner'
  | 'description___internal___type'
  | 'description___description'
  | 'description___childMarkdownRemark___id'
  | 'description___childMarkdownRemark___frontmatter___title'
  | 'description___childMarkdownRemark___excerpt'
  | 'description___childMarkdownRemark___rawMarkdownBody'
  | 'description___childMarkdownRemark___html'
  | 'description___childMarkdownRemark___htmlAst'
  | 'description___childMarkdownRemark___excerptAst'
  | 'description___childMarkdownRemark___headings'
  | 'description___childMarkdownRemark___headings___id'
  | 'description___childMarkdownRemark___headings___value'
  | 'description___childMarkdownRemark___headings___depth'
  | 'description___childMarkdownRemark___timeToRead'
  | 'description___childMarkdownRemark___tableOfContents'
  | 'description___childMarkdownRemark___wordCount___paragraphs'
  | 'description___childMarkdownRemark___wordCount___sentences'
  | 'description___childMarkdownRemark___wordCount___words'
  | 'description___childMarkdownRemark___parent___id'
  | 'description___childMarkdownRemark___parent___children'
  | 'description___childMarkdownRemark___children'
  | 'description___childMarkdownRemark___children___id'
  | 'description___childMarkdownRemark___children___children'
  | 'description___childMarkdownRemark___internal___content'
  | 'description___childMarkdownRemark___internal___contentDigest'
  | 'description___childMarkdownRemark___internal___description'
  | 'description___childMarkdownRemark___internal___fieldOwners'
  | 'description___childMarkdownRemark___internal___ignoreType'
  | 'description___childMarkdownRemark___internal___mediaType'
  | 'description___childMarkdownRemark___internal___owner'
  | 'description___childMarkdownRemark___internal___type'
  | 'body___id'
  | 'body___parent___id'
  | 'body___parent___parent___id'
  | 'body___parent___parent___children'
  | 'body___parent___children'
  | 'body___parent___children___id'
  | 'body___parent___children___children'
  | 'body___parent___internal___content'
  | 'body___parent___internal___contentDigest'
  | 'body___parent___internal___description'
  | 'body___parent___internal___fieldOwners'
  | 'body___parent___internal___ignoreType'
  | 'body___parent___internal___mediaType'
  | 'body___parent___internal___owner'
  | 'body___parent___internal___type'
  | 'body___children'
  | 'body___children___id'
  | 'body___children___parent___id'
  | 'body___children___parent___children'
  | 'body___children___children'
  | 'body___children___children___id'
  | 'body___children___children___children'
  | 'body___children___internal___content'
  | 'body___children___internal___contentDigest'
  | 'body___children___internal___description'
  | 'body___children___internal___fieldOwners'
  | 'body___children___internal___ignoreType'
  | 'body___children___internal___mediaType'
  | 'body___children___internal___owner'
  | 'body___children___internal___type'
  | 'body___internal___content'
  | 'body___internal___contentDigest'
  | 'body___internal___description'
  | 'body___internal___fieldOwners'
  | 'body___internal___ignoreType'
  | 'body___internal___mediaType'
  | 'body___internal___owner'
  | 'body___internal___type'
  | 'body___body'
  | 'body___childMarkdownRemark___id'
  | 'body___childMarkdownRemark___frontmatter___title'
  | 'body___childMarkdownRemark___excerpt'
  | 'body___childMarkdownRemark___rawMarkdownBody'
  | 'body___childMarkdownRemark___html'
  | 'body___childMarkdownRemark___htmlAst'
  | 'body___childMarkdownRemark___excerptAst'
  | 'body___childMarkdownRemark___headings'
  | 'body___childMarkdownRemark___headings___id'
  | 'body___childMarkdownRemark___headings___value'
  | 'body___childMarkdownRemark___headings___depth'
  | 'body___childMarkdownRemark___timeToRead'
  | 'body___childMarkdownRemark___tableOfContents'
  | 'body___childMarkdownRemark___wordCount___paragraphs'
  | 'body___childMarkdownRemark___wordCount___sentences'
  | 'body___childMarkdownRemark___wordCount___words'
  | 'body___childMarkdownRemark___parent___id'
  | 'body___childMarkdownRemark___parent___children'
  | 'body___childMarkdownRemark___children'
  | 'body___childMarkdownRemark___children___id'
  | 'body___childMarkdownRemark___children___children'
  | 'body___childMarkdownRemark___internal___content'
  | 'body___childMarkdownRemark___internal___contentDigest'
  | 'body___childMarkdownRemark___internal___description'
  | 'body___childMarkdownRemark___internal___fieldOwners'
  | 'body___childMarkdownRemark___internal___ignoreType'
  | 'body___childMarkdownRemark___internal___mediaType'
  | 'body___childMarkdownRemark___internal___owner'
  | 'body___childMarkdownRemark___internal___type'
  | 'spaceId'
  | 'contentful_id'
  | 'createdAt'
  | 'updatedAt'
  | 'sys___revision'
  | 'sys___contentType___sys___type'
  | 'sys___contentType___sys___linkType'
  | 'sys___contentType___sys___id'
  | 'sys___contentType___sys___contentful_id'
  | 'node_locale'
  | 'navigationmenu'
  | 'navigationmenu___id'
  | 'navigationmenu___parent___id'
  | 'navigationmenu___parent___parent___id'
  | 'navigationmenu___parent___parent___children'
  | 'navigationmenu___parent___children'
  | 'navigationmenu___parent___children___id'
  | 'navigationmenu___parent___children___children'
  | 'navigationmenu___parent___internal___content'
  | 'navigationmenu___parent___internal___contentDigest'
  | 'navigationmenu___parent___internal___description'
  | 'navigationmenu___parent___internal___fieldOwners'
  | 'navigationmenu___parent___internal___ignoreType'
  | 'navigationmenu___parent___internal___mediaType'
  | 'navigationmenu___parent___internal___owner'
  | 'navigationmenu___parent___internal___type'
  | 'navigationmenu___children'
  | 'navigationmenu___children___id'
  | 'navigationmenu___children___parent___id'
  | 'navigationmenu___children___parent___children'
  | 'navigationmenu___children___children'
  | 'navigationmenu___children___children___id'
  | 'navigationmenu___children___children___children'
  | 'navigationmenu___children___internal___content'
  | 'navigationmenu___children___internal___contentDigest'
  | 'navigationmenu___children___internal___description'
  | 'navigationmenu___children___internal___fieldOwners'
  | 'navigationmenu___children___internal___ignoreType'
  | 'navigationmenu___children___internal___mediaType'
  | 'navigationmenu___children___internal___owner'
  | 'navigationmenu___children___internal___type'
  | 'navigationmenu___internal___content'
  | 'navigationmenu___internal___contentDigest'
  | 'navigationmenu___internal___description'
  | 'navigationmenu___internal___fieldOwners'
  | 'navigationmenu___internal___ignoreType'
  | 'navigationmenu___internal___mediaType'
  | 'navigationmenu___internal___owner'
  | 'navigationmenu___internal___type'
  | 'navigationmenu___label'
  | 'navigationmenu___isExternalLink'
  | 'navigationmenu___navigationlistsortorder'
  | 'navigationmenu___navigationlistsortorder___id'
  | 'navigationmenu___navigationlistsortorder___parent___id'
  | 'navigationmenu___navigationlistsortorder___parent___children'
  | 'navigationmenu___navigationlistsortorder___children'
  | 'navigationmenu___navigationlistsortorder___children___id'
  | 'navigationmenu___navigationlistsortorder___children___children'
  | 'navigationmenu___navigationlistsortorder___internal___content'
  | 'navigationmenu___navigationlistsortorder___internal___contentDigest'
  | 'navigationmenu___navigationlistsortorder___internal___description'
  | 'navigationmenu___navigationlistsortorder___internal___fieldOwners'
  | 'navigationmenu___navigationlistsortorder___internal___ignoreType'
  | 'navigationmenu___navigationlistsortorder___internal___mediaType'
  | 'navigationmenu___navigationlistsortorder___internal___owner'
  | 'navigationmenu___navigationlistsortorder___internal___type'
  | 'navigationmenu___navigationlistsortorder___title'
  | 'navigationmenu___navigationlistsortorder___signInButtonLabel'
  | 'navigationmenu___navigationlistsortorder___signOutButtonLabel'
  | 'navigationmenu___navigationlistsortorder___sortOrder'
  | 'navigationmenu___navigationlistsortorder___sortOrder___id'
  | 'navigationmenu___navigationlistsortorder___sortOrder___children'
  | 'navigationmenu___navigationlistsortorder___sortOrder___label'
  | 'navigationmenu___navigationlistsortorder___sortOrder___isExternalLink'
  | 'navigationmenu___navigationlistsortorder___sortOrder___navigationlistsortorder'
  | 'navigationmenu___navigationlistsortorder___sortOrder___spaceId'
  | 'navigationmenu___navigationlistsortorder___sortOrder___contentful_id'
  | 'navigationmenu___navigationlistsortorder___sortOrder___createdAt'
  | 'navigationmenu___navigationlistsortorder___sortOrder___updatedAt'
  | 'navigationmenu___navigationlistsortorder___sortOrder___node_locale'
  | 'navigationmenu___navigationlistsortorder___sortOrder___url'
  | 'navigationmenu___navigationlistsortorder___sortOrder___slug'
  | 'navigationmenu___navigationlistsortorder___spaceId'
  | 'navigationmenu___navigationlistsortorder___contentful_id'
  | 'navigationmenu___navigationlistsortorder___createdAt'
  | 'navigationmenu___navigationlistsortorder___updatedAt'
  | 'navigationmenu___navigationlistsortorder___sys___revision'
  | 'navigationmenu___navigationlistsortorder___node_locale'
  | 'navigationmenu___spaceId'
  | 'navigationmenu___contentful_id'
  | 'navigationmenu___createdAt'
  | 'navigationmenu___updatedAt'
  | 'navigationmenu___sys___revision'
  | 'navigationmenu___node_locale'
  | 'navigationmenu___url'
  | 'navigationmenu___slug'
  | 'childContentfulBlogPostDescriptionTextNode___id'
  | 'childContentfulBlogPostDescriptionTextNode___parent___id'
  | 'childContentfulBlogPostDescriptionTextNode___parent___parent___id'
  | 'childContentfulBlogPostDescriptionTextNode___parent___parent___children'
  | 'childContentfulBlogPostDescriptionTextNode___parent___children'
  | 'childContentfulBlogPostDescriptionTextNode___parent___children___id'
  | 'childContentfulBlogPostDescriptionTextNode___parent___children___children'
  | 'childContentfulBlogPostDescriptionTextNode___parent___internal___content'
  | 'childContentfulBlogPostDescriptionTextNode___parent___internal___contentDigest'
  | 'childContentfulBlogPostDescriptionTextNode___parent___internal___description'
  | 'childContentfulBlogPostDescriptionTextNode___parent___internal___fieldOwners'
  | 'childContentfulBlogPostDescriptionTextNode___parent___internal___ignoreType'
  | 'childContentfulBlogPostDescriptionTextNode___parent___internal___mediaType'
  | 'childContentfulBlogPostDescriptionTextNode___parent___internal___owner'
  | 'childContentfulBlogPostDescriptionTextNode___parent___internal___type'
  | 'childContentfulBlogPostDescriptionTextNode___children'
  | 'childContentfulBlogPostDescriptionTextNode___children___id'
  | 'childContentfulBlogPostDescriptionTextNode___children___parent___id'
  | 'childContentfulBlogPostDescriptionTextNode___children___parent___children'
  | 'childContentfulBlogPostDescriptionTextNode___children___children'
  | 'childContentfulBlogPostDescriptionTextNode___children___children___id'
  | 'childContentfulBlogPostDescriptionTextNode___children___children___children'
  | 'childContentfulBlogPostDescriptionTextNode___children___internal___content'
  | 'childContentfulBlogPostDescriptionTextNode___children___internal___contentDigest'
  | 'childContentfulBlogPostDescriptionTextNode___children___internal___description'
  | 'childContentfulBlogPostDescriptionTextNode___children___internal___fieldOwners'
  | 'childContentfulBlogPostDescriptionTextNode___children___internal___ignoreType'
  | 'childContentfulBlogPostDescriptionTextNode___children___internal___mediaType'
  | 'childContentfulBlogPostDescriptionTextNode___children___internal___owner'
  | 'childContentfulBlogPostDescriptionTextNode___children___internal___type'
  | 'childContentfulBlogPostDescriptionTextNode___internal___content'
  | 'childContentfulBlogPostDescriptionTextNode___internal___contentDigest'
  | 'childContentfulBlogPostDescriptionTextNode___internal___description'
  | 'childContentfulBlogPostDescriptionTextNode___internal___fieldOwners'
  | 'childContentfulBlogPostDescriptionTextNode___internal___ignoreType'
  | 'childContentfulBlogPostDescriptionTextNode___internal___mediaType'
  | 'childContentfulBlogPostDescriptionTextNode___internal___owner'
  | 'childContentfulBlogPostDescriptionTextNode___internal___type'
  | 'childContentfulBlogPostDescriptionTextNode___description'
  | 'childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___id'
  | 'childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___frontmatter___title'
  | 'childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___excerpt'
  | 'childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___rawMarkdownBody'
  | 'childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___html'
  | 'childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___htmlAst'
  | 'childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___excerptAst'
  | 'childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___headings'
  | 'childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___headings___id'
  | 'childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___headings___value'
  | 'childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___headings___depth'
  | 'childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___timeToRead'
  | 'childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___tableOfContents'
  | 'childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___wordCount___paragraphs'
  | 'childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___wordCount___sentences'
  | 'childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___wordCount___words'
  | 'childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___parent___id'
  | 'childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___parent___children'
  | 'childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___children'
  | 'childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___children___id'
  | 'childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___children___children'
  | 'childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___internal___content'
  | 'childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___internal___contentDigest'
  | 'childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___internal___description'
  | 'childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___internal___fieldOwners'
  | 'childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___internal___ignoreType'
  | 'childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___internal___mediaType'
  | 'childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___internal___owner'
  | 'childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___internal___type'
  | 'childContentfulBlogPostBodyTextNode___id'
  | 'childContentfulBlogPostBodyTextNode___parent___id'
  | 'childContentfulBlogPostBodyTextNode___parent___parent___id'
  | 'childContentfulBlogPostBodyTextNode___parent___parent___children'
  | 'childContentfulBlogPostBodyTextNode___parent___children'
  | 'childContentfulBlogPostBodyTextNode___parent___children___id'
  | 'childContentfulBlogPostBodyTextNode___parent___children___children'
  | 'childContentfulBlogPostBodyTextNode___parent___internal___content'
  | 'childContentfulBlogPostBodyTextNode___parent___internal___contentDigest'
  | 'childContentfulBlogPostBodyTextNode___parent___internal___description'
  | 'childContentfulBlogPostBodyTextNode___parent___internal___fieldOwners'
  | 'childContentfulBlogPostBodyTextNode___parent___internal___ignoreType'
  | 'childContentfulBlogPostBodyTextNode___parent___internal___mediaType'
  | 'childContentfulBlogPostBodyTextNode___parent___internal___owner'
  | 'childContentfulBlogPostBodyTextNode___parent___internal___type'
  | 'childContentfulBlogPostBodyTextNode___children'
  | 'childContentfulBlogPostBodyTextNode___children___id'
  | 'childContentfulBlogPostBodyTextNode___children___parent___id'
  | 'childContentfulBlogPostBodyTextNode___children___parent___children'
  | 'childContentfulBlogPostBodyTextNode___children___children'
  | 'childContentfulBlogPostBodyTextNode___children___children___id'
  | 'childContentfulBlogPostBodyTextNode___children___children___children'
  | 'childContentfulBlogPostBodyTextNode___children___internal___content'
  | 'childContentfulBlogPostBodyTextNode___children___internal___contentDigest'
  | 'childContentfulBlogPostBodyTextNode___children___internal___description'
  | 'childContentfulBlogPostBodyTextNode___children___internal___fieldOwners'
  | 'childContentfulBlogPostBodyTextNode___children___internal___ignoreType'
  | 'childContentfulBlogPostBodyTextNode___children___internal___mediaType'
  | 'childContentfulBlogPostBodyTextNode___children___internal___owner'
  | 'childContentfulBlogPostBodyTextNode___children___internal___type'
  | 'childContentfulBlogPostBodyTextNode___internal___content'
  | 'childContentfulBlogPostBodyTextNode___internal___contentDigest'
  | 'childContentfulBlogPostBodyTextNode___internal___description'
  | 'childContentfulBlogPostBodyTextNode___internal___fieldOwners'
  | 'childContentfulBlogPostBodyTextNode___internal___ignoreType'
  | 'childContentfulBlogPostBodyTextNode___internal___mediaType'
  | 'childContentfulBlogPostBodyTextNode___internal___owner'
  | 'childContentfulBlogPostBodyTextNode___internal___type'
  | 'childContentfulBlogPostBodyTextNode___body'
  | 'childContentfulBlogPostBodyTextNode___childMarkdownRemark___id'
  | 'childContentfulBlogPostBodyTextNode___childMarkdownRemark___frontmatter___title'
  | 'childContentfulBlogPostBodyTextNode___childMarkdownRemark___excerpt'
  | 'childContentfulBlogPostBodyTextNode___childMarkdownRemark___rawMarkdownBody'
  | 'childContentfulBlogPostBodyTextNode___childMarkdownRemark___html'
  | 'childContentfulBlogPostBodyTextNode___childMarkdownRemark___htmlAst'
  | 'childContentfulBlogPostBodyTextNode___childMarkdownRemark___excerptAst'
  | 'childContentfulBlogPostBodyTextNode___childMarkdownRemark___headings'
  | 'childContentfulBlogPostBodyTextNode___childMarkdownRemark___headings___id'
  | 'childContentfulBlogPostBodyTextNode___childMarkdownRemark___headings___value'
  | 'childContentfulBlogPostBodyTextNode___childMarkdownRemark___headings___depth'
  | 'childContentfulBlogPostBodyTextNode___childMarkdownRemark___timeToRead'
  | 'childContentfulBlogPostBodyTextNode___childMarkdownRemark___tableOfContents'
  | 'childContentfulBlogPostBodyTextNode___childMarkdownRemark___wordCount___paragraphs'
  | 'childContentfulBlogPostBodyTextNode___childMarkdownRemark___wordCount___sentences'
  | 'childContentfulBlogPostBodyTextNode___childMarkdownRemark___wordCount___words'
  | 'childContentfulBlogPostBodyTextNode___childMarkdownRemark___parent___id'
  | 'childContentfulBlogPostBodyTextNode___childMarkdownRemark___parent___children'
  | 'childContentfulBlogPostBodyTextNode___childMarkdownRemark___children'
  | 'childContentfulBlogPostBodyTextNode___childMarkdownRemark___children___id'
  | 'childContentfulBlogPostBodyTextNode___childMarkdownRemark___children___children'
  | 'childContentfulBlogPostBodyTextNode___childMarkdownRemark___internal___content'
  | 'childContentfulBlogPostBodyTextNode___childMarkdownRemark___internal___contentDigest'
  | 'childContentfulBlogPostBodyTextNode___childMarkdownRemark___internal___description'
  | 'childContentfulBlogPostBodyTextNode___childMarkdownRemark___internal___fieldOwners'
  | 'childContentfulBlogPostBodyTextNode___childMarkdownRemark___internal___ignoreType'
  | 'childContentfulBlogPostBodyTextNode___childMarkdownRemark___internal___mediaType'
  | 'childContentfulBlogPostBodyTextNode___childMarkdownRemark___internal___owner'
  | 'childContentfulBlogPostBodyTextNode___childMarkdownRemark___internal___type';

export type ContentfulBlogPostFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  publishDate?: Maybe<DateQueryOperatorInput>;
  tags?: Maybe<StringQueryOperatorInput>;
  isExternalLink?: Maybe<BooleanQueryOperatorInput>;
  heroImage?: Maybe<ContentfulAssetFilterInput>;
  author?: Maybe<ContentfulPersonFilterInput>;
  description?: Maybe<ContentfulBlogPostDescriptionTextNodeFilterInput>;
  body?: Maybe<ContentfulBlogPostBodyTextNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulBlogPostSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  navigationmenu?: Maybe<ContentfulNavigationMenuFilterListInput>;
  childContentfulBlogPostDescriptionTextNode?: Maybe<ContentfulBlogPostDescriptionTextNodeFilterInput>;
  childContentfulBlogPostBodyTextNode?: Maybe<ContentfulBlogPostBodyTextNodeFilterInput>;
};

export type ContentfulBlogPostFilterListInput = {
  elemMatch?: Maybe<ContentfulBlogPostFilterInput>;
};

export type ContentfulBlogPostGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulBlogPostEdge>;
  nodes: Array<ContentfulBlogPost>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulBlogPostSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulBlogPostFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulBlogPostSys = {
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulBlogPostSysContentType>;
};

export type ContentfulBlogPostSysContentType = {
  sys?: Maybe<ContentfulBlogPostSysContentTypeSys>;
};

export type ContentfulBlogPostSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulBlogPostSysContentTypeSysFilterInput>;
};

export type ContentfulBlogPostSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
};

export type ContentfulBlogPostSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulBlogPostSysFilterInput = {
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulBlogPostSysContentTypeFilterInput>;
};

export type ContentfulCards = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  cardImage?: Maybe<ContentfulAsset>;
  page?: Maybe<Array<Maybe<ContentfulPage>>>;
  content?: Maybe<ContentfulCardsContentRichTextNode>;
  contentBody?: Maybe<ContentfulCardsContentBodyTextNode>;
  spaceId?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulCardsSys>;
  node_locale?: Maybe<Scalars['String']>;
  childContentfulCardsContentRichTextNode?: Maybe<ContentfulCardsContentRichTextNode>;
  childContentfulCardsContentBodyTextNode?: Maybe<ContentfulCardsContentBodyTextNode>;
};


export type ContentfulCardsCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulCardsUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulCardsConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulCardsEdge>;
  nodes: Array<ContentfulCards>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulCardsGroupConnection>;
};


export type ContentfulCardsConnectionDistinctArgs = {
  field: ContentfulCardsFieldsEnum;
};


export type ContentfulCardsConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulCardsFieldsEnum;
};

export type ContentfulCardsContentBodyTextNode = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  contentBody?: Maybe<Scalars['String']>;
  childMarkdownRemark?: Maybe<MarkdownRemark>;
};

export type ContentfulCardsContentBodyTextNodeConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulCardsContentBodyTextNodeEdge>;
  nodes: Array<ContentfulCardsContentBodyTextNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulCardsContentBodyTextNodeGroupConnection>;
};


export type ContentfulCardsContentBodyTextNodeConnectionDistinctArgs = {
  field: ContentfulCardsContentBodyTextNodeFieldsEnum;
};


export type ContentfulCardsContentBodyTextNodeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulCardsContentBodyTextNodeFieldsEnum;
};

export type ContentfulCardsContentBodyTextNodeEdge = {
  next?: Maybe<ContentfulCardsContentBodyTextNode>;
  node: ContentfulCardsContentBodyTextNode;
  previous?: Maybe<ContentfulCardsContentBodyTextNode>;
};

export type ContentfulCardsContentBodyTextNodeFieldsEnum =
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'contentBody'
  | 'childMarkdownRemark___id'
  | 'childMarkdownRemark___frontmatter___title'
  | 'childMarkdownRemark___excerpt'
  | 'childMarkdownRemark___rawMarkdownBody'
  | 'childMarkdownRemark___html'
  | 'childMarkdownRemark___htmlAst'
  | 'childMarkdownRemark___excerptAst'
  | 'childMarkdownRemark___headings'
  | 'childMarkdownRemark___headings___id'
  | 'childMarkdownRemark___headings___value'
  | 'childMarkdownRemark___headings___depth'
  | 'childMarkdownRemark___timeToRead'
  | 'childMarkdownRemark___tableOfContents'
  | 'childMarkdownRemark___wordCount___paragraphs'
  | 'childMarkdownRemark___wordCount___sentences'
  | 'childMarkdownRemark___wordCount___words'
  | 'childMarkdownRemark___parent___id'
  | 'childMarkdownRemark___parent___parent___id'
  | 'childMarkdownRemark___parent___parent___children'
  | 'childMarkdownRemark___parent___children'
  | 'childMarkdownRemark___parent___children___id'
  | 'childMarkdownRemark___parent___children___children'
  | 'childMarkdownRemark___parent___internal___content'
  | 'childMarkdownRemark___parent___internal___contentDigest'
  | 'childMarkdownRemark___parent___internal___description'
  | 'childMarkdownRemark___parent___internal___fieldOwners'
  | 'childMarkdownRemark___parent___internal___ignoreType'
  | 'childMarkdownRemark___parent___internal___mediaType'
  | 'childMarkdownRemark___parent___internal___owner'
  | 'childMarkdownRemark___parent___internal___type'
  | 'childMarkdownRemark___children'
  | 'childMarkdownRemark___children___id'
  | 'childMarkdownRemark___children___parent___id'
  | 'childMarkdownRemark___children___parent___children'
  | 'childMarkdownRemark___children___children'
  | 'childMarkdownRemark___children___children___id'
  | 'childMarkdownRemark___children___children___children'
  | 'childMarkdownRemark___children___internal___content'
  | 'childMarkdownRemark___children___internal___contentDigest'
  | 'childMarkdownRemark___children___internal___description'
  | 'childMarkdownRemark___children___internal___fieldOwners'
  | 'childMarkdownRemark___children___internal___ignoreType'
  | 'childMarkdownRemark___children___internal___mediaType'
  | 'childMarkdownRemark___children___internal___owner'
  | 'childMarkdownRemark___children___internal___type'
  | 'childMarkdownRemark___internal___content'
  | 'childMarkdownRemark___internal___contentDigest'
  | 'childMarkdownRemark___internal___description'
  | 'childMarkdownRemark___internal___fieldOwners'
  | 'childMarkdownRemark___internal___ignoreType'
  | 'childMarkdownRemark___internal___mediaType'
  | 'childMarkdownRemark___internal___owner'
  | 'childMarkdownRemark___internal___type';

export type ContentfulCardsContentBodyTextNodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  contentBody?: Maybe<StringQueryOperatorInput>;
  childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>;
};

export type ContentfulCardsContentBodyTextNodeGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulCardsContentBodyTextNodeEdge>;
  nodes: Array<ContentfulCardsContentBodyTextNode>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulCardsContentBodyTextNodeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulCardsContentBodyTextNodeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulCardsContentRichTextNode = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  content?: Maybe<Scalars['String']>;
  /** @deprecated This field is deprecated, please use 'json' instead. */
  nodeType?: Maybe<Scalars['String']>;
  json?: Maybe<Scalars['JSON']>;
};

export type ContentfulCardsContentRichTextNodeConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulCardsContentRichTextNodeEdge>;
  nodes: Array<ContentfulCardsContentRichTextNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulCardsContentRichTextNodeGroupConnection>;
};


export type ContentfulCardsContentRichTextNodeConnectionDistinctArgs = {
  field: ContentfulCardsContentRichTextNodeFieldsEnum;
};


export type ContentfulCardsContentRichTextNodeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulCardsContentRichTextNodeFieldsEnum;
};

export type ContentfulCardsContentRichTextNodeEdge = {
  next?: Maybe<ContentfulCardsContentRichTextNode>;
  node: ContentfulCardsContentRichTextNode;
  previous?: Maybe<ContentfulCardsContentRichTextNode>;
};

export type ContentfulCardsContentRichTextNodeFieldsEnum =
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'content'
  | 'nodeType'
  | 'json';

export type ContentfulCardsContentRichTextNodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  content?: Maybe<StringQueryOperatorInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  json?: Maybe<JsonQueryOperatorInput>;
};

export type ContentfulCardsContentRichTextNodeGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulCardsContentRichTextNodeEdge>;
  nodes: Array<ContentfulCardsContentRichTextNode>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulCardsContentRichTextNodeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulCardsContentRichTextNodeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulCardsEdge = {
  next?: Maybe<ContentfulCards>;
  node: ContentfulCards;
  previous?: Maybe<ContentfulCards>;
};

export type ContentfulCardsFieldsEnum =
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'title'
  | 'url'
  | 'cardImage___id'
  | 'cardImage___parent___id'
  | 'cardImage___parent___parent___id'
  | 'cardImage___parent___parent___children'
  | 'cardImage___parent___children'
  | 'cardImage___parent___children___id'
  | 'cardImage___parent___children___children'
  | 'cardImage___parent___internal___content'
  | 'cardImage___parent___internal___contentDigest'
  | 'cardImage___parent___internal___description'
  | 'cardImage___parent___internal___fieldOwners'
  | 'cardImage___parent___internal___ignoreType'
  | 'cardImage___parent___internal___mediaType'
  | 'cardImage___parent___internal___owner'
  | 'cardImage___parent___internal___type'
  | 'cardImage___children'
  | 'cardImage___children___id'
  | 'cardImage___children___parent___id'
  | 'cardImage___children___parent___children'
  | 'cardImage___children___children'
  | 'cardImage___children___children___id'
  | 'cardImage___children___children___children'
  | 'cardImage___children___internal___content'
  | 'cardImage___children___internal___contentDigest'
  | 'cardImage___children___internal___description'
  | 'cardImage___children___internal___fieldOwners'
  | 'cardImage___children___internal___ignoreType'
  | 'cardImage___children___internal___mediaType'
  | 'cardImage___children___internal___owner'
  | 'cardImage___children___internal___type'
  | 'cardImage___internal___content'
  | 'cardImage___internal___contentDigest'
  | 'cardImage___internal___description'
  | 'cardImage___internal___fieldOwners'
  | 'cardImage___internal___ignoreType'
  | 'cardImage___internal___mediaType'
  | 'cardImage___internal___owner'
  | 'cardImage___internal___type'
  | 'cardImage___contentful_id'
  | 'cardImage___spaceId'
  | 'cardImage___createdAt'
  | 'cardImage___updatedAt'
  | 'cardImage___file___url'
  | 'cardImage___file___details___size'
  | 'cardImage___file___fileName'
  | 'cardImage___file___contentType'
  | 'cardImage___title'
  | 'cardImage___description'
  | 'cardImage___node_locale'
  | 'cardImage___sys___revision'
  | 'cardImage___fixed___base64'
  | 'cardImage___fixed___tracedSVG'
  | 'cardImage___fixed___aspectRatio'
  | 'cardImage___fixed___width'
  | 'cardImage___fixed___height'
  | 'cardImage___fixed___src'
  | 'cardImage___fixed___srcSet'
  | 'cardImage___fixed___srcWebp'
  | 'cardImage___fixed___srcSetWebp'
  | 'cardImage___resolutions___base64'
  | 'cardImage___resolutions___tracedSVG'
  | 'cardImage___resolutions___aspectRatio'
  | 'cardImage___resolutions___width'
  | 'cardImage___resolutions___height'
  | 'cardImage___resolutions___src'
  | 'cardImage___resolutions___srcSet'
  | 'cardImage___resolutions___srcWebp'
  | 'cardImage___resolutions___srcSetWebp'
  | 'cardImage___fluid___base64'
  | 'cardImage___fluid___tracedSVG'
  | 'cardImage___fluid___aspectRatio'
  | 'cardImage___fluid___src'
  | 'cardImage___fluid___srcSet'
  | 'cardImage___fluid___srcWebp'
  | 'cardImage___fluid___srcSetWebp'
  | 'cardImage___fluid___sizes'
  | 'cardImage___sizes___base64'
  | 'cardImage___sizes___tracedSVG'
  | 'cardImage___sizes___aspectRatio'
  | 'cardImage___sizes___src'
  | 'cardImage___sizes___srcSet'
  | 'cardImage___sizes___srcWebp'
  | 'cardImage___sizes___srcSetWebp'
  | 'cardImage___sizes___sizes'
  | 'cardImage___resize___base64'
  | 'cardImage___resize___tracedSVG'
  | 'cardImage___resize___src'
  | 'cardImage___resize___width'
  | 'cardImage___resize___height'
  | 'cardImage___resize___aspectRatio'
  | 'page'
  | 'page___id'
  | 'page___parent___id'
  | 'page___parent___parent___id'
  | 'page___parent___parent___children'
  | 'page___parent___children'
  | 'page___parent___children___id'
  | 'page___parent___children___children'
  | 'page___parent___internal___content'
  | 'page___parent___internal___contentDigest'
  | 'page___parent___internal___description'
  | 'page___parent___internal___fieldOwners'
  | 'page___parent___internal___ignoreType'
  | 'page___parent___internal___mediaType'
  | 'page___parent___internal___owner'
  | 'page___parent___internal___type'
  | 'page___children'
  | 'page___children___id'
  | 'page___children___parent___id'
  | 'page___children___parent___children'
  | 'page___children___children'
  | 'page___children___children___id'
  | 'page___children___children___children'
  | 'page___children___internal___content'
  | 'page___children___internal___contentDigest'
  | 'page___children___internal___description'
  | 'page___children___internal___fieldOwners'
  | 'page___children___internal___ignoreType'
  | 'page___children___internal___mediaType'
  | 'page___children___internal___owner'
  | 'page___children___internal___type'
  | 'page___internal___content'
  | 'page___internal___contentDigest'
  | 'page___internal___description'
  | 'page___internal___fieldOwners'
  | 'page___internal___ignoreType'
  | 'page___internal___mediaType'
  | 'page___internal___owner'
  | 'page___internal___type'
  | 'page___title'
  | 'page___appBarTitle'
  | 'page___slug'
  | 'page___url'
  | 'page___heroImages'
  | 'page___heroImages___id'
  | 'page___heroImages___parent___id'
  | 'page___heroImages___parent___children'
  | 'page___heroImages___children'
  | 'page___heroImages___children___id'
  | 'page___heroImages___children___children'
  | 'page___heroImages___internal___content'
  | 'page___heroImages___internal___contentDigest'
  | 'page___heroImages___internal___description'
  | 'page___heroImages___internal___fieldOwners'
  | 'page___heroImages___internal___ignoreType'
  | 'page___heroImages___internal___mediaType'
  | 'page___heroImages___internal___owner'
  | 'page___heroImages___internal___type'
  | 'page___heroImages___contentful_id'
  | 'page___heroImages___spaceId'
  | 'page___heroImages___createdAt'
  | 'page___heroImages___updatedAt'
  | 'page___heroImages___file___url'
  | 'page___heroImages___file___fileName'
  | 'page___heroImages___file___contentType'
  | 'page___heroImages___title'
  | 'page___heroImages___description'
  | 'page___heroImages___node_locale'
  | 'page___heroImages___sys___revision'
  | 'page___heroImages___fixed___base64'
  | 'page___heroImages___fixed___tracedSVG'
  | 'page___heroImages___fixed___aspectRatio'
  | 'page___heroImages___fixed___width'
  | 'page___heroImages___fixed___height'
  | 'page___heroImages___fixed___src'
  | 'page___heroImages___fixed___srcSet'
  | 'page___heroImages___fixed___srcWebp'
  | 'page___heroImages___fixed___srcSetWebp'
  | 'page___heroImages___resolutions___base64'
  | 'page___heroImages___resolutions___tracedSVG'
  | 'page___heroImages___resolutions___aspectRatio'
  | 'page___heroImages___resolutions___width'
  | 'page___heroImages___resolutions___height'
  | 'page___heroImages___resolutions___src'
  | 'page___heroImages___resolutions___srcSet'
  | 'page___heroImages___resolutions___srcWebp'
  | 'page___heroImages___resolutions___srcSetWebp'
  | 'page___heroImages___fluid___base64'
  | 'page___heroImages___fluid___tracedSVG'
  | 'page___heroImages___fluid___aspectRatio'
  | 'page___heroImages___fluid___src'
  | 'page___heroImages___fluid___srcSet'
  | 'page___heroImages___fluid___srcWebp'
  | 'page___heroImages___fluid___srcSetWebp'
  | 'page___heroImages___fluid___sizes'
  | 'page___heroImages___sizes___base64'
  | 'page___heroImages___sizes___tracedSVG'
  | 'page___heroImages___sizes___aspectRatio'
  | 'page___heroImages___sizes___src'
  | 'page___heroImages___sizes___srcSet'
  | 'page___heroImages___sizes___srcWebp'
  | 'page___heroImages___sizes___srcSetWebp'
  | 'page___heroImages___sizes___sizes'
  | 'page___heroImages___resize___base64'
  | 'page___heroImages___resize___tracedSVG'
  | 'page___heroImages___resize___src'
  | 'page___heroImages___resize___width'
  | 'page___heroImages___resize___height'
  | 'page___heroImages___resize___aspectRatio'
  | 'page___headerCtAs'
  | 'page___headerCtAs___id'
  | 'page___headerCtAs___parent___id'
  | 'page___headerCtAs___parent___children'
  | 'page___headerCtAs___children'
  | 'page___headerCtAs___children___id'
  | 'page___headerCtAs___children___children'
  | 'page___headerCtAs___internal___content'
  | 'page___headerCtAs___internal___contentDigest'
  | 'page___headerCtAs___internal___description'
  | 'page___headerCtAs___internal___fieldOwners'
  | 'page___headerCtAs___internal___ignoreType'
  | 'page___headerCtAs___internal___mediaType'
  | 'page___headerCtAs___internal___owner'
  | 'page___headerCtAs___internal___type'
  | 'page___headerCtAs___label'
  | 'page___headerCtAs___url'
  | 'page___headerCtAs___isExternalLink'
  | 'page___headerCtAs___navigationmenu'
  | 'page___headerCtAs___navigationmenu___id'
  | 'page___headerCtAs___navigationmenu___children'
  | 'page___headerCtAs___navigationmenu___label'
  | 'page___headerCtAs___navigationmenu___isExternalLink'
  | 'page___headerCtAs___navigationmenu___navigationlistsortorder'
  | 'page___headerCtAs___navigationmenu___spaceId'
  | 'page___headerCtAs___navigationmenu___contentful_id'
  | 'page___headerCtAs___navigationmenu___createdAt'
  | 'page___headerCtAs___navigationmenu___updatedAt'
  | 'page___headerCtAs___navigationmenu___node_locale'
  | 'page___headerCtAs___navigationmenu___url'
  | 'page___headerCtAs___navigationmenu___slug'
  | 'page___headerCtAs___page'
  | 'page___headerCtAs___page___id'
  | 'page___headerCtAs___page___children'
  | 'page___headerCtAs___page___title'
  | 'page___headerCtAs___page___appBarTitle'
  | 'page___headerCtAs___page___slug'
  | 'page___headerCtAs___page___url'
  | 'page___headerCtAs___page___heroImages'
  | 'page___headerCtAs___page___headerCtAs'
  | 'page___headerCtAs___page___cards'
  | 'page___headerCtAs___page___spaceId'
  | 'page___headerCtAs___page___contentful_id'
  | 'page___headerCtAs___page___createdAt'
  | 'page___headerCtAs___page___updatedAt'
  | 'page___headerCtAs___page___node_locale'
  | 'page___headerCtAs___page___subPages'
  | 'page___headerCtAs___spaceId'
  | 'page___headerCtAs___contentful_id'
  | 'page___headerCtAs___createdAt'
  | 'page___headerCtAs___updatedAt'
  | 'page___headerCtAs___sys___revision'
  | 'page___headerCtAs___node_locale'
  | 'page___headerCtAs___slug'
  | 'page___cards'
  | 'page___cards___id'
  | 'page___cards___parent___id'
  | 'page___cards___parent___children'
  | 'page___cards___children'
  | 'page___cards___children___id'
  | 'page___cards___children___children'
  | 'page___cards___internal___content'
  | 'page___cards___internal___contentDigest'
  | 'page___cards___internal___description'
  | 'page___cards___internal___fieldOwners'
  | 'page___cards___internal___ignoreType'
  | 'page___cards___internal___mediaType'
  | 'page___cards___internal___owner'
  | 'page___cards___internal___type'
  | 'page___cards___title'
  | 'page___cards___url'
  | 'page___cards___cardImage___id'
  | 'page___cards___cardImage___children'
  | 'page___cards___cardImage___contentful_id'
  | 'page___cards___cardImage___spaceId'
  | 'page___cards___cardImage___createdAt'
  | 'page___cards___cardImage___updatedAt'
  | 'page___cards___cardImage___title'
  | 'page___cards___cardImage___description'
  | 'page___cards___cardImage___node_locale'
  | 'page___cards___page'
  | 'page___cards___page___id'
  | 'page___cards___page___children'
  | 'page___cards___page___title'
  | 'page___cards___page___appBarTitle'
  | 'page___cards___page___slug'
  | 'page___cards___page___url'
  | 'page___cards___page___heroImages'
  | 'page___cards___page___headerCtAs'
  | 'page___cards___page___cards'
  | 'page___cards___page___spaceId'
  | 'page___cards___page___contentful_id'
  | 'page___cards___page___createdAt'
  | 'page___cards___page___updatedAt'
  | 'page___cards___page___node_locale'
  | 'page___cards___page___subPages'
  | 'page___cards___content___id'
  | 'page___cards___content___children'
  | 'page___cards___content___content'
  | 'page___cards___content___nodeType'
  | 'page___cards___content___json'
  | 'page___cards___contentBody___id'
  | 'page___cards___contentBody___children'
  | 'page___cards___contentBody___contentBody'
  | 'page___cards___spaceId'
  | 'page___cards___contentful_id'
  | 'page___cards___createdAt'
  | 'page___cards___updatedAt'
  | 'page___cards___sys___revision'
  | 'page___cards___node_locale'
  | 'page___cards___childContentfulCardsContentRichTextNode___id'
  | 'page___cards___childContentfulCardsContentRichTextNode___children'
  | 'page___cards___childContentfulCardsContentRichTextNode___content'
  | 'page___cards___childContentfulCardsContentRichTextNode___nodeType'
  | 'page___cards___childContentfulCardsContentRichTextNode___json'
  | 'page___cards___childContentfulCardsContentBodyTextNode___id'
  | 'page___cards___childContentfulCardsContentBodyTextNode___children'
  | 'page___cards___childContentfulCardsContentBodyTextNode___contentBody'
  | 'page___content___id'
  | 'page___content___parent___id'
  | 'page___content___parent___children'
  | 'page___content___children'
  | 'page___content___children___id'
  | 'page___content___children___children'
  | 'page___content___internal___content'
  | 'page___content___internal___contentDigest'
  | 'page___content___internal___description'
  | 'page___content___internal___fieldOwners'
  | 'page___content___internal___ignoreType'
  | 'page___content___internal___mediaType'
  | 'page___content___internal___owner'
  | 'page___content___internal___type'
  | 'page___content___content'
  | 'page___content___childMarkdownRemark___id'
  | 'page___content___childMarkdownRemark___excerpt'
  | 'page___content___childMarkdownRemark___rawMarkdownBody'
  | 'page___content___childMarkdownRemark___html'
  | 'page___content___childMarkdownRemark___htmlAst'
  | 'page___content___childMarkdownRemark___excerptAst'
  | 'page___content___childMarkdownRemark___headings'
  | 'page___content___childMarkdownRemark___timeToRead'
  | 'page___content___childMarkdownRemark___tableOfContents'
  | 'page___content___childMarkdownRemark___children'
  | 'page___additionalProperties___id'
  | 'page___additionalProperties___parent___id'
  | 'page___additionalProperties___parent___children'
  | 'page___additionalProperties___children'
  | 'page___additionalProperties___children___id'
  | 'page___additionalProperties___children___children'
  | 'page___additionalProperties___internal___content'
  | 'page___additionalProperties___internal___contentDigest'
  | 'page___additionalProperties___internal___description'
  | 'page___additionalProperties___internal___fieldOwners'
  | 'page___additionalProperties___internal___ignoreType'
  | 'page___additionalProperties___internal___mediaType'
  | 'page___additionalProperties___internal___owner'
  | 'page___additionalProperties___internal___type'
  | 'page___additionalProperties___heroCopy'
  | 'page___additionalProperties___headerLabel'
  | 'page___additionalProperties___subHeaderLabel'
  | 'page___additionalProperties___headerLine2Label'
  | 'page___additionalProperties___backgroundImageUrl'
  | 'page___additionalProperties___contentBodyLabel'
  | 'page___spaceId'
  | 'page___contentful_id'
  | 'page___createdAt'
  | 'page___updatedAt'
  | 'page___sys___revision'
  | 'page___node_locale'
  | 'page___subPages'
  | 'page___subPages___id'
  | 'page___subPages___parent___id'
  | 'page___subPages___parent___children'
  | 'page___subPages___children'
  | 'page___subPages___children___id'
  | 'page___subPages___children___children'
  | 'page___subPages___internal___content'
  | 'page___subPages___internal___contentDigest'
  | 'page___subPages___internal___description'
  | 'page___subPages___internal___fieldOwners'
  | 'page___subPages___internal___ignoreType'
  | 'page___subPages___internal___mediaType'
  | 'page___subPages___internal___owner'
  | 'page___subPages___internal___type'
  | 'page___subPages___label'
  | 'page___subPages___url'
  | 'page___subPages___isExternalLink'
  | 'page___subPages___navigationmenu'
  | 'page___subPages___navigationmenu___id'
  | 'page___subPages___navigationmenu___children'
  | 'page___subPages___navigationmenu___label'
  | 'page___subPages___navigationmenu___isExternalLink'
  | 'page___subPages___navigationmenu___navigationlistsortorder'
  | 'page___subPages___navigationmenu___spaceId'
  | 'page___subPages___navigationmenu___contentful_id'
  | 'page___subPages___navigationmenu___createdAt'
  | 'page___subPages___navigationmenu___updatedAt'
  | 'page___subPages___navigationmenu___node_locale'
  | 'page___subPages___navigationmenu___url'
  | 'page___subPages___navigationmenu___slug'
  | 'page___subPages___page'
  | 'page___subPages___page___id'
  | 'page___subPages___page___children'
  | 'page___subPages___page___title'
  | 'page___subPages___page___appBarTitle'
  | 'page___subPages___page___slug'
  | 'page___subPages___page___url'
  | 'page___subPages___page___heroImages'
  | 'page___subPages___page___headerCtAs'
  | 'page___subPages___page___cards'
  | 'page___subPages___page___spaceId'
  | 'page___subPages___page___contentful_id'
  | 'page___subPages___page___createdAt'
  | 'page___subPages___page___updatedAt'
  | 'page___subPages___page___node_locale'
  | 'page___subPages___page___subPages'
  | 'page___subPages___spaceId'
  | 'page___subPages___contentful_id'
  | 'page___subPages___createdAt'
  | 'page___subPages___updatedAt'
  | 'page___subPages___sys___revision'
  | 'page___subPages___node_locale'
  | 'page___subPages___slug'
  | 'page___childContentfulPageContentTextNode___id'
  | 'page___childContentfulPageContentTextNode___parent___id'
  | 'page___childContentfulPageContentTextNode___parent___children'
  | 'page___childContentfulPageContentTextNode___children'
  | 'page___childContentfulPageContentTextNode___children___id'
  | 'page___childContentfulPageContentTextNode___children___children'
  | 'page___childContentfulPageContentTextNode___internal___content'
  | 'page___childContentfulPageContentTextNode___internal___contentDigest'
  | 'page___childContentfulPageContentTextNode___internal___description'
  | 'page___childContentfulPageContentTextNode___internal___fieldOwners'
  | 'page___childContentfulPageContentTextNode___internal___ignoreType'
  | 'page___childContentfulPageContentTextNode___internal___mediaType'
  | 'page___childContentfulPageContentTextNode___internal___owner'
  | 'page___childContentfulPageContentTextNode___internal___type'
  | 'page___childContentfulPageContentTextNode___content'
  | 'page___childContentfulPageContentTextNode___childMarkdownRemark___id'
  | 'page___childContentfulPageContentTextNode___childMarkdownRemark___excerpt'
  | 'page___childContentfulPageContentTextNode___childMarkdownRemark___rawMarkdownBody'
  | 'page___childContentfulPageContentTextNode___childMarkdownRemark___html'
  | 'page___childContentfulPageContentTextNode___childMarkdownRemark___htmlAst'
  | 'page___childContentfulPageContentTextNode___childMarkdownRemark___excerptAst'
  | 'page___childContentfulPageContentTextNode___childMarkdownRemark___headings'
  | 'page___childContentfulPageContentTextNode___childMarkdownRemark___timeToRead'
  | 'page___childContentfulPageContentTextNode___childMarkdownRemark___tableOfContents'
  | 'page___childContentfulPageContentTextNode___childMarkdownRemark___children'
  | 'page___childContentfulPageAdditionalPropertiesJsonNode___id'
  | 'page___childContentfulPageAdditionalPropertiesJsonNode___parent___id'
  | 'page___childContentfulPageAdditionalPropertiesJsonNode___parent___children'
  | 'page___childContentfulPageAdditionalPropertiesJsonNode___children'
  | 'page___childContentfulPageAdditionalPropertiesJsonNode___children___id'
  | 'page___childContentfulPageAdditionalPropertiesJsonNode___children___children'
  | 'page___childContentfulPageAdditionalPropertiesJsonNode___internal___content'
  | 'page___childContentfulPageAdditionalPropertiesJsonNode___internal___contentDigest'
  | 'page___childContentfulPageAdditionalPropertiesJsonNode___internal___description'
  | 'page___childContentfulPageAdditionalPropertiesJsonNode___internal___fieldOwners'
  | 'page___childContentfulPageAdditionalPropertiesJsonNode___internal___ignoreType'
  | 'page___childContentfulPageAdditionalPropertiesJsonNode___internal___mediaType'
  | 'page___childContentfulPageAdditionalPropertiesJsonNode___internal___owner'
  | 'page___childContentfulPageAdditionalPropertiesJsonNode___internal___type'
  | 'page___childContentfulPageAdditionalPropertiesJsonNode___heroCopy'
  | 'page___childContentfulPageAdditionalPropertiesJsonNode___headerLabel'
  | 'page___childContentfulPageAdditionalPropertiesJsonNode___subHeaderLabel'
  | 'page___childContentfulPageAdditionalPropertiesJsonNode___headerLine2Label'
  | 'page___childContentfulPageAdditionalPropertiesJsonNode___backgroundImageUrl'
  | 'page___childContentfulPageAdditionalPropertiesJsonNode___contentBodyLabel'
  | 'content___id'
  | 'content___parent___id'
  | 'content___parent___parent___id'
  | 'content___parent___parent___children'
  | 'content___parent___children'
  | 'content___parent___children___id'
  | 'content___parent___children___children'
  | 'content___parent___internal___content'
  | 'content___parent___internal___contentDigest'
  | 'content___parent___internal___description'
  | 'content___parent___internal___fieldOwners'
  | 'content___parent___internal___ignoreType'
  | 'content___parent___internal___mediaType'
  | 'content___parent___internal___owner'
  | 'content___parent___internal___type'
  | 'content___children'
  | 'content___children___id'
  | 'content___children___parent___id'
  | 'content___children___parent___children'
  | 'content___children___children'
  | 'content___children___children___id'
  | 'content___children___children___children'
  | 'content___children___internal___content'
  | 'content___children___internal___contentDigest'
  | 'content___children___internal___description'
  | 'content___children___internal___fieldOwners'
  | 'content___children___internal___ignoreType'
  | 'content___children___internal___mediaType'
  | 'content___children___internal___owner'
  | 'content___children___internal___type'
  | 'content___internal___content'
  | 'content___internal___contentDigest'
  | 'content___internal___description'
  | 'content___internal___fieldOwners'
  | 'content___internal___ignoreType'
  | 'content___internal___mediaType'
  | 'content___internal___owner'
  | 'content___internal___type'
  | 'content___content'
  | 'content___nodeType'
  | 'content___json'
  | 'contentBody___id'
  | 'contentBody___parent___id'
  | 'contentBody___parent___parent___id'
  | 'contentBody___parent___parent___children'
  | 'contentBody___parent___children'
  | 'contentBody___parent___children___id'
  | 'contentBody___parent___children___children'
  | 'contentBody___parent___internal___content'
  | 'contentBody___parent___internal___contentDigest'
  | 'contentBody___parent___internal___description'
  | 'contentBody___parent___internal___fieldOwners'
  | 'contentBody___parent___internal___ignoreType'
  | 'contentBody___parent___internal___mediaType'
  | 'contentBody___parent___internal___owner'
  | 'contentBody___parent___internal___type'
  | 'contentBody___children'
  | 'contentBody___children___id'
  | 'contentBody___children___parent___id'
  | 'contentBody___children___parent___children'
  | 'contentBody___children___children'
  | 'contentBody___children___children___id'
  | 'contentBody___children___children___children'
  | 'contentBody___children___internal___content'
  | 'contentBody___children___internal___contentDigest'
  | 'contentBody___children___internal___description'
  | 'contentBody___children___internal___fieldOwners'
  | 'contentBody___children___internal___ignoreType'
  | 'contentBody___children___internal___mediaType'
  | 'contentBody___children___internal___owner'
  | 'contentBody___children___internal___type'
  | 'contentBody___internal___content'
  | 'contentBody___internal___contentDigest'
  | 'contentBody___internal___description'
  | 'contentBody___internal___fieldOwners'
  | 'contentBody___internal___ignoreType'
  | 'contentBody___internal___mediaType'
  | 'contentBody___internal___owner'
  | 'contentBody___internal___type'
  | 'contentBody___contentBody'
  | 'contentBody___childMarkdownRemark___id'
  | 'contentBody___childMarkdownRemark___frontmatter___title'
  | 'contentBody___childMarkdownRemark___excerpt'
  | 'contentBody___childMarkdownRemark___rawMarkdownBody'
  | 'contentBody___childMarkdownRemark___html'
  | 'contentBody___childMarkdownRemark___htmlAst'
  | 'contentBody___childMarkdownRemark___excerptAst'
  | 'contentBody___childMarkdownRemark___headings'
  | 'contentBody___childMarkdownRemark___headings___id'
  | 'contentBody___childMarkdownRemark___headings___value'
  | 'contentBody___childMarkdownRemark___headings___depth'
  | 'contentBody___childMarkdownRemark___timeToRead'
  | 'contentBody___childMarkdownRemark___tableOfContents'
  | 'contentBody___childMarkdownRemark___wordCount___paragraphs'
  | 'contentBody___childMarkdownRemark___wordCount___sentences'
  | 'contentBody___childMarkdownRemark___wordCount___words'
  | 'contentBody___childMarkdownRemark___parent___id'
  | 'contentBody___childMarkdownRemark___parent___children'
  | 'contentBody___childMarkdownRemark___children'
  | 'contentBody___childMarkdownRemark___children___id'
  | 'contentBody___childMarkdownRemark___children___children'
  | 'contentBody___childMarkdownRemark___internal___content'
  | 'contentBody___childMarkdownRemark___internal___contentDigest'
  | 'contentBody___childMarkdownRemark___internal___description'
  | 'contentBody___childMarkdownRemark___internal___fieldOwners'
  | 'contentBody___childMarkdownRemark___internal___ignoreType'
  | 'contentBody___childMarkdownRemark___internal___mediaType'
  | 'contentBody___childMarkdownRemark___internal___owner'
  | 'contentBody___childMarkdownRemark___internal___type'
  | 'spaceId'
  | 'contentful_id'
  | 'createdAt'
  | 'updatedAt'
  | 'sys___revision'
  | 'sys___contentType___sys___type'
  | 'sys___contentType___sys___linkType'
  | 'sys___contentType___sys___id'
  | 'sys___contentType___sys___contentful_id'
  | 'node_locale'
  | 'childContentfulCardsContentRichTextNode___id'
  | 'childContentfulCardsContentRichTextNode___parent___id'
  | 'childContentfulCardsContentRichTextNode___parent___parent___id'
  | 'childContentfulCardsContentRichTextNode___parent___parent___children'
  | 'childContentfulCardsContentRichTextNode___parent___children'
  | 'childContentfulCardsContentRichTextNode___parent___children___id'
  | 'childContentfulCardsContentRichTextNode___parent___children___children'
  | 'childContentfulCardsContentRichTextNode___parent___internal___content'
  | 'childContentfulCardsContentRichTextNode___parent___internal___contentDigest'
  | 'childContentfulCardsContentRichTextNode___parent___internal___description'
  | 'childContentfulCardsContentRichTextNode___parent___internal___fieldOwners'
  | 'childContentfulCardsContentRichTextNode___parent___internal___ignoreType'
  | 'childContentfulCardsContentRichTextNode___parent___internal___mediaType'
  | 'childContentfulCardsContentRichTextNode___parent___internal___owner'
  | 'childContentfulCardsContentRichTextNode___parent___internal___type'
  | 'childContentfulCardsContentRichTextNode___children'
  | 'childContentfulCardsContentRichTextNode___children___id'
  | 'childContentfulCardsContentRichTextNode___children___parent___id'
  | 'childContentfulCardsContentRichTextNode___children___parent___children'
  | 'childContentfulCardsContentRichTextNode___children___children'
  | 'childContentfulCardsContentRichTextNode___children___children___id'
  | 'childContentfulCardsContentRichTextNode___children___children___children'
  | 'childContentfulCardsContentRichTextNode___children___internal___content'
  | 'childContentfulCardsContentRichTextNode___children___internal___contentDigest'
  | 'childContentfulCardsContentRichTextNode___children___internal___description'
  | 'childContentfulCardsContentRichTextNode___children___internal___fieldOwners'
  | 'childContentfulCardsContentRichTextNode___children___internal___ignoreType'
  | 'childContentfulCardsContentRichTextNode___children___internal___mediaType'
  | 'childContentfulCardsContentRichTextNode___children___internal___owner'
  | 'childContentfulCardsContentRichTextNode___children___internal___type'
  | 'childContentfulCardsContentRichTextNode___internal___content'
  | 'childContentfulCardsContentRichTextNode___internal___contentDigest'
  | 'childContentfulCardsContentRichTextNode___internal___description'
  | 'childContentfulCardsContentRichTextNode___internal___fieldOwners'
  | 'childContentfulCardsContentRichTextNode___internal___ignoreType'
  | 'childContentfulCardsContentRichTextNode___internal___mediaType'
  | 'childContentfulCardsContentRichTextNode___internal___owner'
  | 'childContentfulCardsContentRichTextNode___internal___type'
  | 'childContentfulCardsContentRichTextNode___content'
  | 'childContentfulCardsContentRichTextNode___nodeType'
  | 'childContentfulCardsContentRichTextNode___json'
  | 'childContentfulCardsContentBodyTextNode___id'
  | 'childContentfulCardsContentBodyTextNode___parent___id'
  | 'childContentfulCardsContentBodyTextNode___parent___parent___id'
  | 'childContentfulCardsContentBodyTextNode___parent___parent___children'
  | 'childContentfulCardsContentBodyTextNode___parent___children'
  | 'childContentfulCardsContentBodyTextNode___parent___children___id'
  | 'childContentfulCardsContentBodyTextNode___parent___children___children'
  | 'childContentfulCardsContentBodyTextNode___parent___internal___content'
  | 'childContentfulCardsContentBodyTextNode___parent___internal___contentDigest'
  | 'childContentfulCardsContentBodyTextNode___parent___internal___description'
  | 'childContentfulCardsContentBodyTextNode___parent___internal___fieldOwners'
  | 'childContentfulCardsContentBodyTextNode___parent___internal___ignoreType'
  | 'childContentfulCardsContentBodyTextNode___parent___internal___mediaType'
  | 'childContentfulCardsContentBodyTextNode___parent___internal___owner'
  | 'childContentfulCardsContentBodyTextNode___parent___internal___type'
  | 'childContentfulCardsContentBodyTextNode___children'
  | 'childContentfulCardsContentBodyTextNode___children___id'
  | 'childContentfulCardsContentBodyTextNode___children___parent___id'
  | 'childContentfulCardsContentBodyTextNode___children___parent___children'
  | 'childContentfulCardsContentBodyTextNode___children___children'
  | 'childContentfulCardsContentBodyTextNode___children___children___id'
  | 'childContentfulCardsContentBodyTextNode___children___children___children'
  | 'childContentfulCardsContentBodyTextNode___children___internal___content'
  | 'childContentfulCardsContentBodyTextNode___children___internal___contentDigest'
  | 'childContentfulCardsContentBodyTextNode___children___internal___description'
  | 'childContentfulCardsContentBodyTextNode___children___internal___fieldOwners'
  | 'childContentfulCardsContentBodyTextNode___children___internal___ignoreType'
  | 'childContentfulCardsContentBodyTextNode___children___internal___mediaType'
  | 'childContentfulCardsContentBodyTextNode___children___internal___owner'
  | 'childContentfulCardsContentBodyTextNode___children___internal___type'
  | 'childContentfulCardsContentBodyTextNode___internal___content'
  | 'childContentfulCardsContentBodyTextNode___internal___contentDigest'
  | 'childContentfulCardsContentBodyTextNode___internal___description'
  | 'childContentfulCardsContentBodyTextNode___internal___fieldOwners'
  | 'childContentfulCardsContentBodyTextNode___internal___ignoreType'
  | 'childContentfulCardsContentBodyTextNode___internal___mediaType'
  | 'childContentfulCardsContentBodyTextNode___internal___owner'
  | 'childContentfulCardsContentBodyTextNode___internal___type'
  | 'childContentfulCardsContentBodyTextNode___contentBody'
  | 'childContentfulCardsContentBodyTextNode___childMarkdownRemark___id'
  | 'childContentfulCardsContentBodyTextNode___childMarkdownRemark___frontmatter___title'
  | 'childContentfulCardsContentBodyTextNode___childMarkdownRemark___excerpt'
  | 'childContentfulCardsContentBodyTextNode___childMarkdownRemark___rawMarkdownBody'
  | 'childContentfulCardsContentBodyTextNode___childMarkdownRemark___html'
  | 'childContentfulCardsContentBodyTextNode___childMarkdownRemark___htmlAst'
  | 'childContentfulCardsContentBodyTextNode___childMarkdownRemark___excerptAst'
  | 'childContentfulCardsContentBodyTextNode___childMarkdownRemark___headings'
  | 'childContentfulCardsContentBodyTextNode___childMarkdownRemark___headings___id'
  | 'childContentfulCardsContentBodyTextNode___childMarkdownRemark___headings___value'
  | 'childContentfulCardsContentBodyTextNode___childMarkdownRemark___headings___depth'
  | 'childContentfulCardsContentBodyTextNode___childMarkdownRemark___timeToRead'
  | 'childContentfulCardsContentBodyTextNode___childMarkdownRemark___tableOfContents'
  | 'childContentfulCardsContentBodyTextNode___childMarkdownRemark___wordCount___paragraphs'
  | 'childContentfulCardsContentBodyTextNode___childMarkdownRemark___wordCount___sentences'
  | 'childContentfulCardsContentBodyTextNode___childMarkdownRemark___wordCount___words'
  | 'childContentfulCardsContentBodyTextNode___childMarkdownRemark___parent___id'
  | 'childContentfulCardsContentBodyTextNode___childMarkdownRemark___parent___children'
  | 'childContentfulCardsContentBodyTextNode___childMarkdownRemark___children'
  | 'childContentfulCardsContentBodyTextNode___childMarkdownRemark___children___id'
  | 'childContentfulCardsContentBodyTextNode___childMarkdownRemark___children___children'
  | 'childContentfulCardsContentBodyTextNode___childMarkdownRemark___internal___content'
  | 'childContentfulCardsContentBodyTextNode___childMarkdownRemark___internal___contentDigest'
  | 'childContentfulCardsContentBodyTextNode___childMarkdownRemark___internal___description'
  | 'childContentfulCardsContentBodyTextNode___childMarkdownRemark___internal___fieldOwners'
  | 'childContentfulCardsContentBodyTextNode___childMarkdownRemark___internal___ignoreType'
  | 'childContentfulCardsContentBodyTextNode___childMarkdownRemark___internal___mediaType'
  | 'childContentfulCardsContentBodyTextNode___childMarkdownRemark___internal___owner'
  | 'childContentfulCardsContentBodyTextNode___childMarkdownRemark___internal___type';

export type ContentfulCardsFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  cardImage?: Maybe<ContentfulAssetFilterInput>;
  page?: Maybe<ContentfulPageFilterListInput>;
  content?: Maybe<ContentfulCardsContentRichTextNodeFilterInput>;
  contentBody?: Maybe<ContentfulCardsContentBodyTextNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulCardsSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  childContentfulCardsContentRichTextNode?: Maybe<ContentfulCardsContentRichTextNodeFilterInput>;
  childContentfulCardsContentBodyTextNode?: Maybe<ContentfulCardsContentBodyTextNodeFilterInput>;
};

export type ContentfulCardsFilterListInput = {
  elemMatch?: Maybe<ContentfulCardsFilterInput>;
};

export type ContentfulCardsGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulCardsEdge>;
  nodes: Array<ContentfulCards>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulCardsSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulCardsFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulCardsSys = {
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulCardsSysContentType>;
};

export type ContentfulCardsSysContentType = {
  sys?: Maybe<ContentfulCardsSysContentTypeSys>;
};

export type ContentfulCardsSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulCardsSysContentTypeSysFilterInput>;
};

export type ContentfulCardsSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
};

export type ContentfulCardsSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulCardsSysFilterInput = {
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulCardsSysContentTypeFilterInput>;
};

export type ContentfulContentType = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  name?: Maybe<Scalars['String']>;
  displayField?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type ContentfulContentTypeConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulContentTypeEdge>;
  nodes: Array<ContentfulContentType>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulContentTypeGroupConnection>;
};


export type ContentfulContentTypeConnectionDistinctArgs = {
  field: ContentfulContentTypeFieldsEnum;
};


export type ContentfulContentTypeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulContentTypeFieldsEnum;
};

export type ContentfulContentTypeEdge = {
  next?: Maybe<ContentfulContentType>;
  node: ContentfulContentType;
  previous?: Maybe<ContentfulContentType>;
};

export type ContentfulContentTypeFieldsEnum =
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'name'
  | 'displayField'
  | 'description';

export type ContentfulContentTypeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  displayField?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulContentTypeGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulContentTypeEdge>;
  nodes: Array<ContentfulContentType>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulContentTypeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulContentTypeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulFixed = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
};

export type ContentfulFixedFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulFluid = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
};

export type ContentfulFluidFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulImageCropFocus =
  | 'TOP'
  | 'TOP_LEFT'
  | 'TOP_RIGHT'
  | 'BOTTOM'
  | 'BOTTOM_RIGHT'
  | 'BOTTOM_LEFT'
  | 'RIGHT'
  | 'LEFT'
  | 'FACE'
  | 'FACES'
  | 'CENTER';

export type ContentfulImageFormat =
  | 'NO_CHANGE'
  | 'JPG'
  | 'PNG'
  | 'WEBP';

export type ContentfulLink = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  label?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  isExternalLink?: Maybe<Scalars['Boolean']>;
  navigationmenu?: Maybe<Array<Maybe<ContentfulNavigationMenu>>>;
  page?: Maybe<Array<Maybe<ContentfulPage>>>;
  spaceId?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulLinkSys>;
  node_locale?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
};


export type ContentfulLinkCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulLinkUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulLinkConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulLinkEdge>;
  nodes: Array<ContentfulLink>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulLinkGroupConnection>;
};


export type ContentfulLinkConnectionDistinctArgs = {
  field: ContentfulLinkFieldsEnum;
};


export type ContentfulLinkConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulLinkFieldsEnum;
};

export type ContentfulLinkEdge = {
  next?: Maybe<ContentfulLink>;
  node: ContentfulLink;
  previous?: Maybe<ContentfulLink>;
};

export type ContentfulLinkFieldsEnum =
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'label'
  | 'url'
  | 'isExternalLink'
  | 'navigationmenu'
  | 'navigationmenu___id'
  | 'navigationmenu___parent___id'
  | 'navigationmenu___parent___parent___id'
  | 'navigationmenu___parent___parent___children'
  | 'navigationmenu___parent___children'
  | 'navigationmenu___parent___children___id'
  | 'navigationmenu___parent___children___children'
  | 'navigationmenu___parent___internal___content'
  | 'navigationmenu___parent___internal___contentDigest'
  | 'navigationmenu___parent___internal___description'
  | 'navigationmenu___parent___internal___fieldOwners'
  | 'navigationmenu___parent___internal___ignoreType'
  | 'navigationmenu___parent___internal___mediaType'
  | 'navigationmenu___parent___internal___owner'
  | 'navigationmenu___parent___internal___type'
  | 'navigationmenu___children'
  | 'navigationmenu___children___id'
  | 'navigationmenu___children___parent___id'
  | 'navigationmenu___children___parent___children'
  | 'navigationmenu___children___children'
  | 'navigationmenu___children___children___id'
  | 'navigationmenu___children___children___children'
  | 'navigationmenu___children___internal___content'
  | 'navigationmenu___children___internal___contentDigest'
  | 'navigationmenu___children___internal___description'
  | 'navigationmenu___children___internal___fieldOwners'
  | 'navigationmenu___children___internal___ignoreType'
  | 'navigationmenu___children___internal___mediaType'
  | 'navigationmenu___children___internal___owner'
  | 'navigationmenu___children___internal___type'
  | 'navigationmenu___internal___content'
  | 'navigationmenu___internal___contentDigest'
  | 'navigationmenu___internal___description'
  | 'navigationmenu___internal___fieldOwners'
  | 'navigationmenu___internal___ignoreType'
  | 'navigationmenu___internal___mediaType'
  | 'navigationmenu___internal___owner'
  | 'navigationmenu___internal___type'
  | 'navigationmenu___label'
  | 'navigationmenu___isExternalLink'
  | 'navigationmenu___navigationlistsortorder'
  | 'navigationmenu___navigationlistsortorder___id'
  | 'navigationmenu___navigationlistsortorder___parent___id'
  | 'navigationmenu___navigationlistsortorder___parent___children'
  | 'navigationmenu___navigationlistsortorder___children'
  | 'navigationmenu___navigationlistsortorder___children___id'
  | 'navigationmenu___navigationlistsortorder___children___children'
  | 'navigationmenu___navigationlistsortorder___internal___content'
  | 'navigationmenu___navigationlistsortorder___internal___contentDigest'
  | 'navigationmenu___navigationlistsortorder___internal___description'
  | 'navigationmenu___navigationlistsortorder___internal___fieldOwners'
  | 'navigationmenu___navigationlistsortorder___internal___ignoreType'
  | 'navigationmenu___navigationlistsortorder___internal___mediaType'
  | 'navigationmenu___navigationlistsortorder___internal___owner'
  | 'navigationmenu___navigationlistsortorder___internal___type'
  | 'navigationmenu___navigationlistsortorder___title'
  | 'navigationmenu___navigationlistsortorder___signInButtonLabel'
  | 'navigationmenu___navigationlistsortorder___signOutButtonLabel'
  | 'navigationmenu___navigationlistsortorder___sortOrder'
  | 'navigationmenu___navigationlistsortorder___sortOrder___id'
  | 'navigationmenu___navigationlistsortorder___sortOrder___children'
  | 'navigationmenu___navigationlistsortorder___sortOrder___label'
  | 'navigationmenu___navigationlistsortorder___sortOrder___isExternalLink'
  | 'navigationmenu___navigationlistsortorder___sortOrder___navigationlistsortorder'
  | 'navigationmenu___navigationlistsortorder___sortOrder___spaceId'
  | 'navigationmenu___navigationlistsortorder___sortOrder___contentful_id'
  | 'navigationmenu___navigationlistsortorder___sortOrder___createdAt'
  | 'navigationmenu___navigationlistsortorder___sortOrder___updatedAt'
  | 'navigationmenu___navigationlistsortorder___sortOrder___node_locale'
  | 'navigationmenu___navigationlistsortorder___sortOrder___url'
  | 'navigationmenu___navigationlistsortorder___sortOrder___slug'
  | 'navigationmenu___navigationlistsortorder___spaceId'
  | 'navigationmenu___navigationlistsortorder___contentful_id'
  | 'navigationmenu___navigationlistsortorder___createdAt'
  | 'navigationmenu___navigationlistsortorder___updatedAt'
  | 'navigationmenu___navigationlistsortorder___sys___revision'
  | 'navigationmenu___navigationlistsortorder___node_locale'
  | 'navigationmenu___spaceId'
  | 'navigationmenu___contentful_id'
  | 'navigationmenu___createdAt'
  | 'navigationmenu___updatedAt'
  | 'navigationmenu___sys___revision'
  | 'navigationmenu___node_locale'
  | 'navigationmenu___url'
  | 'navigationmenu___slug'
  | 'page'
  | 'page___id'
  | 'page___parent___id'
  | 'page___parent___parent___id'
  | 'page___parent___parent___children'
  | 'page___parent___children'
  | 'page___parent___children___id'
  | 'page___parent___children___children'
  | 'page___parent___internal___content'
  | 'page___parent___internal___contentDigest'
  | 'page___parent___internal___description'
  | 'page___parent___internal___fieldOwners'
  | 'page___parent___internal___ignoreType'
  | 'page___parent___internal___mediaType'
  | 'page___parent___internal___owner'
  | 'page___parent___internal___type'
  | 'page___children'
  | 'page___children___id'
  | 'page___children___parent___id'
  | 'page___children___parent___children'
  | 'page___children___children'
  | 'page___children___children___id'
  | 'page___children___children___children'
  | 'page___children___internal___content'
  | 'page___children___internal___contentDigest'
  | 'page___children___internal___description'
  | 'page___children___internal___fieldOwners'
  | 'page___children___internal___ignoreType'
  | 'page___children___internal___mediaType'
  | 'page___children___internal___owner'
  | 'page___children___internal___type'
  | 'page___internal___content'
  | 'page___internal___contentDigest'
  | 'page___internal___description'
  | 'page___internal___fieldOwners'
  | 'page___internal___ignoreType'
  | 'page___internal___mediaType'
  | 'page___internal___owner'
  | 'page___internal___type'
  | 'page___title'
  | 'page___appBarTitle'
  | 'page___slug'
  | 'page___url'
  | 'page___heroImages'
  | 'page___heroImages___id'
  | 'page___heroImages___parent___id'
  | 'page___heroImages___parent___children'
  | 'page___heroImages___children'
  | 'page___heroImages___children___id'
  | 'page___heroImages___children___children'
  | 'page___heroImages___internal___content'
  | 'page___heroImages___internal___contentDigest'
  | 'page___heroImages___internal___description'
  | 'page___heroImages___internal___fieldOwners'
  | 'page___heroImages___internal___ignoreType'
  | 'page___heroImages___internal___mediaType'
  | 'page___heroImages___internal___owner'
  | 'page___heroImages___internal___type'
  | 'page___heroImages___contentful_id'
  | 'page___heroImages___spaceId'
  | 'page___heroImages___createdAt'
  | 'page___heroImages___updatedAt'
  | 'page___heroImages___file___url'
  | 'page___heroImages___file___fileName'
  | 'page___heroImages___file___contentType'
  | 'page___heroImages___title'
  | 'page___heroImages___description'
  | 'page___heroImages___node_locale'
  | 'page___heroImages___sys___revision'
  | 'page___heroImages___fixed___base64'
  | 'page___heroImages___fixed___tracedSVG'
  | 'page___heroImages___fixed___aspectRatio'
  | 'page___heroImages___fixed___width'
  | 'page___heroImages___fixed___height'
  | 'page___heroImages___fixed___src'
  | 'page___heroImages___fixed___srcSet'
  | 'page___heroImages___fixed___srcWebp'
  | 'page___heroImages___fixed___srcSetWebp'
  | 'page___heroImages___resolutions___base64'
  | 'page___heroImages___resolutions___tracedSVG'
  | 'page___heroImages___resolutions___aspectRatio'
  | 'page___heroImages___resolutions___width'
  | 'page___heroImages___resolutions___height'
  | 'page___heroImages___resolutions___src'
  | 'page___heroImages___resolutions___srcSet'
  | 'page___heroImages___resolutions___srcWebp'
  | 'page___heroImages___resolutions___srcSetWebp'
  | 'page___heroImages___fluid___base64'
  | 'page___heroImages___fluid___tracedSVG'
  | 'page___heroImages___fluid___aspectRatio'
  | 'page___heroImages___fluid___src'
  | 'page___heroImages___fluid___srcSet'
  | 'page___heroImages___fluid___srcWebp'
  | 'page___heroImages___fluid___srcSetWebp'
  | 'page___heroImages___fluid___sizes'
  | 'page___heroImages___sizes___base64'
  | 'page___heroImages___sizes___tracedSVG'
  | 'page___heroImages___sizes___aspectRatio'
  | 'page___heroImages___sizes___src'
  | 'page___heroImages___sizes___srcSet'
  | 'page___heroImages___sizes___srcWebp'
  | 'page___heroImages___sizes___srcSetWebp'
  | 'page___heroImages___sizes___sizes'
  | 'page___heroImages___resize___base64'
  | 'page___heroImages___resize___tracedSVG'
  | 'page___heroImages___resize___src'
  | 'page___heroImages___resize___width'
  | 'page___heroImages___resize___height'
  | 'page___heroImages___resize___aspectRatio'
  | 'page___headerCtAs'
  | 'page___headerCtAs___id'
  | 'page___headerCtAs___parent___id'
  | 'page___headerCtAs___parent___children'
  | 'page___headerCtAs___children'
  | 'page___headerCtAs___children___id'
  | 'page___headerCtAs___children___children'
  | 'page___headerCtAs___internal___content'
  | 'page___headerCtAs___internal___contentDigest'
  | 'page___headerCtAs___internal___description'
  | 'page___headerCtAs___internal___fieldOwners'
  | 'page___headerCtAs___internal___ignoreType'
  | 'page___headerCtAs___internal___mediaType'
  | 'page___headerCtAs___internal___owner'
  | 'page___headerCtAs___internal___type'
  | 'page___headerCtAs___label'
  | 'page___headerCtAs___url'
  | 'page___headerCtAs___isExternalLink'
  | 'page___headerCtAs___navigationmenu'
  | 'page___headerCtAs___navigationmenu___id'
  | 'page___headerCtAs___navigationmenu___children'
  | 'page___headerCtAs___navigationmenu___label'
  | 'page___headerCtAs___navigationmenu___isExternalLink'
  | 'page___headerCtAs___navigationmenu___navigationlistsortorder'
  | 'page___headerCtAs___navigationmenu___spaceId'
  | 'page___headerCtAs___navigationmenu___contentful_id'
  | 'page___headerCtAs___navigationmenu___createdAt'
  | 'page___headerCtAs___navigationmenu___updatedAt'
  | 'page___headerCtAs___navigationmenu___node_locale'
  | 'page___headerCtAs___navigationmenu___url'
  | 'page___headerCtAs___navigationmenu___slug'
  | 'page___headerCtAs___page'
  | 'page___headerCtAs___page___id'
  | 'page___headerCtAs___page___children'
  | 'page___headerCtAs___page___title'
  | 'page___headerCtAs___page___appBarTitle'
  | 'page___headerCtAs___page___slug'
  | 'page___headerCtAs___page___url'
  | 'page___headerCtAs___page___heroImages'
  | 'page___headerCtAs___page___headerCtAs'
  | 'page___headerCtAs___page___cards'
  | 'page___headerCtAs___page___spaceId'
  | 'page___headerCtAs___page___contentful_id'
  | 'page___headerCtAs___page___createdAt'
  | 'page___headerCtAs___page___updatedAt'
  | 'page___headerCtAs___page___node_locale'
  | 'page___headerCtAs___page___subPages'
  | 'page___headerCtAs___spaceId'
  | 'page___headerCtAs___contentful_id'
  | 'page___headerCtAs___createdAt'
  | 'page___headerCtAs___updatedAt'
  | 'page___headerCtAs___sys___revision'
  | 'page___headerCtAs___node_locale'
  | 'page___headerCtAs___slug'
  | 'page___cards'
  | 'page___cards___id'
  | 'page___cards___parent___id'
  | 'page___cards___parent___children'
  | 'page___cards___children'
  | 'page___cards___children___id'
  | 'page___cards___children___children'
  | 'page___cards___internal___content'
  | 'page___cards___internal___contentDigest'
  | 'page___cards___internal___description'
  | 'page___cards___internal___fieldOwners'
  | 'page___cards___internal___ignoreType'
  | 'page___cards___internal___mediaType'
  | 'page___cards___internal___owner'
  | 'page___cards___internal___type'
  | 'page___cards___title'
  | 'page___cards___url'
  | 'page___cards___cardImage___id'
  | 'page___cards___cardImage___children'
  | 'page___cards___cardImage___contentful_id'
  | 'page___cards___cardImage___spaceId'
  | 'page___cards___cardImage___createdAt'
  | 'page___cards___cardImage___updatedAt'
  | 'page___cards___cardImage___title'
  | 'page___cards___cardImage___description'
  | 'page___cards___cardImage___node_locale'
  | 'page___cards___page'
  | 'page___cards___page___id'
  | 'page___cards___page___children'
  | 'page___cards___page___title'
  | 'page___cards___page___appBarTitle'
  | 'page___cards___page___slug'
  | 'page___cards___page___url'
  | 'page___cards___page___heroImages'
  | 'page___cards___page___headerCtAs'
  | 'page___cards___page___cards'
  | 'page___cards___page___spaceId'
  | 'page___cards___page___contentful_id'
  | 'page___cards___page___createdAt'
  | 'page___cards___page___updatedAt'
  | 'page___cards___page___node_locale'
  | 'page___cards___page___subPages'
  | 'page___cards___content___id'
  | 'page___cards___content___children'
  | 'page___cards___content___content'
  | 'page___cards___content___nodeType'
  | 'page___cards___content___json'
  | 'page___cards___contentBody___id'
  | 'page___cards___contentBody___children'
  | 'page___cards___contentBody___contentBody'
  | 'page___cards___spaceId'
  | 'page___cards___contentful_id'
  | 'page___cards___createdAt'
  | 'page___cards___updatedAt'
  | 'page___cards___sys___revision'
  | 'page___cards___node_locale'
  | 'page___cards___childContentfulCardsContentRichTextNode___id'
  | 'page___cards___childContentfulCardsContentRichTextNode___children'
  | 'page___cards___childContentfulCardsContentRichTextNode___content'
  | 'page___cards___childContentfulCardsContentRichTextNode___nodeType'
  | 'page___cards___childContentfulCardsContentRichTextNode___json'
  | 'page___cards___childContentfulCardsContentBodyTextNode___id'
  | 'page___cards___childContentfulCardsContentBodyTextNode___children'
  | 'page___cards___childContentfulCardsContentBodyTextNode___contentBody'
  | 'page___content___id'
  | 'page___content___parent___id'
  | 'page___content___parent___children'
  | 'page___content___children'
  | 'page___content___children___id'
  | 'page___content___children___children'
  | 'page___content___internal___content'
  | 'page___content___internal___contentDigest'
  | 'page___content___internal___description'
  | 'page___content___internal___fieldOwners'
  | 'page___content___internal___ignoreType'
  | 'page___content___internal___mediaType'
  | 'page___content___internal___owner'
  | 'page___content___internal___type'
  | 'page___content___content'
  | 'page___content___childMarkdownRemark___id'
  | 'page___content___childMarkdownRemark___excerpt'
  | 'page___content___childMarkdownRemark___rawMarkdownBody'
  | 'page___content___childMarkdownRemark___html'
  | 'page___content___childMarkdownRemark___htmlAst'
  | 'page___content___childMarkdownRemark___excerptAst'
  | 'page___content___childMarkdownRemark___headings'
  | 'page___content___childMarkdownRemark___timeToRead'
  | 'page___content___childMarkdownRemark___tableOfContents'
  | 'page___content___childMarkdownRemark___children'
  | 'page___additionalProperties___id'
  | 'page___additionalProperties___parent___id'
  | 'page___additionalProperties___parent___children'
  | 'page___additionalProperties___children'
  | 'page___additionalProperties___children___id'
  | 'page___additionalProperties___children___children'
  | 'page___additionalProperties___internal___content'
  | 'page___additionalProperties___internal___contentDigest'
  | 'page___additionalProperties___internal___description'
  | 'page___additionalProperties___internal___fieldOwners'
  | 'page___additionalProperties___internal___ignoreType'
  | 'page___additionalProperties___internal___mediaType'
  | 'page___additionalProperties___internal___owner'
  | 'page___additionalProperties___internal___type'
  | 'page___additionalProperties___heroCopy'
  | 'page___additionalProperties___headerLabel'
  | 'page___additionalProperties___subHeaderLabel'
  | 'page___additionalProperties___headerLine2Label'
  | 'page___additionalProperties___backgroundImageUrl'
  | 'page___additionalProperties___contentBodyLabel'
  | 'page___spaceId'
  | 'page___contentful_id'
  | 'page___createdAt'
  | 'page___updatedAt'
  | 'page___sys___revision'
  | 'page___node_locale'
  | 'page___subPages'
  | 'page___subPages___id'
  | 'page___subPages___parent___id'
  | 'page___subPages___parent___children'
  | 'page___subPages___children'
  | 'page___subPages___children___id'
  | 'page___subPages___children___children'
  | 'page___subPages___internal___content'
  | 'page___subPages___internal___contentDigest'
  | 'page___subPages___internal___description'
  | 'page___subPages___internal___fieldOwners'
  | 'page___subPages___internal___ignoreType'
  | 'page___subPages___internal___mediaType'
  | 'page___subPages___internal___owner'
  | 'page___subPages___internal___type'
  | 'page___subPages___label'
  | 'page___subPages___url'
  | 'page___subPages___isExternalLink'
  | 'page___subPages___navigationmenu'
  | 'page___subPages___navigationmenu___id'
  | 'page___subPages___navigationmenu___children'
  | 'page___subPages___navigationmenu___label'
  | 'page___subPages___navigationmenu___isExternalLink'
  | 'page___subPages___navigationmenu___navigationlistsortorder'
  | 'page___subPages___navigationmenu___spaceId'
  | 'page___subPages___navigationmenu___contentful_id'
  | 'page___subPages___navigationmenu___createdAt'
  | 'page___subPages___navigationmenu___updatedAt'
  | 'page___subPages___navigationmenu___node_locale'
  | 'page___subPages___navigationmenu___url'
  | 'page___subPages___navigationmenu___slug'
  | 'page___subPages___page'
  | 'page___subPages___page___id'
  | 'page___subPages___page___children'
  | 'page___subPages___page___title'
  | 'page___subPages___page___appBarTitle'
  | 'page___subPages___page___slug'
  | 'page___subPages___page___url'
  | 'page___subPages___page___heroImages'
  | 'page___subPages___page___headerCtAs'
  | 'page___subPages___page___cards'
  | 'page___subPages___page___spaceId'
  | 'page___subPages___page___contentful_id'
  | 'page___subPages___page___createdAt'
  | 'page___subPages___page___updatedAt'
  | 'page___subPages___page___node_locale'
  | 'page___subPages___page___subPages'
  | 'page___subPages___spaceId'
  | 'page___subPages___contentful_id'
  | 'page___subPages___createdAt'
  | 'page___subPages___updatedAt'
  | 'page___subPages___sys___revision'
  | 'page___subPages___node_locale'
  | 'page___subPages___slug'
  | 'page___childContentfulPageContentTextNode___id'
  | 'page___childContentfulPageContentTextNode___parent___id'
  | 'page___childContentfulPageContentTextNode___parent___children'
  | 'page___childContentfulPageContentTextNode___children'
  | 'page___childContentfulPageContentTextNode___children___id'
  | 'page___childContentfulPageContentTextNode___children___children'
  | 'page___childContentfulPageContentTextNode___internal___content'
  | 'page___childContentfulPageContentTextNode___internal___contentDigest'
  | 'page___childContentfulPageContentTextNode___internal___description'
  | 'page___childContentfulPageContentTextNode___internal___fieldOwners'
  | 'page___childContentfulPageContentTextNode___internal___ignoreType'
  | 'page___childContentfulPageContentTextNode___internal___mediaType'
  | 'page___childContentfulPageContentTextNode___internal___owner'
  | 'page___childContentfulPageContentTextNode___internal___type'
  | 'page___childContentfulPageContentTextNode___content'
  | 'page___childContentfulPageContentTextNode___childMarkdownRemark___id'
  | 'page___childContentfulPageContentTextNode___childMarkdownRemark___excerpt'
  | 'page___childContentfulPageContentTextNode___childMarkdownRemark___rawMarkdownBody'
  | 'page___childContentfulPageContentTextNode___childMarkdownRemark___html'
  | 'page___childContentfulPageContentTextNode___childMarkdownRemark___htmlAst'
  | 'page___childContentfulPageContentTextNode___childMarkdownRemark___excerptAst'
  | 'page___childContentfulPageContentTextNode___childMarkdownRemark___headings'
  | 'page___childContentfulPageContentTextNode___childMarkdownRemark___timeToRead'
  | 'page___childContentfulPageContentTextNode___childMarkdownRemark___tableOfContents'
  | 'page___childContentfulPageContentTextNode___childMarkdownRemark___children'
  | 'page___childContentfulPageAdditionalPropertiesJsonNode___id'
  | 'page___childContentfulPageAdditionalPropertiesJsonNode___parent___id'
  | 'page___childContentfulPageAdditionalPropertiesJsonNode___parent___children'
  | 'page___childContentfulPageAdditionalPropertiesJsonNode___children'
  | 'page___childContentfulPageAdditionalPropertiesJsonNode___children___id'
  | 'page___childContentfulPageAdditionalPropertiesJsonNode___children___children'
  | 'page___childContentfulPageAdditionalPropertiesJsonNode___internal___content'
  | 'page___childContentfulPageAdditionalPropertiesJsonNode___internal___contentDigest'
  | 'page___childContentfulPageAdditionalPropertiesJsonNode___internal___description'
  | 'page___childContentfulPageAdditionalPropertiesJsonNode___internal___fieldOwners'
  | 'page___childContentfulPageAdditionalPropertiesJsonNode___internal___ignoreType'
  | 'page___childContentfulPageAdditionalPropertiesJsonNode___internal___mediaType'
  | 'page___childContentfulPageAdditionalPropertiesJsonNode___internal___owner'
  | 'page___childContentfulPageAdditionalPropertiesJsonNode___internal___type'
  | 'page___childContentfulPageAdditionalPropertiesJsonNode___heroCopy'
  | 'page___childContentfulPageAdditionalPropertiesJsonNode___headerLabel'
  | 'page___childContentfulPageAdditionalPropertiesJsonNode___subHeaderLabel'
  | 'page___childContentfulPageAdditionalPropertiesJsonNode___headerLine2Label'
  | 'page___childContentfulPageAdditionalPropertiesJsonNode___backgroundImageUrl'
  | 'page___childContentfulPageAdditionalPropertiesJsonNode___contentBodyLabel'
  | 'spaceId'
  | 'contentful_id'
  | 'createdAt'
  | 'updatedAt'
  | 'sys___revision'
  | 'sys___contentType___sys___type'
  | 'sys___contentType___sys___linkType'
  | 'sys___contentType___sys___id'
  | 'sys___contentType___sys___contentful_id'
  | 'node_locale'
  | 'slug';

export type ContentfulLinkFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  label?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  isExternalLink?: Maybe<BooleanQueryOperatorInput>;
  navigationmenu?: Maybe<ContentfulNavigationMenuFilterListInput>;
  page?: Maybe<ContentfulPageFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulLinkSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulLinkFilterListInput = {
  elemMatch?: Maybe<ContentfulLinkFilterInput>;
};

export type ContentfulLinkGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulLinkEdge>;
  nodes: Array<ContentfulLink>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulLinkSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulLinkFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulLinkSys = {
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulLinkSysContentType>;
};

export type ContentfulLinkSysContentType = {
  sys?: Maybe<ContentfulLinkSysContentTypeSys>;
};

export type ContentfulLinkSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulLinkSysContentTypeSysFilterInput>;
};

export type ContentfulLinkSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
};

export type ContentfulLinkSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulLinkSysFilterInput = {
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulLinkSysContentTypeFilterInput>;
};

export type ContentfulNavigationListSortOrder = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  title?: Maybe<Scalars['String']>;
  signInButtonLabel?: Maybe<Scalars['String']>;
  signOutButtonLabel?: Maybe<Scalars['String']>;
  sortOrder?: Maybe<Array<Maybe<ContentfulNavigationMenu>>>;
  spaceId?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulNavigationListSortOrderSys>;
  node_locale?: Maybe<Scalars['String']>;
};


export type ContentfulNavigationListSortOrderCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulNavigationListSortOrderUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulNavigationListSortOrderConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulNavigationListSortOrderEdge>;
  nodes: Array<ContentfulNavigationListSortOrder>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulNavigationListSortOrderGroupConnection>;
};


export type ContentfulNavigationListSortOrderConnectionDistinctArgs = {
  field: ContentfulNavigationListSortOrderFieldsEnum;
};


export type ContentfulNavigationListSortOrderConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulNavigationListSortOrderFieldsEnum;
};

export type ContentfulNavigationListSortOrderEdge = {
  next?: Maybe<ContentfulNavigationListSortOrder>;
  node: ContentfulNavigationListSortOrder;
  previous?: Maybe<ContentfulNavigationListSortOrder>;
};

export type ContentfulNavigationListSortOrderFieldsEnum =
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'title'
  | 'signInButtonLabel'
  | 'signOutButtonLabel'
  | 'sortOrder'
  | 'sortOrder___id'
  | 'sortOrder___parent___id'
  | 'sortOrder___parent___parent___id'
  | 'sortOrder___parent___parent___children'
  | 'sortOrder___parent___children'
  | 'sortOrder___parent___children___id'
  | 'sortOrder___parent___children___children'
  | 'sortOrder___parent___internal___content'
  | 'sortOrder___parent___internal___contentDigest'
  | 'sortOrder___parent___internal___description'
  | 'sortOrder___parent___internal___fieldOwners'
  | 'sortOrder___parent___internal___ignoreType'
  | 'sortOrder___parent___internal___mediaType'
  | 'sortOrder___parent___internal___owner'
  | 'sortOrder___parent___internal___type'
  | 'sortOrder___children'
  | 'sortOrder___children___id'
  | 'sortOrder___children___parent___id'
  | 'sortOrder___children___parent___children'
  | 'sortOrder___children___children'
  | 'sortOrder___children___children___id'
  | 'sortOrder___children___children___children'
  | 'sortOrder___children___internal___content'
  | 'sortOrder___children___internal___contentDigest'
  | 'sortOrder___children___internal___description'
  | 'sortOrder___children___internal___fieldOwners'
  | 'sortOrder___children___internal___ignoreType'
  | 'sortOrder___children___internal___mediaType'
  | 'sortOrder___children___internal___owner'
  | 'sortOrder___children___internal___type'
  | 'sortOrder___internal___content'
  | 'sortOrder___internal___contentDigest'
  | 'sortOrder___internal___description'
  | 'sortOrder___internal___fieldOwners'
  | 'sortOrder___internal___ignoreType'
  | 'sortOrder___internal___mediaType'
  | 'sortOrder___internal___owner'
  | 'sortOrder___internal___type'
  | 'sortOrder___label'
  | 'sortOrder___isExternalLink'
  | 'sortOrder___navigationlistsortorder'
  | 'sortOrder___navigationlistsortorder___id'
  | 'sortOrder___navigationlistsortorder___parent___id'
  | 'sortOrder___navigationlistsortorder___parent___children'
  | 'sortOrder___navigationlistsortorder___children'
  | 'sortOrder___navigationlistsortorder___children___id'
  | 'sortOrder___navigationlistsortorder___children___children'
  | 'sortOrder___navigationlistsortorder___internal___content'
  | 'sortOrder___navigationlistsortorder___internal___contentDigest'
  | 'sortOrder___navigationlistsortorder___internal___description'
  | 'sortOrder___navigationlistsortorder___internal___fieldOwners'
  | 'sortOrder___navigationlistsortorder___internal___ignoreType'
  | 'sortOrder___navigationlistsortorder___internal___mediaType'
  | 'sortOrder___navigationlistsortorder___internal___owner'
  | 'sortOrder___navigationlistsortorder___internal___type'
  | 'sortOrder___navigationlistsortorder___title'
  | 'sortOrder___navigationlistsortorder___signInButtonLabel'
  | 'sortOrder___navigationlistsortorder___signOutButtonLabel'
  | 'sortOrder___navigationlistsortorder___sortOrder'
  | 'sortOrder___navigationlistsortorder___sortOrder___id'
  | 'sortOrder___navigationlistsortorder___sortOrder___children'
  | 'sortOrder___navigationlistsortorder___sortOrder___label'
  | 'sortOrder___navigationlistsortorder___sortOrder___isExternalLink'
  | 'sortOrder___navigationlistsortorder___sortOrder___navigationlistsortorder'
  | 'sortOrder___navigationlistsortorder___sortOrder___spaceId'
  | 'sortOrder___navigationlistsortorder___sortOrder___contentful_id'
  | 'sortOrder___navigationlistsortorder___sortOrder___createdAt'
  | 'sortOrder___navigationlistsortorder___sortOrder___updatedAt'
  | 'sortOrder___navigationlistsortorder___sortOrder___node_locale'
  | 'sortOrder___navigationlistsortorder___sortOrder___url'
  | 'sortOrder___navigationlistsortorder___sortOrder___slug'
  | 'sortOrder___navigationlistsortorder___spaceId'
  | 'sortOrder___navigationlistsortorder___contentful_id'
  | 'sortOrder___navigationlistsortorder___createdAt'
  | 'sortOrder___navigationlistsortorder___updatedAt'
  | 'sortOrder___navigationlistsortorder___sys___revision'
  | 'sortOrder___navigationlistsortorder___node_locale'
  | 'sortOrder___spaceId'
  | 'sortOrder___contentful_id'
  | 'sortOrder___createdAt'
  | 'sortOrder___updatedAt'
  | 'sortOrder___sys___revision'
  | 'sortOrder___node_locale'
  | 'sortOrder___url'
  | 'sortOrder___slug'
  | 'spaceId'
  | 'contentful_id'
  | 'createdAt'
  | 'updatedAt'
  | 'sys___revision'
  | 'sys___contentType___sys___type'
  | 'sys___contentType___sys___linkType'
  | 'sys___contentType___sys___id'
  | 'sys___contentType___sys___contentful_id'
  | 'node_locale';

export type ContentfulNavigationListSortOrderFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  signInButtonLabel?: Maybe<StringQueryOperatorInput>;
  signOutButtonLabel?: Maybe<StringQueryOperatorInput>;
  sortOrder?: Maybe<ContentfulNavigationMenuFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulNavigationListSortOrderSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulNavigationListSortOrderFilterListInput = {
  elemMatch?: Maybe<ContentfulNavigationListSortOrderFilterInput>;
};

export type ContentfulNavigationListSortOrderGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulNavigationListSortOrderEdge>;
  nodes: Array<ContentfulNavigationListSortOrder>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulNavigationListSortOrderSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulNavigationListSortOrderFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulNavigationListSortOrderSys = {
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulNavigationListSortOrderSysContentType>;
};

export type ContentfulNavigationListSortOrderSysContentType = {
  sys?: Maybe<ContentfulNavigationListSortOrderSysContentTypeSys>;
};

export type ContentfulNavigationListSortOrderSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulNavigationListSortOrderSysContentTypeSysFilterInput>;
};

export type ContentfulNavigationListSortOrderSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
};

export type ContentfulNavigationListSortOrderSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulNavigationListSortOrderSysFilterInput = {
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulNavigationListSortOrderSysContentTypeFilterInput>;
};

export type ContentfulNavigationMenu = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  label?: Maybe<Scalars['String']>;
  isExternalLink?: Maybe<Scalars['Boolean']>;
  subMenuLinks?: Maybe<Array<Maybe<ContentfulBlogPostContentfulLinkUnion>>>;
  navigationlistsortorder?: Maybe<Array<Maybe<ContentfulNavigationListSortOrder>>>;
  spaceId?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulNavigationMenuSys>;
  node_locale?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
};


export type ContentfulNavigationMenuCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulNavigationMenuUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulNavigationMenuConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulNavigationMenuEdge>;
  nodes: Array<ContentfulNavigationMenu>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulNavigationMenuGroupConnection>;
};


export type ContentfulNavigationMenuConnectionDistinctArgs = {
  field: ContentfulNavigationMenuFieldsEnum;
};


export type ContentfulNavigationMenuConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulNavigationMenuFieldsEnum;
};

export type ContentfulNavigationMenuEdge = {
  next?: Maybe<ContentfulNavigationMenu>;
  node: ContentfulNavigationMenu;
  previous?: Maybe<ContentfulNavigationMenu>;
};

export type ContentfulNavigationMenuFieldsEnum =
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'label'
  | 'isExternalLink'
  | 'navigationlistsortorder'
  | 'navigationlistsortorder___id'
  | 'navigationlistsortorder___parent___id'
  | 'navigationlistsortorder___parent___parent___id'
  | 'navigationlistsortorder___parent___parent___children'
  | 'navigationlistsortorder___parent___children'
  | 'navigationlistsortorder___parent___children___id'
  | 'navigationlistsortorder___parent___children___children'
  | 'navigationlistsortorder___parent___internal___content'
  | 'navigationlistsortorder___parent___internal___contentDigest'
  | 'navigationlistsortorder___parent___internal___description'
  | 'navigationlistsortorder___parent___internal___fieldOwners'
  | 'navigationlistsortorder___parent___internal___ignoreType'
  | 'navigationlistsortorder___parent___internal___mediaType'
  | 'navigationlistsortorder___parent___internal___owner'
  | 'navigationlistsortorder___parent___internal___type'
  | 'navigationlistsortorder___children'
  | 'navigationlistsortorder___children___id'
  | 'navigationlistsortorder___children___parent___id'
  | 'navigationlistsortorder___children___parent___children'
  | 'navigationlistsortorder___children___children'
  | 'navigationlistsortorder___children___children___id'
  | 'navigationlistsortorder___children___children___children'
  | 'navigationlistsortorder___children___internal___content'
  | 'navigationlistsortorder___children___internal___contentDigest'
  | 'navigationlistsortorder___children___internal___description'
  | 'navigationlistsortorder___children___internal___fieldOwners'
  | 'navigationlistsortorder___children___internal___ignoreType'
  | 'navigationlistsortorder___children___internal___mediaType'
  | 'navigationlistsortorder___children___internal___owner'
  | 'navigationlistsortorder___children___internal___type'
  | 'navigationlistsortorder___internal___content'
  | 'navigationlistsortorder___internal___contentDigest'
  | 'navigationlistsortorder___internal___description'
  | 'navigationlistsortorder___internal___fieldOwners'
  | 'navigationlistsortorder___internal___ignoreType'
  | 'navigationlistsortorder___internal___mediaType'
  | 'navigationlistsortorder___internal___owner'
  | 'navigationlistsortorder___internal___type'
  | 'navigationlistsortorder___title'
  | 'navigationlistsortorder___signInButtonLabel'
  | 'navigationlistsortorder___signOutButtonLabel'
  | 'navigationlistsortorder___sortOrder'
  | 'navigationlistsortorder___sortOrder___id'
  | 'navigationlistsortorder___sortOrder___parent___id'
  | 'navigationlistsortorder___sortOrder___parent___children'
  | 'navigationlistsortorder___sortOrder___children'
  | 'navigationlistsortorder___sortOrder___children___id'
  | 'navigationlistsortorder___sortOrder___children___children'
  | 'navigationlistsortorder___sortOrder___internal___content'
  | 'navigationlistsortorder___sortOrder___internal___contentDigest'
  | 'navigationlistsortorder___sortOrder___internal___description'
  | 'navigationlistsortorder___sortOrder___internal___fieldOwners'
  | 'navigationlistsortorder___sortOrder___internal___ignoreType'
  | 'navigationlistsortorder___sortOrder___internal___mediaType'
  | 'navigationlistsortorder___sortOrder___internal___owner'
  | 'navigationlistsortorder___sortOrder___internal___type'
  | 'navigationlistsortorder___sortOrder___label'
  | 'navigationlistsortorder___sortOrder___isExternalLink'
  | 'navigationlistsortorder___sortOrder___navigationlistsortorder'
  | 'navigationlistsortorder___sortOrder___navigationlistsortorder___id'
  | 'navigationlistsortorder___sortOrder___navigationlistsortorder___children'
  | 'navigationlistsortorder___sortOrder___navigationlistsortorder___title'
  | 'navigationlistsortorder___sortOrder___navigationlistsortorder___signInButtonLabel'
  | 'navigationlistsortorder___sortOrder___navigationlistsortorder___signOutButtonLabel'
  | 'navigationlistsortorder___sortOrder___navigationlistsortorder___sortOrder'
  | 'navigationlistsortorder___sortOrder___navigationlistsortorder___spaceId'
  | 'navigationlistsortorder___sortOrder___navigationlistsortorder___contentful_id'
  | 'navigationlistsortorder___sortOrder___navigationlistsortorder___createdAt'
  | 'navigationlistsortorder___sortOrder___navigationlistsortorder___updatedAt'
  | 'navigationlistsortorder___sortOrder___navigationlistsortorder___node_locale'
  | 'navigationlistsortorder___sortOrder___spaceId'
  | 'navigationlistsortorder___sortOrder___contentful_id'
  | 'navigationlistsortorder___sortOrder___createdAt'
  | 'navigationlistsortorder___sortOrder___updatedAt'
  | 'navigationlistsortorder___sortOrder___sys___revision'
  | 'navigationlistsortorder___sortOrder___node_locale'
  | 'navigationlistsortorder___sortOrder___url'
  | 'navigationlistsortorder___sortOrder___slug'
  | 'navigationlistsortorder___spaceId'
  | 'navigationlistsortorder___contentful_id'
  | 'navigationlistsortorder___createdAt'
  | 'navigationlistsortorder___updatedAt'
  | 'navigationlistsortorder___sys___revision'
  | 'navigationlistsortorder___node_locale'
  | 'spaceId'
  | 'contentful_id'
  | 'createdAt'
  | 'updatedAt'
  | 'sys___revision'
  | 'sys___contentType___sys___type'
  | 'sys___contentType___sys___linkType'
  | 'sys___contentType___sys___id'
  | 'sys___contentType___sys___contentful_id'
  | 'node_locale'
  | 'url'
  | 'slug';

export type ContentfulNavigationMenuFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  label?: Maybe<StringQueryOperatorInput>;
  isExternalLink?: Maybe<BooleanQueryOperatorInput>;
  navigationlistsortorder?: Maybe<ContentfulNavigationListSortOrderFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulNavigationMenuSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulNavigationMenuFilterListInput = {
  elemMatch?: Maybe<ContentfulNavigationMenuFilterInput>;
};

export type ContentfulNavigationMenuGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulNavigationMenuEdge>;
  nodes: Array<ContentfulNavigationMenu>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulNavigationMenuSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulNavigationMenuFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulNavigationMenuSys = {
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulNavigationMenuSysContentType>;
};

export type ContentfulNavigationMenuSysContentType = {
  sys?: Maybe<ContentfulNavigationMenuSysContentTypeSys>;
};

export type ContentfulNavigationMenuSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulNavigationMenuSysContentTypeSysFilterInput>;
};

export type ContentfulNavigationMenuSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
};

export type ContentfulNavigationMenuSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulNavigationMenuSysFilterInput = {
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulNavigationMenuSysContentTypeFilterInput>;
};

export type ContentfulPage = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  title?: Maybe<Scalars['String']>;
  appBarTitle?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  heroImages?: Maybe<Array<Maybe<ContentfulAsset>>>;
  headerCtAs?: Maybe<Array<Maybe<ContentfulLink>>>;
  cards?: Maybe<Array<Maybe<ContentfulCards>>>;
  content?: Maybe<ContentfulPageContentTextNode>;
  additionalProperties?: Maybe<ContentfulPageAdditionalPropertiesJsonNode>;
  spaceId?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulPageSys>;
  node_locale?: Maybe<Scalars['String']>;
  subPages?: Maybe<Array<Maybe<ContentfulLink>>>;
  childContentfulPageContentTextNode?: Maybe<ContentfulPageContentTextNode>;
  childContentfulPageAdditionalPropertiesJsonNode?: Maybe<ContentfulPageAdditionalPropertiesJsonNode>;
};


export type ContentfulPageCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulPageUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulPageAdditionalPropertiesJsonNode = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  heroCopy?: Maybe<Scalars['String']>;
  headerLabel?: Maybe<Scalars['String']>;
  subHeaderLabel?: Maybe<Scalars['String']>;
  headerLine2Label?: Maybe<Scalars['String']>;
  backgroundImageUrl?: Maybe<Scalars['String']>;
  contentBodyLabel?: Maybe<Scalars['String']>;
};

export type ContentfulPageAdditionalPropertiesJsonNodeConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulPageAdditionalPropertiesJsonNodeEdge>;
  nodes: Array<ContentfulPageAdditionalPropertiesJsonNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulPageAdditionalPropertiesJsonNodeGroupConnection>;
};


export type ContentfulPageAdditionalPropertiesJsonNodeConnectionDistinctArgs = {
  field: ContentfulPageAdditionalPropertiesJsonNodeFieldsEnum;
};


export type ContentfulPageAdditionalPropertiesJsonNodeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulPageAdditionalPropertiesJsonNodeFieldsEnum;
};

export type ContentfulPageAdditionalPropertiesJsonNodeEdge = {
  next?: Maybe<ContentfulPageAdditionalPropertiesJsonNode>;
  node: ContentfulPageAdditionalPropertiesJsonNode;
  previous?: Maybe<ContentfulPageAdditionalPropertiesJsonNode>;
};

export type ContentfulPageAdditionalPropertiesJsonNodeFieldsEnum =
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'heroCopy'
  | 'headerLabel'
  | 'subHeaderLabel'
  | 'headerLine2Label'
  | 'backgroundImageUrl'
  | 'contentBodyLabel';

export type ContentfulPageAdditionalPropertiesJsonNodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  heroCopy?: Maybe<StringQueryOperatorInput>;
  headerLabel?: Maybe<StringQueryOperatorInput>;
  subHeaderLabel?: Maybe<StringQueryOperatorInput>;
  headerLine2Label?: Maybe<StringQueryOperatorInput>;
  backgroundImageUrl?: Maybe<StringQueryOperatorInput>;
  contentBodyLabel?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulPageAdditionalPropertiesJsonNodeGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulPageAdditionalPropertiesJsonNodeEdge>;
  nodes: Array<ContentfulPageAdditionalPropertiesJsonNode>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulPageAdditionalPropertiesJsonNodeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulPageAdditionalPropertiesJsonNodeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulPageConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulPageEdge>;
  nodes: Array<ContentfulPage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulPageGroupConnection>;
};


export type ContentfulPageConnectionDistinctArgs = {
  field: ContentfulPageFieldsEnum;
};


export type ContentfulPageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulPageFieldsEnum;
};

export type ContentfulPageContentTextNode = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  content?: Maybe<Scalars['String']>;
  childMarkdownRemark?: Maybe<MarkdownRemark>;
};

export type ContentfulPageContentTextNodeConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulPageContentTextNodeEdge>;
  nodes: Array<ContentfulPageContentTextNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulPageContentTextNodeGroupConnection>;
};


export type ContentfulPageContentTextNodeConnectionDistinctArgs = {
  field: ContentfulPageContentTextNodeFieldsEnum;
};


export type ContentfulPageContentTextNodeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulPageContentTextNodeFieldsEnum;
};

export type ContentfulPageContentTextNodeEdge = {
  next?: Maybe<ContentfulPageContentTextNode>;
  node: ContentfulPageContentTextNode;
  previous?: Maybe<ContentfulPageContentTextNode>;
};

export type ContentfulPageContentTextNodeFieldsEnum =
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'content'
  | 'childMarkdownRemark___id'
  | 'childMarkdownRemark___frontmatter___title'
  | 'childMarkdownRemark___excerpt'
  | 'childMarkdownRemark___rawMarkdownBody'
  | 'childMarkdownRemark___html'
  | 'childMarkdownRemark___htmlAst'
  | 'childMarkdownRemark___excerptAst'
  | 'childMarkdownRemark___headings'
  | 'childMarkdownRemark___headings___id'
  | 'childMarkdownRemark___headings___value'
  | 'childMarkdownRemark___headings___depth'
  | 'childMarkdownRemark___timeToRead'
  | 'childMarkdownRemark___tableOfContents'
  | 'childMarkdownRemark___wordCount___paragraphs'
  | 'childMarkdownRemark___wordCount___sentences'
  | 'childMarkdownRemark___wordCount___words'
  | 'childMarkdownRemark___parent___id'
  | 'childMarkdownRemark___parent___parent___id'
  | 'childMarkdownRemark___parent___parent___children'
  | 'childMarkdownRemark___parent___children'
  | 'childMarkdownRemark___parent___children___id'
  | 'childMarkdownRemark___parent___children___children'
  | 'childMarkdownRemark___parent___internal___content'
  | 'childMarkdownRemark___parent___internal___contentDigest'
  | 'childMarkdownRemark___parent___internal___description'
  | 'childMarkdownRemark___parent___internal___fieldOwners'
  | 'childMarkdownRemark___parent___internal___ignoreType'
  | 'childMarkdownRemark___parent___internal___mediaType'
  | 'childMarkdownRemark___parent___internal___owner'
  | 'childMarkdownRemark___parent___internal___type'
  | 'childMarkdownRemark___children'
  | 'childMarkdownRemark___children___id'
  | 'childMarkdownRemark___children___parent___id'
  | 'childMarkdownRemark___children___parent___children'
  | 'childMarkdownRemark___children___children'
  | 'childMarkdownRemark___children___children___id'
  | 'childMarkdownRemark___children___children___children'
  | 'childMarkdownRemark___children___internal___content'
  | 'childMarkdownRemark___children___internal___contentDigest'
  | 'childMarkdownRemark___children___internal___description'
  | 'childMarkdownRemark___children___internal___fieldOwners'
  | 'childMarkdownRemark___children___internal___ignoreType'
  | 'childMarkdownRemark___children___internal___mediaType'
  | 'childMarkdownRemark___children___internal___owner'
  | 'childMarkdownRemark___children___internal___type'
  | 'childMarkdownRemark___internal___content'
  | 'childMarkdownRemark___internal___contentDigest'
  | 'childMarkdownRemark___internal___description'
  | 'childMarkdownRemark___internal___fieldOwners'
  | 'childMarkdownRemark___internal___ignoreType'
  | 'childMarkdownRemark___internal___mediaType'
  | 'childMarkdownRemark___internal___owner'
  | 'childMarkdownRemark___internal___type';

export type ContentfulPageContentTextNodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  content?: Maybe<StringQueryOperatorInput>;
  childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>;
};

export type ContentfulPageContentTextNodeGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulPageContentTextNodeEdge>;
  nodes: Array<ContentfulPageContentTextNode>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulPageContentTextNodeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulPageContentTextNodeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulPageEdge = {
  next?: Maybe<ContentfulPage>;
  node: ContentfulPage;
  previous?: Maybe<ContentfulPage>;
};

export type ContentfulPageFieldsEnum =
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'title'
  | 'appBarTitle'
  | 'slug'
  | 'url'
  | 'heroImages'
  | 'heroImages___id'
  | 'heroImages___parent___id'
  | 'heroImages___parent___parent___id'
  | 'heroImages___parent___parent___children'
  | 'heroImages___parent___children'
  | 'heroImages___parent___children___id'
  | 'heroImages___parent___children___children'
  | 'heroImages___parent___internal___content'
  | 'heroImages___parent___internal___contentDigest'
  | 'heroImages___parent___internal___description'
  | 'heroImages___parent___internal___fieldOwners'
  | 'heroImages___parent___internal___ignoreType'
  | 'heroImages___parent___internal___mediaType'
  | 'heroImages___parent___internal___owner'
  | 'heroImages___parent___internal___type'
  | 'heroImages___children'
  | 'heroImages___children___id'
  | 'heroImages___children___parent___id'
  | 'heroImages___children___parent___children'
  | 'heroImages___children___children'
  | 'heroImages___children___children___id'
  | 'heroImages___children___children___children'
  | 'heroImages___children___internal___content'
  | 'heroImages___children___internal___contentDigest'
  | 'heroImages___children___internal___description'
  | 'heroImages___children___internal___fieldOwners'
  | 'heroImages___children___internal___ignoreType'
  | 'heroImages___children___internal___mediaType'
  | 'heroImages___children___internal___owner'
  | 'heroImages___children___internal___type'
  | 'heroImages___internal___content'
  | 'heroImages___internal___contentDigest'
  | 'heroImages___internal___description'
  | 'heroImages___internal___fieldOwners'
  | 'heroImages___internal___ignoreType'
  | 'heroImages___internal___mediaType'
  | 'heroImages___internal___owner'
  | 'heroImages___internal___type'
  | 'heroImages___contentful_id'
  | 'heroImages___spaceId'
  | 'heroImages___createdAt'
  | 'heroImages___updatedAt'
  | 'heroImages___file___url'
  | 'heroImages___file___details___size'
  | 'heroImages___file___fileName'
  | 'heroImages___file___contentType'
  | 'heroImages___title'
  | 'heroImages___description'
  | 'heroImages___node_locale'
  | 'heroImages___sys___revision'
  | 'heroImages___fixed___base64'
  | 'heroImages___fixed___tracedSVG'
  | 'heroImages___fixed___aspectRatio'
  | 'heroImages___fixed___width'
  | 'heroImages___fixed___height'
  | 'heroImages___fixed___src'
  | 'heroImages___fixed___srcSet'
  | 'heroImages___fixed___srcWebp'
  | 'heroImages___fixed___srcSetWebp'
  | 'heroImages___resolutions___base64'
  | 'heroImages___resolutions___tracedSVG'
  | 'heroImages___resolutions___aspectRatio'
  | 'heroImages___resolutions___width'
  | 'heroImages___resolutions___height'
  | 'heroImages___resolutions___src'
  | 'heroImages___resolutions___srcSet'
  | 'heroImages___resolutions___srcWebp'
  | 'heroImages___resolutions___srcSetWebp'
  | 'heroImages___fluid___base64'
  | 'heroImages___fluid___tracedSVG'
  | 'heroImages___fluid___aspectRatio'
  | 'heroImages___fluid___src'
  | 'heroImages___fluid___srcSet'
  | 'heroImages___fluid___srcWebp'
  | 'heroImages___fluid___srcSetWebp'
  | 'heroImages___fluid___sizes'
  | 'heroImages___sizes___base64'
  | 'heroImages___sizes___tracedSVG'
  | 'heroImages___sizes___aspectRatio'
  | 'heroImages___sizes___src'
  | 'heroImages___sizes___srcSet'
  | 'heroImages___sizes___srcWebp'
  | 'heroImages___sizes___srcSetWebp'
  | 'heroImages___sizes___sizes'
  | 'heroImages___resize___base64'
  | 'heroImages___resize___tracedSVG'
  | 'heroImages___resize___src'
  | 'heroImages___resize___width'
  | 'heroImages___resize___height'
  | 'heroImages___resize___aspectRatio'
  | 'headerCtAs'
  | 'headerCtAs___id'
  | 'headerCtAs___parent___id'
  | 'headerCtAs___parent___parent___id'
  | 'headerCtAs___parent___parent___children'
  | 'headerCtAs___parent___children'
  | 'headerCtAs___parent___children___id'
  | 'headerCtAs___parent___children___children'
  | 'headerCtAs___parent___internal___content'
  | 'headerCtAs___parent___internal___contentDigest'
  | 'headerCtAs___parent___internal___description'
  | 'headerCtAs___parent___internal___fieldOwners'
  | 'headerCtAs___parent___internal___ignoreType'
  | 'headerCtAs___parent___internal___mediaType'
  | 'headerCtAs___parent___internal___owner'
  | 'headerCtAs___parent___internal___type'
  | 'headerCtAs___children'
  | 'headerCtAs___children___id'
  | 'headerCtAs___children___parent___id'
  | 'headerCtAs___children___parent___children'
  | 'headerCtAs___children___children'
  | 'headerCtAs___children___children___id'
  | 'headerCtAs___children___children___children'
  | 'headerCtAs___children___internal___content'
  | 'headerCtAs___children___internal___contentDigest'
  | 'headerCtAs___children___internal___description'
  | 'headerCtAs___children___internal___fieldOwners'
  | 'headerCtAs___children___internal___ignoreType'
  | 'headerCtAs___children___internal___mediaType'
  | 'headerCtAs___children___internal___owner'
  | 'headerCtAs___children___internal___type'
  | 'headerCtAs___internal___content'
  | 'headerCtAs___internal___contentDigest'
  | 'headerCtAs___internal___description'
  | 'headerCtAs___internal___fieldOwners'
  | 'headerCtAs___internal___ignoreType'
  | 'headerCtAs___internal___mediaType'
  | 'headerCtAs___internal___owner'
  | 'headerCtAs___internal___type'
  | 'headerCtAs___label'
  | 'headerCtAs___url'
  | 'headerCtAs___isExternalLink'
  | 'headerCtAs___navigationmenu'
  | 'headerCtAs___navigationmenu___id'
  | 'headerCtAs___navigationmenu___parent___id'
  | 'headerCtAs___navigationmenu___parent___children'
  | 'headerCtAs___navigationmenu___children'
  | 'headerCtAs___navigationmenu___children___id'
  | 'headerCtAs___navigationmenu___children___children'
  | 'headerCtAs___navigationmenu___internal___content'
  | 'headerCtAs___navigationmenu___internal___contentDigest'
  | 'headerCtAs___navigationmenu___internal___description'
  | 'headerCtAs___navigationmenu___internal___fieldOwners'
  | 'headerCtAs___navigationmenu___internal___ignoreType'
  | 'headerCtAs___navigationmenu___internal___mediaType'
  | 'headerCtAs___navigationmenu___internal___owner'
  | 'headerCtAs___navigationmenu___internal___type'
  | 'headerCtAs___navigationmenu___label'
  | 'headerCtAs___navigationmenu___isExternalLink'
  | 'headerCtAs___navigationmenu___navigationlistsortorder'
  | 'headerCtAs___navigationmenu___navigationlistsortorder___id'
  | 'headerCtAs___navigationmenu___navigationlistsortorder___children'
  | 'headerCtAs___navigationmenu___navigationlistsortorder___title'
  | 'headerCtAs___navigationmenu___navigationlistsortorder___signInButtonLabel'
  | 'headerCtAs___navigationmenu___navigationlistsortorder___signOutButtonLabel'
  | 'headerCtAs___navigationmenu___navigationlistsortorder___sortOrder'
  | 'headerCtAs___navigationmenu___navigationlistsortorder___spaceId'
  | 'headerCtAs___navigationmenu___navigationlistsortorder___contentful_id'
  | 'headerCtAs___navigationmenu___navigationlistsortorder___createdAt'
  | 'headerCtAs___navigationmenu___navigationlistsortorder___updatedAt'
  | 'headerCtAs___navigationmenu___navigationlistsortorder___node_locale'
  | 'headerCtAs___navigationmenu___spaceId'
  | 'headerCtAs___navigationmenu___contentful_id'
  | 'headerCtAs___navigationmenu___createdAt'
  | 'headerCtAs___navigationmenu___updatedAt'
  | 'headerCtAs___navigationmenu___sys___revision'
  | 'headerCtAs___navigationmenu___node_locale'
  | 'headerCtAs___navigationmenu___url'
  | 'headerCtAs___navigationmenu___slug'
  | 'headerCtAs___page'
  | 'headerCtAs___page___id'
  | 'headerCtAs___page___parent___id'
  | 'headerCtAs___page___parent___children'
  | 'headerCtAs___page___children'
  | 'headerCtAs___page___children___id'
  | 'headerCtAs___page___children___children'
  | 'headerCtAs___page___internal___content'
  | 'headerCtAs___page___internal___contentDigest'
  | 'headerCtAs___page___internal___description'
  | 'headerCtAs___page___internal___fieldOwners'
  | 'headerCtAs___page___internal___ignoreType'
  | 'headerCtAs___page___internal___mediaType'
  | 'headerCtAs___page___internal___owner'
  | 'headerCtAs___page___internal___type'
  | 'headerCtAs___page___title'
  | 'headerCtAs___page___appBarTitle'
  | 'headerCtAs___page___slug'
  | 'headerCtAs___page___url'
  | 'headerCtAs___page___heroImages'
  | 'headerCtAs___page___heroImages___id'
  | 'headerCtAs___page___heroImages___children'
  | 'headerCtAs___page___heroImages___contentful_id'
  | 'headerCtAs___page___heroImages___spaceId'
  | 'headerCtAs___page___heroImages___createdAt'
  | 'headerCtAs___page___heroImages___updatedAt'
  | 'headerCtAs___page___heroImages___title'
  | 'headerCtAs___page___heroImages___description'
  | 'headerCtAs___page___heroImages___node_locale'
  | 'headerCtAs___page___headerCtAs'
  | 'headerCtAs___page___headerCtAs___id'
  | 'headerCtAs___page___headerCtAs___children'
  | 'headerCtAs___page___headerCtAs___label'
  | 'headerCtAs___page___headerCtAs___url'
  | 'headerCtAs___page___headerCtAs___isExternalLink'
  | 'headerCtAs___page___headerCtAs___navigationmenu'
  | 'headerCtAs___page___headerCtAs___page'
  | 'headerCtAs___page___headerCtAs___spaceId'
  | 'headerCtAs___page___headerCtAs___contentful_id'
  | 'headerCtAs___page___headerCtAs___createdAt'
  | 'headerCtAs___page___headerCtAs___updatedAt'
  | 'headerCtAs___page___headerCtAs___node_locale'
  | 'headerCtAs___page___headerCtAs___slug'
  | 'headerCtAs___page___cards'
  | 'headerCtAs___page___cards___id'
  | 'headerCtAs___page___cards___children'
  | 'headerCtAs___page___cards___title'
  | 'headerCtAs___page___cards___url'
  | 'headerCtAs___page___cards___page'
  | 'headerCtAs___page___cards___spaceId'
  | 'headerCtAs___page___cards___contentful_id'
  | 'headerCtAs___page___cards___createdAt'
  | 'headerCtAs___page___cards___updatedAt'
  | 'headerCtAs___page___cards___node_locale'
  | 'headerCtAs___page___content___id'
  | 'headerCtAs___page___content___children'
  | 'headerCtAs___page___content___content'
  | 'headerCtAs___page___additionalProperties___id'
  | 'headerCtAs___page___additionalProperties___children'
  | 'headerCtAs___page___additionalProperties___heroCopy'
  | 'headerCtAs___page___additionalProperties___headerLabel'
  | 'headerCtAs___page___additionalProperties___subHeaderLabel'
  | 'headerCtAs___page___additionalProperties___headerLine2Label'
  | 'headerCtAs___page___additionalProperties___backgroundImageUrl'
  | 'headerCtAs___page___additionalProperties___contentBodyLabel'
  | 'headerCtAs___page___spaceId'
  | 'headerCtAs___page___contentful_id'
  | 'headerCtAs___page___createdAt'
  | 'headerCtAs___page___updatedAt'
  | 'headerCtAs___page___sys___revision'
  | 'headerCtAs___page___node_locale'
  | 'headerCtAs___page___subPages'
  | 'headerCtAs___page___subPages___id'
  | 'headerCtAs___page___subPages___children'
  | 'headerCtAs___page___subPages___label'
  | 'headerCtAs___page___subPages___url'
  | 'headerCtAs___page___subPages___isExternalLink'
  | 'headerCtAs___page___subPages___navigationmenu'
  | 'headerCtAs___page___subPages___page'
  | 'headerCtAs___page___subPages___spaceId'
  | 'headerCtAs___page___subPages___contentful_id'
  | 'headerCtAs___page___subPages___createdAt'
  | 'headerCtAs___page___subPages___updatedAt'
  | 'headerCtAs___page___subPages___node_locale'
  | 'headerCtAs___page___subPages___slug'
  | 'headerCtAs___page___childContentfulPageContentTextNode___id'
  | 'headerCtAs___page___childContentfulPageContentTextNode___children'
  | 'headerCtAs___page___childContentfulPageContentTextNode___content'
  | 'headerCtAs___page___childContentfulPageAdditionalPropertiesJsonNode___id'
  | 'headerCtAs___page___childContentfulPageAdditionalPropertiesJsonNode___children'
  | 'headerCtAs___page___childContentfulPageAdditionalPropertiesJsonNode___heroCopy'
  | 'headerCtAs___page___childContentfulPageAdditionalPropertiesJsonNode___headerLabel'
  | 'headerCtAs___page___childContentfulPageAdditionalPropertiesJsonNode___subHeaderLabel'
  | 'headerCtAs___page___childContentfulPageAdditionalPropertiesJsonNode___headerLine2Label'
  | 'headerCtAs___page___childContentfulPageAdditionalPropertiesJsonNode___backgroundImageUrl'
  | 'headerCtAs___page___childContentfulPageAdditionalPropertiesJsonNode___contentBodyLabel'
  | 'headerCtAs___spaceId'
  | 'headerCtAs___contentful_id'
  | 'headerCtAs___createdAt'
  | 'headerCtAs___updatedAt'
  | 'headerCtAs___sys___revision'
  | 'headerCtAs___node_locale'
  | 'headerCtAs___slug'
  | 'cards'
  | 'cards___id'
  | 'cards___parent___id'
  | 'cards___parent___parent___id'
  | 'cards___parent___parent___children'
  | 'cards___parent___children'
  | 'cards___parent___children___id'
  | 'cards___parent___children___children'
  | 'cards___parent___internal___content'
  | 'cards___parent___internal___contentDigest'
  | 'cards___parent___internal___description'
  | 'cards___parent___internal___fieldOwners'
  | 'cards___parent___internal___ignoreType'
  | 'cards___parent___internal___mediaType'
  | 'cards___parent___internal___owner'
  | 'cards___parent___internal___type'
  | 'cards___children'
  | 'cards___children___id'
  | 'cards___children___parent___id'
  | 'cards___children___parent___children'
  | 'cards___children___children'
  | 'cards___children___children___id'
  | 'cards___children___children___children'
  | 'cards___children___internal___content'
  | 'cards___children___internal___contentDigest'
  | 'cards___children___internal___description'
  | 'cards___children___internal___fieldOwners'
  | 'cards___children___internal___ignoreType'
  | 'cards___children___internal___mediaType'
  | 'cards___children___internal___owner'
  | 'cards___children___internal___type'
  | 'cards___internal___content'
  | 'cards___internal___contentDigest'
  | 'cards___internal___description'
  | 'cards___internal___fieldOwners'
  | 'cards___internal___ignoreType'
  | 'cards___internal___mediaType'
  | 'cards___internal___owner'
  | 'cards___internal___type'
  | 'cards___title'
  | 'cards___url'
  | 'cards___cardImage___id'
  | 'cards___cardImage___parent___id'
  | 'cards___cardImage___parent___children'
  | 'cards___cardImage___children'
  | 'cards___cardImage___children___id'
  | 'cards___cardImage___children___children'
  | 'cards___cardImage___internal___content'
  | 'cards___cardImage___internal___contentDigest'
  | 'cards___cardImage___internal___description'
  | 'cards___cardImage___internal___fieldOwners'
  | 'cards___cardImage___internal___ignoreType'
  | 'cards___cardImage___internal___mediaType'
  | 'cards___cardImage___internal___owner'
  | 'cards___cardImage___internal___type'
  | 'cards___cardImage___contentful_id'
  | 'cards___cardImage___spaceId'
  | 'cards___cardImage___createdAt'
  | 'cards___cardImage___updatedAt'
  | 'cards___cardImage___file___url'
  | 'cards___cardImage___file___fileName'
  | 'cards___cardImage___file___contentType'
  | 'cards___cardImage___title'
  | 'cards___cardImage___description'
  | 'cards___cardImage___node_locale'
  | 'cards___cardImage___sys___revision'
  | 'cards___cardImage___fixed___base64'
  | 'cards___cardImage___fixed___tracedSVG'
  | 'cards___cardImage___fixed___aspectRatio'
  | 'cards___cardImage___fixed___width'
  | 'cards___cardImage___fixed___height'
  | 'cards___cardImage___fixed___src'
  | 'cards___cardImage___fixed___srcSet'
  | 'cards___cardImage___fixed___srcWebp'
  | 'cards___cardImage___fixed___srcSetWebp'
  | 'cards___cardImage___resolutions___base64'
  | 'cards___cardImage___resolutions___tracedSVG'
  | 'cards___cardImage___resolutions___aspectRatio'
  | 'cards___cardImage___resolutions___width'
  | 'cards___cardImage___resolutions___height'
  | 'cards___cardImage___resolutions___src'
  | 'cards___cardImage___resolutions___srcSet'
  | 'cards___cardImage___resolutions___srcWebp'
  | 'cards___cardImage___resolutions___srcSetWebp'
  | 'cards___cardImage___fluid___base64'
  | 'cards___cardImage___fluid___tracedSVG'
  | 'cards___cardImage___fluid___aspectRatio'
  | 'cards___cardImage___fluid___src'
  | 'cards___cardImage___fluid___srcSet'
  | 'cards___cardImage___fluid___srcWebp'
  | 'cards___cardImage___fluid___srcSetWebp'
  | 'cards___cardImage___fluid___sizes'
  | 'cards___cardImage___sizes___base64'
  | 'cards___cardImage___sizes___tracedSVG'
  | 'cards___cardImage___sizes___aspectRatio'
  | 'cards___cardImage___sizes___src'
  | 'cards___cardImage___sizes___srcSet'
  | 'cards___cardImage___sizes___srcWebp'
  | 'cards___cardImage___sizes___srcSetWebp'
  | 'cards___cardImage___sizes___sizes'
  | 'cards___cardImage___resize___base64'
  | 'cards___cardImage___resize___tracedSVG'
  | 'cards___cardImage___resize___src'
  | 'cards___cardImage___resize___width'
  | 'cards___cardImage___resize___height'
  | 'cards___cardImage___resize___aspectRatio'
  | 'cards___page'
  | 'cards___page___id'
  | 'cards___page___parent___id'
  | 'cards___page___parent___children'
  | 'cards___page___children'
  | 'cards___page___children___id'
  | 'cards___page___children___children'
  | 'cards___page___internal___content'
  | 'cards___page___internal___contentDigest'
  | 'cards___page___internal___description'
  | 'cards___page___internal___fieldOwners'
  | 'cards___page___internal___ignoreType'
  | 'cards___page___internal___mediaType'
  | 'cards___page___internal___owner'
  | 'cards___page___internal___type'
  | 'cards___page___title'
  | 'cards___page___appBarTitle'
  | 'cards___page___slug'
  | 'cards___page___url'
  | 'cards___page___heroImages'
  | 'cards___page___heroImages___id'
  | 'cards___page___heroImages___children'
  | 'cards___page___heroImages___contentful_id'
  | 'cards___page___heroImages___spaceId'
  | 'cards___page___heroImages___createdAt'
  | 'cards___page___heroImages___updatedAt'
  | 'cards___page___heroImages___title'
  | 'cards___page___heroImages___description'
  | 'cards___page___heroImages___node_locale'
  | 'cards___page___headerCtAs'
  | 'cards___page___headerCtAs___id'
  | 'cards___page___headerCtAs___children'
  | 'cards___page___headerCtAs___label'
  | 'cards___page___headerCtAs___url'
  | 'cards___page___headerCtAs___isExternalLink'
  | 'cards___page___headerCtAs___navigationmenu'
  | 'cards___page___headerCtAs___page'
  | 'cards___page___headerCtAs___spaceId'
  | 'cards___page___headerCtAs___contentful_id'
  | 'cards___page___headerCtAs___createdAt'
  | 'cards___page___headerCtAs___updatedAt'
  | 'cards___page___headerCtAs___node_locale'
  | 'cards___page___headerCtAs___slug'
  | 'cards___page___cards'
  | 'cards___page___cards___id'
  | 'cards___page___cards___children'
  | 'cards___page___cards___title'
  | 'cards___page___cards___url'
  | 'cards___page___cards___page'
  | 'cards___page___cards___spaceId'
  | 'cards___page___cards___contentful_id'
  | 'cards___page___cards___createdAt'
  | 'cards___page___cards___updatedAt'
  | 'cards___page___cards___node_locale'
  | 'cards___page___content___id'
  | 'cards___page___content___children'
  | 'cards___page___content___content'
  | 'cards___page___additionalProperties___id'
  | 'cards___page___additionalProperties___children'
  | 'cards___page___additionalProperties___heroCopy'
  | 'cards___page___additionalProperties___headerLabel'
  | 'cards___page___additionalProperties___subHeaderLabel'
  | 'cards___page___additionalProperties___headerLine2Label'
  | 'cards___page___additionalProperties___backgroundImageUrl'
  | 'cards___page___additionalProperties___contentBodyLabel'
  | 'cards___page___spaceId'
  | 'cards___page___contentful_id'
  | 'cards___page___createdAt'
  | 'cards___page___updatedAt'
  | 'cards___page___sys___revision'
  | 'cards___page___node_locale'
  | 'cards___page___subPages'
  | 'cards___page___subPages___id'
  | 'cards___page___subPages___children'
  | 'cards___page___subPages___label'
  | 'cards___page___subPages___url'
  | 'cards___page___subPages___isExternalLink'
  | 'cards___page___subPages___navigationmenu'
  | 'cards___page___subPages___page'
  | 'cards___page___subPages___spaceId'
  | 'cards___page___subPages___contentful_id'
  | 'cards___page___subPages___createdAt'
  | 'cards___page___subPages___updatedAt'
  | 'cards___page___subPages___node_locale'
  | 'cards___page___subPages___slug'
  | 'cards___page___childContentfulPageContentTextNode___id'
  | 'cards___page___childContentfulPageContentTextNode___children'
  | 'cards___page___childContentfulPageContentTextNode___content'
  | 'cards___page___childContentfulPageAdditionalPropertiesJsonNode___id'
  | 'cards___page___childContentfulPageAdditionalPropertiesJsonNode___children'
  | 'cards___page___childContentfulPageAdditionalPropertiesJsonNode___heroCopy'
  | 'cards___page___childContentfulPageAdditionalPropertiesJsonNode___headerLabel'
  | 'cards___page___childContentfulPageAdditionalPropertiesJsonNode___subHeaderLabel'
  | 'cards___page___childContentfulPageAdditionalPropertiesJsonNode___headerLine2Label'
  | 'cards___page___childContentfulPageAdditionalPropertiesJsonNode___backgroundImageUrl'
  | 'cards___page___childContentfulPageAdditionalPropertiesJsonNode___contentBodyLabel'
  | 'cards___content___id'
  | 'cards___content___parent___id'
  | 'cards___content___parent___children'
  | 'cards___content___children'
  | 'cards___content___children___id'
  | 'cards___content___children___children'
  | 'cards___content___internal___content'
  | 'cards___content___internal___contentDigest'
  | 'cards___content___internal___description'
  | 'cards___content___internal___fieldOwners'
  | 'cards___content___internal___ignoreType'
  | 'cards___content___internal___mediaType'
  | 'cards___content___internal___owner'
  | 'cards___content___internal___type'
  | 'cards___content___content'
  | 'cards___content___nodeType'
  | 'cards___content___json'
  | 'cards___contentBody___id'
  | 'cards___contentBody___parent___id'
  | 'cards___contentBody___parent___children'
  | 'cards___contentBody___children'
  | 'cards___contentBody___children___id'
  | 'cards___contentBody___children___children'
  | 'cards___contentBody___internal___content'
  | 'cards___contentBody___internal___contentDigest'
  | 'cards___contentBody___internal___description'
  | 'cards___contentBody___internal___fieldOwners'
  | 'cards___contentBody___internal___ignoreType'
  | 'cards___contentBody___internal___mediaType'
  | 'cards___contentBody___internal___owner'
  | 'cards___contentBody___internal___type'
  | 'cards___contentBody___contentBody'
  | 'cards___contentBody___childMarkdownRemark___id'
  | 'cards___contentBody___childMarkdownRemark___excerpt'
  | 'cards___contentBody___childMarkdownRemark___rawMarkdownBody'
  | 'cards___contentBody___childMarkdownRemark___html'
  | 'cards___contentBody___childMarkdownRemark___htmlAst'
  | 'cards___contentBody___childMarkdownRemark___excerptAst'
  | 'cards___contentBody___childMarkdownRemark___headings'
  | 'cards___contentBody___childMarkdownRemark___timeToRead'
  | 'cards___contentBody___childMarkdownRemark___tableOfContents'
  | 'cards___contentBody___childMarkdownRemark___children'
  | 'cards___spaceId'
  | 'cards___contentful_id'
  | 'cards___createdAt'
  | 'cards___updatedAt'
  | 'cards___sys___revision'
  | 'cards___node_locale'
  | 'cards___childContentfulCardsContentRichTextNode___id'
  | 'cards___childContentfulCardsContentRichTextNode___parent___id'
  | 'cards___childContentfulCardsContentRichTextNode___parent___children'
  | 'cards___childContentfulCardsContentRichTextNode___children'
  | 'cards___childContentfulCardsContentRichTextNode___children___id'
  | 'cards___childContentfulCardsContentRichTextNode___children___children'
  | 'cards___childContentfulCardsContentRichTextNode___internal___content'
  | 'cards___childContentfulCardsContentRichTextNode___internal___contentDigest'
  | 'cards___childContentfulCardsContentRichTextNode___internal___description'
  | 'cards___childContentfulCardsContentRichTextNode___internal___fieldOwners'
  | 'cards___childContentfulCardsContentRichTextNode___internal___ignoreType'
  | 'cards___childContentfulCardsContentRichTextNode___internal___mediaType'
  | 'cards___childContentfulCardsContentRichTextNode___internal___owner'
  | 'cards___childContentfulCardsContentRichTextNode___internal___type'
  | 'cards___childContentfulCardsContentRichTextNode___content'
  | 'cards___childContentfulCardsContentRichTextNode___nodeType'
  | 'cards___childContentfulCardsContentRichTextNode___json'
  | 'cards___childContentfulCardsContentBodyTextNode___id'
  | 'cards___childContentfulCardsContentBodyTextNode___parent___id'
  | 'cards___childContentfulCardsContentBodyTextNode___parent___children'
  | 'cards___childContentfulCardsContentBodyTextNode___children'
  | 'cards___childContentfulCardsContentBodyTextNode___children___id'
  | 'cards___childContentfulCardsContentBodyTextNode___children___children'
  | 'cards___childContentfulCardsContentBodyTextNode___internal___content'
  | 'cards___childContentfulCardsContentBodyTextNode___internal___contentDigest'
  | 'cards___childContentfulCardsContentBodyTextNode___internal___description'
  | 'cards___childContentfulCardsContentBodyTextNode___internal___fieldOwners'
  | 'cards___childContentfulCardsContentBodyTextNode___internal___ignoreType'
  | 'cards___childContentfulCardsContentBodyTextNode___internal___mediaType'
  | 'cards___childContentfulCardsContentBodyTextNode___internal___owner'
  | 'cards___childContentfulCardsContentBodyTextNode___internal___type'
  | 'cards___childContentfulCardsContentBodyTextNode___contentBody'
  | 'cards___childContentfulCardsContentBodyTextNode___childMarkdownRemark___id'
  | 'cards___childContentfulCardsContentBodyTextNode___childMarkdownRemark___excerpt'
  | 'cards___childContentfulCardsContentBodyTextNode___childMarkdownRemark___rawMarkdownBody'
  | 'cards___childContentfulCardsContentBodyTextNode___childMarkdownRemark___html'
  | 'cards___childContentfulCardsContentBodyTextNode___childMarkdownRemark___htmlAst'
  | 'cards___childContentfulCardsContentBodyTextNode___childMarkdownRemark___excerptAst'
  | 'cards___childContentfulCardsContentBodyTextNode___childMarkdownRemark___headings'
  | 'cards___childContentfulCardsContentBodyTextNode___childMarkdownRemark___timeToRead'
  | 'cards___childContentfulCardsContentBodyTextNode___childMarkdownRemark___tableOfContents'
  | 'cards___childContentfulCardsContentBodyTextNode___childMarkdownRemark___children'
  | 'content___id'
  | 'content___parent___id'
  | 'content___parent___parent___id'
  | 'content___parent___parent___children'
  | 'content___parent___children'
  | 'content___parent___children___id'
  | 'content___parent___children___children'
  | 'content___parent___internal___content'
  | 'content___parent___internal___contentDigest'
  | 'content___parent___internal___description'
  | 'content___parent___internal___fieldOwners'
  | 'content___parent___internal___ignoreType'
  | 'content___parent___internal___mediaType'
  | 'content___parent___internal___owner'
  | 'content___parent___internal___type'
  | 'content___children'
  | 'content___children___id'
  | 'content___children___parent___id'
  | 'content___children___parent___children'
  | 'content___children___children'
  | 'content___children___children___id'
  | 'content___children___children___children'
  | 'content___children___internal___content'
  | 'content___children___internal___contentDigest'
  | 'content___children___internal___description'
  | 'content___children___internal___fieldOwners'
  | 'content___children___internal___ignoreType'
  | 'content___children___internal___mediaType'
  | 'content___children___internal___owner'
  | 'content___children___internal___type'
  | 'content___internal___content'
  | 'content___internal___contentDigest'
  | 'content___internal___description'
  | 'content___internal___fieldOwners'
  | 'content___internal___ignoreType'
  | 'content___internal___mediaType'
  | 'content___internal___owner'
  | 'content___internal___type'
  | 'content___content'
  | 'content___childMarkdownRemark___id'
  | 'content___childMarkdownRemark___frontmatter___title'
  | 'content___childMarkdownRemark___excerpt'
  | 'content___childMarkdownRemark___rawMarkdownBody'
  | 'content___childMarkdownRemark___html'
  | 'content___childMarkdownRemark___htmlAst'
  | 'content___childMarkdownRemark___excerptAst'
  | 'content___childMarkdownRemark___headings'
  | 'content___childMarkdownRemark___headings___id'
  | 'content___childMarkdownRemark___headings___value'
  | 'content___childMarkdownRemark___headings___depth'
  | 'content___childMarkdownRemark___timeToRead'
  | 'content___childMarkdownRemark___tableOfContents'
  | 'content___childMarkdownRemark___wordCount___paragraphs'
  | 'content___childMarkdownRemark___wordCount___sentences'
  | 'content___childMarkdownRemark___wordCount___words'
  | 'content___childMarkdownRemark___parent___id'
  | 'content___childMarkdownRemark___parent___children'
  | 'content___childMarkdownRemark___children'
  | 'content___childMarkdownRemark___children___id'
  | 'content___childMarkdownRemark___children___children'
  | 'content___childMarkdownRemark___internal___content'
  | 'content___childMarkdownRemark___internal___contentDigest'
  | 'content___childMarkdownRemark___internal___description'
  | 'content___childMarkdownRemark___internal___fieldOwners'
  | 'content___childMarkdownRemark___internal___ignoreType'
  | 'content___childMarkdownRemark___internal___mediaType'
  | 'content___childMarkdownRemark___internal___owner'
  | 'content___childMarkdownRemark___internal___type'
  | 'additionalProperties___id'
  | 'additionalProperties___parent___id'
  | 'additionalProperties___parent___parent___id'
  | 'additionalProperties___parent___parent___children'
  | 'additionalProperties___parent___children'
  | 'additionalProperties___parent___children___id'
  | 'additionalProperties___parent___children___children'
  | 'additionalProperties___parent___internal___content'
  | 'additionalProperties___parent___internal___contentDigest'
  | 'additionalProperties___parent___internal___description'
  | 'additionalProperties___parent___internal___fieldOwners'
  | 'additionalProperties___parent___internal___ignoreType'
  | 'additionalProperties___parent___internal___mediaType'
  | 'additionalProperties___parent___internal___owner'
  | 'additionalProperties___parent___internal___type'
  | 'additionalProperties___children'
  | 'additionalProperties___children___id'
  | 'additionalProperties___children___parent___id'
  | 'additionalProperties___children___parent___children'
  | 'additionalProperties___children___children'
  | 'additionalProperties___children___children___id'
  | 'additionalProperties___children___children___children'
  | 'additionalProperties___children___internal___content'
  | 'additionalProperties___children___internal___contentDigest'
  | 'additionalProperties___children___internal___description'
  | 'additionalProperties___children___internal___fieldOwners'
  | 'additionalProperties___children___internal___ignoreType'
  | 'additionalProperties___children___internal___mediaType'
  | 'additionalProperties___children___internal___owner'
  | 'additionalProperties___children___internal___type'
  | 'additionalProperties___internal___content'
  | 'additionalProperties___internal___contentDigest'
  | 'additionalProperties___internal___description'
  | 'additionalProperties___internal___fieldOwners'
  | 'additionalProperties___internal___ignoreType'
  | 'additionalProperties___internal___mediaType'
  | 'additionalProperties___internal___owner'
  | 'additionalProperties___internal___type'
  | 'additionalProperties___heroCopy'
  | 'additionalProperties___headerLabel'
  | 'additionalProperties___subHeaderLabel'
  | 'additionalProperties___headerLine2Label'
  | 'additionalProperties___backgroundImageUrl'
  | 'additionalProperties___contentBodyLabel'
  | 'spaceId'
  | 'contentful_id'
  | 'createdAt'
  | 'updatedAt'
  | 'sys___revision'
  | 'sys___contentType___sys___type'
  | 'sys___contentType___sys___linkType'
  | 'sys___contentType___sys___id'
  | 'sys___contentType___sys___contentful_id'
  | 'node_locale'
  | 'subPages'
  | 'subPages___id'
  | 'subPages___parent___id'
  | 'subPages___parent___parent___id'
  | 'subPages___parent___parent___children'
  | 'subPages___parent___children'
  | 'subPages___parent___children___id'
  | 'subPages___parent___children___children'
  | 'subPages___parent___internal___content'
  | 'subPages___parent___internal___contentDigest'
  | 'subPages___parent___internal___description'
  | 'subPages___parent___internal___fieldOwners'
  | 'subPages___parent___internal___ignoreType'
  | 'subPages___parent___internal___mediaType'
  | 'subPages___parent___internal___owner'
  | 'subPages___parent___internal___type'
  | 'subPages___children'
  | 'subPages___children___id'
  | 'subPages___children___parent___id'
  | 'subPages___children___parent___children'
  | 'subPages___children___children'
  | 'subPages___children___children___id'
  | 'subPages___children___children___children'
  | 'subPages___children___internal___content'
  | 'subPages___children___internal___contentDigest'
  | 'subPages___children___internal___description'
  | 'subPages___children___internal___fieldOwners'
  | 'subPages___children___internal___ignoreType'
  | 'subPages___children___internal___mediaType'
  | 'subPages___children___internal___owner'
  | 'subPages___children___internal___type'
  | 'subPages___internal___content'
  | 'subPages___internal___contentDigest'
  | 'subPages___internal___description'
  | 'subPages___internal___fieldOwners'
  | 'subPages___internal___ignoreType'
  | 'subPages___internal___mediaType'
  | 'subPages___internal___owner'
  | 'subPages___internal___type'
  | 'subPages___label'
  | 'subPages___url'
  | 'subPages___isExternalLink'
  | 'subPages___navigationmenu'
  | 'subPages___navigationmenu___id'
  | 'subPages___navigationmenu___parent___id'
  | 'subPages___navigationmenu___parent___children'
  | 'subPages___navigationmenu___children'
  | 'subPages___navigationmenu___children___id'
  | 'subPages___navigationmenu___children___children'
  | 'subPages___navigationmenu___internal___content'
  | 'subPages___navigationmenu___internal___contentDigest'
  | 'subPages___navigationmenu___internal___description'
  | 'subPages___navigationmenu___internal___fieldOwners'
  | 'subPages___navigationmenu___internal___ignoreType'
  | 'subPages___navigationmenu___internal___mediaType'
  | 'subPages___navigationmenu___internal___owner'
  | 'subPages___navigationmenu___internal___type'
  | 'subPages___navigationmenu___label'
  | 'subPages___navigationmenu___isExternalLink'
  | 'subPages___navigationmenu___navigationlistsortorder'
  | 'subPages___navigationmenu___navigationlistsortorder___id'
  | 'subPages___navigationmenu___navigationlistsortorder___children'
  | 'subPages___navigationmenu___navigationlistsortorder___title'
  | 'subPages___navigationmenu___navigationlistsortorder___signInButtonLabel'
  | 'subPages___navigationmenu___navigationlistsortorder___signOutButtonLabel'
  | 'subPages___navigationmenu___navigationlistsortorder___sortOrder'
  | 'subPages___navigationmenu___navigationlistsortorder___spaceId'
  | 'subPages___navigationmenu___navigationlistsortorder___contentful_id'
  | 'subPages___navigationmenu___navigationlistsortorder___createdAt'
  | 'subPages___navigationmenu___navigationlistsortorder___updatedAt'
  | 'subPages___navigationmenu___navigationlistsortorder___node_locale'
  | 'subPages___navigationmenu___spaceId'
  | 'subPages___navigationmenu___contentful_id'
  | 'subPages___navigationmenu___createdAt'
  | 'subPages___navigationmenu___updatedAt'
  | 'subPages___navigationmenu___sys___revision'
  | 'subPages___navigationmenu___node_locale'
  | 'subPages___navigationmenu___url'
  | 'subPages___navigationmenu___slug'
  | 'subPages___page'
  | 'subPages___page___id'
  | 'subPages___page___parent___id'
  | 'subPages___page___parent___children'
  | 'subPages___page___children'
  | 'subPages___page___children___id'
  | 'subPages___page___children___children'
  | 'subPages___page___internal___content'
  | 'subPages___page___internal___contentDigest'
  | 'subPages___page___internal___description'
  | 'subPages___page___internal___fieldOwners'
  | 'subPages___page___internal___ignoreType'
  | 'subPages___page___internal___mediaType'
  | 'subPages___page___internal___owner'
  | 'subPages___page___internal___type'
  | 'subPages___page___title'
  | 'subPages___page___appBarTitle'
  | 'subPages___page___slug'
  | 'subPages___page___url'
  | 'subPages___page___heroImages'
  | 'subPages___page___heroImages___id'
  | 'subPages___page___heroImages___children'
  | 'subPages___page___heroImages___contentful_id'
  | 'subPages___page___heroImages___spaceId'
  | 'subPages___page___heroImages___createdAt'
  | 'subPages___page___heroImages___updatedAt'
  | 'subPages___page___heroImages___title'
  | 'subPages___page___heroImages___description'
  | 'subPages___page___heroImages___node_locale'
  | 'subPages___page___headerCtAs'
  | 'subPages___page___headerCtAs___id'
  | 'subPages___page___headerCtAs___children'
  | 'subPages___page___headerCtAs___label'
  | 'subPages___page___headerCtAs___url'
  | 'subPages___page___headerCtAs___isExternalLink'
  | 'subPages___page___headerCtAs___navigationmenu'
  | 'subPages___page___headerCtAs___page'
  | 'subPages___page___headerCtAs___spaceId'
  | 'subPages___page___headerCtAs___contentful_id'
  | 'subPages___page___headerCtAs___createdAt'
  | 'subPages___page___headerCtAs___updatedAt'
  | 'subPages___page___headerCtAs___node_locale'
  | 'subPages___page___headerCtAs___slug'
  | 'subPages___page___cards'
  | 'subPages___page___cards___id'
  | 'subPages___page___cards___children'
  | 'subPages___page___cards___title'
  | 'subPages___page___cards___url'
  | 'subPages___page___cards___page'
  | 'subPages___page___cards___spaceId'
  | 'subPages___page___cards___contentful_id'
  | 'subPages___page___cards___createdAt'
  | 'subPages___page___cards___updatedAt'
  | 'subPages___page___cards___node_locale'
  | 'subPages___page___content___id'
  | 'subPages___page___content___children'
  | 'subPages___page___content___content'
  | 'subPages___page___additionalProperties___id'
  | 'subPages___page___additionalProperties___children'
  | 'subPages___page___additionalProperties___heroCopy'
  | 'subPages___page___additionalProperties___headerLabel'
  | 'subPages___page___additionalProperties___subHeaderLabel'
  | 'subPages___page___additionalProperties___headerLine2Label'
  | 'subPages___page___additionalProperties___backgroundImageUrl'
  | 'subPages___page___additionalProperties___contentBodyLabel'
  | 'subPages___page___spaceId'
  | 'subPages___page___contentful_id'
  | 'subPages___page___createdAt'
  | 'subPages___page___updatedAt'
  | 'subPages___page___sys___revision'
  | 'subPages___page___node_locale'
  | 'subPages___page___subPages'
  | 'subPages___page___subPages___id'
  | 'subPages___page___subPages___children'
  | 'subPages___page___subPages___label'
  | 'subPages___page___subPages___url'
  | 'subPages___page___subPages___isExternalLink'
  | 'subPages___page___subPages___navigationmenu'
  | 'subPages___page___subPages___page'
  | 'subPages___page___subPages___spaceId'
  | 'subPages___page___subPages___contentful_id'
  | 'subPages___page___subPages___createdAt'
  | 'subPages___page___subPages___updatedAt'
  | 'subPages___page___subPages___node_locale'
  | 'subPages___page___subPages___slug'
  | 'subPages___page___childContentfulPageContentTextNode___id'
  | 'subPages___page___childContentfulPageContentTextNode___children'
  | 'subPages___page___childContentfulPageContentTextNode___content'
  | 'subPages___page___childContentfulPageAdditionalPropertiesJsonNode___id'
  | 'subPages___page___childContentfulPageAdditionalPropertiesJsonNode___children'
  | 'subPages___page___childContentfulPageAdditionalPropertiesJsonNode___heroCopy'
  | 'subPages___page___childContentfulPageAdditionalPropertiesJsonNode___headerLabel'
  | 'subPages___page___childContentfulPageAdditionalPropertiesJsonNode___subHeaderLabel'
  | 'subPages___page___childContentfulPageAdditionalPropertiesJsonNode___headerLine2Label'
  | 'subPages___page___childContentfulPageAdditionalPropertiesJsonNode___backgroundImageUrl'
  | 'subPages___page___childContentfulPageAdditionalPropertiesJsonNode___contentBodyLabel'
  | 'subPages___spaceId'
  | 'subPages___contentful_id'
  | 'subPages___createdAt'
  | 'subPages___updatedAt'
  | 'subPages___sys___revision'
  | 'subPages___node_locale'
  | 'subPages___slug'
  | 'childContentfulPageContentTextNode___id'
  | 'childContentfulPageContentTextNode___parent___id'
  | 'childContentfulPageContentTextNode___parent___parent___id'
  | 'childContentfulPageContentTextNode___parent___parent___children'
  | 'childContentfulPageContentTextNode___parent___children'
  | 'childContentfulPageContentTextNode___parent___children___id'
  | 'childContentfulPageContentTextNode___parent___children___children'
  | 'childContentfulPageContentTextNode___parent___internal___content'
  | 'childContentfulPageContentTextNode___parent___internal___contentDigest'
  | 'childContentfulPageContentTextNode___parent___internal___description'
  | 'childContentfulPageContentTextNode___parent___internal___fieldOwners'
  | 'childContentfulPageContentTextNode___parent___internal___ignoreType'
  | 'childContentfulPageContentTextNode___parent___internal___mediaType'
  | 'childContentfulPageContentTextNode___parent___internal___owner'
  | 'childContentfulPageContentTextNode___parent___internal___type'
  | 'childContentfulPageContentTextNode___children'
  | 'childContentfulPageContentTextNode___children___id'
  | 'childContentfulPageContentTextNode___children___parent___id'
  | 'childContentfulPageContentTextNode___children___parent___children'
  | 'childContentfulPageContentTextNode___children___children'
  | 'childContentfulPageContentTextNode___children___children___id'
  | 'childContentfulPageContentTextNode___children___children___children'
  | 'childContentfulPageContentTextNode___children___internal___content'
  | 'childContentfulPageContentTextNode___children___internal___contentDigest'
  | 'childContentfulPageContentTextNode___children___internal___description'
  | 'childContentfulPageContentTextNode___children___internal___fieldOwners'
  | 'childContentfulPageContentTextNode___children___internal___ignoreType'
  | 'childContentfulPageContentTextNode___children___internal___mediaType'
  | 'childContentfulPageContentTextNode___children___internal___owner'
  | 'childContentfulPageContentTextNode___children___internal___type'
  | 'childContentfulPageContentTextNode___internal___content'
  | 'childContentfulPageContentTextNode___internal___contentDigest'
  | 'childContentfulPageContentTextNode___internal___description'
  | 'childContentfulPageContentTextNode___internal___fieldOwners'
  | 'childContentfulPageContentTextNode___internal___ignoreType'
  | 'childContentfulPageContentTextNode___internal___mediaType'
  | 'childContentfulPageContentTextNode___internal___owner'
  | 'childContentfulPageContentTextNode___internal___type'
  | 'childContentfulPageContentTextNode___content'
  | 'childContentfulPageContentTextNode___childMarkdownRemark___id'
  | 'childContentfulPageContentTextNode___childMarkdownRemark___frontmatter___title'
  | 'childContentfulPageContentTextNode___childMarkdownRemark___excerpt'
  | 'childContentfulPageContentTextNode___childMarkdownRemark___rawMarkdownBody'
  | 'childContentfulPageContentTextNode___childMarkdownRemark___html'
  | 'childContentfulPageContentTextNode___childMarkdownRemark___htmlAst'
  | 'childContentfulPageContentTextNode___childMarkdownRemark___excerptAst'
  | 'childContentfulPageContentTextNode___childMarkdownRemark___headings'
  | 'childContentfulPageContentTextNode___childMarkdownRemark___headings___id'
  | 'childContentfulPageContentTextNode___childMarkdownRemark___headings___value'
  | 'childContentfulPageContentTextNode___childMarkdownRemark___headings___depth'
  | 'childContentfulPageContentTextNode___childMarkdownRemark___timeToRead'
  | 'childContentfulPageContentTextNode___childMarkdownRemark___tableOfContents'
  | 'childContentfulPageContentTextNode___childMarkdownRemark___wordCount___paragraphs'
  | 'childContentfulPageContentTextNode___childMarkdownRemark___wordCount___sentences'
  | 'childContentfulPageContentTextNode___childMarkdownRemark___wordCount___words'
  | 'childContentfulPageContentTextNode___childMarkdownRemark___parent___id'
  | 'childContentfulPageContentTextNode___childMarkdownRemark___parent___children'
  | 'childContentfulPageContentTextNode___childMarkdownRemark___children'
  | 'childContentfulPageContentTextNode___childMarkdownRemark___children___id'
  | 'childContentfulPageContentTextNode___childMarkdownRemark___children___children'
  | 'childContentfulPageContentTextNode___childMarkdownRemark___internal___content'
  | 'childContentfulPageContentTextNode___childMarkdownRemark___internal___contentDigest'
  | 'childContentfulPageContentTextNode___childMarkdownRemark___internal___description'
  | 'childContentfulPageContentTextNode___childMarkdownRemark___internal___fieldOwners'
  | 'childContentfulPageContentTextNode___childMarkdownRemark___internal___ignoreType'
  | 'childContentfulPageContentTextNode___childMarkdownRemark___internal___mediaType'
  | 'childContentfulPageContentTextNode___childMarkdownRemark___internal___owner'
  | 'childContentfulPageContentTextNode___childMarkdownRemark___internal___type'
  | 'childContentfulPageAdditionalPropertiesJsonNode___id'
  | 'childContentfulPageAdditionalPropertiesJsonNode___parent___id'
  | 'childContentfulPageAdditionalPropertiesJsonNode___parent___parent___id'
  | 'childContentfulPageAdditionalPropertiesJsonNode___parent___parent___children'
  | 'childContentfulPageAdditionalPropertiesJsonNode___parent___children'
  | 'childContentfulPageAdditionalPropertiesJsonNode___parent___children___id'
  | 'childContentfulPageAdditionalPropertiesJsonNode___parent___children___children'
  | 'childContentfulPageAdditionalPropertiesJsonNode___parent___internal___content'
  | 'childContentfulPageAdditionalPropertiesJsonNode___parent___internal___contentDigest'
  | 'childContentfulPageAdditionalPropertiesJsonNode___parent___internal___description'
  | 'childContentfulPageAdditionalPropertiesJsonNode___parent___internal___fieldOwners'
  | 'childContentfulPageAdditionalPropertiesJsonNode___parent___internal___ignoreType'
  | 'childContentfulPageAdditionalPropertiesJsonNode___parent___internal___mediaType'
  | 'childContentfulPageAdditionalPropertiesJsonNode___parent___internal___owner'
  | 'childContentfulPageAdditionalPropertiesJsonNode___parent___internal___type'
  | 'childContentfulPageAdditionalPropertiesJsonNode___children'
  | 'childContentfulPageAdditionalPropertiesJsonNode___children___id'
  | 'childContentfulPageAdditionalPropertiesJsonNode___children___parent___id'
  | 'childContentfulPageAdditionalPropertiesJsonNode___children___parent___children'
  | 'childContentfulPageAdditionalPropertiesJsonNode___children___children'
  | 'childContentfulPageAdditionalPropertiesJsonNode___children___children___id'
  | 'childContentfulPageAdditionalPropertiesJsonNode___children___children___children'
  | 'childContentfulPageAdditionalPropertiesJsonNode___children___internal___content'
  | 'childContentfulPageAdditionalPropertiesJsonNode___children___internal___contentDigest'
  | 'childContentfulPageAdditionalPropertiesJsonNode___children___internal___description'
  | 'childContentfulPageAdditionalPropertiesJsonNode___children___internal___fieldOwners'
  | 'childContentfulPageAdditionalPropertiesJsonNode___children___internal___ignoreType'
  | 'childContentfulPageAdditionalPropertiesJsonNode___children___internal___mediaType'
  | 'childContentfulPageAdditionalPropertiesJsonNode___children___internal___owner'
  | 'childContentfulPageAdditionalPropertiesJsonNode___children___internal___type'
  | 'childContentfulPageAdditionalPropertiesJsonNode___internal___content'
  | 'childContentfulPageAdditionalPropertiesJsonNode___internal___contentDigest'
  | 'childContentfulPageAdditionalPropertiesJsonNode___internal___description'
  | 'childContentfulPageAdditionalPropertiesJsonNode___internal___fieldOwners'
  | 'childContentfulPageAdditionalPropertiesJsonNode___internal___ignoreType'
  | 'childContentfulPageAdditionalPropertiesJsonNode___internal___mediaType'
  | 'childContentfulPageAdditionalPropertiesJsonNode___internal___owner'
  | 'childContentfulPageAdditionalPropertiesJsonNode___internal___type'
  | 'childContentfulPageAdditionalPropertiesJsonNode___heroCopy'
  | 'childContentfulPageAdditionalPropertiesJsonNode___headerLabel'
  | 'childContentfulPageAdditionalPropertiesJsonNode___subHeaderLabel'
  | 'childContentfulPageAdditionalPropertiesJsonNode___headerLine2Label'
  | 'childContentfulPageAdditionalPropertiesJsonNode___backgroundImageUrl'
  | 'childContentfulPageAdditionalPropertiesJsonNode___contentBodyLabel';

export type ContentfulPageFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  appBarTitle?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  heroImages?: Maybe<ContentfulAssetFilterListInput>;
  headerCtAs?: Maybe<ContentfulLinkFilterListInput>;
  cards?: Maybe<ContentfulCardsFilterListInput>;
  content?: Maybe<ContentfulPageContentTextNodeFilterInput>;
  additionalProperties?: Maybe<ContentfulPageAdditionalPropertiesJsonNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulPageSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  subPages?: Maybe<ContentfulLinkFilterListInput>;
  childContentfulPageContentTextNode?: Maybe<ContentfulPageContentTextNodeFilterInput>;
  childContentfulPageAdditionalPropertiesJsonNode?: Maybe<ContentfulPageAdditionalPropertiesJsonNodeFilterInput>;
};

export type ContentfulPageFilterListInput = {
  elemMatch?: Maybe<ContentfulPageFilterInput>;
};

export type ContentfulPageGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulPageEdge>;
  nodes: Array<ContentfulPage>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulPageSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulPageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulPageSys = {
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulPageSysContentType>;
};

export type ContentfulPageSysContentType = {
  sys?: Maybe<ContentfulPageSysContentTypeSys>;
};

export type ContentfulPageSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulPageSysContentTypeSysFilterInput>;
};

export type ContentfulPageSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
};

export type ContentfulPageSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulPageSysFilterInput = {
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulPageSysContentTypeFilterInput>;
};

export type ContentfulPerson = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  name?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  company?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  facebook?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
  github?: Maybe<Scalars['String']>;
  image?: Maybe<ContentfulAsset>;
  blogpost?: Maybe<Array<Maybe<ContentfulBlogPost>>>;
  shortBio?: Maybe<ContentfulPersonShortBioTextNode>;
  spaceId?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulPersonSys>;
  node_locale?: Maybe<Scalars['String']>;
  childContentfulPersonShortBioTextNode?: Maybe<ContentfulPersonShortBioTextNode>;
};


export type ContentfulPersonCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulPersonUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulPersonConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulPersonEdge>;
  nodes: Array<ContentfulPerson>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulPersonGroupConnection>;
};


export type ContentfulPersonConnectionDistinctArgs = {
  field: ContentfulPersonFieldsEnum;
};


export type ContentfulPersonConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulPersonFieldsEnum;
};

export type ContentfulPersonEdge = {
  next?: Maybe<ContentfulPerson>;
  node: ContentfulPerson;
  previous?: Maybe<ContentfulPerson>;
};

export type ContentfulPersonFieldsEnum =
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'name'
  | 'title'
  | 'company'
  | 'email'
  | 'phone'
  | 'facebook'
  | 'twitter'
  | 'github'
  | 'image___id'
  | 'image___parent___id'
  | 'image___parent___parent___id'
  | 'image___parent___parent___children'
  | 'image___parent___children'
  | 'image___parent___children___id'
  | 'image___parent___children___children'
  | 'image___parent___internal___content'
  | 'image___parent___internal___contentDigest'
  | 'image___parent___internal___description'
  | 'image___parent___internal___fieldOwners'
  | 'image___parent___internal___ignoreType'
  | 'image___parent___internal___mediaType'
  | 'image___parent___internal___owner'
  | 'image___parent___internal___type'
  | 'image___children'
  | 'image___children___id'
  | 'image___children___parent___id'
  | 'image___children___parent___children'
  | 'image___children___children'
  | 'image___children___children___id'
  | 'image___children___children___children'
  | 'image___children___internal___content'
  | 'image___children___internal___contentDigest'
  | 'image___children___internal___description'
  | 'image___children___internal___fieldOwners'
  | 'image___children___internal___ignoreType'
  | 'image___children___internal___mediaType'
  | 'image___children___internal___owner'
  | 'image___children___internal___type'
  | 'image___internal___content'
  | 'image___internal___contentDigest'
  | 'image___internal___description'
  | 'image___internal___fieldOwners'
  | 'image___internal___ignoreType'
  | 'image___internal___mediaType'
  | 'image___internal___owner'
  | 'image___internal___type'
  | 'image___contentful_id'
  | 'image___spaceId'
  | 'image___createdAt'
  | 'image___updatedAt'
  | 'image___file___url'
  | 'image___file___details___size'
  | 'image___file___fileName'
  | 'image___file___contentType'
  | 'image___title'
  | 'image___description'
  | 'image___node_locale'
  | 'image___sys___revision'
  | 'image___fixed___base64'
  | 'image___fixed___tracedSVG'
  | 'image___fixed___aspectRatio'
  | 'image___fixed___width'
  | 'image___fixed___height'
  | 'image___fixed___src'
  | 'image___fixed___srcSet'
  | 'image___fixed___srcWebp'
  | 'image___fixed___srcSetWebp'
  | 'image___resolutions___base64'
  | 'image___resolutions___tracedSVG'
  | 'image___resolutions___aspectRatio'
  | 'image___resolutions___width'
  | 'image___resolutions___height'
  | 'image___resolutions___src'
  | 'image___resolutions___srcSet'
  | 'image___resolutions___srcWebp'
  | 'image___resolutions___srcSetWebp'
  | 'image___fluid___base64'
  | 'image___fluid___tracedSVG'
  | 'image___fluid___aspectRatio'
  | 'image___fluid___src'
  | 'image___fluid___srcSet'
  | 'image___fluid___srcWebp'
  | 'image___fluid___srcSetWebp'
  | 'image___fluid___sizes'
  | 'image___sizes___base64'
  | 'image___sizes___tracedSVG'
  | 'image___sizes___aspectRatio'
  | 'image___sizes___src'
  | 'image___sizes___srcSet'
  | 'image___sizes___srcWebp'
  | 'image___sizes___srcSetWebp'
  | 'image___sizes___sizes'
  | 'image___resize___base64'
  | 'image___resize___tracedSVG'
  | 'image___resize___src'
  | 'image___resize___width'
  | 'image___resize___height'
  | 'image___resize___aspectRatio'
  | 'blogpost'
  | 'blogpost___id'
  | 'blogpost___parent___id'
  | 'blogpost___parent___parent___id'
  | 'blogpost___parent___parent___children'
  | 'blogpost___parent___children'
  | 'blogpost___parent___children___id'
  | 'blogpost___parent___children___children'
  | 'blogpost___parent___internal___content'
  | 'blogpost___parent___internal___contentDigest'
  | 'blogpost___parent___internal___description'
  | 'blogpost___parent___internal___fieldOwners'
  | 'blogpost___parent___internal___ignoreType'
  | 'blogpost___parent___internal___mediaType'
  | 'blogpost___parent___internal___owner'
  | 'blogpost___parent___internal___type'
  | 'blogpost___children'
  | 'blogpost___children___id'
  | 'blogpost___children___parent___id'
  | 'blogpost___children___parent___children'
  | 'blogpost___children___children'
  | 'blogpost___children___children___id'
  | 'blogpost___children___children___children'
  | 'blogpost___children___internal___content'
  | 'blogpost___children___internal___contentDigest'
  | 'blogpost___children___internal___description'
  | 'blogpost___children___internal___fieldOwners'
  | 'blogpost___children___internal___ignoreType'
  | 'blogpost___children___internal___mediaType'
  | 'blogpost___children___internal___owner'
  | 'blogpost___children___internal___type'
  | 'blogpost___internal___content'
  | 'blogpost___internal___contentDigest'
  | 'blogpost___internal___description'
  | 'blogpost___internal___fieldOwners'
  | 'blogpost___internal___ignoreType'
  | 'blogpost___internal___mediaType'
  | 'blogpost___internal___owner'
  | 'blogpost___internal___type'
  | 'blogpost___title'
  | 'blogpost___slug'
  | 'blogpost___url'
  | 'blogpost___publishDate'
  | 'blogpost___tags'
  | 'blogpost___isExternalLink'
  | 'blogpost___heroImage___id'
  | 'blogpost___heroImage___parent___id'
  | 'blogpost___heroImage___parent___children'
  | 'blogpost___heroImage___children'
  | 'blogpost___heroImage___children___id'
  | 'blogpost___heroImage___children___children'
  | 'blogpost___heroImage___internal___content'
  | 'blogpost___heroImage___internal___contentDigest'
  | 'blogpost___heroImage___internal___description'
  | 'blogpost___heroImage___internal___fieldOwners'
  | 'blogpost___heroImage___internal___ignoreType'
  | 'blogpost___heroImage___internal___mediaType'
  | 'blogpost___heroImage___internal___owner'
  | 'blogpost___heroImage___internal___type'
  | 'blogpost___heroImage___contentful_id'
  | 'blogpost___heroImage___spaceId'
  | 'blogpost___heroImage___createdAt'
  | 'blogpost___heroImage___updatedAt'
  | 'blogpost___heroImage___file___url'
  | 'blogpost___heroImage___file___fileName'
  | 'blogpost___heroImage___file___contentType'
  | 'blogpost___heroImage___title'
  | 'blogpost___heroImage___description'
  | 'blogpost___heroImage___node_locale'
  | 'blogpost___heroImage___sys___revision'
  | 'blogpost___heroImage___fixed___base64'
  | 'blogpost___heroImage___fixed___tracedSVG'
  | 'blogpost___heroImage___fixed___aspectRatio'
  | 'blogpost___heroImage___fixed___width'
  | 'blogpost___heroImage___fixed___height'
  | 'blogpost___heroImage___fixed___src'
  | 'blogpost___heroImage___fixed___srcSet'
  | 'blogpost___heroImage___fixed___srcWebp'
  | 'blogpost___heroImage___fixed___srcSetWebp'
  | 'blogpost___heroImage___resolutions___base64'
  | 'blogpost___heroImage___resolutions___tracedSVG'
  | 'blogpost___heroImage___resolutions___aspectRatio'
  | 'blogpost___heroImage___resolutions___width'
  | 'blogpost___heroImage___resolutions___height'
  | 'blogpost___heroImage___resolutions___src'
  | 'blogpost___heroImage___resolutions___srcSet'
  | 'blogpost___heroImage___resolutions___srcWebp'
  | 'blogpost___heroImage___resolutions___srcSetWebp'
  | 'blogpost___heroImage___fluid___base64'
  | 'blogpost___heroImage___fluid___tracedSVG'
  | 'blogpost___heroImage___fluid___aspectRatio'
  | 'blogpost___heroImage___fluid___src'
  | 'blogpost___heroImage___fluid___srcSet'
  | 'blogpost___heroImage___fluid___srcWebp'
  | 'blogpost___heroImage___fluid___srcSetWebp'
  | 'blogpost___heroImage___fluid___sizes'
  | 'blogpost___heroImage___sizes___base64'
  | 'blogpost___heroImage___sizes___tracedSVG'
  | 'blogpost___heroImage___sizes___aspectRatio'
  | 'blogpost___heroImage___sizes___src'
  | 'blogpost___heroImage___sizes___srcSet'
  | 'blogpost___heroImage___sizes___srcWebp'
  | 'blogpost___heroImage___sizes___srcSetWebp'
  | 'blogpost___heroImage___sizes___sizes'
  | 'blogpost___heroImage___resize___base64'
  | 'blogpost___heroImage___resize___tracedSVG'
  | 'blogpost___heroImage___resize___src'
  | 'blogpost___heroImage___resize___width'
  | 'blogpost___heroImage___resize___height'
  | 'blogpost___heroImage___resize___aspectRatio'
  | 'blogpost___author___id'
  | 'blogpost___author___parent___id'
  | 'blogpost___author___parent___children'
  | 'blogpost___author___children'
  | 'blogpost___author___children___id'
  | 'blogpost___author___children___children'
  | 'blogpost___author___internal___content'
  | 'blogpost___author___internal___contentDigest'
  | 'blogpost___author___internal___description'
  | 'blogpost___author___internal___fieldOwners'
  | 'blogpost___author___internal___ignoreType'
  | 'blogpost___author___internal___mediaType'
  | 'blogpost___author___internal___owner'
  | 'blogpost___author___internal___type'
  | 'blogpost___author___name'
  | 'blogpost___author___title'
  | 'blogpost___author___company'
  | 'blogpost___author___email'
  | 'blogpost___author___phone'
  | 'blogpost___author___facebook'
  | 'blogpost___author___twitter'
  | 'blogpost___author___github'
  | 'blogpost___author___image___id'
  | 'blogpost___author___image___children'
  | 'blogpost___author___image___contentful_id'
  | 'blogpost___author___image___spaceId'
  | 'blogpost___author___image___createdAt'
  | 'blogpost___author___image___updatedAt'
  | 'blogpost___author___image___title'
  | 'blogpost___author___image___description'
  | 'blogpost___author___image___node_locale'
  | 'blogpost___author___blogpost'
  | 'blogpost___author___blogpost___id'
  | 'blogpost___author___blogpost___children'
  | 'blogpost___author___blogpost___title'
  | 'blogpost___author___blogpost___slug'
  | 'blogpost___author___blogpost___url'
  | 'blogpost___author___blogpost___publishDate'
  | 'blogpost___author___blogpost___tags'
  | 'blogpost___author___blogpost___isExternalLink'
  | 'blogpost___author___blogpost___spaceId'
  | 'blogpost___author___blogpost___contentful_id'
  | 'blogpost___author___blogpost___createdAt'
  | 'blogpost___author___blogpost___updatedAt'
  | 'blogpost___author___blogpost___node_locale'
  | 'blogpost___author___blogpost___navigationmenu'
  | 'blogpost___author___shortBio___id'
  | 'blogpost___author___shortBio___children'
  | 'blogpost___author___shortBio___shortBio'
  | 'blogpost___author___spaceId'
  | 'blogpost___author___contentful_id'
  | 'blogpost___author___createdAt'
  | 'blogpost___author___updatedAt'
  | 'blogpost___author___sys___revision'
  | 'blogpost___author___node_locale'
  | 'blogpost___author___childContentfulPersonShortBioTextNode___id'
  | 'blogpost___author___childContentfulPersonShortBioTextNode___children'
  | 'blogpost___author___childContentfulPersonShortBioTextNode___shortBio'
  | 'blogpost___description___id'
  | 'blogpost___description___parent___id'
  | 'blogpost___description___parent___children'
  | 'blogpost___description___children'
  | 'blogpost___description___children___id'
  | 'blogpost___description___children___children'
  | 'blogpost___description___internal___content'
  | 'blogpost___description___internal___contentDigest'
  | 'blogpost___description___internal___description'
  | 'blogpost___description___internal___fieldOwners'
  | 'blogpost___description___internal___ignoreType'
  | 'blogpost___description___internal___mediaType'
  | 'blogpost___description___internal___owner'
  | 'blogpost___description___internal___type'
  | 'blogpost___description___description'
  | 'blogpost___description___childMarkdownRemark___id'
  | 'blogpost___description___childMarkdownRemark___excerpt'
  | 'blogpost___description___childMarkdownRemark___rawMarkdownBody'
  | 'blogpost___description___childMarkdownRemark___html'
  | 'blogpost___description___childMarkdownRemark___htmlAst'
  | 'blogpost___description___childMarkdownRemark___excerptAst'
  | 'blogpost___description___childMarkdownRemark___headings'
  | 'blogpost___description___childMarkdownRemark___timeToRead'
  | 'blogpost___description___childMarkdownRemark___tableOfContents'
  | 'blogpost___description___childMarkdownRemark___children'
  | 'blogpost___body___id'
  | 'blogpost___body___parent___id'
  | 'blogpost___body___parent___children'
  | 'blogpost___body___children'
  | 'blogpost___body___children___id'
  | 'blogpost___body___children___children'
  | 'blogpost___body___internal___content'
  | 'blogpost___body___internal___contentDigest'
  | 'blogpost___body___internal___description'
  | 'blogpost___body___internal___fieldOwners'
  | 'blogpost___body___internal___ignoreType'
  | 'blogpost___body___internal___mediaType'
  | 'blogpost___body___internal___owner'
  | 'blogpost___body___internal___type'
  | 'blogpost___body___body'
  | 'blogpost___body___childMarkdownRemark___id'
  | 'blogpost___body___childMarkdownRemark___excerpt'
  | 'blogpost___body___childMarkdownRemark___rawMarkdownBody'
  | 'blogpost___body___childMarkdownRemark___html'
  | 'blogpost___body___childMarkdownRemark___htmlAst'
  | 'blogpost___body___childMarkdownRemark___excerptAst'
  | 'blogpost___body___childMarkdownRemark___headings'
  | 'blogpost___body___childMarkdownRemark___timeToRead'
  | 'blogpost___body___childMarkdownRemark___tableOfContents'
  | 'blogpost___body___childMarkdownRemark___children'
  | 'blogpost___spaceId'
  | 'blogpost___contentful_id'
  | 'blogpost___createdAt'
  | 'blogpost___updatedAt'
  | 'blogpost___sys___revision'
  | 'blogpost___node_locale'
  | 'blogpost___navigationmenu'
  | 'blogpost___navigationmenu___id'
  | 'blogpost___navigationmenu___parent___id'
  | 'blogpost___navigationmenu___parent___children'
  | 'blogpost___navigationmenu___children'
  | 'blogpost___navigationmenu___children___id'
  | 'blogpost___navigationmenu___children___children'
  | 'blogpost___navigationmenu___internal___content'
  | 'blogpost___navigationmenu___internal___contentDigest'
  | 'blogpost___navigationmenu___internal___description'
  | 'blogpost___navigationmenu___internal___fieldOwners'
  | 'blogpost___navigationmenu___internal___ignoreType'
  | 'blogpost___navigationmenu___internal___mediaType'
  | 'blogpost___navigationmenu___internal___owner'
  | 'blogpost___navigationmenu___internal___type'
  | 'blogpost___navigationmenu___label'
  | 'blogpost___navigationmenu___isExternalLink'
  | 'blogpost___navigationmenu___navigationlistsortorder'
  | 'blogpost___navigationmenu___navigationlistsortorder___id'
  | 'blogpost___navigationmenu___navigationlistsortorder___children'
  | 'blogpost___navigationmenu___navigationlistsortorder___title'
  | 'blogpost___navigationmenu___navigationlistsortorder___signInButtonLabel'
  | 'blogpost___navigationmenu___navigationlistsortorder___signOutButtonLabel'
  | 'blogpost___navigationmenu___navigationlistsortorder___sortOrder'
  | 'blogpost___navigationmenu___navigationlistsortorder___spaceId'
  | 'blogpost___navigationmenu___navigationlistsortorder___contentful_id'
  | 'blogpost___navigationmenu___navigationlistsortorder___createdAt'
  | 'blogpost___navigationmenu___navigationlistsortorder___updatedAt'
  | 'blogpost___navigationmenu___navigationlistsortorder___node_locale'
  | 'blogpost___navigationmenu___spaceId'
  | 'blogpost___navigationmenu___contentful_id'
  | 'blogpost___navigationmenu___createdAt'
  | 'blogpost___navigationmenu___updatedAt'
  | 'blogpost___navigationmenu___sys___revision'
  | 'blogpost___navigationmenu___node_locale'
  | 'blogpost___navigationmenu___url'
  | 'blogpost___navigationmenu___slug'
  | 'blogpost___childContentfulBlogPostDescriptionTextNode___id'
  | 'blogpost___childContentfulBlogPostDescriptionTextNode___parent___id'
  | 'blogpost___childContentfulBlogPostDescriptionTextNode___parent___children'
  | 'blogpost___childContentfulBlogPostDescriptionTextNode___children'
  | 'blogpost___childContentfulBlogPostDescriptionTextNode___children___id'
  | 'blogpost___childContentfulBlogPostDescriptionTextNode___children___children'
  | 'blogpost___childContentfulBlogPostDescriptionTextNode___internal___content'
  | 'blogpost___childContentfulBlogPostDescriptionTextNode___internal___contentDigest'
  | 'blogpost___childContentfulBlogPostDescriptionTextNode___internal___description'
  | 'blogpost___childContentfulBlogPostDescriptionTextNode___internal___fieldOwners'
  | 'blogpost___childContentfulBlogPostDescriptionTextNode___internal___ignoreType'
  | 'blogpost___childContentfulBlogPostDescriptionTextNode___internal___mediaType'
  | 'blogpost___childContentfulBlogPostDescriptionTextNode___internal___owner'
  | 'blogpost___childContentfulBlogPostDescriptionTextNode___internal___type'
  | 'blogpost___childContentfulBlogPostDescriptionTextNode___description'
  | 'blogpost___childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___id'
  | 'blogpost___childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___excerpt'
  | 'blogpost___childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___rawMarkdownBody'
  | 'blogpost___childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___html'
  | 'blogpost___childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___htmlAst'
  | 'blogpost___childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___excerptAst'
  | 'blogpost___childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___headings'
  | 'blogpost___childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___timeToRead'
  | 'blogpost___childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___tableOfContents'
  | 'blogpost___childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___children'
  | 'blogpost___childContentfulBlogPostBodyTextNode___id'
  | 'blogpost___childContentfulBlogPostBodyTextNode___parent___id'
  | 'blogpost___childContentfulBlogPostBodyTextNode___parent___children'
  | 'blogpost___childContentfulBlogPostBodyTextNode___children'
  | 'blogpost___childContentfulBlogPostBodyTextNode___children___id'
  | 'blogpost___childContentfulBlogPostBodyTextNode___children___children'
  | 'blogpost___childContentfulBlogPostBodyTextNode___internal___content'
  | 'blogpost___childContentfulBlogPostBodyTextNode___internal___contentDigest'
  | 'blogpost___childContentfulBlogPostBodyTextNode___internal___description'
  | 'blogpost___childContentfulBlogPostBodyTextNode___internal___fieldOwners'
  | 'blogpost___childContentfulBlogPostBodyTextNode___internal___ignoreType'
  | 'blogpost___childContentfulBlogPostBodyTextNode___internal___mediaType'
  | 'blogpost___childContentfulBlogPostBodyTextNode___internal___owner'
  | 'blogpost___childContentfulBlogPostBodyTextNode___internal___type'
  | 'blogpost___childContentfulBlogPostBodyTextNode___body'
  | 'blogpost___childContentfulBlogPostBodyTextNode___childMarkdownRemark___id'
  | 'blogpost___childContentfulBlogPostBodyTextNode___childMarkdownRemark___excerpt'
  | 'blogpost___childContentfulBlogPostBodyTextNode___childMarkdownRemark___rawMarkdownBody'
  | 'blogpost___childContentfulBlogPostBodyTextNode___childMarkdownRemark___html'
  | 'blogpost___childContentfulBlogPostBodyTextNode___childMarkdownRemark___htmlAst'
  | 'blogpost___childContentfulBlogPostBodyTextNode___childMarkdownRemark___excerptAst'
  | 'blogpost___childContentfulBlogPostBodyTextNode___childMarkdownRemark___headings'
  | 'blogpost___childContentfulBlogPostBodyTextNode___childMarkdownRemark___timeToRead'
  | 'blogpost___childContentfulBlogPostBodyTextNode___childMarkdownRemark___tableOfContents'
  | 'blogpost___childContentfulBlogPostBodyTextNode___childMarkdownRemark___children'
  | 'shortBio___id'
  | 'shortBio___parent___id'
  | 'shortBio___parent___parent___id'
  | 'shortBio___parent___parent___children'
  | 'shortBio___parent___children'
  | 'shortBio___parent___children___id'
  | 'shortBio___parent___children___children'
  | 'shortBio___parent___internal___content'
  | 'shortBio___parent___internal___contentDigest'
  | 'shortBio___parent___internal___description'
  | 'shortBio___parent___internal___fieldOwners'
  | 'shortBio___parent___internal___ignoreType'
  | 'shortBio___parent___internal___mediaType'
  | 'shortBio___parent___internal___owner'
  | 'shortBio___parent___internal___type'
  | 'shortBio___children'
  | 'shortBio___children___id'
  | 'shortBio___children___parent___id'
  | 'shortBio___children___parent___children'
  | 'shortBio___children___children'
  | 'shortBio___children___children___id'
  | 'shortBio___children___children___children'
  | 'shortBio___children___internal___content'
  | 'shortBio___children___internal___contentDigest'
  | 'shortBio___children___internal___description'
  | 'shortBio___children___internal___fieldOwners'
  | 'shortBio___children___internal___ignoreType'
  | 'shortBio___children___internal___mediaType'
  | 'shortBio___children___internal___owner'
  | 'shortBio___children___internal___type'
  | 'shortBio___internal___content'
  | 'shortBio___internal___contentDigest'
  | 'shortBio___internal___description'
  | 'shortBio___internal___fieldOwners'
  | 'shortBio___internal___ignoreType'
  | 'shortBio___internal___mediaType'
  | 'shortBio___internal___owner'
  | 'shortBio___internal___type'
  | 'shortBio___shortBio'
  | 'shortBio___childMarkdownRemark___id'
  | 'shortBio___childMarkdownRemark___frontmatter___title'
  | 'shortBio___childMarkdownRemark___excerpt'
  | 'shortBio___childMarkdownRemark___rawMarkdownBody'
  | 'shortBio___childMarkdownRemark___html'
  | 'shortBio___childMarkdownRemark___htmlAst'
  | 'shortBio___childMarkdownRemark___excerptAst'
  | 'shortBio___childMarkdownRemark___headings'
  | 'shortBio___childMarkdownRemark___headings___id'
  | 'shortBio___childMarkdownRemark___headings___value'
  | 'shortBio___childMarkdownRemark___headings___depth'
  | 'shortBio___childMarkdownRemark___timeToRead'
  | 'shortBio___childMarkdownRemark___tableOfContents'
  | 'shortBio___childMarkdownRemark___wordCount___paragraphs'
  | 'shortBio___childMarkdownRemark___wordCount___sentences'
  | 'shortBio___childMarkdownRemark___wordCount___words'
  | 'shortBio___childMarkdownRemark___parent___id'
  | 'shortBio___childMarkdownRemark___parent___children'
  | 'shortBio___childMarkdownRemark___children'
  | 'shortBio___childMarkdownRemark___children___id'
  | 'shortBio___childMarkdownRemark___children___children'
  | 'shortBio___childMarkdownRemark___internal___content'
  | 'shortBio___childMarkdownRemark___internal___contentDigest'
  | 'shortBio___childMarkdownRemark___internal___description'
  | 'shortBio___childMarkdownRemark___internal___fieldOwners'
  | 'shortBio___childMarkdownRemark___internal___ignoreType'
  | 'shortBio___childMarkdownRemark___internal___mediaType'
  | 'shortBio___childMarkdownRemark___internal___owner'
  | 'shortBio___childMarkdownRemark___internal___type'
  | 'spaceId'
  | 'contentful_id'
  | 'createdAt'
  | 'updatedAt'
  | 'sys___revision'
  | 'sys___contentType___sys___type'
  | 'sys___contentType___sys___linkType'
  | 'sys___contentType___sys___id'
  | 'sys___contentType___sys___contentful_id'
  | 'node_locale'
  | 'childContentfulPersonShortBioTextNode___id'
  | 'childContentfulPersonShortBioTextNode___parent___id'
  | 'childContentfulPersonShortBioTextNode___parent___parent___id'
  | 'childContentfulPersonShortBioTextNode___parent___parent___children'
  | 'childContentfulPersonShortBioTextNode___parent___children'
  | 'childContentfulPersonShortBioTextNode___parent___children___id'
  | 'childContentfulPersonShortBioTextNode___parent___children___children'
  | 'childContentfulPersonShortBioTextNode___parent___internal___content'
  | 'childContentfulPersonShortBioTextNode___parent___internal___contentDigest'
  | 'childContentfulPersonShortBioTextNode___parent___internal___description'
  | 'childContentfulPersonShortBioTextNode___parent___internal___fieldOwners'
  | 'childContentfulPersonShortBioTextNode___parent___internal___ignoreType'
  | 'childContentfulPersonShortBioTextNode___parent___internal___mediaType'
  | 'childContentfulPersonShortBioTextNode___parent___internal___owner'
  | 'childContentfulPersonShortBioTextNode___parent___internal___type'
  | 'childContentfulPersonShortBioTextNode___children'
  | 'childContentfulPersonShortBioTextNode___children___id'
  | 'childContentfulPersonShortBioTextNode___children___parent___id'
  | 'childContentfulPersonShortBioTextNode___children___parent___children'
  | 'childContentfulPersonShortBioTextNode___children___children'
  | 'childContentfulPersonShortBioTextNode___children___children___id'
  | 'childContentfulPersonShortBioTextNode___children___children___children'
  | 'childContentfulPersonShortBioTextNode___children___internal___content'
  | 'childContentfulPersonShortBioTextNode___children___internal___contentDigest'
  | 'childContentfulPersonShortBioTextNode___children___internal___description'
  | 'childContentfulPersonShortBioTextNode___children___internal___fieldOwners'
  | 'childContentfulPersonShortBioTextNode___children___internal___ignoreType'
  | 'childContentfulPersonShortBioTextNode___children___internal___mediaType'
  | 'childContentfulPersonShortBioTextNode___children___internal___owner'
  | 'childContentfulPersonShortBioTextNode___children___internal___type'
  | 'childContentfulPersonShortBioTextNode___internal___content'
  | 'childContentfulPersonShortBioTextNode___internal___contentDigest'
  | 'childContentfulPersonShortBioTextNode___internal___description'
  | 'childContentfulPersonShortBioTextNode___internal___fieldOwners'
  | 'childContentfulPersonShortBioTextNode___internal___ignoreType'
  | 'childContentfulPersonShortBioTextNode___internal___mediaType'
  | 'childContentfulPersonShortBioTextNode___internal___owner'
  | 'childContentfulPersonShortBioTextNode___internal___type'
  | 'childContentfulPersonShortBioTextNode___shortBio'
  | 'childContentfulPersonShortBioTextNode___childMarkdownRemark___id'
  | 'childContentfulPersonShortBioTextNode___childMarkdownRemark___frontmatter___title'
  | 'childContentfulPersonShortBioTextNode___childMarkdownRemark___excerpt'
  | 'childContentfulPersonShortBioTextNode___childMarkdownRemark___rawMarkdownBody'
  | 'childContentfulPersonShortBioTextNode___childMarkdownRemark___html'
  | 'childContentfulPersonShortBioTextNode___childMarkdownRemark___htmlAst'
  | 'childContentfulPersonShortBioTextNode___childMarkdownRemark___excerptAst'
  | 'childContentfulPersonShortBioTextNode___childMarkdownRemark___headings'
  | 'childContentfulPersonShortBioTextNode___childMarkdownRemark___headings___id'
  | 'childContentfulPersonShortBioTextNode___childMarkdownRemark___headings___value'
  | 'childContentfulPersonShortBioTextNode___childMarkdownRemark___headings___depth'
  | 'childContentfulPersonShortBioTextNode___childMarkdownRemark___timeToRead'
  | 'childContentfulPersonShortBioTextNode___childMarkdownRemark___tableOfContents'
  | 'childContentfulPersonShortBioTextNode___childMarkdownRemark___wordCount___paragraphs'
  | 'childContentfulPersonShortBioTextNode___childMarkdownRemark___wordCount___sentences'
  | 'childContentfulPersonShortBioTextNode___childMarkdownRemark___wordCount___words'
  | 'childContentfulPersonShortBioTextNode___childMarkdownRemark___parent___id'
  | 'childContentfulPersonShortBioTextNode___childMarkdownRemark___parent___children'
  | 'childContentfulPersonShortBioTextNode___childMarkdownRemark___children'
  | 'childContentfulPersonShortBioTextNode___childMarkdownRemark___children___id'
  | 'childContentfulPersonShortBioTextNode___childMarkdownRemark___children___children'
  | 'childContentfulPersonShortBioTextNode___childMarkdownRemark___internal___content'
  | 'childContentfulPersonShortBioTextNode___childMarkdownRemark___internal___contentDigest'
  | 'childContentfulPersonShortBioTextNode___childMarkdownRemark___internal___description'
  | 'childContentfulPersonShortBioTextNode___childMarkdownRemark___internal___fieldOwners'
  | 'childContentfulPersonShortBioTextNode___childMarkdownRemark___internal___ignoreType'
  | 'childContentfulPersonShortBioTextNode___childMarkdownRemark___internal___mediaType'
  | 'childContentfulPersonShortBioTextNode___childMarkdownRemark___internal___owner'
  | 'childContentfulPersonShortBioTextNode___childMarkdownRemark___internal___type';

export type ContentfulPersonFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  company?: Maybe<StringQueryOperatorInput>;
  email?: Maybe<StringQueryOperatorInput>;
  phone?: Maybe<StringQueryOperatorInput>;
  facebook?: Maybe<StringQueryOperatorInput>;
  twitter?: Maybe<StringQueryOperatorInput>;
  github?: Maybe<StringQueryOperatorInput>;
  image?: Maybe<ContentfulAssetFilterInput>;
  blogpost?: Maybe<ContentfulBlogPostFilterListInput>;
  shortBio?: Maybe<ContentfulPersonShortBioTextNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulPersonSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  childContentfulPersonShortBioTextNode?: Maybe<ContentfulPersonShortBioTextNodeFilterInput>;
};

export type ContentfulPersonGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulPersonEdge>;
  nodes: Array<ContentfulPerson>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulPersonShortBioTextNode = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  shortBio?: Maybe<Scalars['String']>;
  childMarkdownRemark?: Maybe<MarkdownRemark>;
};

export type ContentfulPersonShortBioTextNodeConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulPersonShortBioTextNodeEdge>;
  nodes: Array<ContentfulPersonShortBioTextNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulPersonShortBioTextNodeGroupConnection>;
};


export type ContentfulPersonShortBioTextNodeConnectionDistinctArgs = {
  field: ContentfulPersonShortBioTextNodeFieldsEnum;
};


export type ContentfulPersonShortBioTextNodeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulPersonShortBioTextNodeFieldsEnum;
};

export type ContentfulPersonShortBioTextNodeEdge = {
  next?: Maybe<ContentfulPersonShortBioTextNode>;
  node: ContentfulPersonShortBioTextNode;
  previous?: Maybe<ContentfulPersonShortBioTextNode>;
};

export type ContentfulPersonShortBioTextNodeFieldsEnum =
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'shortBio'
  | 'childMarkdownRemark___id'
  | 'childMarkdownRemark___frontmatter___title'
  | 'childMarkdownRemark___excerpt'
  | 'childMarkdownRemark___rawMarkdownBody'
  | 'childMarkdownRemark___html'
  | 'childMarkdownRemark___htmlAst'
  | 'childMarkdownRemark___excerptAst'
  | 'childMarkdownRemark___headings'
  | 'childMarkdownRemark___headings___id'
  | 'childMarkdownRemark___headings___value'
  | 'childMarkdownRemark___headings___depth'
  | 'childMarkdownRemark___timeToRead'
  | 'childMarkdownRemark___tableOfContents'
  | 'childMarkdownRemark___wordCount___paragraphs'
  | 'childMarkdownRemark___wordCount___sentences'
  | 'childMarkdownRemark___wordCount___words'
  | 'childMarkdownRemark___parent___id'
  | 'childMarkdownRemark___parent___parent___id'
  | 'childMarkdownRemark___parent___parent___children'
  | 'childMarkdownRemark___parent___children'
  | 'childMarkdownRemark___parent___children___id'
  | 'childMarkdownRemark___parent___children___children'
  | 'childMarkdownRemark___parent___internal___content'
  | 'childMarkdownRemark___parent___internal___contentDigest'
  | 'childMarkdownRemark___parent___internal___description'
  | 'childMarkdownRemark___parent___internal___fieldOwners'
  | 'childMarkdownRemark___parent___internal___ignoreType'
  | 'childMarkdownRemark___parent___internal___mediaType'
  | 'childMarkdownRemark___parent___internal___owner'
  | 'childMarkdownRemark___parent___internal___type'
  | 'childMarkdownRemark___children'
  | 'childMarkdownRemark___children___id'
  | 'childMarkdownRemark___children___parent___id'
  | 'childMarkdownRemark___children___parent___children'
  | 'childMarkdownRemark___children___children'
  | 'childMarkdownRemark___children___children___id'
  | 'childMarkdownRemark___children___children___children'
  | 'childMarkdownRemark___children___internal___content'
  | 'childMarkdownRemark___children___internal___contentDigest'
  | 'childMarkdownRemark___children___internal___description'
  | 'childMarkdownRemark___children___internal___fieldOwners'
  | 'childMarkdownRemark___children___internal___ignoreType'
  | 'childMarkdownRemark___children___internal___mediaType'
  | 'childMarkdownRemark___children___internal___owner'
  | 'childMarkdownRemark___children___internal___type'
  | 'childMarkdownRemark___internal___content'
  | 'childMarkdownRemark___internal___contentDigest'
  | 'childMarkdownRemark___internal___description'
  | 'childMarkdownRemark___internal___fieldOwners'
  | 'childMarkdownRemark___internal___ignoreType'
  | 'childMarkdownRemark___internal___mediaType'
  | 'childMarkdownRemark___internal___owner'
  | 'childMarkdownRemark___internal___type';

export type ContentfulPersonShortBioTextNodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  shortBio?: Maybe<StringQueryOperatorInput>;
  childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>;
};

export type ContentfulPersonShortBioTextNodeGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulPersonShortBioTextNodeEdge>;
  nodes: Array<ContentfulPersonShortBioTextNode>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulPersonShortBioTextNodeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulPersonShortBioTextNodeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulPersonSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulPersonFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulPersonSys = {
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulPersonSysContentType>;
};

export type ContentfulPersonSysContentType = {
  sys?: Maybe<ContentfulPersonSysContentTypeSys>;
};

export type ContentfulPersonSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulPersonSysContentTypeSysFilterInput>;
};

export type ContentfulPersonSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
};

export type ContentfulPersonSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulPersonSysFilterInput = {
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulPersonSysContentTypeFilterInput>;
};

export type ContentfulResize = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  src?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
};

export type ContentfulResizeFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
};

export type ContentfulResolutions = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
};

export type ContentfulResolutionsFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulSizes = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
};

export type ContentfulSizesFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
};


export type DateQueryOperatorInput = {
  eq?: Maybe<Scalars['Date']>;
  ne?: Maybe<Scalars['Date']>;
  gt?: Maybe<Scalars['Date']>;
  gte?: Maybe<Scalars['Date']>;
  lt?: Maybe<Scalars['Date']>;
  lte?: Maybe<Scalars['Date']>;
  in?: Maybe<Array<Maybe<Scalars['Date']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>;
};

export type Directory = Node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type DirectoryModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type DirectoryConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<DirectoryGroupConnection>;
};


export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

export type DirectoryEdge = {
  next?: Maybe<Directory>;
  node: Directory;
  previous?: Maybe<Directory>;
};

export type DirectoryFieldsEnum =
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'blksize'
  | 'blocks'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type DirectoryFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type DirectoryGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type DirectorySortInput = {
  fields?: Maybe<Array<Maybe<DirectoryFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type DuotoneGradient = {
  highlight: Scalars['String'];
  shadow: Scalars['String'];
  opacity?: Maybe<Scalars['Int']>;
};

export type File = Node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  /** Copy file to static directory and return public url to it */
  publicURL?: Maybe<Scalars['String']>;
  childImageSharp?: Maybe<ImageSharp>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type FileModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type FileConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<FileGroupConnection>;
};


export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

export type FileEdge = {
  next?: Maybe<File>;
  node: File;
  previous?: Maybe<File>;
};

export type FileFieldsEnum =
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'blksize'
  | 'blocks'
  | 'publicURL'
  | 'childImageSharp___fixed___base64'
  | 'childImageSharp___fixed___tracedSVG'
  | 'childImageSharp___fixed___aspectRatio'
  | 'childImageSharp___fixed___width'
  | 'childImageSharp___fixed___height'
  | 'childImageSharp___fixed___src'
  | 'childImageSharp___fixed___srcSet'
  | 'childImageSharp___fixed___srcWebp'
  | 'childImageSharp___fixed___srcSetWebp'
  | 'childImageSharp___fixed___originalName'
  | 'childImageSharp___resolutions___base64'
  | 'childImageSharp___resolutions___tracedSVG'
  | 'childImageSharp___resolutions___aspectRatio'
  | 'childImageSharp___resolutions___width'
  | 'childImageSharp___resolutions___height'
  | 'childImageSharp___resolutions___src'
  | 'childImageSharp___resolutions___srcSet'
  | 'childImageSharp___resolutions___srcWebp'
  | 'childImageSharp___resolutions___srcSetWebp'
  | 'childImageSharp___resolutions___originalName'
  | 'childImageSharp___fluid___base64'
  | 'childImageSharp___fluid___tracedSVG'
  | 'childImageSharp___fluid___aspectRatio'
  | 'childImageSharp___fluid___src'
  | 'childImageSharp___fluid___srcSet'
  | 'childImageSharp___fluid___srcWebp'
  | 'childImageSharp___fluid___srcSetWebp'
  | 'childImageSharp___fluid___sizes'
  | 'childImageSharp___fluid___originalImg'
  | 'childImageSharp___fluid___originalName'
  | 'childImageSharp___fluid___presentationWidth'
  | 'childImageSharp___fluid___presentationHeight'
  | 'childImageSharp___sizes___base64'
  | 'childImageSharp___sizes___tracedSVG'
  | 'childImageSharp___sizes___aspectRatio'
  | 'childImageSharp___sizes___src'
  | 'childImageSharp___sizes___srcSet'
  | 'childImageSharp___sizes___srcWebp'
  | 'childImageSharp___sizes___srcSetWebp'
  | 'childImageSharp___sizes___sizes'
  | 'childImageSharp___sizes___originalImg'
  | 'childImageSharp___sizes___originalName'
  | 'childImageSharp___sizes___presentationWidth'
  | 'childImageSharp___sizes___presentationHeight'
  | 'childImageSharp___original___width'
  | 'childImageSharp___original___height'
  | 'childImageSharp___original___src'
  | 'childImageSharp___resize___src'
  | 'childImageSharp___resize___tracedSVG'
  | 'childImageSharp___resize___width'
  | 'childImageSharp___resize___height'
  | 'childImageSharp___resize___aspectRatio'
  | 'childImageSharp___resize___originalName'
  | 'childImageSharp___id'
  | 'childImageSharp___parent___id'
  | 'childImageSharp___parent___parent___id'
  | 'childImageSharp___parent___parent___children'
  | 'childImageSharp___parent___children'
  | 'childImageSharp___parent___children___id'
  | 'childImageSharp___parent___children___children'
  | 'childImageSharp___parent___internal___content'
  | 'childImageSharp___parent___internal___contentDigest'
  | 'childImageSharp___parent___internal___description'
  | 'childImageSharp___parent___internal___fieldOwners'
  | 'childImageSharp___parent___internal___ignoreType'
  | 'childImageSharp___parent___internal___mediaType'
  | 'childImageSharp___parent___internal___owner'
  | 'childImageSharp___parent___internal___type'
  | 'childImageSharp___children'
  | 'childImageSharp___children___id'
  | 'childImageSharp___children___parent___id'
  | 'childImageSharp___children___parent___children'
  | 'childImageSharp___children___children'
  | 'childImageSharp___children___children___id'
  | 'childImageSharp___children___children___children'
  | 'childImageSharp___children___internal___content'
  | 'childImageSharp___children___internal___contentDigest'
  | 'childImageSharp___children___internal___description'
  | 'childImageSharp___children___internal___fieldOwners'
  | 'childImageSharp___children___internal___ignoreType'
  | 'childImageSharp___children___internal___mediaType'
  | 'childImageSharp___children___internal___owner'
  | 'childImageSharp___children___internal___type'
  | 'childImageSharp___internal___content'
  | 'childImageSharp___internal___contentDigest'
  | 'childImageSharp___internal___description'
  | 'childImageSharp___internal___fieldOwners'
  | 'childImageSharp___internal___ignoreType'
  | 'childImageSharp___internal___mediaType'
  | 'childImageSharp___internal___owner'
  | 'childImageSharp___internal___type'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type FileFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  publicURL?: Maybe<StringQueryOperatorInput>;
  childImageSharp?: Maybe<ImageSharpFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type FileGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type FileSortInput = {
  fields?: Maybe<Array<Maybe<FileFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type FloatQueryOperatorInput = {
  eq?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type ImageCropFocus =
  | 'CENTER'
  | 'NORTH'
  | 'NORTHEAST'
  | 'EAST'
  | 'SOUTHEAST'
  | 'SOUTH'
  | 'SOUTHWEST'
  | 'WEST'
  | 'NORTHWEST'
  | 'ENTROPY'
  | 'ATTENTION';

export type ImageFit =
  | 'COVER'
  | 'CONTAIN'
  | 'FILL'
  | 'INSIDE'
  | 'OUTSIDE';

export type ImageFormat =
  | 'NO_CHANGE'
  | 'JPG'
  | 'PNG'
  | 'WEBP';

export type ImageResizingBehavior =
  | 'NO_CHANGE'
  /** Same as the default resizing, but adds padding so that the generated image has the specified dimensions. */
  | 'PAD'
  /** Crop a part of the original image to match the specified size. */
  | 'CROP'
  /**
   * Crop the image to the specified dimensions, if the original image is smaller
   * than these dimensions, then the image will be upscaled.
   */
  | 'FILL'
  /** When used in association with the f parameter below, creates a thumbnail from the image based on a focus area. */
  | 'THUMB'
  /** Scale the image regardless of the original aspect ratio. */
  | 'SCALE';

export type ImageSharp = Node & {
  fixed?: Maybe<ImageSharpFixed>;
  /** @deprecated Resolutions was deprecated in Gatsby v2. It's been renamed to "fixed" https://example.com/write-docs-and-fix-this-example-link */
  resolutions?: Maybe<ImageSharpResolutions>;
  fluid?: Maybe<ImageSharpFluid>;
  /** @deprecated Sizes was deprecated in Gatsby v2. It's been renamed to "fluid" https://example.com/write-docs-and-fix-this-example-link */
  sizes?: Maybe<ImageSharpSizes>;
  original?: Maybe<ImageSharpOriginal>;
  resize?: Maybe<ImageSharpResize>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ImageSharpFixedArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};


export type ImageSharpResolutionsArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};


export type ImageSharpFluidArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
};


export type ImageSharpSizesArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
};


export type ImageSharpResizeArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionLevel?: Maybe<Scalars['Int']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  base64?: Maybe<Scalars['Boolean']>;
  traceSVG?: Maybe<Potrace>;
  toFormat?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};

export type ImageSharpConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ImageSharpGroupConnection>;
};


export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ImageSharpFieldsEnum;
};

export type ImageSharpEdge = {
  next?: Maybe<ImageSharp>;
  node: ImageSharp;
  previous?: Maybe<ImageSharp>;
};

export type ImageSharpFieldsEnum =
  | 'fixed___base64'
  | 'fixed___tracedSVG'
  | 'fixed___aspectRatio'
  | 'fixed___width'
  | 'fixed___height'
  | 'fixed___src'
  | 'fixed___srcSet'
  | 'fixed___srcWebp'
  | 'fixed___srcSetWebp'
  | 'fixed___originalName'
  | 'resolutions___base64'
  | 'resolutions___tracedSVG'
  | 'resolutions___aspectRatio'
  | 'resolutions___width'
  | 'resolutions___height'
  | 'resolutions___src'
  | 'resolutions___srcSet'
  | 'resolutions___srcWebp'
  | 'resolutions___srcSetWebp'
  | 'resolutions___originalName'
  | 'fluid___base64'
  | 'fluid___tracedSVG'
  | 'fluid___aspectRatio'
  | 'fluid___src'
  | 'fluid___srcSet'
  | 'fluid___srcWebp'
  | 'fluid___srcSetWebp'
  | 'fluid___sizes'
  | 'fluid___originalImg'
  | 'fluid___originalName'
  | 'fluid___presentationWidth'
  | 'fluid___presentationHeight'
  | 'sizes___base64'
  | 'sizes___tracedSVG'
  | 'sizes___aspectRatio'
  | 'sizes___src'
  | 'sizes___srcSet'
  | 'sizes___srcWebp'
  | 'sizes___srcSetWebp'
  | 'sizes___sizes'
  | 'sizes___originalImg'
  | 'sizes___originalName'
  | 'sizes___presentationWidth'
  | 'sizes___presentationHeight'
  | 'original___width'
  | 'original___height'
  | 'original___src'
  | 'resize___src'
  | 'resize___tracedSVG'
  | 'resize___width'
  | 'resize___height'
  | 'resize___aspectRatio'
  | 'resize___originalName'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type ImageSharpFilterInput = {
  fixed?: Maybe<ImageSharpFixedFilterInput>;
  resolutions?: Maybe<ImageSharpResolutionsFilterInput>;
  fluid?: Maybe<ImageSharpFluidFilterInput>;
  sizes?: Maybe<ImageSharpSizesFilterInput>;
  original?: Maybe<ImageSharpOriginalFilterInput>;
  resize?: Maybe<ImageSharpResizeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ImageSharpFixed = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpFixedFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpFluid = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
  originalImg?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
  presentationWidth: Scalars['Int'];
  presentationHeight: Scalars['Int'];
};

export type ImageSharpFluidFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
  originalImg?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
  presentationWidth?: Maybe<IntQueryOperatorInput>;
  presentationHeight?: Maybe<IntQueryOperatorInput>;
};

export type ImageSharpGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ImageSharpOriginal = {
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  src?: Maybe<Scalars['String']>;
};

export type ImageSharpOriginalFilterInput = {
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpResize = {
  src?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpResizeFilterInput = {
  src?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpResolutions = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpResolutionsFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpSizes = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
  originalImg?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
  presentationWidth: Scalars['Int'];
  presentationHeight: Scalars['Int'];
};

export type ImageSharpSizesFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
  originalImg?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
  presentationWidth?: Maybe<IntQueryOperatorInput>;
  presentationHeight?: Maybe<IntQueryOperatorInput>;
};

export type ImageSharpSortInput = {
  fields?: Maybe<Array<Maybe<ImageSharpFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type Internal = {
  content?: Maybe<Scalars['String']>;
  contentDigest: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>;
  ignoreType?: Maybe<Scalars['Boolean']>;
  mediaType?: Maybe<Scalars['String']>;
  owner: Scalars['String'];
  type: Scalars['String'];
};

export type InternalFilterInput = {
  content?: Maybe<StringQueryOperatorInput>;
  contentDigest?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  fieldOwners?: Maybe<StringQueryOperatorInput>;
  ignoreType?: Maybe<BooleanQueryOperatorInput>;
  mediaType?: Maybe<StringQueryOperatorInput>;
  owner?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
};

export type IntQueryOperatorInput = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};


export type JsonQueryOperatorInput = {
  eq?: Maybe<Scalars['JSON']>;
  ne?: Maybe<Scalars['JSON']>;
  in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  nin?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  regex?: Maybe<Scalars['JSON']>;
  glob?: Maybe<Scalars['JSON']>;
};

export type MarkdownExcerptFormats =
  | 'PLAIN'
  | 'HTML'
  | 'MARKDOWN';

export type MarkdownHeading = {
  id?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
  depth?: Maybe<Scalars['Int']>;
};

export type MarkdownHeadingFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  value?: Maybe<StringQueryOperatorInput>;
  depth?: Maybe<IntQueryOperatorInput>;
};

export type MarkdownHeadingFilterListInput = {
  elemMatch?: Maybe<MarkdownHeadingFilterInput>;
};

export type MarkdownHeadingLevels =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6';

export type MarkdownRemark = Node & {
  id: Scalars['ID'];
  frontmatter?: Maybe<MarkdownRemarkFrontmatter>;
  excerpt?: Maybe<Scalars['String']>;
  rawMarkdownBody?: Maybe<Scalars['String']>;
  html?: Maybe<Scalars['String']>;
  htmlAst?: Maybe<Scalars['JSON']>;
  excerptAst?: Maybe<Scalars['JSON']>;
  headings?: Maybe<Array<Maybe<MarkdownHeading>>>;
  timeToRead?: Maybe<Scalars['Int']>;
  tableOfContents?: Maybe<Scalars['String']>;
  wordCount?: Maybe<MarkdownWordCount>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type MarkdownRemarkExcerptArgs = {
  pruneLength?: Maybe<Scalars['Int']>;
  truncate?: Maybe<Scalars['Boolean']>;
  format?: Maybe<MarkdownExcerptFormats>;
};


export type MarkdownRemarkExcerptAstArgs = {
  pruneLength?: Maybe<Scalars['Int']>;
  truncate?: Maybe<Scalars['Boolean']>;
};


export type MarkdownRemarkHeadingsArgs = {
  depth?: Maybe<MarkdownHeadingLevels>;
};


export type MarkdownRemarkTableOfContentsArgs = {
  absolute?: Maybe<Scalars['Boolean']>;
  pathToSlugField?: Maybe<Scalars['String']>;
  maxDepth?: Maybe<Scalars['Int']>;
  heading?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkConnection = {
  totalCount: Scalars['Int'];
  edges: Array<MarkdownRemarkEdge>;
  nodes: Array<MarkdownRemark>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<MarkdownRemarkGroupConnection>;
};


export type MarkdownRemarkConnectionDistinctArgs = {
  field: MarkdownRemarkFieldsEnum;
};


export type MarkdownRemarkConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: MarkdownRemarkFieldsEnum;
};

export type MarkdownRemarkEdge = {
  next?: Maybe<MarkdownRemark>;
  node: MarkdownRemark;
  previous?: Maybe<MarkdownRemark>;
};

export type MarkdownRemarkFieldsEnum =
  | 'id'
  | 'frontmatter___title'
  | 'excerpt'
  | 'rawMarkdownBody'
  | 'html'
  | 'htmlAst'
  | 'excerptAst'
  | 'headings'
  | 'headings___id'
  | 'headings___value'
  | 'headings___depth'
  | 'timeToRead'
  | 'tableOfContents'
  | 'wordCount___paragraphs'
  | 'wordCount___sentences'
  | 'wordCount___words'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type MarkdownRemarkFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  frontmatter?: Maybe<MarkdownRemarkFrontmatterFilterInput>;
  excerpt?: Maybe<StringQueryOperatorInput>;
  rawMarkdownBody?: Maybe<StringQueryOperatorInput>;
  html?: Maybe<StringQueryOperatorInput>;
  htmlAst?: Maybe<JsonQueryOperatorInput>;
  excerptAst?: Maybe<JsonQueryOperatorInput>;
  headings?: Maybe<MarkdownHeadingFilterListInput>;
  timeToRead?: Maybe<IntQueryOperatorInput>;
  tableOfContents?: Maybe<StringQueryOperatorInput>;
  wordCount?: Maybe<MarkdownWordCountFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type MarkdownRemarkFrontmatter = {
  title?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkFrontmatterFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
};

export type MarkdownRemarkGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<MarkdownRemarkEdge>;
  nodes: Array<MarkdownRemark>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkSortInput = {
  fields?: Maybe<Array<Maybe<MarkdownRemarkFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type MarkdownWordCount = {
  paragraphs?: Maybe<Scalars['Int']>;
  sentences?: Maybe<Scalars['Int']>;
  words?: Maybe<Scalars['Int']>;
};

export type MarkdownWordCountFilterInput = {
  paragraphs?: Maybe<IntQueryOperatorInput>;
  sentences?: Maybe<IntQueryOperatorInput>;
  words?: Maybe<IntQueryOperatorInput>;
};

/** Node Interface */
export type Node = {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type NodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type NodeFilterListInput = {
  elemMatch?: Maybe<NodeFilterInput>;
};

export type PageInfo = {
  currentPage: Scalars['Int'];
  hasPreviousPage: Scalars['Boolean'];
  hasNextPage: Scalars['Boolean'];
  itemCount: Scalars['Int'];
  pageCount: Scalars['Int'];
  perPage?: Maybe<Scalars['Int']>;
  totalCount: Scalars['Int'];
};

export type Potrace = {
  turnPolicy?: Maybe<PotraceTurnPolicy>;
  turdSize?: Maybe<Scalars['Float']>;
  alphaMax?: Maybe<Scalars['Float']>;
  optCurve?: Maybe<Scalars['Boolean']>;
  optTolerance?: Maybe<Scalars['Float']>;
  threshold?: Maybe<Scalars['Int']>;
  blackOnWhite?: Maybe<Scalars['Boolean']>;
  color?: Maybe<Scalars['String']>;
  background?: Maybe<Scalars['String']>;
};

export type PotraceTurnPolicy =
  | 'TURNPOLICY_BLACK'
  | 'TURNPOLICY_WHITE'
  | 'TURNPOLICY_LEFT'
  | 'TURNPOLICY_RIGHT'
  | 'TURNPOLICY_MINORITY'
  | 'TURNPOLICY_MAJORITY';

export type Query = {
  file?: Maybe<File>;
  allFile: FileConnection;
  directory?: Maybe<Directory>;
  allDirectory: DirectoryConnection;
  sitePage?: Maybe<SitePage>;
  allSitePage: SitePageConnection;
  site?: Maybe<Site>;
  allSite: SiteConnection;
  imageSharp?: Maybe<ImageSharp>;
  allImageSharp: ImageSharpConnection;
  markdownRemark?: Maybe<MarkdownRemark>;
  allMarkdownRemark: MarkdownRemarkConnection;
  contentfulAsset?: Maybe<ContentfulAsset>;
  allContentfulAsset: ContentfulAssetConnection;
  contentfulCardsContentBodyTextNode?: Maybe<ContentfulCardsContentBodyTextNode>;
  allContentfulCardsContentBodyTextNode: ContentfulCardsContentBodyTextNodeConnection;
  contentfulCardsContentRichTextNode?: Maybe<ContentfulCardsContentRichTextNode>;
  allContentfulCardsContentRichTextNode: ContentfulCardsContentRichTextNodeConnection;
  contentfulCards?: Maybe<ContentfulCards>;
  allContentfulCards: ContentfulCardsConnection;
  contentfulNavigationListSortOrder?: Maybe<ContentfulNavigationListSortOrder>;
  allContentfulNavigationListSortOrder: ContentfulNavigationListSortOrderConnection;
  contentfulBannerAlertsContentRichTextNode?: Maybe<ContentfulBannerAlertsContentRichTextNode>;
  allContentfulBannerAlertsContentRichTextNode: ContentfulBannerAlertsContentRichTextNodeConnection;
  contentfulBannerAlerts?: Maybe<ContentfulBannerAlerts>;
  allContentfulBannerAlerts: ContentfulBannerAlertsConnection;
  contentfulPageAdditionalPropertiesJsonNode?: Maybe<ContentfulPageAdditionalPropertiesJsonNode>;
  allContentfulPageAdditionalPropertiesJsonNode: ContentfulPageAdditionalPropertiesJsonNodeConnection;
  contentfulPageContentTextNode?: Maybe<ContentfulPageContentTextNode>;
  allContentfulPageContentTextNode: ContentfulPageContentTextNodeConnection;
  contentfulPage?: Maybe<ContentfulPage>;
  allContentfulPage: ContentfulPageConnection;
  contentfulLink?: Maybe<ContentfulLink>;
  allContentfulLink: ContentfulLinkConnection;
  contentfulNavigationMenu?: Maybe<ContentfulNavigationMenu>;
  allContentfulNavigationMenu: ContentfulNavigationMenuConnection;
  contentfulPersonShortBioTextNode?: Maybe<ContentfulPersonShortBioTextNode>;
  allContentfulPersonShortBioTextNode: ContentfulPersonShortBioTextNodeConnection;
  contentfulPerson?: Maybe<ContentfulPerson>;
  allContentfulPerson: ContentfulPersonConnection;
  contentfulBlogPostBodyTextNode?: Maybe<ContentfulBlogPostBodyTextNode>;
  allContentfulBlogPostBodyTextNode: ContentfulBlogPostBodyTextNodeConnection;
  contentfulBlogPostDescriptionTextNode?: Maybe<ContentfulBlogPostDescriptionTextNode>;
  allContentfulBlogPostDescriptionTextNode: ContentfulBlogPostDescriptionTextNodeConnection;
  contentfulBlogPost?: Maybe<ContentfulBlogPost>;
  allContentfulBlogPost: ContentfulBlogPostConnection;
  contentfulContentType?: Maybe<ContentfulContentType>;
  allContentfulContentType: ContentfulContentTypeConnection;
  siteBuildMetadata?: Maybe<SiteBuildMetadata>;
  allSiteBuildMetadata: SiteBuildMetadataConnection;
  sitePlugin?: Maybe<SitePlugin>;
  allSitePlugin: SitePluginConnection;
};


export type QueryFileArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  publicURL?: Maybe<StringQueryOperatorInput>;
  childImageSharp?: Maybe<ImageSharpFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllFileArgs = {
  filter?: Maybe<FileFilterInput>;
  sort?: Maybe<FileSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryDirectoryArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllDirectoryArgs = {
  filter?: Maybe<DirectoryFilterInput>;
  sort?: Maybe<DirectorySortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySitePageArgs = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  context?: Maybe<SitePageContextFilterInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  componentPath?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllSitePageArgs = {
  filter?: Maybe<SitePageFilterInput>;
  sort?: Maybe<SitePageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteArgs = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  port?: Maybe<IntQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSiteArgs = {
  filter?: Maybe<SiteFilterInput>;
  sort?: Maybe<SiteSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryImageSharpArgs = {
  fixed?: Maybe<ImageSharpFixedFilterInput>;
  resolutions?: Maybe<ImageSharpResolutionsFilterInput>;
  fluid?: Maybe<ImageSharpFluidFilterInput>;
  sizes?: Maybe<ImageSharpSizesFilterInput>;
  original?: Maybe<ImageSharpOriginalFilterInput>;
  resize?: Maybe<ImageSharpResizeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllImageSharpArgs = {
  filter?: Maybe<ImageSharpFilterInput>;
  sort?: Maybe<ImageSharpSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryMarkdownRemarkArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  frontmatter?: Maybe<MarkdownRemarkFrontmatterFilterInput>;
  excerpt?: Maybe<StringQueryOperatorInput>;
  rawMarkdownBody?: Maybe<StringQueryOperatorInput>;
  html?: Maybe<StringQueryOperatorInput>;
  htmlAst?: Maybe<JsonQueryOperatorInput>;
  excerptAst?: Maybe<JsonQueryOperatorInput>;
  headings?: Maybe<MarkdownHeadingFilterListInput>;
  timeToRead?: Maybe<IntQueryOperatorInput>;
  tableOfContents?: Maybe<StringQueryOperatorInput>;
  wordCount?: Maybe<MarkdownWordCountFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllMarkdownRemarkArgs = {
  filter?: Maybe<MarkdownRemarkFilterInput>;
  sort?: Maybe<MarkdownRemarkSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulAssetArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  file?: Maybe<ContentfulAssetFileFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  sys?: Maybe<ContentfulAssetSysFilterInput>;
  fixed?: Maybe<ContentfulFixedFilterInput>;
  resolutions?: Maybe<ContentfulResolutionsFilterInput>;
  fluid?: Maybe<ContentfulFluidFilterInput>;
  sizes?: Maybe<ContentfulSizesFilterInput>;
  resize?: Maybe<ContentfulResizeFilterInput>;
};


export type QueryAllContentfulAssetArgs = {
  filter?: Maybe<ContentfulAssetFilterInput>;
  sort?: Maybe<ContentfulAssetSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulCardsContentBodyTextNodeArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  contentBody?: Maybe<StringQueryOperatorInput>;
  childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>;
};


export type QueryAllContentfulCardsContentBodyTextNodeArgs = {
  filter?: Maybe<ContentfulCardsContentBodyTextNodeFilterInput>;
  sort?: Maybe<ContentfulCardsContentBodyTextNodeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulCardsContentRichTextNodeArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  content?: Maybe<StringQueryOperatorInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  json?: Maybe<JsonQueryOperatorInput>;
};


export type QueryAllContentfulCardsContentRichTextNodeArgs = {
  filter?: Maybe<ContentfulCardsContentRichTextNodeFilterInput>;
  sort?: Maybe<ContentfulCardsContentRichTextNodeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulCardsArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  cardImage?: Maybe<ContentfulAssetFilterInput>;
  page?: Maybe<ContentfulPageFilterListInput>;
  content?: Maybe<ContentfulCardsContentRichTextNodeFilterInput>;
  contentBody?: Maybe<ContentfulCardsContentBodyTextNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulCardsSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  childContentfulCardsContentRichTextNode?: Maybe<ContentfulCardsContentRichTextNodeFilterInput>;
  childContentfulCardsContentBodyTextNode?: Maybe<ContentfulCardsContentBodyTextNodeFilterInput>;
};


export type QueryAllContentfulCardsArgs = {
  filter?: Maybe<ContentfulCardsFilterInput>;
  sort?: Maybe<ContentfulCardsSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulNavigationListSortOrderArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  signInButtonLabel?: Maybe<StringQueryOperatorInput>;
  signOutButtonLabel?: Maybe<StringQueryOperatorInput>;
  sortOrder?: Maybe<ContentfulNavigationMenuFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulNavigationListSortOrderSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllContentfulNavigationListSortOrderArgs = {
  filter?: Maybe<ContentfulNavigationListSortOrderFilterInput>;
  sort?: Maybe<ContentfulNavigationListSortOrderSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulBannerAlertsContentRichTextNodeArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  content?: Maybe<StringQueryOperatorInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  json?: Maybe<JsonQueryOperatorInput>;
};


export type QueryAllContentfulBannerAlertsContentRichTextNodeArgs = {
  filter?: Maybe<ContentfulBannerAlertsContentRichTextNodeFilterInput>;
  sort?: Maybe<ContentfulBannerAlertsContentRichTextNodeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulBannerAlertsArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  isEnabled?: Maybe<BooleanQueryOperatorInput>;
  content?: Maybe<ContentfulBannerAlertsContentRichTextNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulBannerAlertsSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  childContentfulBannerAlertsContentRichTextNode?: Maybe<ContentfulBannerAlertsContentRichTextNodeFilterInput>;
};


export type QueryAllContentfulBannerAlertsArgs = {
  filter?: Maybe<ContentfulBannerAlertsFilterInput>;
  sort?: Maybe<ContentfulBannerAlertsSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulPageAdditionalPropertiesJsonNodeArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  heroCopy?: Maybe<StringQueryOperatorInput>;
  headerLabel?: Maybe<StringQueryOperatorInput>;
  subHeaderLabel?: Maybe<StringQueryOperatorInput>;
  headerLine2Label?: Maybe<StringQueryOperatorInput>;
  backgroundImageUrl?: Maybe<StringQueryOperatorInput>;
  contentBodyLabel?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllContentfulPageAdditionalPropertiesJsonNodeArgs = {
  filter?: Maybe<ContentfulPageAdditionalPropertiesJsonNodeFilterInput>;
  sort?: Maybe<ContentfulPageAdditionalPropertiesJsonNodeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulPageContentTextNodeArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  content?: Maybe<StringQueryOperatorInput>;
  childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>;
};


export type QueryAllContentfulPageContentTextNodeArgs = {
  filter?: Maybe<ContentfulPageContentTextNodeFilterInput>;
  sort?: Maybe<ContentfulPageContentTextNodeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulPageArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  appBarTitle?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  heroImages?: Maybe<ContentfulAssetFilterListInput>;
  headerCtAs?: Maybe<ContentfulLinkFilterListInput>;
  cards?: Maybe<ContentfulCardsFilterListInput>;
  content?: Maybe<ContentfulPageContentTextNodeFilterInput>;
  additionalProperties?: Maybe<ContentfulPageAdditionalPropertiesJsonNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulPageSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  subPages?: Maybe<ContentfulLinkFilterListInput>;
  childContentfulPageContentTextNode?: Maybe<ContentfulPageContentTextNodeFilterInput>;
  childContentfulPageAdditionalPropertiesJsonNode?: Maybe<ContentfulPageAdditionalPropertiesJsonNodeFilterInput>;
};


export type QueryAllContentfulPageArgs = {
  filter?: Maybe<ContentfulPageFilterInput>;
  sort?: Maybe<ContentfulPageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulLinkArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  label?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  isExternalLink?: Maybe<BooleanQueryOperatorInput>;
  navigationmenu?: Maybe<ContentfulNavigationMenuFilterListInput>;
  page?: Maybe<ContentfulPageFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulLinkSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllContentfulLinkArgs = {
  filter?: Maybe<ContentfulLinkFilterInput>;
  sort?: Maybe<ContentfulLinkSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulNavigationMenuArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  label?: Maybe<StringQueryOperatorInput>;
  isExternalLink?: Maybe<BooleanQueryOperatorInput>;
  navigationlistsortorder?: Maybe<ContentfulNavigationListSortOrderFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulNavigationMenuSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllContentfulNavigationMenuArgs = {
  filter?: Maybe<ContentfulNavigationMenuFilterInput>;
  sort?: Maybe<ContentfulNavigationMenuSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulPersonShortBioTextNodeArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  shortBio?: Maybe<StringQueryOperatorInput>;
  childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>;
};


export type QueryAllContentfulPersonShortBioTextNodeArgs = {
  filter?: Maybe<ContentfulPersonShortBioTextNodeFilterInput>;
  sort?: Maybe<ContentfulPersonShortBioTextNodeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulPersonArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  company?: Maybe<StringQueryOperatorInput>;
  email?: Maybe<StringQueryOperatorInput>;
  phone?: Maybe<StringQueryOperatorInput>;
  facebook?: Maybe<StringQueryOperatorInput>;
  twitter?: Maybe<StringQueryOperatorInput>;
  github?: Maybe<StringQueryOperatorInput>;
  image?: Maybe<ContentfulAssetFilterInput>;
  blogpost?: Maybe<ContentfulBlogPostFilterListInput>;
  shortBio?: Maybe<ContentfulPersonShortBioTextNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulPersonSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  childContentfulPersonShortBioTextNode?: Maybe<ContentfulPersonShortBioTextNodeFilterInput>;
};


export type QueryAllContentfulPersonArgs = {
  filter?: Maybe<ContentfulPersonFilterInput>;
  sort?: Maybe<ContentfulPersonSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulBlogPostBodyTextNodeArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  body?: Maybe<StringQueryOperatorInput>;
  childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>;
};


export type QueryAllContentfulBlogPostBodyTextNodeArgs = {
  filter?: Maybe<ContentfulBlogPostBodyTextNodeFilterInput>;
  sort?: Maybe<ContentfulBlogPostBodyTextNodeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulBlogPostDescriptionTextNodeArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  description?: Maybe<StringQueryOperatorInput>;
  childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>;
};


export type QueryAllContentfulBlogPostDescriptionTextNodeArgs = {
  filter?: Maybe<ContentfulBlogPostDescriptionTextNodeFilterInput>;
  sort?: Maybe<ContentfulBlogPostDescriptionTextNodeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulBlogPostArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  publishDate?: Maybe<DateQueryOperatorInput>;
  tags?: Maybe<StringQueryOperatorInput>;
  isExternalLink?: Maybe<BooleanQueryOperatorInput>;
  heroImage?: Maybe<ContentfulAssetFilterInput>;
  author?: Maybe<ContentfulPersonFilterInput>;
  description?: Maybe<ContentfulBlogPostDescriptionTextNodeFilterInput>;
  body?: Maybe<ContentfulBlogPostBodyTextNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulBlogPostSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  navigationmenu?: Maybe<ContentfulNavigationMenuFilterListInput>;
  childContentfulBlogPostDescriptionTextNode?: Maybe<ContentfulBlogPostDescriptionTextNodeFilterInput>;
  childContentfulBlogPostBodyTextNode?: Maybe<ContentfulBlogPostBodyTextNodeFilterInput>;
};


export type QueryAllContentfulBlogPostArgs = {
  filter?: Maybe<ContentfulBlogPostFilterInput>;
  sort?: Maybe<ContentfulBlogPostSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulContentTypeArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  displayField?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllContentfulContentTypeArgs = {
  filter?: Maybe<ContentfulContentTypeFilterInput>;
  sort?: Maybe<ContentfulContentTypeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteBuildMetadataArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};


export type QueryAllSiteBuildMetadataArgs = {
  filter?: Maybe<SiteBuildMetadataFilterInput>;
  sort?: Maybe<SiteBuildMetadataSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySitePluginArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};


export type QueryAllSitePluginArgs = {
  filter?: Maybe<SitePluginFilterInput>;
  sort?: Maybe<SitePluginSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type Site = Node & {
  buildTime?: Maybe<Scalars['Date']>;
  siteMetadata?: Maybe<SiteSiteMetadata>;
  port?: Maybe<Scalars['Int']>;
  host?: Maybe<Scalars['String']>;
  polyfill?: Maybe<Scalars['Boolean']>;
  pathPrefix?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SiteBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadata = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  buildTime?: Maybe<Scalars['Date']>;
};


export type SiteBuildMetadataBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadataConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SiteBuildMetadataGroupConnection>;
};


export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataEdge = {
  next?: Maybe<SiteBuildMetadata>;
  node: SiteBuildMetadata;
  previous?: Maybe<SiteBuildMetadata>;
};

export type SiteBuildMetadataFieldsEnum =
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'buildTime';

export type SiteBuildMetadataFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};

export type SiteBuildMetadataGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadataSortInput = {
  fields?: Maybe<Array<Maybe<SiteBuildMetadataFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SiteGroupConnection>;
};


export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

export type SiteEdge = {
  next?: Maybe<Site>;
  node: Site;
  previous?: Maybe<Site>;
};

export type SiteFieldsEnum =
  | 'buildTime'
  | 'siteMetadata___title'
  | 'siteMetadata___description'
  | 'siteMetadata___author'
  | 'siteMetadata___url'
  | 'siteMetadata___siteUrl'
  | 'siteMetadata___keywords'
  | 'siteMetadata___image'
  | 'siteMetadata___version'
  | 'port'
  | 'host'
  | 'polyfill'
  | 'pathPrefix'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SiteFilterInput = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  port?: Maybe<IntQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SiteGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePage = Node & {
  path: Scalars['String'];
  component: Scalars['String'];
  internalComponentName: Scalars['String'];
  componentChunkName: Scalars['String'];
  matchPath?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  isCreatedByStatefulCreatePages?: Maybe<Scalars['Boolean']>;
  context?: Maybe<SitePageContext>;
  pluginCreator?: Maybe<SitePlugin>;
  pluginCreatorId?: Maybe<Scalars['String']>;
  componentPath?: Maybe<Scalars['String']>;
};

export type SitePageConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SitePageGroupConnection>;
};


export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

export type SitePageContext = {
  slug?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
};

export type SitePageContextFilterInput = {
  slug?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
};

export type SitePageEdge = {
  next?: Maybe<SitePage>;
  node: SitePage;
  previous?: Maybe<SitePage>;
};

export type SitePageFieldsEnum =
  | 'path'
  | 'component'
  | 'internalComponentName'
  | 'componentChunkName'
  | 'matchPath'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'isCreatedByStatefulCreatePages'
  | 'context___slug'
  | 'context___contentful_id'
  | 'pluginCreator___id'
  | 'pluginCreator___parent___id'
  | 'pluginCreator___parent___parent___id'
  | 'pluginCreator___parent___parent___children'
  | 'pluginCreator___parent___children'
  | 'pluginCreator___parent___children___id'
  | 'pluginCreator___parent___children___children'
  | 'pluginCreator___parent___internal___content'
  | 'pluginCreator___parent___internal___contentDigest'
  | 'pluginCreator___parent___internal___description'
  | 'pluginCreator___parent___internal___fieldOwners'
  | 'pluginCreator___parent___internal___ignoreType'
  | 'pluginCreator___parent___internal___mediaType'
  | 'pluginCreator___parent___internal___owner'
  | 'pluginCreator___parent___internal___type'
  | 'pluginCreator___children'
  | 'pluginCreator___children___id'
  | 'pluginCreator___children___parent___id'
  | 'pluginCreator___children___parent___children'
  | 'pluginCreator___children___children'
  | 'pluginCreator___children___children___id'
  | 'pluginCreator___children___children___children'
  | 'pluginCreator___children___internal___content'
  | 'pluginCreator___children___internal___contentDigest'
  | 'pluginCreator___children___internal___description'
  | 'pluginCreator___children___internal___fieldOwners'
  | 'pluginCreator___children___internal___ignoreType'
  | 'pluginCreator___children___internal___mediaType'
  | 'pluginCreator___children___internal___owner'
  | 'pluginCreator___children___internal___type'
  | 'pluginCreator___internal___content'
  | 'pluginCreator___internal___contentDigest'
  | 'pluginCreator___internal___description'
  | 'pluginCreator___internal___fieldOwners'
  | 'pluginCreator___internal___ignoreType'
  | 'pluginCreator___internal___mediaType'
  | 'pluginCreator___internal___owner'
  | 'pluginCreator___internal___type'
  | 'pluginCreator___resolve'
  | 'pluginCreator___name'
  | 'pluginCreator___version'
  | 'pluginCreator___pluginOptions___path'
  | 'pluginCreator___pluginOptions___name'
  | 'pluginCreator___pluginOptions___stylesProvider___injectFirst'
  | 'pluginCreator___pluginOptions___disableAutoprefixing'
  | 'pluginCreator___pluginOptions___disableMinification'
  | 'pluginCreator___pluginOptions___short_name'
  | 'pluginCreator___pluginOptions___description'
  | 'pluginCreator___pluginOptions___start_url'
  | 'pluginCreator___pluginOptions___background_color'
  | 'pluginCreator___pluginOptions___theme_color'
  | 'pluginCreator___pluginOptions___display'
  | 'pluginCreator___pluginOptions___icon'
  | 'pluginCreator___pluginOptions___icons'
  | 'pluginCreator___pluginOptions___icons___src'
  | 'pluginCreator___pluginOptions___icons___sizes'
  | 'pluginCreator___pluginOptions___icons___types'
  | 'pluginCreator___pluginOptions___cache_busting_mode'
  | 'pluginCreator___pluginOptions___include_favicon'
  | 'pluginCreator___pluginOptions___legacy'
  | 'pluginCreator___pluginOptions___theme_color_in_head'
  | 'pluginCreator___pluginOptions___cacheDigest'
  | 'pluginCreator___pluginOptions___policy'
  | 'pluginCreator___pluginOptions___policy___userAgent'
  | 'pluginCreator___pluginOptions___policy___disallow'
  | 'pluginCreator___pluginOptions___spaceId'
  | 'pluginCreator___pluginOptions___accessToken'
  | 'pluginCreator___pluginOptions___host'
  | 'pluginCreator___pluginOptions___environment'
  | 'pluginCreator___pluginOptions___useNameForId'
  | 'pluginCreator___pluginOptions___headers____x'
  | 'pluginCreator___pluginOptions___mergeSecurityHeaders'
  | 'pluginCreator___pluginOptions___mergeLinkHeaders'
  | 'pluginCreator___pluginOptions___mergeCachingHeaders'
  | 'pluginCreator___pluginOptions___generateMatchPathRewrites'
  | 'pluginCreator___pluginOptions___pathCheck'
  | 'pluginCreator___nodeAPIs'
  | 'pluginCreator___browserAPIs'
  | 'pluginCreator___ssrAPIs'
  | 'pluginCreator___pluginFilepath'
  | 'pluginCreator___packageJson___name'
  | 'pluginCreator___packageJson___description'
  | 'pluginCreator___packageJson___version'
  | 'pluginCreator___packageJson___main'
  | 'pluginCreator___packageJson___license'
  | 'pluginCreator___packageJson___dependencies'
  | 'pluginCreator___packageJson___dependencies___name'
  | 'pluginCreator___packageJson___dependencies___version'
  | 'pluginCreator___packageJson___devDependencies'
  | 'pluginCreator___packageJson___devDependencies___name'
  | 'pluginCreator___packageJson___devDependencies___version'
  | 'pluginCreator___packageJson___peerDependencies'
  | 'pluginCreator___packageJson___peerDependencies___name'
  | 'pluginCreator___packageJson___peerDependencies___version'
  | 'pluginCreator___packageJson___keywords'
  | 'pluginCreatorId'
  | 'componentPath';

export type SitePageFilterInput = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  context?: Maybe<SitePageContextFilterInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  componentPath?: Maybe<StringQueryOperatorInput>;
};

export type SitePageGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePageSortInput = {
  fields?: Maybe<Array<Maybe<SitePageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SitePlugin = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  resolve?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  pluginOptions?: Maybe<SitePluginPluginOptions>;
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  pluginFilepath?: Maybe<Scalars['String']>;
  packageJson?: Maybe<SitePluginPackageJson>;
};

export type SitePluginConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SitePluginGroupConnection>;
};


export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

export type SitePluginEdge = {
  next?: Maybe<SitePlugin>;
  node: SitePlugin;
  previous?: Maybe<SitePlugin>;
};

export type SitePluginFieldsEnum =
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'resolve'
  | 'name'
  | 'version'
  | 'pluginOptions___path'
  | 'pluginOptions___name'
  | 'pluginOptions___stylesProvider___injectFirst'
  | 'pluginOptions___disableAutoprefixing'
  | 'pluginOptions___disableMinification'
  | 'pluginOptions___short_name'
  | 'pluginOptions___description'
  | 'pluginOptions___start_url'
  | 'pluginOptions___background_color'
  | 'pluginOptions___theme_color'
  | 'pluginOptions___display'
  | 'pluginOptions___icon'
  | 'pluginOptions___icons'
  | 'pluginOptions___icons___src'
  | 'pluginOptions___icons___sizes'
  | 'pluginOptions___icons___types'
  | 'pluginOptions___cache_busting_mode'
  | 'pluginOptions___include_favicon'
  | 'pluginOptions___legacy'
  | 'pluginOptions___theme_color_in_head'
  | 'pluginOptions___cacheDigest'
  | 'pluginOptions___policy'
  | 'pluginOptions___policy___userAgent'
  | 'pluginOptions___policy___disallow'
  | 'pluginOptions___spaceId'
  | 'pluginOptions___accessToken'
  | 'pluginOptions___host'
  | 'pluginOptions___environment'
  | 'pluginOptions___useNameForId'
  | 'pluginOptions___headers____x'
  | 'pluginOptions___mergeSecurityHeaders'
  | 'pluginOptions___mergeLinkHeaders'
  | 'pluginOptions___mergeCachingHeaders'
  | 'pluginOptions___generateMatchPathRewrites'
  | 'pluginOptions___pathCheck'
  | 'nodeAPIs'
  | 'browserAPIs'
  | 'ssrAPIs'
  | 'pluginFilepath'
  | 'packageJson___name'
  | 'packageJson___description'
  | 'packageJson___version'
  | 'packageJson___main'
  | 'packageJson___license'
  | 'packageJson___dependencies'
  | 'packageJson___dependencies___name'
  | 'packageJson___dependencies___version'
  | 'packageJson___devDependencies'
  | 'packageJson___devDependencies___name'
  | 'packageJson___devDependencies___version'
  | 'packageJson___peerDependencies'
  | 'packageJson___peerDependencies___name'
  | 'packageJson___peerDependencies___version'
  | 'packageJson___keywords';

export type SitePluginFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};

export type SitePluginGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJson = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  main?: Maybe<Scalars['String']>;
  license?: Maybe<Scalars['String']>;
  dependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDependencies>>>;
  devDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDevDependencies>>>;
  peerDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonPeerDependencies>>>;
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPackageJsonDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDependenciesFilterInput>;
};

export type SitePluginPackageJsonDevDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDevDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>;
};

export type SitePluginPackageJsonFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  main?: Maybe<StringQueryOperatorInput>;
  license?: Maybe<StringQueryOperatorInput>;
  dependencies?: Maybe<SitePluginPackageJsonDependenciesFilterListInput>;
  devDependencies?: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>;
  peerDependencies?: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>;
  keywords?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>;
};

export type SitePluginPluginOptions = {
  path?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  stylesProvider?: Maybe<SitePluginPluginOptionsStylesProvider>;
  disableAutoprefixing?: Maybe<Scalars['Boolean']>;
  disableMinification?: Maybe<Scalars['Boolean']>;
  short_name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  start_url?: Maybe<Scalars['String']>;
  background_color?: Maybe<Scalars['String']>;
  theme_color?: Maybe<Scalars['String']>;
  display?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  icons?: Maybe<Array<Maybe<SitePluginPluginOptionsIcons>>>;
  cache_busting_mode?: Maybe<Scalars['String']>;
  include_favicon?: Maybe<Scalars['Boolean']>;
  legacy?: Maybe<Scalars['Boolean']>;
  theme_color_in_head?: Maybe<Scalars['Boolean']>;
  cacheDigest?: Maybe<Scalars['String']>;
  policy?: Maybe<Array<Maybe<SitePluginPluginOptionsPolicy>>>;
  spaceId?: Maybe<Scalars['String']>;
  accessToken?: Maybe<Scalars['String']>;
  host?: Maybe<Scalars['String']>;
  environment?: Maybe<Scalars['String']>;
  useNameForId?: Maybe<Scalars['Boolean']>;
  headers?: Maybe<SitePluginPluginOptionsHeaders>;
  mergeSecurityHeaders?: Maybe<Scalars['Boolean']>;
  mergeLinkHeaders?: Maybe<Scalars['Boolean']>;
  mergeCachingHeaders?: Maybe<Scalars['Boolean']>;
  generateMatchPathRewrites?: Maybe<Scalars['Boolean']>;
  pathCheck?: Maybe<Scalars['Boolean']>;
};

export type SitePluginPluginOptionsFilterInput = {
  path?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  stylesProvider?: Maybe<SitePluginPluginOptionsStylesProviderFilterInput>;
  disableAutoprefixing?: Maybe<BooleanQueryOperatorInput>;
  disableMinification?: Maybe<BooleanQueryOperatorInput>;
  short_name?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  start_url?: Maybe<StringQueryOperatorInput>;
  background_color?: Maybe<StringQueryOperatorInput>;
  theme_color?: Maybe<StringQueryOperatorInput>;
  display?: Maybe<StringQueryOperatorInput>;
  icon?: Maybe<StringQueryOperatorInput>;
  icons?: Maybe<SitePluginPluginOptionsIconsFilterListInput>;
  cache_busting_mode?: Maybe<StringQueryOperatorInput>;
  include_favicon?: Maybe<BooleanQueryOperatorInput>;
  legacy?: Maybe<BooleanQueryOperatorInput>;
  theme_color_in_head?: Maybe<BooleanQueryOperatorInput>;
  cacheDigest?: Maybe<StringQueryOperatorInput>;
  policy?: Maybe<SitePluginPluginOptionsPolicyFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  accessToken?: Maybe<StringQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  environment?: Maybe<StringQueryOperatorInput>;
  useNameForId?: Maybe<BooleanQueryOperatorInput>;
  headers?: Maybe<SitePluginPluginOptionsHeadersFilterInput>;
  mergeSecurityHeaders?: Maybe<BooleanQueryOperatorInput>;
  mergeLinkHeaders?: Maybe<BooleanQueryOperatorInput>;
  mergeCachingHeaders?: Maybe<BooleanQueryOperatorInput>;
  generateMatchPathRewrites?: Maybe<BooleanQueryOperatorInput>;
  pathCheck?: Maybe<BooleanQueryOperatorInput>;
};

export type SitePluginPluginOptionsHeaders = {
  _x?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPluginOptionsHeadersFilterInput = {
  _x?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsIcons = {
  src?: Maybe<Scalars['String']>;
  sizes?: Maybe<Scalars['String']>;
  types?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsIconsFilterInput = {
  src?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
  types?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsIconsFilterListInput = {
  elemMatch?: Maybe<SitePluginPluginOptionsIconsFilterInput>;
};

export type SitePluginPluginOptionsPolicy = {
  userAgent?: Maybe<Scalars['String']>;
  disallow?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPolicyFilterInput = {
  userAgent?: Maybe<StringQueryOperatorInput>;
  disallow?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPolicyFilterListInput = {
  elemMatch?: Maybe<SitePluginPluginOptionsPolicyFilterInput>;
};

export type SitePluginPluginOptionsStylesProvider = {
  injectFirst?: Maybe<Scalars['Boolean']>;
};

export type SitePluginPluginOptionsStylesProviderFilterInput = {
  injectFirst?: Maybe<BooleanQueryOperatorInput>;
};

export type SitePluginSortInput = {
  fields?: Maybe<Array<Maybe<SitePluginFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteSiteMetadata = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  siteUrl?: Maybe<Scalars['String']>;
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
  image?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SiteSiteMetadataFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  author?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  siteUrl?: Maybe<StringQueryOperatorInput>;
  keywords?: Maybe<StringQueryOperatorInput>;
  image?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SiteSortInput = {
  fields?: Maybe<Array<Maybe<SiteFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SortOrderEnum =
  | 'ASC'
  | 'DESC';

export type StringQueryOperatorInput = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
};

export type Unnamed_1_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_1_Query = { site?: Maybe<{ siteMetadata?: Maybe<Pick<SiteSiteMetadata, 'title' | 'description' | 'author' | 'url' | 'keywords' | 'image'>> }> };

export type LandingPageQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type LandingPageQueryQuery = { allContentfulPage: { edges: Array<{ node: (
        Pick<ContentfulPage, 'title' | 'slug' | 'appBarTitle'>
        & { additionalProperties?: Maybe<Pick<ContentfulPageAdditionalPropertiesJsonNode, 'headerLabel' | 'headerLine2Label' | 'heroCopy' | 'subHeaderLabel'>>, headerCtAs?: Maybe<Array<Maybe<Pick<ContentfulLink, 'isExternalLink' | 'label' | 'url'>>>>, heroImages?: Maybe<Array<Maybe<{ fluid?: Maybe<GatsbyContentfulFluid_TracedSvgFragment> }>>>, content?: Maybe<(
          Pick<ContentfulPageContentTextNode, 'content'>
          & { childMarkdownRemark?: Maybe<Pick<MarkdownRemark, 'html'>> }
        )>, cards?: Maybe<Array<Maybe<(
          Pick<ContentfulCards, 'title'>
          & { contentBody?: Maybe<(
            Pick<ContentfulCardsContentBodyTextNode, 'contentBody'>
            & { childMarkdownRemark?: Maybe<Pick<MarkdownRemark, 'html'>> }
          )>, cardImage?: Maybe<(
            Pick<ContentfulAsset, 'title'>
            & { fluid?: Maybe<GatsbyContentfulFluid_TracedSvgFragment> }
          )> }
        )>>> }
      ) }> } };

export type NavQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type NavQueryQuery = { file?: Maybe<{ childImageSharp?: Maybe<{ fixed?: Maybe<GatsbyImageSharpFixedFragment> }> }>, allContentfulNavigationListSortOrder: { edges: Array<{ node: (
        Pick<ContentfulNavigationListSortOrder, 'id' | 'title' | 'signInButtonLabel' | 'signOutButtonLabel'>
        & { sortOrder?: Maybe<Array<Maybe<(
          Pick<ContentfulNavigationMenu, 'label' | 'slug' | 'url' | 'isExternalLink'>
          & { menuItems?: Maybe<Array<Maybe<(
            Pick<ContentfulBlogPost, 'slug' | 'url'>
            & { label: ContentfulBlogPost['title'] }
          ) | Pick<ContentfulLink, 'slug' | 'url' | 'label' | 'isExternalLink'>>>> }
        )>>> }
      ) }> } };

export type NewsIndexQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type NewsIndexQueryQuery = { allContentfulPage: { edges: Array<{ node: (
        Pick<ContentfulPage, 'title' | 'slug' | 'appBarTitle'>
        & { additionalProperties?: Maybe<Pick<ContentfulPageAdditionalPropertiesJsonNode, 'headerLabel' | 'contentBodyLabel'>> }
      ) }> }, allContentfulBlogPost: { edges: Array<{ node: (
        Pick<ContentfulBlogPost, 'title' | 'slug' | 'publishDate' | 'tags'>
        & { heroImage?: Maybe<{ fluid?: Maybe<GatsbyContentfulFluid_TracedSvgFragment> }>, description?: Maybe<{ childMarkdownRemark?: Maybe<Pick<MarkdownRemark, 'html'>> }> }
      ) }> } };

export type SignInPageQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type SignInPageQueryQuery = { allContentfulPage: { edges: Array<{ node: (
        Pick<ContentfulPage, 'appBarTitle' | 'title'>
        & { additionalProperties?: Maybe<Pick<ContentfulPageAdditionalPropertiesJsonNode, 'backgroundImageUrl'>>, heroImages?: Maybe<Array<Maybe<Pick<ContentfulAsset, 'title'>>>> }
      ) }> } };

export type SiteMetaDataQueryVariables = Exact<{ [key: string]: never; }>;


export type SiteMetaDataQuery = { site?: Maybe<{ siteMetadata?: Maybe<Pick<SiteSiteMetadata, 'title' | 'siteUrl' | 'description' | 'image'>> }> };

export type Unnamed_2_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_2_Query = { site?: Maybe<{ siteMetadata?: Maybe<Pick<SiteSiteMetadata, 'version'>> }> };

export type NewsPostBySlugQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type NewsPostBySlugQuery = { contentfulBlogPost?: Maybe<(
    Pick<ContentfulBlogPost, 'title' | 'publishDate'>
    & { heroImage?: Maybe<{ fluid?: Maybe<GatsbyContentfulFluid_TracedSvgFragment> }>, body?: Maybe<{ childMarkdownRemark?: Maybe<Pick<MarkdownRemark, 'html'>> }> }
  )> };

export type GatsbyContentfulFixedFragment = Pick<ContentfulFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyContentfulFixed_TracedSvgFragment = Pick<ContentfulFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyContentfulFixed_NoBase64Fragment = Pick<ContentfulFixed, 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyContentfulFixed_WithWebpFragment = Pick<ContentfulFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyContentfulFixed_WithWebp_NoBase64Fragment = Pick<ContentfulFixed, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyContentfulFluidFragment = Pick<ContentfulFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyContentfulFluid_TracedSvgFragment = Pick<ContentfulFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyContentfulFluid_NoBase64Fragment = Pick<ContentfulFluid, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyContentfulFluid_WithWebpFragment = Pick<ContentfulFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyContentfulFluid_WithWebp_NoBase64Fragment = Pick<ContentfulFluid, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyContentfulResolutionsFragment = Pick<ContentfulResolutions, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyContentfulResolutions_TracedSvgFragment = Pick<ContentfulResolutions, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyContentfulResolutions_NoBase64Fragment = Pick<ContentfulResolutions, 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyContentfulResolutions_WithWebpFragment = Pick<ContentfulResolutions, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyContentfulResolutions_WithWebp_NoBase64Fragment = Pick<ContentfulResolutions, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyContentfulSizesFragment = Pick<ContentfulSizes, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyContentfulSizes_TracedSvgFragment = Pick<ContentfulSizes, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyContentfulSizes_NoBase64Fragment = Pick<ContentfulSizes, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyContentfulSizes_WithWebpFragment = Pick<ContentfulSizes, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyContentfulSizes_WithWebp_NoBase64Fragment = Pick<ContentfulSizes, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyImageSharpFixedFragment = Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpFixed_TracedSvgFragment = Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpFixed_WithWebpFragment = Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpFixed_WithWebp_TracedSvgFragment = Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpFixed_NoBase64Fragment = Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpFixed_WithWebp_NoBase64Fragment = Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpFluidFragment = Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpFluidLimitPresentationSizeFragment = { maxHeight: ImageSharpFluid['presentationHeight'], maxWidth: ImageSharpFluid['presentationWidth'] };

export type GatsbyImageSharpFluid_TracedSvgFragment = Pick<ImageSharpFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpFluid_WithWebpFragment = Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyImageSharpFluid_WithWebp_TracedSvgFragment = Pick<ImageSharpFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyImageSharpFluid_NoBase64Fragment = Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpFluid_WithWebp_NoBase64Fragment = Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyImageSharpResolutionsFragment = Pick<ImageSharpResolutions, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpResolutions_TracedSvgFragment = Pick<ImageSharpResolutions, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpResolutions_WithWebpFragment = Pick<ImageSharpResolutions, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpResolutions_WithWebp_TracedSvgFragment = Pick<ImageSharpResolutions, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpResolutions_NoBase64Fragment = Pick<ImageSharpResolutions, 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpResolutions_WithWebp_NoBase64Fragment = Pick<ImageSharpResolutions, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpSizesFragment = Pick<ImageSharpSizes, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpSizes_TracedSvgFragment = Pick<ImageSharpSizes, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpSizes_WithWebpFragment = Pick<ImageSharpSizes, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyImageSharpSizes_WithWebp_TracedSvgFragment = Pick<ImageSharpSizes, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyImageSharpSizes_NoBase64Fragment = Pick<ImageSharpSizes, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpSizes_WithWebp_NoBase64Fragment = Pick<ImageSharpSizes, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;
