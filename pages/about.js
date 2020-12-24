import Head from 'next/head'
import Layout from '../components/layout'
import Double from '../components/double'

export default function About () {
  return (
        <Layout>
            <Head>
                <title>MENU</title>
            </Head>
            <section className="menu-container">
                <Double category="about" />
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
