'use client';

import { useTina } from 'tinacms/dist/react';
import { TinaPayload } from '@/lib/tina-page-props';

interface UseTinaWithFormOptions {
  formId?: string;
}

export function useTinaWithForm<T extends object>(
  payload: TinaPayload<T>,
  options?: UseTinaWithFormOptions
) {
  return useTina({
    ...payload,
    ...(options?.formId
      ? {
          experimental___selectFormByFormId: () => options.formId!
        }
      : {})
  });
}
