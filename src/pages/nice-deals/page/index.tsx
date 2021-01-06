import React, { memo } from 'react';
import classNamesBind from 'classnames/bind';
import { Container } from '../../../components/ui/container';
import styles from './index.module.scss';
import { NiceDeal } from '../../../api/requests/listings/types';
import { ItemWithLink } from '../../../components/item-grid/item';
import { ItemGrid } from '../../../components/item-grid';
import { Filter } from '../components/filter';
import { ItemWithPopup } from '../../../components/item-grid/item-with-popup';

const cn = classNamesBind.bind(styles);
const CLASS_NAME = 'page-layout';

type Props = {
  deals: NiceDeal[];
  onProfitPercentChange: (value: number) => void;
  onDepthChange: (value: number) => void;
  profitPercent: number;
  searchQuery: string;
  onSearch: (value: string) => void;
};

const Layout = (
  {
    deals,
    profitPercent,
    onProfitPercentChange,
    onDepthChange,
    onSearch,
    searchQuery,
  }: Props) => {
  return (
    <Container>
      <div className={cn(CLASS_NAME)}>
        <div className={cn(`${CLASS_NAME}__filter`)}>
          <Filter
            profitPercent={profitPercent}
            onProfitPercentChange={onProfitPercentChange}
            onDepthChange={onDepthChange}
            searchQuery={searchQuery}
            onSearch={onSearch}
          />
        </div>

        <div className={cn(`${CLASS_NAME}__content`)}>
            <ItemGrid>
              {deals.map((item) => (
                <ItemWithPopup
                  key={item.id}
                  date={new Date(item.date_time).toLocaleString('ru')}
                  qLink={{
                    isExternal: false,
                    routeName: 'unusuals.hat.hat-detail',
                    routeParams: { name: item.name, effect: item.effect }
                  }}
                  bpLink={{
                    isExternal: true,
                    url: `https://backpack.tf/stats/Unusual/${
                      item.name
                    }/Tradable/Craftable/${
                      item.effectIndex
                    }`,
                  }}
                >
                  <ItemWithLink
                    name={item.name}
                    imageUrl={item.imageUrl || ''}
                    price={`generated: ${item.generatedPrice}`}
                    secondPrice={`suggested: ${item.bptfPrice}`}
                    thirdPrice={`listing: ${item.listingPrice}`}
                    quality="Unusual"
                    effectName={`${item.effect} ${item.name}`}
                    effectImg={`https://backpack.tf/images/440/particles/${item.effectIndex}_380x380.png`}
                    link={{
                      isExternal: true,
                      url: `https://backpack.tf/classifieds?item=${
                        item.name
                      }&quality=5&tradable=1&craftable=1&australium=-1&particle=${
                        item.effectIndex
                      }&killstreak_tier=0`
                    }}
                  />
                </ItemWithPopup>
              ))}
            </ItemGrid>
        </div>
      </div>
    </Container>
  )
};

export const NiceDealsPageLayout = memo(Layout);
