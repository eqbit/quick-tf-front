import React, { memo } from 'react';
import classNamesBind from 'classnames/bind';
import { ConnectedTradesList } from '../components/connected-trades-list';
import { Container } from '../../../components/ui/container';
import styles from './index.module.scss';

const cn = classNamesBind.bind(styles);
const CLASS_NAME = 'page-layout';

const TradesMadePageLayoutComponent = () => {
  return (
    <Container>
      <div className={cn(CLASS_NAME)}>
        <ConnectedTradesList/>
      </div>
    </Container>
  )
};

export const TradesMadePageLayout = memo(TradesMadePageLayoutComponent);
