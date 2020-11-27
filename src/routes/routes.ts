import home from '../pages/home/route';
import tradesMade from '../pages/trades-made/route'
import generatedPrices from '../pages/generated-prices/route';
import { FC } from 'react';

type Route = {
  name: string;
  path: string;
  page: FC;
  children?: Route[];
};

export const routes: Route[] = [
  home,
  tradesMade,
  generatedPrices,
];
