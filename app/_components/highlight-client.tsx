'use client';

import { useEditState, tinaField } from 'tinacms/dist/react';
import { HighlightQuery } from '@/tina/__generated__/types';
import { TinaPayload } from '@/lib/tina-page-props';
import { formIdFromCollectionPath, shouldSelectForm } from '@/lib/preview-path';
import { interpolate } from '@/lib/interpolate';
import { HighlightCard } from './highlight-card';
import { HighlightBody } from './highlight-body';
import { useVisualEditMode } from './preview-mode';
import { TinaLive } from './tina-live';

interface HighlightClientProps extends TinaPayload<HighlightQuery> {
  phoneNumber: string;
  activeFormId: string | null;
}

function HighlightCardView({
  highlight,
  phoneNumber
}: {
  highlight: HighlightQuery['highlight'];
  phoneNumber: string;
}) {
  const { isVisualEditing } = useVisualEditMode();

  if (!highlight) {
    return null;
  }

  const templateValues = { phoneNumber };

  return (
    <HighlightCard
      id={highlight.elementId ?? undefined}
      title={interpolate(highlight.title, templateValues)}
      subtitle={interpolate(highlight.subtitle, templateValues)}
      imageSource={highlight.image?.src ?? ''}
      imageAlt={highlight.image?.alt ?? ''}
      titleField={isVisualEditing ? tinaField(highlight, 'title') : undefined}
      subtitleField={
        isVisualEditing ? tinaField(highlight, 'subtitle') : undefined
      }
      imageField={isVisualEditing ? tinaField(highlight, 'image') : undefined}
    >
      <HighlightBody
        body={highlight.body}
        phoneNumber={phoneNumber}
        bodyField={isVisualEditing ? tinaField(highlight, 'body') : undefined}
      />
    </HighlightCard>
  );
}

export function HighlightClient({
  phoneNumber,
  activeFormId,
  ...payload
}: HighlightClientProps) {
  const { edit } = useEditState();
  const relativePath = (payload.variables as { relativePath: string })
    .relativePath;
  const formId = formIdFromCollectionPath('content/highlight', relativePath);

  if (!edit) {
    return (
      <HighlightCardView
        highlight={payload.data.highlight}
        phoneNumber={phoneNumber}
      />
    );
  }

  return (
    <TinaLive
      payload={payload}
      formId={formId}
      enabled={shouldSelectForm(activeFormId, formId)}
    >
      {data => (
        <HighlightCardView highlight={data.highlight} phoneNumber={phoneNumber} />
      )}
    </TinaLive>
  );
}
