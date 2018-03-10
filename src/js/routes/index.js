import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Archives from "../components/Archives/Archives";
import Error404 from "../Error404";
import Featured from "../components/Featured/Featured";
import Home from "../components/Home";
import Layout from "../components/Layout/Layout";
import Settings from "../components/Settings/Settings";

const supportsHistory = 'pushState' in window.history;

export default () => (
  <BrowserRouter forceRefresh={!supportsHistory}>
    <Layout>
      <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/archives" component={Archives}></Route>
          <Route path="/featured" component={Featured}></Route>
          <Route path="/settings" component={Settings}></Route>
          <Route component={Error404} />
      </Switch>
    </Layout>
  </BrowserRouter>
);
