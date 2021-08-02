import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Search from "./pages/Search/Search";
import Detail from "./pages/Detail/Detail";
import Home from "./pages/Home/Home";
import "./App.css";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/search" component={Search} />
      <Route path="/detail/:caracterId" component={Detail} />
      <Route path="/" component={Home} />
    </Switch>
  </BrowserRouter>
);
export default App;
