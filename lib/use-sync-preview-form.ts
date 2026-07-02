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

export function useSyncPreviewForm(): string | null {
  const pathname = usePathname();
  const { hash, search } = useBrowserLocation();

  const activeFormId = getActivePreviewFormId(
    locationSearchParams(search),
    hash,
    pathname
  );

  useEffect(() => {
    if (activeFormId) {
      selectPreviewForm(activeFormId);
    }
  }, [activeFormId]);

  return activeFormId;
}
