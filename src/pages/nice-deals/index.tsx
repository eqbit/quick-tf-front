import React, { memo, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { NiceDealsPageLayout } from './page';
import { niceDealsRequest } from '../../api/requests/listings';
import { NiceDeal } from '../../api/requests/listings/types';

const DEFAULT_PROFIT_PERCENT = 20;
const DEFAULT_DEPTH = 12;

const Page = () => {
  const [deals, setDeals] = useState<NiceDeal[]>([]);
  const fetchDealsInterval = useRef<any>();

  const [profitPercent, setProfitPercent] = useState(DEFAULT_PROFIT_PERCENT);
  const [depth, setDepth] = useState(DEFAULT_DEPTH);
  const [searchQuery, setSearchQuery] = useState('');

  const fetchDeals = useCallback(() => new Promise<void>(resolve => {
    niceDealsRequest({
      percent: 100 - profitPercent,
      depth,
    }).then((response) => {
      if (response?.data) {
        setDeals(response?.data);
      }

      resolve();
    });
  }), [depth, profitPercent]);

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
  }, [fetchDeals, profitPercent, depth]);

  const handleProfitPercentChange = (value: number) => {
    setProfitPercent(value);
  };

  const handleDepthChange = (value: number) => {
    setDepth(value);
  };

  const handleSearch = (value: string) => {
    setSearchQuery(value);
  };

  const filteredDeals = useMemo(() => {
    return deals.filter(deal =>
      deal.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      deal.effect.toLowerCase().includes(searchQuery.toLowerCase())
    )
  }, [deals, searchQuery]);

  return (
    <NiceDealsPageLayout
      deals={filteredDeals}
      profitPercent={profitPercent}
      onProfitPercentChange={handleProfitPercentChange}
      onDepthChange={handleDepthChange}
      searchQuery={searchQuery}
      onSearch={handleSearch}
    />
  );
};

export const NiceDealsPage = memo(Page);
