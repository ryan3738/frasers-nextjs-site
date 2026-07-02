'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useSyncExternalStore } from 'react';

export const PREVIEW_FORM_PARAM = 'tinaForm';

const PATH_FORM_MAP: Record<string, string> = {
  '/menu': 'content/menus/dinnerMenu.json',
  '/menu/new-years': 'content/menus/newYears.json'
};

const HASH_FORM_MAP: Record<string, string> = {
  '#welcome': 'content/info/businessInfo.json',
  '#about': 'content/highlight/aboutBusiness.mdx',
  '#menu': 'content/menus/dinnerMenu.json',
  '#gallery': 'content/gallery/galleryGrid.json',
  '#contact': 'content/info/businessInfo.json'
};

const HOME_DEFAULT_FORM = 'content/info/businessInfo.json';

function subscribeToHash(callback: () => void) {
  window.addEventListener('hashchange', callback);
  return () => window.removeEventListener('hashchange', callback);
}

function getHash() {
  return window.location.hash;
}

function selectPreviewForm(formId: string) {
  parent.postMessage(
    { type: 'user-select-form', formId },
    window.location.origin
  );
}

export function PreviewFormSelector() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const hash = useSyncExternalStore(subscribeToHash, getHash, () => '');

  useEffect(() => {
    const formIdFromParam = searchParams?.get(PREVIEW_FORM_PARAM);
    if (formIdFromParam) {
      selectPreviewForm(formIdFromParam);
      return;
    }

    const pathFormId = pathname ? PATH_FORM_MAP[pathname] : undefined;
    if (pathFormId) {
      selectPreviewForm(pathFormId);
      return;
    }

    if (pathname === '/') {
      const hashFormId = HASH_FORM_MAP[hash] ?? HOME_DEFAULT_FORM;
      selectPreviewForm(hashFormId);
    }
  }, [pathname, hash, searchParams]);

  return null;
}
