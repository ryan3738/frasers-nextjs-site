import Head from 'next/head';
import Layout from './Layout';
import styles from '../styles/styles.module.css';
import { Menu } from './Menu';
import { useRouter } from "next/router";
import type { PostsDocument } from "../.tina/__generated__/types";
import { getStaticPropsForTina, staticRequest } from 'tinacms'

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



export default function MenuPage(props) {
  const {pathname} = useRouter();
  const menuCategories = ['Starters', 'Entrees'];
  props.data && console.log('DATA', props.data);
  if (props) {
    console.log('DATA2',props)
  }
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


export const getStaticProps = async ({ params }) => {
  const tinaProps = (await getStaticPropsForTina({
    query: `#graphql
      query getMenuQuery($relativePath: String!) {
        getMenuDocument(relativePath: $relativePath) {
          data {
      name
      section {
        name
        item {
          name
          description
          price
          dietary
          modifier {
            name
            price
          }
          available
        }
      }
    }
        }
      }
    `,
    variables: { relativePath: `main.md` },
  })) as { data: { getMenuDocument: PostsDocument } };
  return {
    props: {
      ...tinaProps,
    },
  };
};