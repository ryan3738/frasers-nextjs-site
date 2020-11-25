import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
// import { getSortedPostsData } from '../lib/posts';
// import Date from '../components/date';
import MenuSection from '../components/menu-section';
import Double from '../components/double.tsx';
import GalleryGrid from '../components/gallery-grid';
import Contact from '../components/contact';
import Button from '../components/button';
// import doubleItems from '../public/data/double.json';
import { getDoubleData } from '../lib/posts';

export async function getStaticProps() {
  // const allPostsData = getSortedPostsData();
  const aboutOwnerData = await getDoubleData('public/data/about-owner.md');
  const aboutBusinessData = await getDoubleData(
    'public/data/about-business.md'
  );
  const announcement1Data = await getDoubleData('posts/announcement1.md');
  const announcement2Data = await getDoubleData('posts/announcement2.md');

  return {
    props: {
      aboutOwnerData,
      aboutBusinessData,
      announcement1Data,
      announcement2Data,
    },
  };
}

export default function Home({
  aboutOwnerData,
  aboutBusinessData,
  announcement1Data,
  announcement2Data,
}) {
  return (
    <>
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
          <script src='https://identity.netlify.com/v1/netlify-identity-widget.js'></script>
        </Head>
        <section id='about' className='container'>
          <h1 className='header hidden-header'>ABOUT</h1>
          <Double
            title={announcement1Data.title}
            subtitle={announcement1Data.subtitle}
            imageSource={announcement1Data.imageSource}
            imageAlt={announcement1Data.imageAlt}
          >
            <div
              dangerouslySetInnerHTML={{
                __html: announcement1Data.contentHtml,
              }}
            />
          </Double>
          <Double
            title={announcement2Data.title}
            subtitle={announcement2Data.subtitle}
            imageSource={announcement2Data.imageSource}
            imageAlt={announcement2Data.imageAlt}
            imageLeft
          >
            <div
              dangerouslySetInnerHTML={{
                __html: announcement2Data.contentHtml,
              }}
            />
          </Double>
          <Double
            title={aboutBusinessData.title}
            subtitle={aboutBusinessData.subtitle}
            imageSource={aboutBusinessData.imageSource}
            imageAlt={aboutBusinessData.imageAlt}
          >
            <div
              dangerouslySetInnerHTML={{
                __html: aboutBusinessData.contentHtml,
              }}
            />
          </Double>
          <Double
            title={aboutOwnerData.title}
            subtitle={aboutOwnerData.subtitle}
            imageSource={aboutOwnerData.imageSource}
            imageAlt={aboutOwnerData.imageAlt}
            imageLeft
          >
            <div
              dangerouslySetInnerHTML={{ __html: aboutOwnerData.contentHtml }}
            />
          </Double>
          <Button buttonText='LEARN MORE ABOUT FRASERS' buttonLink='/about' />
        </section>
        <section id='menu' className='container'>
          <h1 className='header hidden-header'>MENU</h1>
          <MenuSection category='Starters' />
          <MenuSection category='Entrees' />
          <Button buttonText='SEE FULL MENU ==>' buttonLink='/menu' />
        </section>
        <section>
          <GalleryGrid />
        </section>
        <section id='contact'>
          <div className='header'>
            <h1>CONTACT US</h1>
          </div>
          <Contact />
        </section>
        <style jsx>{`
          .header {
            padding: 5rem 0 0;
            color: var(--primary-color-desaturated);
          }
          .hidden-header {
            padding: 0;
            visibility: hidden;
          }
          .container {
            width: 100vw;
            max-width: 1200px;
            background-color: var(--surface-color);
            /* background: var(--background-color); */
          }
          @media (min-width: 460px) {
          }
        `}</style>
      </Layout>
    </>
  );
}
