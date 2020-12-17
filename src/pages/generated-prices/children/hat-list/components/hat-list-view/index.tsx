import React, { memo, useMemo, useState } from 'react';
import classNamesBind from 'classnames/bind';
import { ItemGrid } from '../../../../../../components/item-grid';
import { Item } from '../../../../../../components/item-grid/item';
import { GeneratedBasePriceItem } from '../../../../../../api/requests/prices/types';
import { ItemSchema } from '../../../../../../types/api';
import styles from './index.module.scss';
import { SearchBar } from '../../../../../../components/search-bar';

const cn = classNamesBind.bind(styles);
const CLASS_NAME = 'hat-list-view';

type Props = {
  basePrices: GeneratedBasePriceItem[];
  schema: ItemSchema;
};

const Component = ({ basePrices, schema }: Props) => {
  const [searchValue, setSearchValue] = useState('');

  const filteredPrices = useMemo(() => {
    return basePrices.sort((a, b) => Number(b.price) - Number(a.price))
      .filter(item => item.effect.toLowerCase().includes(searchValue.toLowerCase()))
      .map((item): any => ({
        ...item,
        price: `base: ${Math.floor(Number(item.price) * 100) / 100}`,
        effectImg: `https://backpack.tf/images/440/particles/${item.effectId}_380x380.png`,
        link: `https://backpack.tf/classifieds?item=${item.name}&quality=5&tradable=1&craftable=1&australium=-1&particle=${item.effectId}&killstreak_tier=0`
      }))
  }, [basePrices, searchValue]);

  return (
    <div className={cn(CLASS_NAME)}>
      <div className={cn(`${CLASS_NAME}__search-bar`)}>
        <SearchBar
          value={searchValue}
          onChange={setSearchValue}
          placeholder="Type in an effect name"
        />
      </div>

      <div className={cn(`${CLASS_NAME}__items-grid`)}>
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
                quality="Unusual"
              />
            </a>

            //</Link>
          ))}
        </ItemGrid>
      </div>
    </div>
  );
};

export const HatListView = memo(Component);
