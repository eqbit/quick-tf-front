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
  return (
    <Provider store={store}>
      <AppLayout>
        <RouteSwitcher router={router}/>
      </AppLayout>
    </Provider>
  );
}

export default App;

