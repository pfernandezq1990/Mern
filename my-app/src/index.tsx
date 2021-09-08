import React from "react";
import ReactDOM from "react-dom";
import { ToastContainer } from "react-toastify";

import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./components/login/login";
import Filmes from "./components/filmes/Filmes";

import "react-toastify/dist/ReactToastify.css";
import "bootswatch/dist/pulse/bootstrap.min.css";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="container p-4">
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/filmes" component={Filmes} />
        </Switch>
        <ToastContainer />
      </div>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
