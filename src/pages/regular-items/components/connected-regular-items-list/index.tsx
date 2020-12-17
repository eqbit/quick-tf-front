import React from 'react';
import { connect } from 'react-redux';
import { ReduxStateType } from '../../../../types/redux/state';
import { RegularItemsListView } from '../regular-items-list-view';
import { RegularItem } from '../../../../api/requests/prices/types';

type Props = {
  regularItems: RegularItem[];
};

const Component = ({ regularItems }: Props) => {
  return <RegularItemsListView regularItems={regularItems}/>
};

const mapStateToProps = (state: ReduxStateType) => ({
  regularItems: state.regularItems.items,
});

export const ConnectedRegularItemsList = connect(
  mapStateToProps,
  {}
)(Component);
