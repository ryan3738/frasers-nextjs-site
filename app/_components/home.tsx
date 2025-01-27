import siteData from '@/public/data/site-data.json';
import {
  MenuQuery,
  BusinessInfoQuery,
  GalleryGridQuery
} from '@/tina/__generated__/types';
import { Menu } from '../menu/_components/menu';
import { GalleryGrid } from '../gallery/_components/gallery-grid';
import { Contact } from './contact';
import { Double } from './double';
import { Hero } from './hero';
import { TypographyH1, TypographyH3 } from '@/components/ui/typography';

const { aboutBusiness, aboutOwner } = siteData;

interface HomeProps {
  menu?: MenuQuery['menu'];
  businessInfo: BusinessInfoQuery['businessInfo'];
  galleryImages?: GalleryGridQuery['galleryGrid']['images'];
}

export const Home = ({ menu, businessInfo, galleryImages }: HomeProps) => {
  const { phoneNumber } = businessInfo;

  return (
    <>
      <Hero businessInfo={businessInfo} />
      <section className="w-full max-w-screen-xl bg-accent/30">
        <TypographyH1 id="about" className="hidden text-center">
          About
        </TypographyH1>
        <div className="flex flex-wrap justify-center">
          <Double
            id="announcements"
            title="Open for Dine In Service"
            subtitle="Please call to make a reservation at 360-279-1231"
            imageSource="/images/pig-were-back.jpg"
            imageAlt="Pig holding a sign that says were back"
          >
            <div className="space-y-4">
              <TypographyH3 className="uppercase">
                Takeout Is Still Available
              </TypographyH3>
              <p>
                Call {phoneNumber} during normal business hours to place an
                order
              </p>
            </div>
          </Double>
          <Double
            id="about"
            title="Gift Cards Available"
            subtitle={`To purchase a gift card please call us at ${phoneNumber}`}
            imageSource="/images/gift-card-square.jpg"
            imageAlt="frasers gift card closeup"
          >
            <></>
          </Double>
          <Double
            id="about"
            title={aboutBusiness.title}
            subtitle={aboutBusiness.subtitle}
            imageSource={aboutBusiness.src}
            imageAlt={aboutBusiness.alt}
          >
            <div>{aboutBusiness.content}</div>
          </Double>
          <Double
            title={aboutOwner.title}
            subtitle={aboutOwner.subtitle}
            imageSource={aboutOwner.src}
            imageAlt={aboutOwner.alt}
          >
            <div>{aboutOwner.content}</div>
          </Double>
        </div>
      </section>
      <section
        id="menu"
        className="grid w-full max-w-screen-xl justify-items-center bg-accent/30"
      >
        <TypographyH1 className="mt-12 pb-6 text-center text-accent-foreground lg:text-8xl">
          MENU
        </TypographyH1>
        {menu && (
          <Menu menu={menu} pathName="/" sections={['Starters', 'Entrees']} />
        )}
      </section>
      <section id="gallery" className="grid w-full justify-items-center ">
        <TypographyH1 className="mt-12 pb-6 text-center text-accent-foreground lg:text-8xl">
          Gallery
        </TypographyH1>
        <GalleryGrid
          images={galleryImages || []}
          className="max-w-screen-2xl"
        />
      </section>
      <section id="contact">
        <TypographyH1 className="hidden">CONTACT</TypographyH1>
        <Contact businessInfo={businessInfo} />
      </section>
    </>
  );
};
