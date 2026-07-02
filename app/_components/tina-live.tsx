'use client';

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
  children
}: Omit<TinaLiveProps<T>, 'enabled'>) {
  const { data } = useTinaWithForm(payload, { formId });
  return <>{children(data)}</>;
}

export function TinaLive<T extends object>({
  payload,
  formId,
  enabled,
  children
}: TinaLiveProps<T>) {
  if (!enabled) {
    return <>{children(payload.data)}</>;
  }

  return (
    <TinaLiveInner payload={payload} formId={formId}>
      {children}
    </TinaLiveInner>
  );
}
