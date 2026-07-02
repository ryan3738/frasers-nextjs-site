'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { getActivePreviewFormId } from '@/lib/preview-path';
import {
  locationSearchParams,
  useBrowserLocation
} from '@/lib/use-browser-location';

function selectPreviewForm(formId: string) {
  parent.postMessage(
    { type: 'user-select-form', formId },
    window.location.origin
  );
}

export function PreviewFormSelector() {
  const pathname = usePathname();
  const { hash, search } = useBrowserLocation();

  useEffect(() => {
    const formId = getActivePreviewFormId(
      locationSearchParams(search),
      hash,
      pathname
    );
    if (formId) {
      selectPreviewForm(formId);
    }
  }, [search, hash, pathname]);

  return null;
}
