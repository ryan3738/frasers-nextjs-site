import Head from 'next/head';
import Layout from './Layout';
import styles from '../styles/styles.module.css';
import { Menu } from './Menu';
import { useRouter } from "next/router";
import { getStaticPropsForTina, gql, staticRequest } from 'tinacms'

// const getStaticProps = async () => {
//     const query = `
//         query getMenuList{
//             name
//         }
//     `

//     let data = {}
//     try {
//         data = await staticRequest({query})
//     } catch {
//         // swallow errors related to document creation
//     }

//     return {
//         props: {
//             query,
//             data,
//             //myOtherProp: 'some-other-data',
//         },
//     }
// }

export const getStaticProps = async ({ params }) => {
  const tinaProperties = await getStaticPropsForTina({
    query: gql`
      query MenusQuery() {
        getMenuDocument(relativePath: "menu.json") {
          data {
            name
          }
        }
      }
    `,
    variables: {},
  });
  console.log('tinaProperties', tinaProperties);
  return {
    props: {
      ...tinaProperties
    }
  };
};

export default function MenuPage({props}) {
  const {pathname} = useRouter();
  const menuCategories = ['Starters', 'Entrees'];
  props.data && console.log('DATA', props.data);
  return (
    <Layout>
      <Head>
        <title>MENU</title>
      </Head>
      <section className="menu-container">
        <div className={styles.header}>
          <h1>MENU</h1>

        </div>
        <Menu pathName={pathname} categories={menuCategories} />
      </section>
      <style jsx>{`
        .menu-container {
          width: 100vw;
          max-width: 1200px;
          place-self: center;
        }
      `}</style>
    </Layout>
  );
}
