'use client';

import { TinaMarkdown, type TinaMarkdownContent } from 'tinacms/dist/rich-text';

interface DoubleFeatureBodyProps {
  body?: TinaMarkdownContent | null;
  phoneNumber: string;
}

export function DoubleFeatureBody({
  body,
  phoneNumber
}: DoubleFeatureBodyProps) {
  if (!body) return null;

  const components = {
    PhoneNumber: ({ label }: { label?: string }) => (
      <span>
        {label ? `${label} ` : ''}
        {phoneNumber}
      </span>
    )
  } as React.ComponentProps<typeof TinaMarkdown>['components'];

  return <TinaMarkdown content={body} components={components} />;
}
