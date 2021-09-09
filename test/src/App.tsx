import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { LoginPage } from "./login";
import { List } from "../src/components/Films/list";
import { AuthProvider, AuthRouteComponent } from "./core";

export const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <LoginPage />
          </Route>
          <AuthRouteComponent path="/list">
            <List />
          </AuthRouteComponent>
          {/* <AuthRouteComponent path="/list">
            <ListPage />
          </AuthRouteComponent>
          <AuthRouteComponent path="/detail">
            <DetailPage />
          </AuthRouteComponent> */}
        </Switch>
      </Router>
    </AuthProvider>
  );
};

export default App;
