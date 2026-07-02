'use client';

import { useEffect } from 'react';
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
  ...payload
}: HighlightClientProps & { formId: string }) {
  const { data } = useTinaWithForm(payload, { formId });

  return (
    <HighlightCardView
      highlight={data.highlight}
      phoneNumber={phoneNumber}
      clickToEdit
    />
  );
}

export function HighlightClient({
  phoneNumber,
  activeFormId,
  ...payload
}: HighlightClientProps) {
  const relativePath = (payload.variables as { relativePath: string })
    .relativePath;
  const formId = formIdFromCollectionPath('content/highlight', relativePath);
  const isActiveForm = activeFormId === formId;

  useEffect(() => {
    // #region agent log
    fetch('http://127.0.0.1:7310/ingest/c4db365b-e961-468a-ac35-40eab15a1a76',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'3c9f59'},body:JSON.stringify({sessionId:'3c9f59',location:'highlight-client.tsx:mount',message:'HighlightClient render mode',data:{relativePath,formId,activeFormId,isActiveForm,title:payload.data.highlight?.title},timestamp:Date.now(),hypothesisId:'C',runId:'post-fix'})}).catch(()=>{});
    // #endregion
  }, [relativePath, formId, activeFormId, isActiveForm, payload.data.highlight?.title]);

  if (isActiveForm) {
    return (
      <HighlightClientLive
        phoneNumber={phoneNumber}
        activeFormId={activeFormId}
        formId={formId}
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
