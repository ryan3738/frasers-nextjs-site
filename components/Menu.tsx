import MenuSection from "./MenuSection"
import NavBar from "./NavBar"

interface MenuProps {
    categories: string[];
    pathName: string;

}

export const Menu = ({categories, pathName}:MenuProps) => {
    const links = categories.map(category => {
        return { href: `${pathName}#${category}`, text: category}});
    console.log('LINKS', links);
   return (
        <>
            {categories.map((category) => <MenuSection key={category} category={category}/>)}
            <NavBar showHomeLink={false} links={links} position='sticky' location='bottom' />
        </>

       )
}