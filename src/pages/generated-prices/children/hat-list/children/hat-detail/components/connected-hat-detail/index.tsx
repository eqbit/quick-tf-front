import React from 'react';
import { connect } from 'react-redux';
import { ReduxStateType } from '../../../../../../../../types/redux/state';
import { HatDetailView } from '../hat-detail-view';
import { UnusualPrices } from '../../../../../../../../api/requests/prices/types';

type OwnProps = {
  name: string;
  quality: string;
  effect?: string;
  prices?: UnusualPrices;
};

type Props = OwnProps & ReturnType<typeof mapStateToProps>;

const Component = (props: Props) => {
  return (
    <HatDetailView {...props} />
  );
};

const mapStateToProps = (state: ReduxStateType, { name, quality, effect }: OwnProps) => {
  const itemKey = `${quality} ${effect ? `${effect} ` : ''}${name}`;
  return {
    registeredListings: state.registeredListings[itemKey],
  }
};

export const ConnectedHatDetail = connect(
  mapStateToProps,
  {},
)(Component);
