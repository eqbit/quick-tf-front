import React, { memo, useMemo, useState } from 'react';
import classNamesBind from 'classnames/bind';
import { ItemGrid } from '../../../../../../components/item-grid';
import { ItemWithLink } from '../../../../../../components/item-grid/item';
import { GeneratedBasePriceItem } from '../../../../../../api/requests/prices/types';
import styles from './index.module.scss';
import { SearchBar } from '../../../../../../components/search-bar';
import { TSchemaItem } from '../../../../../../api/requests/items/types';

const cn = classNamesBind.bind(styles);
const CLASS_NAME = 'hat-list-view';

type Props = {
  basePrices: GeneratedBasePriceItem[];
  schema: TSchemaItem;
};

const Component = ({ basePrices, schema }: Props) => {
  const [searchValue, setSearchValue] = useState('');

  const filteredPrices = useMemo(() => {
    return basePrices.sort((a, b) => b.price - a.price)
      .filter(item => item.effect.toLowerCase().includes(searchValue.toLowerCase()))
      .map((item): any => ({
        ...item,
        effectImg: `https://backpack.tf/images/440/particles/${item.effectId}_380x380.png`,
        link: `https://backpack.tf/classifieds?item=${
          item.name
        }&quality=5&tradable=1&craftable=1&australium=-1&particle=${
          item.effectId
        }&killstreak_tier=0`
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
            <ItemWithLink
              key={item.id}
              name={item.name}
              imageUrl={schema.image_url}
              price={`generated: ${item.price}`}
              secondPrice={`suggested: ${item.bptfPrice}`}
              effectName={item.effect}
              effectImg={item.effectImg}
              quality="Unusual"
              link={{
                isExternal: false,
                routeName: 'unusuals.hat.hat-detail',
                routeParams: { name: item.name, effect: item.effect }
              }}
            />
          ))}
        </ItemGrid>
      </div>
    </div>
  );
};

export const HatListView = memo(Component);
