export const PREVIEW_FORM_PARAM = 'tinaForm';
export const HIGHLIGHT_PREVIEW_PATH_PREFIX = '/cms/highlight';
export const CMS_GALLERY_PATH = '/cms/gallery';
export const CMS_BUSINESS_PATH = '/cms/business';
export const CMS_GLOBAL_PATH = '/cms/global';

export function formIdFromCollectionPath(
  collectionPath: string,
  relativePath: string
): string {
  return `${collectionPath}/${relativePath}`;
}

export const GALLERY_FORM_ID = formIdFromCollectionPath(
  'content/gallery',
  'galleryGrid.json'
);
export const BUSINESS_INFO_FORM_ID = formIdFromCollectionPath(
  'content/info',
  'businessInfo.json'
);
export const GLOBAL_FORM_ID = formIdFromCollectionPath(
  'content/global',
  'index.json'
);
export const MENU_FORM_ID = formIdFromCollectionPath(
  'content/menus',
  'dinnerMenu.json'
);

export function previewPathWithForm(formId: string, path = '/'): string {
  return `${path}#${PREVIEW_FORM_PARAM}=${encodeURIComponent(formId)}`;
}

export function formIdFromHighlightFilename(filename: string): string {
  return formIdFromCollectionPath('content/highlight', `${filename}.mdx`);
}

export function highlightPreviewPath(filename: string): string {
  return `${HIGHLIGHT_PREVIEW_PATH_PREFIX}/${filename}`;
}

export function galleryPreviewPath(): string {
  return CMS_GALLERY_PATH;
}

export function businessPreviewPath(): string {
  return CMS_BUSINESS_PATH;
}

export function globalPreviewPath(): string {
  return CMS_GLOBAL_PATH;
}

export function getActivePreviewFormId(
  searchParams: { get: (key: string) => string | null } | null,
  hash: string,
  pathname?: string | null
): string | null {
  if (pathname) {
    const highlightMatch = pathname.match(/^\/cms\/highlight\/([^/]+)$/);
    if (highlightMatch?.[1]) {
      return formIdFromHighlightFilename(highlightMatch[1]);
    }

    if (pathname === CMS_GALLERY_PATH) {
      return GALLERY_FORM_ID;
    }

    if (pathname === CMS_BUSINESS_PATH) {
      return BUSINESS_INFO_FORM_ID;
    }

    if (pathname === CMS_GLOBAL_PATH) {
      return GLOBAL_FORM_ID;
    }
  }

  const fromSearch = searchParams?.get(PREVIEW_FORM_PARAM);
  if (fromSearch) {
    return fromSearch;
  }

  if (!hash || hash === '#') {
    return null;
  }

  const hashParams = new URLSearchParams(hash.replace(/^#/, ''));
  return hashParams.get(PREVIEW_FORM_PARAM);
}
