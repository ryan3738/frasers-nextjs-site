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

  return {
    props: {
      aboutOwnerData,
      aboutBusinessData,
    },
  };
}

export default function Home({ aboutOwnerData, aboutBusinessData }) {
  return (
    <>
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
          <script src='https://identity.netlify.com/v1/netlify-identity-widget.js'></script>
        </Head>
        <section id='about' className='container'>
          <h1 className='header hidden-header'>ABOUT</h1>
          {/* <Double category='special' /> */}
          {/* <Double category='about' /> */}
          <Double
            title='Special'
            subtitle='Special subtitle'
            imageSource='/images/rhubarb-margarita-mayhem-square.jpg'
            imageAlt='Rhubarb Margarita Special'
          >
            This is a special!!!
          </Double>
          <Double
            title='FRASERS DINE IN IS BACK!'
            subtitle='OUR DINING ROOM IS OPEN FOR SERVICE. RESERVATIONS ARE RECOMMENDED. CALL TO PLACE A TAKEOUT ORDER.'
            imageSource='/images/pig-were-back.jpg'
            imageAlt="Pig holding a sign that says We're Back"
            imageLeft
          >
            There are many guidelines for us to follow as well as guidelines for
            our customers to follow. Face masks will be mandatory for entry to
            the restaurant. Additonal safety precautions and requirements will
            be posted. We appreciate your cooperation in this endeavor to help
            us keep our customers and staff safe.
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
