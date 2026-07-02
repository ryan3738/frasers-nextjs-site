'use client';

import { useEditState } from 'tinacms/dist/react';
import { TinaPayload } from '@/lib/tina-page-props';
import { useTinaWithForm } from '@/lib/use-tina-with-form';

interface TinaLiveProps<T extends object> {
  payload: TinaPayload<T>;
  formId: string;
  enabled: boolean;
  children: (data: T) => React.ReactNode;
}

function TinaLiveInner<T extends object>({
  payload,
  formId,
  selectForm,
  children
}: Omit<TinaLiveProps<T>, 'enabled'> & { selectForm: boolean }) {
  const { data } = useTinaWithForm(payload, { formId, selectForm });
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
    <TinaLiveInner
      payload={payload}
      formId={formId}
      selectForm={enabled}
    >
      {children}
    </TinaLiveInner>
  );
}
