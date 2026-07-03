'use client';

import { BusinessInfoQuery } from '@/tina/__generated__/types';
import { businessInfoTinaFields } from '@/lib/business-info-tina-fields';
import { Hero } from './hero';
import { useVisualEditMode } from './preview-mode';

interface HeroEditableProps {
  businessInfo: BusinessInfoQuery['businessInfo'];
}

export function HeroEditable({ businessInfo }: HeroEditableProps) {
  const { isVisualEditing } = useVisualEditMode();

  if (!businessInfo) {
    return null;
  }

  const fields = businessInfoTinaFields(businessInfo, isVisualEditing);

  return <Hero businessInfo={businessInfo} {...fields} />;
}
