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
import announcementPath from '../public/data/site-data.json';

export async function getStaticProps() {
  // const allPostsData = getSortedPostsData();
  const aboutOwnerData = await getDoubleData('public/data/about-owner.md');
  const aboutBusinessData = await getDoubleData(
    'public/data/about-business.md'
  );
  const announcement1Data = await getDoubleData(announcementPath.announcement1);
  const announcement2Data = await getDoubleData(announcementPath.announcement2);

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
          <div className='double-wrapper'>
            <Double
              title='FRASERS TAKEOUT'
              // subtitle='To purchase a gift card please visit our online store or call us at 360-279-1231 '
              imageSource='/images/wine-takeout-bag-square.jpg'
              imageAlt='Picture of frasers gourmet hideaway takeout bag and a glass of wine'
            >
              <div>
                <ul>
                  <li>Precooked Ready to Reheat Meals</li>
                  <li>Place orders by Thursday at 6 pm</li>
                  <li>Pickup Saturday from 2-4 pm</li>
                  <li>Place Orders Online</li>
                  <li>Or Call 360 279-1231</li>
                </ul>
              </div>
              <Button
                buttonText='ORDER ONLINE'
                buttonLink='https://frasersgh.square.site/'
              />
              <br />
              <br />
              <br />
              <h4>Sign up for our newsletter to receive updates</h4>
              <Button
                buttonText='SIGN UP'
                buttonLink='https://squareup.com/outreach/sgPDT7/subscribe'
              />
              <br />
              <br />
              <p>We respect your privacy</p>
            </Double>
            <Double
              title='DINE IN TEMPORARILY CLOSED'
              subtitle='To purchase a gift card please visit our online store or call us at 360-279-1231 '
              imageSource='/images/gift-card-square.jpg'
              imageAlt='frasers gift card closeup'
              imageLeft
            >
              <Button
                buttonText='ORDER ONLINE'
                buttonLink='https://frasersgh.square.site/'
              />
              <div>
                Check back or follow us on Facebook for updates on dine-in and
                takeout.
                <br />
                <br />
                Thank you for your support!
              </div>
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
          </div>
          {/* <Button buttonText='LEARN MORE ABOUT FRASERS' buttonLink='/about' /> */}
        </section>
        <section id='menu' className='container'>
          <h1 className='header hidden-header'>MENU</h1>
          {/* <MenuSection category='Starters' /> */}
          {/* <MenuSection category='Entrees' /> */}
          {/* <Button buttonText='SEE FULL MENU ==>' buttonLink='/menu' /> */}
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
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }
          .hidden-header {
            padding: 0;
            visibility: hidden;
          }
          .container {
            width: 100vw;
            max-width: 1224px;
            background-color: var(--surface-color);

            /* background: var(--background-color); */
          }
          .double-wrapper {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
          }

          @media (min-width: 460px) {
          }
        `}</style>
      </Layout>
    </>
  );
}
