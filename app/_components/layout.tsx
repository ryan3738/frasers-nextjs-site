import { BusinessInfo } from '@/tina/__generated__/types';
import layoutData from '@/content/global/index.json';
import Footer from './footer';
import { Nav } from './nav';

interface LayoutProps {
  children: React.ReactNode;
  home?: boolean;
  businessInfo?: BusinessInfo;
  data?: any;
}

export const Layout = ({ data = layoutData, children }: LayoutProps) => {
  return (
    <div className="grid size-full min-h-[calc(100vh-180px)] place-items-center">
      <Nav
        navLinks={data.navigation.links}
        location="top"
        className={'hidden md:sticky md:flex'}
      />
      <main className="flex min-h-screen w-full flex-col items-center">
        {children}
      </main>
      <Nav
        navLinks={data.navigation.links}
        location="bottom"
        className="sticky md:hidden"
      />
      <Footer navLinks={data.navigation.links} />
    </div>
  );
};
