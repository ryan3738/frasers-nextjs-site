'use client';

import { tinaField } from 'tinacms/dist/react';
import { TinaMarkdown, type TinaMarkdownContent } from 'tinacms/dist/rich-text';

interface HighlightBodyProps {
  body?: TinaMarkdownContent | null;
  phoneNumber: string;
  bodyField?: string;
}

export function HighlightBody({ body, phoneNumber, bodyField }: HighlightBodyProps) {
  if (!body) return null;

  const components = {
    PhoneNumber: (props: { label?: string }) => (
      <span data-tina-field={tinaField(props)}>
        {props.label ? `${props.label} ` : ''}
        {phoneNumber}
      </span>
    )
  } as React.ComponentProps<typeof TinaMarkdown>['components'];

  return (
    <div data-tina-field={bodyField}>
      <TinaMarkdown content={body} components={components} />
    </div>
  );
}
