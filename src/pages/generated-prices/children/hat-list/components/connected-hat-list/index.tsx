import React from 'react';
import { connect } from 'react-redux';
import { ReduxStateType } from '../../../../../../types/redux/state';
import { HatListView } from '../hat-list-view';

type OwnProps = {
  name: string;
};

type Props = OwnProps & ReturnType<typeof mapStateToProps>;

const Component = ({ name, item }: Props) => {
  return (
    <>
      {Boolean(item) && <HatListView basePrices={item.prices} schema={item.schema}/>}
    </>
    );
};

const mapStateToProps = (state: ReduxStateType, { name }: OwnProps) => ({
  item: state.generatedPrices.items[name]
});

export const ConnectedHatList = connect(
  mapStateToProps,
  {},
)(Component);
