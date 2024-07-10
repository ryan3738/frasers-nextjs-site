'use client';
import { useState } from 'react';
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

export const meta = {
  title: 'Frasers Gourmet Hideaway',
  description:
    'Full service steak and seafood restaurant in Oak Harbor, Washington | Serving Pacific Northwest inspired dishes using fresh and local ingredients.',
  keywords: 'restaurant, steak, seafood, whidbey',
  cardImage: '/android-chrome-512x512.png'
};

const theme = {
  maxWidth: '1200px',
  smallScreen: '460px',
  mediumScreen: '769px',
  largeScreen: '1008px'
};

export const Layout = ({ data = layoutData, children }: LayoutProps) => {
  const [open, setOpen] = useState(false);
  const primaryColor = '#C6A938';

  return (
    <>
      <Header navLinks={data.navigation.links} open={open} setOpen={setOpen} />
      <div className="container">
        <main className="main">{children}</main>
        <Footer navLinks={data.navigation.links} />
        <style jsx>{`
          .container {
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 0;
            margin: 0 auto;
          }
          .main {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
          }
        `}</style>
        <style global jsx>{`
          :root {
            --white-color: hsla(0, 0%, 100%, 0.871);
            --black-color: hsl(0, 5%, 4%);
            --surface-color: hsla(0, 0%, 100%, 0.03);
            --background-color: var(--black-color);
            --primary-color: hsl(48, 56%, 50%);
            --primary-color-desaturated: var(--primary-color-200);

            --primary-color-200: ${chroma(primaryColor).brighten(1.5).hex()};
            /* Have option for internet explorer without f6*/
            /* 87% */
            --high-emphasis-text: var(--white-color);
            /* 60% */
            --medium-emphasis-text: hsla(0, 0%, 100%, 0.6);
            /* 38% */
            --text-disabled: hsla(0, 0%, 100%, 0.38);
            --color-facebook: hsl(221, 44%, 41%);
            --color-instagram: hsl(350, 96%, 60%);
            --small-screen: ${theme.smallScreen};
            --medium-screen: ${theme.mediumScreen};
            --box-shadow: hsla(0, 0%, 0%, 0.24) 0px 3px 8px;
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
      </div>
    </>
  );
};
