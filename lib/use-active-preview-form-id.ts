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

export function useActivePreviewFormId(): string | null {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const hash = useSyncExternalStore(subscribeToHash, getHash, () => '');

  const activeFormId = getActivePreviewFormId(searchParams, hash, pathname);

  useEffect(() => {
    // #region agent log
    fetch('http://127.0.0.1:7310/ingest/c4db365b-e961-468a-ac35-40eab15a1a76',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'3c9f59'},body:JSON.stringify({sessionId:'3c9f59',location:'use-active-preview-form-id.ts',message:'resolved active form from URL',data:{activeFormId,pathname,hash,href:window.location.href},timestamp:Date.now(),hypothesisId:'F,G',runId:'post-fix-2'})}).catch(()=>{});
    // #endregion
  }, [activeFormId, pathname, hash]);

  return activeFormId;
}
