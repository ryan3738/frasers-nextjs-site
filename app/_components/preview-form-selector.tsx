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
  // #region agent log
  fetch('http://127.0.0.1:7310/ingest/c4db365b-e961-468a-ac35-40eab15a1a76',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'3c9f59'},body:JSON.stringify({sessionId:'3c9f59',location:'preview-form-selector.tsx:selectPreviewForm',message:'posting user-select-form',data:{formId,href:typeof window!=='undefined'?window.location.href:null},timestamp:Date.now(),hypothesisId:'D',runId:'post-fix-2'})}).catch(()=>{});
  // #endregion
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
    // #region agent log
    fetch('http://127.0.0.1:7310/ingest/c4db365b-e961-468a-ac35-40eab15a1a76',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'3c9f59'},body:JSON.stringify({sessionId:'3c9f59',location:'preview-form-selector.tsx:useEffect',message:'preview URL parsed',data:{formId,pathname,hash,href:window.location.href},timestamp:Date.now(),hypothesisId:'F,G',runId:'post-fix-2'})}).catch(()=>{});
    // #endregion
    if (formId) {
      selectPreviewForm(formId);
    }
  }, [searchParams, hash, pathname]);

  return null;
}
