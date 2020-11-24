import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux";
import { HomePage } from "./pages/home";

function App() {
  return (
    <Provider store={store}>
      <HomePage />
    </Provider>
  );
}

export default App;
