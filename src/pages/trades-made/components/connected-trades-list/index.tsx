import React, { useMemo } from 'react';
import { connect } from 'react-redux';
import { ReduxStateType } from '../../../../types/redux/state';
import { RegisteredTrade } from '../../../../api/requests/trades/types';
import { TradesMadeView } from '../trades-list-view';

type Props = {
  tradesMade: RegisteredTrade[];
};

const Component = ({ tradesMade }: Props) => {
  const sortedTradesMade = useMemo(() => {
    return tradesMade.sort((a, b) => Number(b.timestamp) - Number(a.timestamp))
  }, [tradesMade]);
  return <TradesMadeView tradesMade={sortedTradesMade}/>
};

const mapStateToProps = (state: ReduxStateType) => ({
  tradesMade: state.registeredTrades.trades,
});

export const ConnectedTradesList = connect(
  mapStateToProps,
  {}
)(Component);
