'use client';

import { tinaField } from 'tinacms/dist/react';
import { BusinessInfoQuery } from '@/tina/__generated__/types';
import { Hero } from './hero';

interface HeroEditableProps {
  businessInfo: BusinessInfoQuery['businessInfo'];
  clickToEdit?: boolean;
}

export function HeroEditable({
  businessInfo,
  clickToEdit = false
}: HeroEditableProps) {
  if (!businessInfo) {
    return null;
  }

  return (
    <Hero
      businessInfo={businessInfo}
      addressField={
        clickToEdit ? tinaField(businessInfo, 'address') : undefined
      }
      phoneField={
        clickToEdit ? tinaField(businessInfo, 'phoneNumber') : undefined
      }
      hoursField={clickToEdit ? tinaField(businessInfo, 'hours') : undefined}
      hourItemFields={businessInfo.hours?.map(item =>
        item
          ? {
              day: clickToEdit ? tinaField(item, 'day') : undefined,
              hours: clickToEdit ? tinaField(item, 'hours') : undefined
            }
          : undefined
      )}
    />
  );
}
