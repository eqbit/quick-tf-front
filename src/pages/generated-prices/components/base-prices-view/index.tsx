import React, { memo, useMemo } from 'react';
import { GeneratedBasePrice } from '../../../../api/requests/prices/types';
import { Link } from 'react-router5';
import { ItemGrid } from '../../../../components/item-grid';
import { Item } from '../../../../components/item-grid/item';

type Props = {
  basePrices: GeneratedBasePrice[];
};

const Component = ({ basePrices }: Props) => {
  const filteredPrices = useMemo(() => {
    return basePrices.sort((a, b) => Number(b.price) - Number(a.price))
  }, [ basePrices ]);

  return (
    <ItemGrid>
      {filteredPrices.map((item) => (
        <Link
          key={item.id}
          routeName="generated-prices.hat"
          routeParams={{ name: item.name }}
        >
          <Item
            name={item.name}
            imageUrl={item.imageUrl}
            price={`base: ${Math.floor(Number(item.price) * 100) / 100}`}
          />
        </Link>
      ))}
    </ItemGrid>
  );
};

export const BasePricesView = memo(Component);
