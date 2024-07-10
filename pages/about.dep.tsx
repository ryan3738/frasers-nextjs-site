import Head from 'next/head';

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>MENU</title>
      </Head>
      <section className="menu-container"></section>
      <style jsx>{`
        .menu-container {
          width: 100vw;
          max-width: 1200px;
          place-self: center;
        }
      `}</style>
    </>
  );
}
