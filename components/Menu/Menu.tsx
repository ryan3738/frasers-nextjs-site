import MenuSection from "./MenuSection"
import NavBar from "../NavBar"
import { Menu } from '../../.tina/__generated__/types';

interface MenuProps {
    categories: string[];
    pathName: string;
    menu: Menu;
}

const Menu = ({ menu, categories, pathName }:MenuProps) => {
    if (!menu) {
        return <div>No Menu Found</div>
    }
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