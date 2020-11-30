import React, { memo, useMemo } from 'react';
import { ItemGrid } from '../../../../../../components/item-grid';
import { Item } from '../../../../../../components/item-grid/item';
import { GeneratedBasePriceItem } from '../../../../../../api/requests/prices/types';
import { ItemSchema } from '../../../../../../types/api';

type Props = {
  basePrices: GeneratedBasePriceItem[];
  schema: ItemSchema;
};

const Component = ({ basePrices, schema }: Props) => {
  const filteredPrices = useMemo(() => {
    return basePrices.sort((a, b) => Number(b.price) - Number(a.price))
      .map((item): any => ({
        ...item,
        price: `base: ${Math.floor(Number(item.price) * 100) / 100}`,
        effectImg: `https://backpack.tf/images/440/particles/${item.effectId}_380x380.png`,
        link: `https://backpack.tf/classifieds?item=${item.name}&quality=5&tradable=1&craftable=1&australium=-1&particle=${item.effectId}&killstreak_tier=0`
      }))
  }, [ basePrices ]);

  return (
    <ItemGrid>
      {filteredPrices.map((item) => (
        //<Link
          //key={item.id}
          //routeName="generated-prices.hat"
          //routeParams={{ name: item.name }}
        //>
        <a
          key={item.id}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Item
            name={item.name}
            imageUrl={schema.imageUrl}
            price={item.price}
            effectName={item.effect}
            effectImg={item.effectImg}
          />
        </a>

        //</Link>
      ))}
    </ItemGrid>
  );
};

export const HatListView = memo(Component);
