'use client';

import { useEditState } from 'tinacms/dist/react';
import { TinaPayload } from '@/lib/tina-page-props';
import { useTinaLiveData } from '@/lib/use-tina-live-data';

interface TinaLiveProps<T extends object> {
  payload: TinaPayload<T>;
  formId: string;
  enabled: boolean;
  children: (data: T) => React.ReactNode;
}

function TinaLiveInner<T extends object>({
  payload,
  formId,
  enabled,
  children
}: TinaLiveProps<T>) {
  const data = useTinaLiveData(payload, formId, enabled);
  return <>{children(data)}</>;
}

export function TinaLive<T extends object>({
  payload,
  formId,
  enabled,
  children
}: TinaLiveProps<T>) {
  const { edit } = useEditState();

  if (!edit) {
    return <>{children(payload.data)}</>;
  }

  return (
    <TinaLiveInner payload={payload} formId={formId} enabled={enabled}>
      {children}
    </TinaLiveInner>
  );
}
