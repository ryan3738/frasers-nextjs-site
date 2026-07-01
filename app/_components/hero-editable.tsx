'use client';

import { tinaField } from 'tinacms/dist/react';
import { BusinessInfoQuery } from '@/tina/__generated__/types';
import { Hero } from './hero';

interface HeroEditableProps {
  businessInfo: BusinessInfoQuery['businessInfo'];
}

export function HeroEditable({ businessInfo }: HeroEditableProps) {
  if (!businessInfo) {
    return null;
  }

  return (
    <Hero
      businessInfo={businessInfo}
      addressField={tinaField(businessInfo, 'address')}
      phoneField={tinaField(businessInfo, 'phoneNumber')}
      hoursField={tinaField(businessInfo, 'hours')}
      hourItemFields={businessInfo.hours?.map(item =>
        item
          ? {
              day: tinaField(item, 'day'),
              hours: tinaField(item, 'hours')
            }
          : undefined
      )}
    />
  );
}
