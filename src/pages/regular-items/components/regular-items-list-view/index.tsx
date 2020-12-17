import React, { memo, useMemo, useState } from 'react';
import classNamesBind from 'classnames/bind';
import styles from './index.module.scss';
import { RegularItem } from '../../../../api/requests/prices/types';
import { ItemGrid } from '../../../../components/item-grid';
import { Item } from '../../../../components/item-grid/item';
import { EItemQualities } from '../../../../data';
import { SearchBar } from '../../../../components/search-bar';

const CLASS_NAME = 'trades-made';
const cn = classNamesBind.bind(styles);

type Props = {
  regularItems: RegularItem[];
};

const Component = ({ regularItems }: Props) => {
  const [searchValue, setSearchValue] = useState('');

  const filteredItems = useMemo(() => {
    return regularItems
      .filter(item => item.name.toLowerCase().includes(searchValue.toLowerCase()))
      .sort()
  }, [regularItems, searchValue]);

  return (
    <div className={cn(CLASS_NAME)}>
      <div>
        <SearchBar value={searchValue} onChange={setSearchValue} placeholder="Type in a hat name"/>
      </div>
      <div>
        <ItemGrid>
          {filteredItems.map(({ name, quality, imageUrl, value, value_high, currency }) => (
            <a
              key={`${quality}-${name}`}
              href={`https://backpack.tf/classifieds?item=${
                name
              }&quality=${
                // @ts-ignore
                EItemQualities[quality]
              }&tradable=1&craftable=1&australium=-1&killstreak_tier=0`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Item
                key={`${name}-${quality}`}
                name={name}
                imageUrl={imageUrl}
                price={`${value} ${currency}`}
                quality={quality}
              />
            </a>
          ))}
        </ItemGrid>
      </div>
    </div>
  );
};

export const RegularItemsListView = memo(Component);
