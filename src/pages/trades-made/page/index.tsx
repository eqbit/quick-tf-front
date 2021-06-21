import React, { memo } from 'react';
import classNamesBind from 'classnames/bind';
import { ConnectedTradesList } from '../components/connected-trades-list';
import { Container } from '../../../components/ui/container';
import styles from './index.module.scss';
import { ConnectedTradesChart } from '../components/connected-trades-chart'

const cn = classNamesBind.bind(styles);
const CLASS_NAME = 'page-layout';

const Layout = () => {
  return (
    <Container>
      <div className={cn(CLASS_NAME)}>
        <ConnectedTradesChart />
        <ConnectedTradesList/>
      </div>
    </Container>
  )
};

export const TradesMadePageLayout = memo(Layout);
