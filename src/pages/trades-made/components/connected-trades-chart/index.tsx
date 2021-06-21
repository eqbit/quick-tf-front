import React, { useMemo } from 'react';
import { connect } from 'react-redux';
import { ReduxStateType } from '../../../../types/redux/state';
import { RegisteredTrade } from '../../../../api/requests/trades/types';
import { TradesChartView } from '../trades-chart-view'

type Props = {
  tradesMade: RegisteredTrade[];
};

const Component = ({ tradesMade }: Props) => {
  const sortedTradesMade = useMemo(() => {
    return tradesMade.sort((a, b) => Number(a.timestamp) - Number(b.timestamp))
  }, [tradesMade]);

  const data = useMemo(() => {
    const reducedData = sortedTradesMade.reduce<Record<string, number>>((result, current) => {
      const date = new Date(Number(current.timestamp)).toLocaleDateString('ru');
      result[date] = result[date] ? result[date] + 1 : 1;

      return result;
    }, {});
    return Object.entries(reducedData).map(([key, value]) => ([key, value])) as Array<[string, number]>
  }, [sortedTradesMade]);

  return <TradesChartView data={data}/>
};

const mapStateToProps = (state: ReduxStateType) => ({
  tradesMade: state.registeredTrades.trades,
});

export const ConnectedTradesChart = connect(
  mapStateToProps,
  {}
)(Component);
