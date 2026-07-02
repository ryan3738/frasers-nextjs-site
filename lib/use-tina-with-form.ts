'use client';

import { useEffect } from 'react';
import { useTina } from 'tinacms/dist/react';
import { TinaPayload } from '@/lib/tina-page-props';

interface UseTinaWithFormOptions {
  formId?: string;
}

export function useTinaWithForm<T extends object>(
  payload: TinaPayload<T>,
  options?: UseTinaWithFormOptions
) {
  const relativePath = (payload.variables as { relativePath?: string })
    ?.relativePath;

  useEffect(() => {
    // #region agent log
    fetch('http://127.0.0.1:7310/ingest/c4db365b-e961-468a-ac35-40eab15a1a76',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'3c9f59'},body:JSON.stringify({sessionId:'3c9f59',location:'use-tina-with-form.ts:mount',message:'useTina hook mounted',data:{relativePath,formId:options?.formId,variables:payload.variables,href:window.location.href},timestamp:Date.now(),hypothesisId:'C',runId:'post-fix'})}).catch(()=>{});
    // #endregion
  }, [relativePath, options?.formId, payload.variables]);

  return useTina({
    ...payload,
    ...(options?.formId
      ? {
          experimental___selectFormByFormId: () => options.formId!
        }
      : {})
  });
}
