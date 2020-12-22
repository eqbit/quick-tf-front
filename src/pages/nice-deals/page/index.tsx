import React, { memo } from 'react';
import classNamesBind from 'classnames/bind';
import { Container } from '../../../components/ui/container';
import styles from './index.module.scss';
import { NiceDeal } from '../../../api/requests/listings/types';
import { Item } from '../../../components/item-grid/item';
import { ItemGrid } from '../../../components/item-grid';

const cn = classNamesBind.bind(styles);
const CLASS_NAME = 'page-layout';

type Props = {
  deals: NiceDeal[];
};

const Layout = ({ deals }: Props) => {
  return (
    <Container>
      <div className={cn(CLASS_NAME)}>
        <ItemGrid>
          {deals.map((item) => (
            <a
              key={item.id}
              href={`https://backpack.tf/classifieds?item=${
                item.name
              }&quality=5&tradable=1&craftable=1&australium=-1&particle=${
                item.effectIndex
              }&killstreak_tier=0`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Item
                name={item.name}
                imageUrl={item.imageUrl || ''}
                price={`generated: ${item.generatedPrice}`}
                secondPrice={`listing: ${item.listingPrice}`}
                quality="Unusual"
                effectName={`${item.effect} ${item.name}`}
                effectImg={`https://backpack.tf/images/440/particles/${item.effectIndex}_380x380.png`}
                date={new Date(item.date_time).toLocaleString('ru')}
              />
            </a>
          ))}
        </ItemGrid>
      </div>
    </Container>
  )
};

export const NiceDealsPageLayout = memo(Layout);