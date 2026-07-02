import Image from 'next/image';
import { BusinessInfoQuery } from '@/tina/__generated__/types';
import { Hours } from './hours';
import { TypographyH1, TypographyH3 } from '@/components/ui/typography';
import { blurDataURL } from '../../components/blur-data-url';

interface HeroProps {
  businessInfo?: BusinessInfoQuery['businessInfo'];
  addressField?: string;
  phoneField?: string;
  hoursField?: string;
  hourItemFields?: Array<{ day?: string; hours?: string } | undefined>;
}

export function Hero({
  businessInfo,
  addressField,
  phoneField,
  hoursField,
  hourItemFields
}: HeroProps) {
  if (!businessInfo) {
    return <div>No Business Info Found</div>;
  }

  return (
    <div
      id="welcome"
      className="grid w-full text-center max-w-7xl place-items-center bg-star-pattern md:bg-hero-image md:bg-cover md:bg-center md:bg-no-repeat"
    >
      <div
        id="welcome-box"
        className="my-4 grid w-full min-w-[250px] max-w-[450px] place-items-center bg-background/95 bg-star-pattern p-4"
      >
        <div className="flex flex-col items-center w-full gap-5 p-4 content-stretch justify-evenly outline-1 outline-accent-foreground">
          <p className="mb-0 text-lg tracking-super-wide">Est. | 2006</p>
          <TypographyH1 className="sr-only">
            Frasers Gourmet Hideaway
          </TypographyH1>
          <div className="relative w-full m-auto aspect-228/104 shrink-0 text-secondary-foreground">
            <Image
              src="/images/frasers-logo.png"
              title="Frasers"
              alt="Frasers Gourmet Hideaway Logo"
              fill
              priority
              sizes="(max-width: 450px) 100vw, 450px"
              placeholder="blur"
              blurDataURL={blurDataURL}
              className="object-contain"
            />
          </div>
          {/* <h6>HOME OF EXQUISITE<br />TASTES AND SERVICE</h6> */}
          <a
            href={businessInfo?.address?.directions || ''}
            target="_blank"
            rel="noreferrer noopener"
            title="Click to Get Directions"
            className="text-secondary-foreground"
            data-tina-field={addressField}
          >
            {`${businessInfo?.address?.street} ${businessInfo?.address?.street2}`}
            <br />
            {`${businessInfo?.address?.city}, ${businessInfo?.address?.region} ${businessInfo?.address?.zip}`}
          </a>
          <TypographyH3 className="uppercase">
            Reservations Recommended
          </TypographyH3>
          <p>
            <strong>CALL FOR TAKEOUT</strong>
          </p>
          <a
            title="Click to Call"
            href={`tel:${businessInfo.phoneNumber}`}
            className="text-secondary-foreground"
            data-tina-field={phoneField}
          >
            {businessInfo.phoneNumber}
          </a>
          <div data-tina-field={hoursField}>
            <Hours hours={businessInfo.hours} hourItemFields={hourItemFields} />
          </div>
        </div>
      </div>
    </div>
  );
}
