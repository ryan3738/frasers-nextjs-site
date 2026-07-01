'use client';

import { tinaField } from 'tinacms/dist/react';
import { BusinessInfoQuery } from '@/tina/__generated__/types';
import { Contact } from './contact';

interface ContactEditableProps {
  businessInfo: BusinessInfoQuery['businessInfo'];
}

export function ContactEditable({ businessInfo }: ContactEditableProps) {
  if (!businessInfo) {
    return null;
  }

  return (
    <Contact
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
