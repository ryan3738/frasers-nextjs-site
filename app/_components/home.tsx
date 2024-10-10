'use client';
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
import { TypographyH1 } from '@/components/ui/typography';

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
            id="about"
            title=""
            subtitle=""
            imageSource="/images/gift-card-square.jpg"
            imageAlt="frasers gift card closeup"
          >
            <div>
              <p>Please call to make a reservation</p>
              <h3>Gift Cards Available</h3>
              To purchase a gift card please call us at{' '}
              <span className="text-nowrap">{phoneNumber}</span>
            </div>
          </Double>
          <Double
            id="announcements"
            title="Open for Dine In Service"
            subtitle="To make a reservation call us at 360-279-1231"
            imageSource="/images/pig-were-back.jpg"
            imageAlt="Pig holding a sign that says were back"
          >
            <div>
              <h3>Takeout Is Still Available</h3>
              <p>
                Call {phoneNumber} during normal business hours to place an
                order
              </p>
            </div>
            <br />
            <br />
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
            imageLeft
          >
            <div
              dangerouslySetInnerHTML={{
                __html: aboutOwner.content
              }}
            />
          </Double>
        </div>
      </section>
      <section
        id="menu"
        className="grid w-full max-w-screen-xl justify-center bg-accent/30"
      >
        <TypographyH1 className="mt-12 pb-6 text-center text-accent-foreground">
          MENU
        </TypographyH1>
        {menu && (
          <Menu menu={menu} pathName="/" sections={['Starters', 'Entrees']} />
        )}
      </section>
      <section id="gallery">
        <TypographyH1 className="mt-12 pb-6 text-center text-accent-foreground">
          Gallery
        </TypographyH1>
        <GalleryGrid images={galleryImages || []} />
      </section>
      <section id="contact">
        <TypographyH1 className="hidden">CONTACT</TypographyH1>
        <Contact businessInfo={businessInfo} />
      </section>
    </>
  );
};
