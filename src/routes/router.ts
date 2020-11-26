import createRouter from 'router5';
import browserPlugin from 'router5-plugin-browser'
import { routes } from './routes';

export const configureRouter = () => {
  const router = createRouter(routes, {
    defaultRoute: 'home',
    defaultParams: {},
    allowNotFound: false,
    caseSensitive: true,
    queryParamsMode: 'loose',
  });

  router.usePlugin(browserPlugin());

  router.start();

  return router;
};

