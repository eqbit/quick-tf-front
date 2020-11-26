import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchRegisteredTradesAction } from '../../redux/registered-trades-module';
import { TradesMadePageLayout } from './page';

type Props = {
  fetchRegisteredTrades: () => void;
};

const Page = ({ fetchRegisteredTrades }: Props) => {
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
)(Page);
