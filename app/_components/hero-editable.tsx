'use client';

import { useEditState } from 'tinacms/dist/react';
import { BusinessInfoQuery } from '@/tina/__generated__/types';
import { businessInfoTinaFields } from '@/lib/business-info-tina-fields';
import { Hero } from './hero';

interface HeroEditableProps {
  businessInfo: BusinessInfoQuery['businessInfo'];
}

export function HeroEditable({ businessInfo }: HeroEditableProps) {
  const { edit } = useEditState();

  if (!businessInfo) {
    return null;
  }

  const fields = businessInfoTinaFields(businessInfo, edit);

  return <Hero businessInfo={businessInfo} {...fields} />;
}
