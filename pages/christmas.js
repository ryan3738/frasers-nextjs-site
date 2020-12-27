import Head from 'next/head'
import { SRLWrapper } from 'simple-react-lightbox'
import Image from 'next/image'
import Layout from '../components/layout'

export default function ChristmasDinner() {
  return (
    <Layout>
      <Head>
        <title>CHRISTMAS DINNER</title>
      </Head>
      <section className="menu-container">
        <h1>Christmas Dinner</h1>
        <SRLWrapper>
          <a href="/images/2020-christmas-takeout-square.jpeg">
            <Image
              src="/images/2020-christmas-takeout-square.jpeg"
              alt="Christmas Dinner"
              width="650"
              height="650"
            />
          </a>
        </SRLWrapper>
      </section>
      <style jsx>{`
        .menu-container {
          width: 100vw;
          max-width: 1200px;
          place-self: center;
        }
      `}</style>
    </Layout>
  )
}
