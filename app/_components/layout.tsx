'use client';
import { BusinessInfo } from '@/tina/__generated__/types';
import layoutData from '@/content/global/index.json';
import Footer from '@/components/Footer';
import chroma from 'chroma-js';
import { Header } from './header';

interface LayoutProps {
  children: React.ReactNode;
  home?: boolean;
  businessInfo?: BusinessInfo;
  data?: any;
}

const theme = {
  maxWidth: '1200px',
  smallScreen: '460px',
  mediumScreen: '769px',
  largeScreen: '1008px'
};

export const Layout = ({ data = layoutData, children }: LayoutProps) => {
  const primaryColor = '#C6A938';

  return (
    <>
      <Header navLinks={data.navigation.links} />
      <main className="flex w-screen flex-col items-center">{children}</main>
      <Footer navLinks={data.navigation.links} />
      <style global jsx>{`
        :root {
          --primary-color-desaturated: var(--primary-color-200);
          --primary-color-200: ${chroma(primaryColor).brighten(1.5).hex()};
        }
        .medium-emphasis {
          color: var(--medium-emphasis-text);
        }

        /* media queries */
        @media only screen and (min-width: ${theme.largeScreen}) {
          html,
          body {
            font-size: 112.5%;
          }
        }
      `}</style>
    </>
  );
};
