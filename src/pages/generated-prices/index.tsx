import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchGeneratedBasePricesAction } from '../../redux/generated-prices-module';
import { GeneratedPricesPageLayout } from './page';

type Props = {
  fetchGeneratedBasePrices: () => void;
};

const Page = ({ fetchGeneratedBasePrices}: Props) => {
  useEffect(() => {
    fetchGeneratedBasePrices();
  }, [ fetchGeneratedBasePrices ]);
  return (
    <GeneratedPricesPageLayout/>
  );
};

export const GeneratedPricesPage = connect(
  null,
  {
    fetchGeneratedBasePrices: fetchGeneratedBasePricesAction,
  }
)(Page);
