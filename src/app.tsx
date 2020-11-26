import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux";
import { RouteSwitcher } from './routes/route-switcher';
import { AppLayout } from './components/app-layout';


function App() {
  return (
    <Provider store={store}>
      <AppLayout>
        <RouteSwitcher/>
      </AppLayout>
    </Provider>
  );
}

export default App;

