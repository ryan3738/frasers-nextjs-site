import {
  MenuQuery,
  BusinessInfoQuery,
  GalleryGridQuery
} from '@/tina/__generated__/types';
import { Menu } from '../menu/_components/menu';
import { GalleryGrid } from '../gallery/_components/gallery-grid';
import { Contact } from './contact';
import { Hero } from './hero';
import { TypographyH1, TypographyH2 } from '@/components/ui/typography';

interface HomeProps {
  menu?: MenuQuery['menu'];
  businessInfo: BusinessInfoQuery['businessInfo'];
  galleryImages?: GalleryGridQuery['galleryGrid']['images'];
  highlightsContent: React.ReactNode;
}

export const Home = ({
  menu,
  businessInfo,
  galleryImages,
  highlightsContent
}: HomeProps) => {
  const { phoneNumber } = businessInfo;

  return (
    <>
      <Hero businessInfo={businessInfo} />
      <section className="w-full max-w-7xl bg-accent/30">
        <TypographyH2 id="about" className="hidden text-center">
          About
        </TypographyH2>
        <div className="flex flex-wrap justify-center">{highlightsContent}</div>
      </section>
      <section
        id="menu"
        className="grid w-full max-w-7xl justify-items-center bg-accent/30"
      >
        <TypographyH2 className="pb-6 mt-12 text-center text-accent-foreground lg:text-8xl">
          MENU
        </TypographyH2>
        {menu && (
          <Menu menu={menu} pathName="/" sections={['Starters', 'Entrees']} />
        )}
      </section>
      <section id="gallery" className="grid w-full justify-items-center ">
        <TypographyH2 className="pb-6 mt-12 text-center text-accent-foreground lg:text-8xl">
          Gallery
        </TypographyH2>
        <GalleryGrid
          images={galleryImages || []}
          className="max-w-screen-2xl"
        />
      </section>
      <section id="contact">
        <TypographyH2 className="hidden">CONTACT</TypographyH2>
        <Contact businessInfo={businessInfo} />
      </section>
    </>
  );
};
