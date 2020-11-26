import React from 'react';
import { RouteNode } from 'react-router5';
import { routes } from './routes';

const pageNode = '';

export const RouteSwitcher = () => {
  return (
    <RouteNode nodeName={pageNode}>
      {({ route }) => {
        if (!route) {
          return null;
        }

        const currentRoute = routes.find(routeItem => routeItem.name === route.name);

        if (!currentRoute) {
          return null;
        }

        const Page = currentRoute.page;

        return (
          <Page/>
        )
      }}
    </RouteNode>
  );
};
