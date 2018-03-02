import React from "react";
import ReactDOM from "react-dom";

// import { Router, Route, IndexRoute, hashHistory } from "react-router";
import { Router, Route, BrowserRouter, IndexRoute } from "react-router-dom";

// import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';

import Layout from "./components/Layout/Layout";

const app = document.getElementById('app');

ReactDOM.render(
  <BrowserRouter>
    <Route path="/" component={Layout}></Route>
  </BrowserRouter>,
app);
