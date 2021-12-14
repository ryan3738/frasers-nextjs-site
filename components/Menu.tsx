import MenuSection from "./MenuSection"
import NavBar from "./NavBar"

interface MenuProps {
    categories: string[];
    pathName: string;
    menus: any;
}

const Menu = ({ menus, categories, pathName }:MenuProps) => {
    if (!menus) {
        return <div>No Menus Found</div>
    }
    const menu = menus.find(menu => menu.name === 'Dinner');
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