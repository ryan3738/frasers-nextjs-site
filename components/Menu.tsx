import MenuSection from "./MenuSection"
import NavBar from "./NavBar"




interface MenuProps {
    categories: string[];
    pathName: string;
}

const Menu = ({ categories, pathName }:MenuProps) => {
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