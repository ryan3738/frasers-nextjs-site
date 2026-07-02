'use client';

import { tinaField } from 'tinacms/dist/react';
import { BusinessInfoQuery } from '@/tina/__generated__/types';
import { Contact } from './contact';

interface ContactEditableProps {
  businessInfo: BusinessInfoQuery['businessInfo'];
  clickToEdit?: boolean;
}

export function ContactEditable({
  businessInfo,
  clickToEdit = false
}: ContactEditableProps) {
  if (!businessInfo) {
    return null;
  }

  return (
    <Contact
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
