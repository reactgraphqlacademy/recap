import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Header from "./Header";

import Photos from "./Photos";

const App = () => (
  <div className="App">
    <Header />
    <section>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/photos" />} />
        <Route path="/photos" component={Photos} />
      </Switch>
    </section>
  </div>
);

export default App;
