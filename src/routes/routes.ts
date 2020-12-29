import { FC } from 'react';
import home from '../pages/home/route';
import tradesMade from '../pages/trades-made/route'
import unusuals from '../pages/generated-prices/route';
import niceDeals from '../pages/nice-deals/route';

type Route = {
  name: string;
  path: string;
  page: FC;
  children?: Route[];
};

export const routes: Route[] = [
  home,
  tradesMade,
  unusuals,
  niceDeals,
];
