import { GeneratedPricesPage } from './';
import hatRout from './children/hat-list/route';

const route = {
  name: 'unusuals',
  path: '/unusuals',
  page: GeneratedPricesPage,
  children: [hatRout],
};

export default route;
