import MenuSection from "./MenuSection"
import NavBar from "../NavBar"

interface MenuProps {
    categories: string[];
    pathName: string;
    menu: any;
}

const Menu = ({ menu, categories, pathName }:MenuProps) => {
    if (!menu) {
        return <div>No Menus Found</div>
    }
    // const menu = menu[0];
    const links = categories.map(category => {
        return { href: `${pathName}#${category}`, text: category}});
   return (
        <>
            {categories.map((category) =>{
                const section = menu.sections.find(section => section.name === category);
                return<MenuSection section={section} key={category} category={category}/>})}
            <NavBar showHomeLink={false} links={links} position='sticky' location='bottom' />
        </>
       )
}

export { Menu };