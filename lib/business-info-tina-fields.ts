import { tinaField } from 'tinacms/dist/react';
import { BusinessInfoQuery } from '@/tina/__generated__/types';

type BusinessInfo = BusinessInfoQuery['businessInfo'];

export function businessInfoTinaFields(businessInfo: BusinessInfo, edit: boolean) {
  if (!businessInfo || !edit) {
    return {
      addressField: undefined,
      phoneField: undefined,
      hoursField: undefined,
      hourItemFields: undefined
    };
  }

  return {
    addressField: tinaField(businessInfo, 'address'),
    phoneField: tinaField(businessInfo, 'phoneNumber'),
    hoursField: tinaField(businessInfo, 'hours'),
    hourItemFields: businessInfo.hours?.map(item =>
      item
        ? {
            day: tinaField(item, 'day'),
            hours: tinaField(item, 'hours')
          }
        : undefined
    )
  };
}
