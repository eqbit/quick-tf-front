import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux";
import { RouteSwitcher } from './routes/route-switcher';
import { AppLayout } from './components/app-layout';
import { Router } from 'router5';

type Props = {
  router: Router;
};

const App = ({ router }: Props) => {
  const route = router.getState();

  return (
    <Provider store={store}>
      <AppLayout>
        <RouteSwitcher router={router} initialRoute={route}/>
      </AppLayout>
    </Provider>
  );
};

export default App;

