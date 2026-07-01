'use client';

import { tinaField } from 'tinacms/dist/react';
import { HighlightQuery } from '@/tina/__generated__/types';
import { TinaPayload } from '@/lib/tina-page-props';
import { useTinaWithForm } from '@/lib/use-tina-with-form';
import { interpolate } from '@/lib/interpolate';
import { HighlightCard } from './highlight-card';
import { HighlightBody } from './highlight-body';

interface HighlightClientProps extends TinaPayload<HighlightQuery> {
  phoneNumber: string;
}

export function HighlightClient({
  phoneNumber,
  ...payload
}: HighlightClientProps) {
  const { data } = useTinaWithForm(payload);
  const highlight = data.highlight;

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
      titleField={tinaField(highlight, 'title')}
      subtitleField={tinaField(highlight, 'subtitle')}
      imageField={tinaField(highlight, 'image')}
    >
      <HighlightBody
        body={highlight.body}
        phoneNumber={phoneNumber}
        bodyField={tinaField(highlight, 'body')}
      />
    </HighlightCard>
  );
}
