import MenuItem from './MenuItem';
import { MenuSections } from '../../.tina/__generated__/types';
import Markdown from 'react-markdown';

interface MenuSectionProps {
  category: string;
  section: MenuSections;
  id: string;
}

export default function MenuSection({
  section,
  id,
}: MenuSectionProps): JSX.Element {
  if (!section) {
    return <div>No Menu Section Found</div>;
  }
  return (
    <div id={id} className="menu-container">
      <h2 className="menu-header">{section?.name}</h2>
      {section.notes && <Markdown>{section?.notes}</Markdown>}
      <div className="divider" />
      <div className="menu-section">
        {section?.items
          .filter(item => item.available === true)
          .map(item => (
            <MenuItem key={item.name} item={item} />
          ))}
      </div>
      <style jsx>{`
        .menu-header {
          display: inline-block;
          padding: 3rem 0 0;
        }
        .menu-section {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
          align-content: stretch;
          justify-content: stretch;
          grid-gap: 12px;
          padding: 5%;
        }
        .divider {
          border: 1px solid var(--primary-color-desaturated);
          width: 100%;
          height: 1px;
        }
      `}</style>
    </div>
  );
}
