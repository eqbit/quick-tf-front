import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./app";
import { RouterProvider } from 'react-router5';
import { configureRouter } from './routes/router';

const router = configureRouter();

ReactDOM.render(
  <RouterProvider router={router} >
    <App />
  </RouterProvider>,
  document.getElementById("root"));
