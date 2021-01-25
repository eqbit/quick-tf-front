import React from 'react';
import { ReduxStateType } from '../../../../types/redux/state';
import { connect } from 'react-redux';
import { GeneratedBasePrice } from '../../../../api/requests/prices/types';
import { BasePricesView } from '../base-prices-view';

type Props = {
  basePrices: GeneratedBasePrice[];
};

const Component = ({ basePrices }: Props) => {
  return (
    <BasePricesView basePrices={basePrices}/>
  );
};

const mapStateToProps = (state: ReduxStateType) => ({
  basePrices: state.generatedPrices.basePrices
});

export const ConnectedBasePrices = connect(
  mapStateToProps,
  {},
)(Component);
