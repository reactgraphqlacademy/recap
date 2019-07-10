import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Header from "./Header";
import Photos from "./Photos";

const App = () => (
  <React.Fragment>
    <Header />
    <section>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/photos" />} />
        <Route path="/photos" component={Photos} />
      </Switch>
    </section>
  </React.Fragment>
);

export default App;
