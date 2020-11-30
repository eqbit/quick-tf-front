import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useRoute } from 'react-router5';
import { GeneratedPricesListPageLayout } from './page';
import { fetchGeneratedBasePricesListAction } from '../../../../redux/generated-prices-module';

type Props = {
  fetchGeneratedBasePrices: (name: string) => void;
};

const Page = ({ fetchGeneratedBasePrices }: Props) => {
  const { route: { params: { name }} } = useRoute();

  useEffect(() => {
    fetchGeneratedBasePrices(name);
  }, [fetchGeneratedBasePrices, name]);

  return (
    <GeneratedPricesListPageLayout name={name}/>
  );
};

export const GeneratedPricesListPage = connect(
  () => ({}),
  {
    fetchGeneratedBasePrices: fetchGeneratedBasePricesListAction,
  })(Page);
