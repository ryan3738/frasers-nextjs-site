import { MenuSectionsItems } from '../../.tina/__generated__/types';
interface MenuItemProps {
  item: MenuSectionsItems;
}

export default function MenuItem({ item }: MenuItemProps): JSX.Element {
  return (
    <>
      <div key={item.name} className="menu-item">
        <h3 className="primary-color">{item.name}</h3>
        {item.description ? (
          <>
            <div dangerouslySetInnerHTML={{ __html: item.description }} />
          </>
        ) : (
          ''
        )}
        {item.price > 0 && (
          <div
            className="primary-color item-detail"
            aria-label={`$${item.price}`}
          >
            {item.price}
          </div>
        )}
        {item.modifiers
          ? item.modifiers.map(modifier => {
              return (
                <div key={modifier.name} className="modifier item-detail">
                  {modifier.name}&nbsp;
                  {modifier.price > 0 && (
                    <span
                      className="primary-color"
                      aria-label={`$${modifier.price}`}
                    >
                      {modifier.price}
                    </span>
                  )}
                </div>
              );
            })
          : ''}
        {item.dietary ? (
          <>
            <div className="dietary-preferences item-detail">
              {item.dietary.map((preference, index) => {
                if (
                  item.dietary.length === 1 ||
                  index === item.dietary.length - 1
                ) {
                  return `${preference}`;
                }
                return `${preference} | `;
              })}
            </div>
          </>
        ) : (
          ''
        )}
        <style jsx>{`
          .menu-item {
            text-align: left;
            border-color: var(--primary-color-desaturated);
            border-radius: 7px;
            padding: 1rem;
            background: var(--surface-color);
            border-color: var(--primary-color-desaturated);
          }
          .primary-color {
            color: var(--primary-color-desaturated);
          }
          .modifier {
            text-transform: uppercase;
            font-size: 0.85028rem;
          }
          .dietary-preferences {
            font-size: 0.78405rem;
            line-height: 1.1;
            text-transform: uppercase;
          }
          .item-detail {
            margin: 1rem 0 0 0;
          }
        `}</style>
      </div>
    </>
  );
}
