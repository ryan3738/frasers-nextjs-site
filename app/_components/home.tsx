import {
  MenuQuery,
  BusinessInfoQuery,
  GalleryGridQuery,
  HighlightConnectionQuery
} from '@/tina/__generated__/types';
import { interpolate } from '@/lib/interpolate';
import { Menu } from '../menu/_components/menu';
import { GalleryGrid } from '../gallery/_components/gallery-grid';
import { Contact } from './contact';
import { HighlightCard } from './highlight-card';
import { HighlightBody } from './highlight-body';
import { Hero } from './hero';
import { TypographyH1 } from '@/components/ui/typography';

type HighlightNode = NonNullable<
  NonNullable<HighlightConnectionQuery['highlightConnection']['edges']>[number]
>['node'];

interface HomeProps {
  menu?: MenuQuery['menu'];
  businessInfo: BusinessInfoQuery['businessInfo'];
  galleryImages?: GalleryGridQuery['galleryGrid']['images'];
  highlights: NonNullable<HighlightNode>[];
}

export const Home = ({
  menu,
  businessInfo,
  galleryImages,
  highlights
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
          {highlights.map(highlight => (
            <HighlightCard
              key={highlight._sys.relativePath}
              id={highlight.elementId ?? undefined}
              title={interpolate(highlight.title, templateValues)}
              subtitle={interpolate(highlight.subtitle, templateValues)}
              imageSource={highlight.image?.src ?? ''}
              imageAlt={highlight.image?.alt ?? ''}
            >
              <HighlightBody
                body={highlight.body}
                phoneNumber={phoneNumber ?? ''}
              />
            </HighlightCard>
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
