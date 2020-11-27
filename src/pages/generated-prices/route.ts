import { GeneratedPricesPage } from './';
import hatRout from './children/hat/route';

const route = {
  name: 'generated-prices',
  path: '/generated-prices',
  page: GeneratedPricesPage,
  children: [hatRout],
};

export default route;
