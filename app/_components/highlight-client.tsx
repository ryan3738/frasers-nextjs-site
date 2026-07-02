'use client';

import { tinaField } from 'tinacms/dist/react';
import { HighlightQuery } from '@/tina/__generated__/types';
import { TinaPayload } from '@/lib/tina-page-props';
import { formIdFromCollectionPath } from '@/lib/preview-path';
import { useTinaWithForm } from '@/lib/use-tina-with-form';
import { interpolate } from '@/lib/interpolate';
import { HighlightCard } from './highlight-card';
import { HighlightBody } from './highlight-body';

interface HighlightClientProps extends TinaPayload<HighlightQuery> {
  phoneNumber: string;
  activeFormId: string | null;
  clickToEdit: boolean;
}

interface HighlightCardViewProps {
  highlight: HighlightQuery['highlight'];
  phoneNumber: string;
  clickToEdit: boolean;
}

function HighlightCardView({
  highlight,
  phoneNumber,
  clickToEdit
}: HighlightCardViewProps) {
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
      titleField={clickToEdit ? tinaField(highlight, 'title') : undefined}
      subtitleField={clickToEdit ? tinaField(highlight, 'subtitle') : undefined}
      imageField={clickToEdit ? tinaField(highlight, 'image') : undefined}
    >
      <HighlightBody
        body={highlight.body}
        phoneNumber={phoneNumber}
        bodyField={clickToEdit ? tinaField(highlight, 'body') : undefined}
      />
    </HighlightCard>
  );
}

function HighlightClientLive({
  phoneNumber,
  formId,
  clickToEdit,
  selectForm,
  ...payload
}: HighlightClientProps & { formId: string; selectForm: boolean }) {
  const { data } = useTinaWithForm(payload, { formId, selectForm });

  return (
    <HighlightCardView
      highlight={data.highlight}
      phoneNumber={phoneNumber}
      clickToEdit={clickToEdit}
    />
  );
}

export function HighlightClient({
  phoneNumber,
  activeFormId,
  clickToEdit,
  ...payload
}: HighlightClientProps) {
  const relativePath = (payload.variables as { relativePath: string })
    .relativePath;
  const formId = formIdFromCollectionPath('content/highlight', relativePath);
  const isActiveForm = activeFormId === formId;

  if (clickToEdit) {
    return (
      <HighlightClientLive
        phoneNumber={phoneNumber}
        activeFormId={activeFormId}
        clickToEdit={clickToEdit}
        formId={formId}
        selectForm={isActiveForm}
        {...payload}
      />
    );
  }

  return (
    <HighlightCardView
      highlight={payload.data.highlight}
      phoneNumber={phoneNumber}
      clickToEdit={false}
    />
  );
}
