import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useRoute } from 'react-router5';
import { fetchRegisteredListingsAction } from '../../../../../../redux/registered-listings-module';
import { RegisteredListingsRequestOptions } from '../../../../../../api/requests/listings';
import { HatDetailPageLayout } from './page';
import { unusualPricesRequest } from '../../../../../../api/requests/prices/unusuals';
import { UnusualPrices } from '../../../../../../api/requests/prices/types';

type Props = {
  fetchRegisteredListings: (options: RegisteredListingsRequestOptions) => void;
};

const Page = ({ fetchRegisteredListings }: Props) => {
  const { route: { params: { name, effect }} } = useRoute();
  const [prices, setPrices] = useState<UnusualPrices>();

  useEffect(() => {
    fetchRegisteredListings({
      name,
      quality: 'Unusual',
      effect,
    });

    unusualPricesRequest(name, effect).then((response) => {
      if (response?.data) {
        setPrices(response.data);
      }
    })
  }, [effect, fetchRegisteredListings, name]);

  return (
    <HatDetailPageLayout
      name={name}
      quality="Unusual"
      effect={effect}
      prices={prices}
    />
  );
};

export const GeneratedUnusualHatDetailPage = connect(
  () => ({}),
  {
    fetchRegisteredListings: fetchRegisteredListingsAction
  })(Page);
