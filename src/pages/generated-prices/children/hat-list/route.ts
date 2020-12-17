import { GeneratedPricesListPage } from './';
import detailHatRoute from './children/hat-detail/route';

const route = {
  name: 'hat',
  path: '/:name',
  page: GeneratedPricesListPage,
  children: [detailHatRoute],
};

export default route;
