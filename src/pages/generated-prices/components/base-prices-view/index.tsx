import React, { memo, useMemo } from 'react';
import { GeneratedBasePrice } from '../../../../api/requests/prices/types';
import styles from './index.module.scss';
import classNamesBind from 'classnames/bind';
import { Link } from 'react-router5';

const cn = classNamesBind.bind(styles);
const CLASS_NAME = 'base-prices-table';

type Props = {
  basePrices: GeneratedBasePrice[];
};

const Component = ({ basePrices }: Props) => {
  const filteredPrices = useMemo(() => {
    return basePrices.sort((a, b) => Number(b.price) - Number(a.price))
  }, [ basePrices ]);

  return (
    <div className={cn(CLASS_NAME)}>
      <ul className={cn(`${CLASS_NAME}__list`)}>
        {filteredPrices.map(item => (
          <Link key={item.id} routeName="generated-prices.hat" routeParams={{ name: item.name }}>
            <li className={cn(`${CLASS_NAME}__item-wrapper`)}>
              <div className={cn(`${CLASS_NAME}__item`)}>
                <h4 className={cn(`${CLASS_NAME}__name`)}>{item.name}</h4>
                <img
                  className={cn(`${CLASS_NAME}__img`)}
                  src={item.imageUrl}
                  alt={item.name}
                />
                <span className={cn(`${CLASS_NAME}__price`)}>
                {`base: ${Math.floor(Number(item.price) * 100) / 100}`}
              </span>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export const BasePricesView = memo(Component);
