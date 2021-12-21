import MenuSection from "./MenuSection"
import NavBar from "../NavBar"
import { Menu } from '../../.tina/__generated__/types';
import { slugify } from '../../lib/slugify';

interface MenuProps {
    sections: string[];
    pathName: string;
    menu: Menu;
}

const Menu = ({ menu, sections, pathName }:MenuProps) => {
    if (!menu) {
        return <div>No Menu Found</div>
    }
    const links = menu.sections.map(section => {
    return { href: `${pathName}#${slugify(section.name)}`, text: section.name}});

    if (!menu) { return <div>No Menu Found</div> }
   return (
        <>
            {sections.map((item) =>{
                const section = menu?.sections?.find(section => section.name === item);
                return<MenuSection section={section} key={item} category={item} id={slugify(section?.name)}/>})}
            <NavBar showHomeLink={false} links={links} position='sticky' location='bottom' />
        </>
       )
}

export { Menu };