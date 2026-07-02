'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useSyncExternalStore } from 'react';
import { getActivePreviewFormId } from '@/lib/preview-path';

function subscribeToHash(callback: () => void) {
  window.addEventListener('hashchange', callback);
  return () => window.removeEventListener('hashchange', callback);
}

function getHash() {
  return window.location.hash;
}

export function useActivePreviewFormId(): string | null {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const hash = useSyncExternalStore(subscribeToHash, getHash, () => '');

  return getActivePreviewFormId(searchParams, hash, pathname);
}
