'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useSyncExternalStore } from 'react';
import { getActivePreviewFormId } from '@/lib/preview-path';

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
    const formId = getActivePreviewFormId(searchParams, hash, pathname);
    if (formId) {
      selectPreviewForm(formId);
    }
  }, [searchParams, hash, pathname]);

  return null;
}
