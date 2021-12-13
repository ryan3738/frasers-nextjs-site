import Head from 'next/head';
import styles from '../styles/styles.module.css';
import { Menu } from './Menu';
import { useRouter } from 'next/router';
import { getStaticPropsForTina, gql } from 'tinacms';

export default function MenuPage(properties) {
  const { pathname } = useRouter();
  const menuCategories = ['Starters', 'Entrees'];
  return (
    <>
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
    </>
  );
}

export const getStaticProps = async ({ params }) => {
  const tinaProperties = await getStaticPropsForTina({
    query: gql`
      query MenuQuery($relativePath: String!) {
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
    variables: { relativePath: `main.md` }
  });
  return {
    props: {
      ...tinaProperties
    }
  };
};
