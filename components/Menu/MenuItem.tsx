import { MenuSectionsItems} from '../../.tina/__generated__/types'

interface MenuItemProps {
  item: MenuSectionsItems;
}

const getDietaryPreferences = ({modifiers}) => {
  return
}

export default function MenuItem({ item }) {
  return (
    <>
      <div key={item.name} className="menu-item">
        <h3 className="primary-color">{item.name}</h3>
        {item.description ? (
          <>
            <div dangerouslySetInnerHTML={{ __html: item.description }} />
            <br />
          </>
        ) : (
          ''
        )}
        <div className="primary-color" aria-label="price">{item.price}</div>
        {item.modifiers ? (
          item.modifiers.map(modifier => {
            return (
            <div key={modifier.name} className="modifier">
              {modifier.name}&nbsp;
              <span className="primary-color">{modifier.price}</span>
              <br />
            </div>
            )
          })
        ) : (
          ''
        )}

        {item.dietary ? (
          <>
            <br />
            <div className="dietary-preferences">{item.dietary.map((preference, index )=>{
              if (item.dietary.length === 1 || index === item.dietary.length - 1) {
                return `${preference}`
              }
              return `${preference} | `
            })}</div>
          </>
        ) : (
          ''
        )}
        <style jsx>{`
          .menu-item {
            text-align: left;
            border-color: var(--primary-color-desaturated);
            border-radius: 7px;
            padding: 5%;
            background: var(--surface-color);
            border-color: var(--primary-color-desaturated);
          }
          .primary-color {
            color: var(--primary-color-desaturated);
          }
          .dietary-preferences {
            font-size: 0.78405rem;
            line-height: 1.1;
            text-transform: uppercase;
          }
          .modifier {
            text-transform: uppercase;
          }
        `}</style>
      </div>
    </>
  );
}
