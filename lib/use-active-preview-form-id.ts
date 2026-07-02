'use client';

import { usePathname } from 'next/navigation';
import { getActivePreviewFormId } from '@/lib/preview-path';
import {
  locationSearchParams,
  useBrowserLocation
} from '@/lib/use-browser-location';

export function useActivePreviewFormId(): string | null {
  const pathname = usePathname();
  const { hash, search } = useBrowserLocation();

  return getActivePreviewFormId(locationSearchParams(search), hash, pathname);
}
