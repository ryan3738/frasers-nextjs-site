import MenuItem from './MenuItem';
import { MenuCollectionMenusSections } from '../.tina/__generated__/types';

interface MenuSectionProps {
  category: string;
  section: MenuCollectionMenusSections;
}

export default function MenuSection({ section,
  category
}: MenuSectionProps): JSX.Element {
  return (
    <div id={category} className="menu-container">
      <h2 className="menu-header">{section.name}</h2>
      <div className="line" />
      <div className="menu-section">
      {
          section.items.filter(item => item.available === true).map(
            item => <MenuItem key={item.name} item={item}  />
          )
      }
      </div>
      <style jsx>{`
        .menu-header {
          display: inline-block;
          padding: 3rem 0 0;
        }
        .menu-section {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
            grid-gap: 5px;
            padding: 5%;
          }
        .line {
          border: 0.5px solid var(--primary-color-desaturated);
          width: 100%;
          height: 0px;
        }
      `}</style>
    </div>
  );
}
