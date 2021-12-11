import MenuSection from "./MenuSection"
import NavBar from "./NavBar"
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



interface MenuProps {
    categories: string[];
    pathName: string;
}

const Menu = ({ data, categories, pathName }:MenuProps) => {
    data && console.log('DATA', data);
    const links = categories.map(category => {
        return { href: `${pathName}#${category}`, text: category}});
   return (
        <>
            {categories.map((category) => <MenuSection key={category} category={category}/>)}
            <NavBar showHomeLink={false} links={links} position='sticky' location='bottom' />
        </>
       )
}

export { Menu };