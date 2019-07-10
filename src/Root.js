import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PhotoList from "./PhotoList";
import Photo from "./Photo";

const Root = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={PhotoList} />
      <Route path="/:id" component={Photo} />
    </Switch>
  </Router>
);

export default Root;
