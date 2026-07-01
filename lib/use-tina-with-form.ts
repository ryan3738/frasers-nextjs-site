'use client';

import { useTina } from 'tinacms/dist/react';
import { TinaPayload } from '@/lib/tina-page-props';

export function useTinaWithForm<T extends object>(payload: TinaPayload<T>) {
  return useTina(payload);
}
