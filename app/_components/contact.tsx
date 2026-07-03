import { Social } from './social';
import { NewsLetter } from './news-letter';
import { BusinessInfoQuery } from '@/tina/__generated__/types';
import { Hours } from './hours';
import { ContactInfo } from './contact-info';
import { TypographyH3 } from '@/components/ui/typography';

interface ContactProps {
  businessInfo: BusinessInfoQuery['businessInfo'];
  addressField?: string;
  phoneField?: string;
  hoursField?: string;
  hourItemFields?: Array<
    { day?: string; hours?: string } | undefined
  >;
}

export function Contact({
  businessInfo,
  addressField,
  phoneField,
  hoursField,
  hourItemFields
}: ContactProps) {
  return (
    <div className="flex flex-col justify-center pb-4 pt-8">
      <div
        id="contact-info"
        className="flex h-auto w-full flex-wrap justify-around"
      >
        <ContactInfo
          heading="Location"
          address={businessInfo.address}
          phoneNumber={businessInfo.phoneNumber}
          addressField={addressField}
          phoneField={phoneField}
        />

        <Hours
          hours={businessInfo.hours}
          hoursField={hoursField}
          hourItemFields={hourItemFields}
        />
      </div>
      <div className="m-3 grid place-items-center gap-4">
        <NewsLetter />
        <TypographyH3>
          For specials and event info follow us on social media
        </TypographyH3>
        <div className="flex flex-wrap  justify-center gap-2">
          <Social
            href="https://www.instagram.com/frasersgourmethideaway/"
            img="/images/instagram-logo.png"
            alt="Frasers Gourmet Hideaway on Instagram"
            className="hover:bg-instagram"
          />
          <Social
            href="http://facebook.com/frasersgh"
            img="/images/facebook-logo.png"
            alt="Frasers Gourmet Hideaway on Facebook"
            className="hover:bg-facebook"
          />
        </div>
      </div>
    </div>
  );
}
