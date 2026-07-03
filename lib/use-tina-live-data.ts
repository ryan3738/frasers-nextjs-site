'use client';

import { TinaPayload } from '@/lib/tina-page-props';
import { useTinaWithForm } from '@/lib/use-tina-with-form';

export function useTinaLiveData<T extends object>(
  payload: TinaPayload<T>,
  formId: string,
  selectForm: boolean
): T {
  const { data } = useTinaWithForm(payload, { formId, selectForm });
  return data;
}
