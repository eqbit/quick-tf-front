import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useRoute } from 'react-router5';
import { fetchRegisteredListingsAction } from '../../../../../../redux/registered-listings-module';
import { RegisteredListingsRequestOptions } from '../../../../../../api/requests/listings';
import { HatDetailPageLayout } from './page';

type Props = {
  fetchRegisteredListings: (options: RegisteredListingsRequestOptions) => void;
};

const Page = ({ fetchRegisteredListings }: Props) => {
  const { route: { params: { name, effect }} } = useRoute();
  useEffect(() => {
    fetchRegisteredListings({
      name,
      quality: 'Unusual',
      effect,
    });
  }, [effect, fetchRegisteredListings, name]);

  return (
    <HatDetailPageLayout
      name={name}
      quality="Unusual"
      effect={effect}
    />
  );
};

export const GeneratedUnusualHatDetailPage = connect(
  () => ({}),
  {
    fetchRegisteredListings: fetchRegisteredListingsAction
  })(Page);
