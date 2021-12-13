import menuData from './menu-data.json';

interface MenuSectionProps {
    category: String;
    menuData: any;
}



const getModifier = ({ modifier, modifierPrice }) => {
    return modifier ? [{
        name: modifier,
        price: modifierPrice
    }] : null;
}

// "imageAlt": "",
//  "date": "2020-12-30",
// "imageSource": "/images/new-years-duck-pheasant-pate.jpg",
// Create function that returns image info in image object
const getImage = ({ imageUrl, imageAlt }: { imageUrl: String, imageAlt: String }) => {
    return imageUrl ? [{
        name: imageAlt,
        src: imageUrl
    }] : null;
}

const getMenuSection = ({ category, menuData }: MenuSectionProps) => {
    const menu = menuData.menu.filter(item => item.category === category);
    const migratedMenu = menu.map(item => {
        return {
            ...item,
            name: item.itemName,
            modifiers: getModifier({ modifier: item.modifier, modifierPrice: item.modifierPrice }),
            images: getImage({ imageUrl: item.imageSource, imageAlt: item.imageAlt })
        };
    })
    return migratedMenu;
}

console.log(getMenuSection({ category: 'Starters', menuData: menuData }));