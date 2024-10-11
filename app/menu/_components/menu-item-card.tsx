import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { TypographyH3 } from '@/components/ui/typography';
import { MenuSectionsItems } from '@/tina/__generated__/types';

interface MenuItemCardProps {
  item: MenuSectionsItems;
}

export const MenuItemCard = ({ item }: MenuItemCardProps) => {
  return (
    <Card key={item.name} className="bg-accent/50">
      <CardHeader>
        <TypographyH3 className="uppercase text-accent-foreground">
          {item.name}
        </TypographyH3>
      </CardHeader>
      <CardContent>
        {item.description ? (
          <div dangerouslySetInnerHTML={{ __html: item.description }} />
        ) : (
          ''
        )}
        {item?.price && item.price > 0 && (
          <div
            className="mt-4 text-accent-foreground"
            aria-label={`$${item.price}`}
          >
            {item.price}
          </div>
        )}
        {item.modifiers
          ? item.modifiers.map(modifier => {
              return (
                <div key={modifier?.name} className="mt-4 text-sm uppercase">
                  {modifier?.name}&nbsp;
                  {modifier?.price && modifier?.price > 0 && (
                    <span
                      className="text-accent-foreground"
                      aria-label={`$${modifier?.price}`}
                    >
                      {modifier?.price}
                    </span>
                  )}
                </div>
              );
            })
          : ''}
        {item.dietary ? (
          <div className="mt-4 text-xs uppercase leading-5">
            {item.dietary.map((preference, index) => {
              if (
                item?.dietary &&
                (item.dietary.length === 1 || index === item.dietary.length - 1)
              ) {
                return `${preference}`;
              }
              return `${preference} | `;
            })}
          </div>
        ) : (
          ''
        )}
      </CardContent>
    </Card>
  );
};
