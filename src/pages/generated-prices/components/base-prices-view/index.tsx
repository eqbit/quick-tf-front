import React, { memo, useMemo, useState } from 'react';
import classNamesBind from 'classnames/bind';
import { GeneratedBasePrice } from '../../../../api/requests/prices/types';
import { ItemGrid } from '../../../../components/item-grid';
import { ItemWithLink } from '../../../../components/item-grid/item';
import styles from './index.module.scss';
import { SearchBar } from '../../../../components/search-bar';
import { getCleanDigit } from '../../../../utils/get-clean-digit';

const cn = classNamesBind.bind(styles);
const CLASS_NAME = 'base-prices-view';

type Props = {
  basePrices: GeneratedBasePrice[];
};

const Component = ({ basePrices }: Props) => {
  const [searchValue, setSearchValue] = useState('');

  const filteredPrices = useMemo(() => {
    return basePrices
      .filter(item => {
        if (item.name.toLowerCase().includes(searchValue.toLowerCase())) {
          return true;
        }

        if (item.used_by_classes && item.used_by_classes.find(className =>
          className.toLowerCase().includes(searchValue.toLowerCase()))
        ) {
          return true;
        }

        return false;
      })
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
            <ItemWithLink
              key={item.id}
              classes={item.used_by_classes}
              name={item.name}
              imageUrl={item.image_url}
              price={Number(item.price) ? `base: ${getCleanDigit(Number(item.price))}` : 'No data'}
              quality="Unusual"
              link={{
                isExternal: false,
                routeName: 'unusuals.hat',
                routeParams: { name: item.name }
              }}
            />
          ))}
        </ItemGrid>
      </div>
    </div>
  );
};

export const BasePricesView = memo(Component);
