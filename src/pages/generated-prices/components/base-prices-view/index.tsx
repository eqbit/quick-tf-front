import React, { memo, useMemo, useState } from 'react';
import classNamesBind from 'classnames/bind';
import { GeneratedBasePrice } from '../../../../api/requests/prices/types';
import { Link } from 'react-router5';
import { ItemGrid } from '../../../../components/item-grid';
import { Item } from '../../../../components/item-grid/item';
import styles from './index.module.scss';
import { SearchBar } from '../../../../components/search-bar';

const cn = classNamesBind.bind(styles);
const CLASS_NAME = 'base-prices-view';

type Props = {
  basePrices: GeneratedBasePrice[];
};

const Component = ({ basePrices }: Props) => {
  const [searchValue, setSearchValue] = useState('');

  const filteredPrices = useMemo(() => {
    return basePrices
      .filter(item => item.name.toLowerCase().includes(searchValue.toLowerCase()))
      .sort((a, b) => Number(b.price) - Number(a.price))
  }, [basePrices, searchValue]);

  return (
    <div className={cn(CLASS_NAME)}>
      <div className={cn(`${CLASS_NAME}__search-bar`)}>
        <SearchBar value={searchValue} onChange={setSearchValue} placeholder="Type in a hat name"/>
      </div>

      <div className={cn(`${CLASS_NAME}__items-grid`)}>
        <ItemGrid>
          {filteredPrices.map((item) => (
            <Link
              key={item.id}
              routeName="unusuals.hat"
              routeParams={{ name: item.name }}
            >
              <Item
                name={item.name}
                imageUrl={item.imageUrl}
                price={`base: ${Math.floor(Number(item.price) * 100) / 100}`}
                quality="Unusual"
              />
            </Link>
          ))}
        </ItemGrid>
      </div>
    </div>
  );
};

export const BasePricesView = memo(Component);
