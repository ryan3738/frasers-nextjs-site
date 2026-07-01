import { TypographyH2, TypographyMuted } from '@/components/ui/typography';
import { cn } from '@/lib/utils';
import { BusinessInfo, BusinessInfoQuery } from '@/tina/__generated__/types';

interface ContactProps {
  heading: string;
  address?: BusinessInfoQuery['businessInfo']['address'];
  phoneNumber?: BusinessInfo['phoneNumber'];
  className?: string;
  addressField?: string;
  phoneField?: string;
}

export function ContactInfo({
  heading,
  address,
  phoneNumber,
  className,
  addressField,
  phoneField
}: ContactProps) {
  return (
    <div className={cn('flex flex-col items-center text-center', className)}>
      {heading && (
        <div className="border-b border-accent-foreground">
          <TypographyH2 className="flex flex-col items-center uppercase">
            {heading}
          </TypographyH2>
        </div>
      )}
      <TypographyMuted className="mt-2 grid gap-4">
        {address && (
          <address className="not-italic" data-tina-field={addressField}>
            {`${address.street} ${address.street2}`}
            <br />
            {`${address.city}, ${address.region} ${address.zip}`}
          </address>
        )}
        {phoneNumber && (
          <address
            className="not-italic text-secondary-foreground"
            data-tina-field={phoneField}
          >
            <a href={`tel:${phoneNumber}`} title="Click to call">
              {phoneNumber}
            </a>
          </address>
        )}
        {address?.directions && (
          <div className=" text-secondary-foreground">
            <a
              href={address.directions}
              target="_blank"
              rel="noreferrer noopener"
              className=""
            >
              <b>Get Directions</b>
            </a>
          </div>
        )}
      </TypographyMuted>
    </div>
  );
}
