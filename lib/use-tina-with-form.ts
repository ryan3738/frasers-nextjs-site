'use client';

import { useTina } from 'tinacms/dist/react';
import { TinaPayload } from '@/lib/tina-page-props';

interface UseTinaWithFormOptions {
  formId?: string;
  selectForm?: boolean;
}

export function useTinaWithForm<T extends object>(
  payload: TinaPayload<T>,
  options?: UseTinaWithFormOptions
) {
  const selectForm = options?.selectForm ?? false;
  const formId = options?.formId;

  return useTina({
    ...payload,
    ...(selectForm && formId
      ? {
          experimental___selectFormByFormId: () => formId
        }
      : {})
  });
}
