import React, { memo } from 'react';
import { RegisteredTrade } from '../../../../api/requests/trades/types';
import classNamesBind from 'classnames/bind';
import styles from './index.module.scss';
import { Link } from 'react-router5';

const CLASS_NAME = 'trades-made';
const cn = classNamesBind.bind(styles);

type Props = {
  tradesMade: RegisteredTrade[];
};

const Component = ({ tradesMade }: Props) => {
  return (
    <ul className={cn(CLASS_NAME)}>
      {tradesMade.map(trade => {
        const tradeDirection = trade.direction ? 'Sale' : 'Buy';

        return (
          <li key={trade.id}>
            <Link
              className={cn(`${CLASS_NAME}__row`)}
              routeName="unusuals.hat.hat-detail"
              routeParams={{ name: trade.name, effect: trade.effect }}
            >
              <div
                className={cn(
                  `${CLASS_NAME}__cell`,
                  `${CLASS_NAME}__cell--${tradeDirection.toLowerCase()}`
                )}
              >
                {`${tradeDirection}`}
              </div>

              <div
                className={cn(
                  `${CLASS_NAME}__cell`,
                  `${CLASS_NAME}__cell--time`
                )}
              >
                {`${new Date(Number(trade.timestamp)).toLocaleDateString('ru')}`}
              </div>

              <div
                className={cn(
                  `${CLASS_NAME}__cell`,
                  `${CLASS_NAME}__cell--item-name`,
                  `${CLASS_NAME}__cell--${trade.quality.toLowerCase()}`,
                )}
              >
                {`${trade.effect !== 'none' ? trade.effect : trade.quality} ${trade.name}`}
              </div>

              <div
                className={cn(
                  `${CLASS_NAME}__cell`,
                  `${CLASS_NAME}__cell--currency`
                )}
              >
                {Boolean(trade.keys) && <span>{`${trade.keys} keys`}</span>}
                {Boolean(trade.metal) && <span>{`${trade.metal} ref`}</span>}
              </div>
            </Link>
          </li>
        )
      })}
    </ul>
  );
};

export const TradesMadeView = memo(Component);
