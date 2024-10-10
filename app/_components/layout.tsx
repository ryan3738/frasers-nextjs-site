'use client';
import { BusinessInfo } from '@/tina/__generated__/types';
import layoutData from '@/content/global/index.json';
import Footer from './footer';
import { useMediaQuery } from '@/hooks/use-media-query';
import { Nav } from './nav';

interface LayoutProps {
  children: React.ReactNode;
  home?: boolean;
  businessInfo?: BusinessInfo;
  data?: any;
}

export const meta = {
  title: 'Frasers Gourmet Hideaway',
  description:
    'Full service steak and seafood restaurant in Oak Harbor, Washington | Serving Pacific Northwest inspired dishes using fresh and local ingredients.',
  keywords: 'restaurant, steak, seafood, whidbey',
  cardImage: '/android-chrome-512x512.png'
};

export const Layout = ({ data = layoutData, children }: LayoutProps) => {
  const isDesktop = useMediaQuery('(min-width: 768px)');

  return (
    <>
      {/* <Header navLinks={data.navigation.links} location="bottom" /> */}
      <div className="flex size-full flex-col items-center justify-center p-0">
        <Nav
          navLinks={data.navigation.links}
          location="top"
          position={isDesktop ? 'sticky' : 'static'}
        />
        <main className="flex w-full flex-col items-center">{children}</main>
        <Nav
          navLinks={data.navigation.links}
          location="bottom"
          position={isDesktop ? 'static' : 'sticky'}
        />
        <Footer />
      </div>
    </>
  );
};
