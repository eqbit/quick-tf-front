import React from 'react';
import { connect } from 'react-redux';
import { ReduxStateType } from '../../../../types/redux/state';
import { RegisteredTrade } from '../../../../api/requests/trades/types';

type Props = {
  tradesMade: RegisteredTrade[];
};

const TradesList = ({ tradesMade }: Props) => {
  return (
    <ul>
      {tradesMade.map(trade => (
        <li key={trade.id}>
          <span>{`${trade.direction ? 'Sold ' : 'Bought '}`}</span>
          <span>{`${trade.effect} ${trade.name}`}</span> -
          <span>
            {
              `${
                trade.keys ? trade.keys + ' keys ' : ''
              }${
                trade.metal ? trade.metal + ' ref ' : ''
              }`
            }
          </span>
        </li>
      ))}
    </ul>
  );
};

const mapStateToProps = (state: ReduxStateType) => ({
  tradesMade: state.registeredTrades.trades,
});

export const ConnectedTradesList = connect(
  mapStateToProps,
  {}
)(TradesList);
