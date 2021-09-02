import Head from 'next/head';
import Button from './Button';
import Layout, { siteTitle } from './Layout';

export default function Dashboard() {
  return (
    <Layout>
      <Head>
        <title>Dashboard | {siteTitle}</title>
        <meta name="robots" content="noindex" />
      </Head>
      <div className="contact-content">
        <div id="contact-info">
          <h2>Dashboard</h2>
          <p>Click below to edit site details</p>
          <Button
            buttonText="Edit Site Data"
            buttonLink="https://frasers-admin.netlify.app/admin/index.html"
          />
        </div>
      </div>
      <style jsx>{`
        .contact-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 2rem 1rem;
        }
        .social-media-container {
          display: flex;
          flex-direction: column;
          /* justify-content: flex-start; */
          /* align-items: flex-start; */
          margin: 10px;
        }
        .social-media-contents {
          display: flex;
          flex-flow: row wrap;
          justify-content: center;
        }
      `}</style>
    </Layout>
  );
}
