import React, { memo, useEffect, useState } from 'react';
import { NiceDealsPageLayout } from './page';
import { niceDealsRequest } from '../../api/requests/listings';
import { NiceDeal } from '../../api/requests/listings/types';

const Page = () => {
  const [deals, setDeals] = useState<NiceDeal[]>([]);

  const fetchDeals = async () => {
    const deals = await niceDealsRequest(60).then((response) => response?.data);
    if (deals) {
      setDeals(deals);
    }
  };

  useEffect(() => {
    fetchDeals().then(() => {
      setInterval(fetchDeals, 10 * 1000);
    })
  }, []);

  return (
    <NiceDealsPageLayout deals={deals}/>
  );
};

export const NiceDealsPage = memo(Page);
