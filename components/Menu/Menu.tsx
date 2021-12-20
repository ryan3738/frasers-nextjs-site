import MenuSection from "./MenuSection"
import NavBar from "../NavBar"
import { Menu } from '../../.tina/__generated__/types';

interface MenuProps {
    sections: string[];
    pathName: string;
    menu: Menu;
}

const Menu = ({ menu, sections, pathName }:MenuProps) => {
    if (!menu) {
        return <div>No Menu Found</div>
    }
    const links = sections.map(section => {
    return { href: `${pathName}#${section}`, text: section}});

    if (!menu) { return <div>No Menu Found</div> }
   return (
        <>
            {sections.map((item) =>{
                const section = menu?.sections?.find(section => section.name === item);
                return<MenuSection section={section} key={item} category={item}/>})}
            <NavBar showHomeLink={false} links={links} position='sticky' location='bottom' />
        </>
       )
}

export { Menu };