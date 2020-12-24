import React, { memo, useCallback, useEffect, useRef, useState } from 'react';
import { NiceDealsPageLayout } from './page';
import { niceDealsRequest } from '../../api/requests/listings';
import { NiceDeal } from '../../api/requests/listings/types';

const DEFAULT_PROFIT_PERCENT = 20;

const Page = () => {
  const [deals, setDeals] = useState<NiceDeal[]>([]);
  const fetchDealsInterval = useRef<any>();

  const [profitPercent, setProfitPercent] = useState(DEFAULT_PROFIT_PERCENT);

  const fetchDeals = useCallback(() => new Promise<void>(resolve => {
    niceDealsRequest(100 - profitPercent).then((response) => {
      if (response?.data) {
        setDeals(response?.data);
      }

      resolve();
    });
  }), [profitPercent]);

  useEffect(() => {
    if (fetchDealsInterval.current) {
      clearInterval(fetchDealsInterval.current);
    }
    fetchDealsInterval.current = setInterval(fetchDeals, 10 * 1000);
  }, [fetchDeals]);

  useEffect(() => {
    fetchDeals();

    return () => {
      if (fetchDealsInterval.current) {
        clearInterval(fetchDealsInterval.current);
      }
    }
  }, [fetchDeals, profitPercent]);

  const handleProfitPercentChange = (value: number) => {
    setProfitPercent(value);
  };

  return (
    <NiceDealsPageLayout
      deals={deals}
      profitPercent={profitPercent}
      onProfitPercentChange={handleProfitPercentChange}
    />
  );
};

export const NiceDealsPage = memo(Page);
