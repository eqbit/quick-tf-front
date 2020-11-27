import React, { useEffect, useMemo, useState } from 'react';
import { getRoute } from './utils';
import { Router, State } from 'router5';

type Props = {
  router: Router;
  initialRoute: State;
};

export const RouteSwitcher = ({ router, initialRoute }: Props) => {
  const [route, setRoute] = useState<State>(initialRoute);

  useEffect(() => {
    router.subscribe((state) => {
      setRoute(state.route);
    });
  }, [router]);

  const name = route ? route.name : '';
  const currentRoute = useMemo(() => getRoute(name), [name]);

  if (!currentRoute) {
    return null;
  }

  const Page = currentRoute.page;

  return <Page/>
};
