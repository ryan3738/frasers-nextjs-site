import {
  MenuQuery,
  BusinessInfoQuery,
  GalleryGridQuery,
  DoubleFeatureConnectionQuery
} from '@/tina/__generated__/types';
import { interpolate } from '@/lib/interpolate';
import { Menu } from '../menu/_components/menu';
import { GalleryGrid } from '../gallery/_components/gallery-grid';
import { Contact } from './contact';
import { Double } from './double';
import { DoubleFeatureBody } from './double-feature-body';
import { Hero } from './hero';
import { TypographyH1 } from '@/components/ui/typography';

type DoubleFeatureNode = NonNullable<
  NonNullable<
    DoubleFeatureConnectionQuery['doubleFeatureConnection']['edges']
  >[number]
>['node'];

interface HomeProps {
  menu?: MenuQuery['menu'];
  businessInfo: BusinessInfoQuery['businessInfo'];
  galleryImages?: GalleryGridQuery['galleryGrid']['images'];
  doubleFeatures: NonNullable<DoubleFeatureNode>[];
}

export const Home = ({
  menu,
  businessInfo,
  galleryImages,
  doubleFeatures
}: HomeProps) => {
  const { phoneNumber } = businessInfo;
  const templateValues = { phoneNumber: phoneNumber ?? '' };

  return (
    <>
      <Hero businessInfo={businessInfo} />
      <section className="w-full max-w-7xl bg-accent/30">
        <TypographyH1 id="about" className="hidden text-center">
          About
        </TypographyH1>
        <div className="flex flex-wrap justify-center">
          {doubleFeatures.map(feature => (
            <Double
              key={feature._sys.relativePath}
              id={feature.elementId ?? undefined}
              title={interpolate(feature.title, templateValues)}
              subtitle={interpolate(feature.subtitle, templateValues)}
              imageSource={feature.image?.src ?? ''}
              imageAlt={feature.image?.alt ?? ''}
            >
              <DoubleFeatureBody
                body={feature.body}
                phoneNumber={phoneNumber ?? ''}
              />
            </Double>
          ))}
        </div>
      </section>
      <section
        id="menu"
        className="grid w-full max-w-7xl justify-items-center bg-accent/30"
      >
        <TypographyH1 className="pb-6 mt-12 text-center text-accent-foreground lg:text-8xl">
          MENU
        </TypographyH1>
        {menu && (
          <Menu menu={menu} pathName="/" sections={['Starters', 'Entrees']} />
        )}
      </section>
      <section id="gallery" className="grid w-full justify-items-center ">
        <TypographyH1 className="pb-6 mt-12 text-center text-accent-foreground lg:text-8xl">
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
