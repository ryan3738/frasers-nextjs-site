import { MenuCollectionMenusSectionsItems} from '../.tina/__generated__/types'

interface MenuItemProps {
  item: MenuCollectionMenusSectionsItems;
}

export default function MenuItem({ item }) {
  // console.log("ITEM", item)
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
        <div className="primary-color">{item.price}</div>
        {item.modifiers ? (
          item.modifiers.map(modifier => {
            return (
            <>
              {modifier.name}&nbsp;
              <span className="primary-color">{modifier.price}</span>
              <br />
            </>
            )
          })
        ) : (
          ''
        )}

        {item.dietary ? (
          <>
            <br />
            <div className="dietary-preferences">{item.dietary}</div>
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
        `}</style>
      </div>
    </>
  );
}
