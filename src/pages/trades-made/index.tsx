import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchRegisteredTradesAction } from '../../redux/registered-trades-module';
import { RegisteredTrade } from '../../api/requests/trades/types';
import { TradesMadePageLayout } from './page';

type Props = {
  tradesMade: RegisteredTrade[];
  fetchRegisteredTrades: () => void;
};

const TradesMadePageComponent = ({ fetchRegisteredTrades, tradesMade }: Props) => {
  useEffect(() => {
    fetchRegisteredTrades();
  }, [ fetchRegisteredTrades ]);
  return (
    <TradesMadePageLayout/>
  );
};

export const TradesMadePage = connect(
  () => ({}),
  {
    fetchRegisteredTrades: fetchRegisteredTradesAction,
  }
)(TradesMadePageComponent);
