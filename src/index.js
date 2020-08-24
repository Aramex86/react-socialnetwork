import store from "./components/Redux/redux-store";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
//import {BrowserRouter} from "react-router-dom";
//Rerender UI

ReactDOM.render(
  <HashRouter>
    <Provider store={store}>
      <App/>
    </Provider>
  </HashRouter>,
  document.getElementById("root")
);
