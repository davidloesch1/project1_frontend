import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Dashboard from "./Dashboard";
import * as serviceWorker from "./serviceWorker";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/" component={App} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
