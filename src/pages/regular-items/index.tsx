import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchRegularItemsAction } from '../../redux/regular-items-module';
import { RegularItemsPageLayout } from './page';

type Props = {
  fetchRegularItems: () => void;
};

const Page = ({ fetchRegularItems }: Props) => {
  useEffect(() => {
    fetchRegularItems();
  }, [ fetchRegularItems ]);
  return (
    <RegularItemsPageLayout/>
  );
};

export const RegularItemsPage = connect(
  () => ({}),
  {
    fetchRegularItems: fetchRegularItemsAction,
  }
)(Page);
