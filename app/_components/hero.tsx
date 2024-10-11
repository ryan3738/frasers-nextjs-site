import Image from 'next/legacy/image';
import { BusinessInfoQuery } from '@/tina/__generated__/types';
import { Hours } from './hours';
import { TypographyH3 } from '@/components/ui/typography';
import { blurDataURL } from '../../components/blur-data-url';

interface HeroProps {
  businessInfo?: BusinessInfoQuery['businessInfo'];
}

export function Hero({ businessInfo }: HeroProps) {
  if (!businessInfo) {
    return <div>No Business Info Found</div>;
  }

  return (
    <div
      id="welcome"
      className="grid w-full max-w-screen-xl place-items-center  bg-star-pattern text-center md:bg-hero-image md:bg-cover md:bg-center md:bg-no-repeat"
    >
      <div
        id="welcome-box"
        className="my-4 grid w-full min-w-[250px] max-w-[450px] place-items-center bg-background/95 bg-star-pattern p-4"
      >
        <div className="flex w-full flex-col content-stretch items-center justify-evenly gap-5 p-4 outline outline-1 outline-accent-foreground ">
          <p className="mb-0 text-lg tracking-super-wide">Est. | 2006</p>
          <div className="m-auto block h-auto w-full text-secondary-foreground">
            <Image
              src="/images/frasers-logo.png"
              title="Frasers"
              alt="Frasers Gourmet Hideaway Logo"
              layout="responsive"
              placeholder="blur"
              blurDataURL={blurDataURL}
              width={228}
              height={104}
            />
          </div>
          {/* <h6>HOME OF EXQUISITE<br />TASTES AND SERVICE</h6> */}
          <a
            href={businessInfo?.address?.directions || ''}
            target="_blank"
            rel="noreferrer noopener"
            title="Click to Get Directions"
            className="text-secondary-foreground"
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
          >
            {businessInfo.phoneNumber}
          </a>
          <div>
            <Hours hours={businessInfo.hours} />
          </div>
        </div>
      </div>
    </div>
  );
}
