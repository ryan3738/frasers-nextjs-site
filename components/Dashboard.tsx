import Head from 'next/head';

import Layout, { meta } from './Layout';

export default function Dashboard(): JSX.Element {
  return (
    <Layout>
      <Head>
        <title>Dashboard | {meta.title}</title>
        <meta name="robots" content="noindex" />
      </Head>
      <div className="contact-content">
        <div id="contact-info">
          <h2>Dashboard</h2>
          <p>Click below to edit site details</p>
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
