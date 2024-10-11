import { TypographyH2, TypographyMuted } from '@/components/ui/typography';
import { cn } from '@/lib/utils';
import { BusinessInfo, BusinessInfoQuery } from '@/tina/__generated__/types';

interface ContactProps {
  heading: string;
  address?: BusinessInfoQuery['businessInfo']['address'];
  phoneNumber?: BusinessInfo['phoneNumber'];
  className?: string;
}

export function ContactInfo({
  heading,
  address,
  phoneNumber,
  className
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
          <div>
            {`${address.street} ${address.street2}`}
            <br />
            {`${address.city}, ${address.region} ${address.zip}`}
          </div>
        )}
        {phoneNumber && (
          <div className="text-secondary-foreground">
            <a href={`tel:${phoneNumber}`} title="Click to Get Directions">
              {phoneNumber}
            </a>
          </div>
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
