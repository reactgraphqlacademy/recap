import React from "react";
import { Switch, Route } from "react-router-dom";
import PhotoGallery from "./PhotoGallery";
import PhotoDetail from "./PhotoDetail";

const Photos = ({ match }) => (
  <Switch>
    <Route exact path={match.url} component={PhotoGallery} />
    <Route path={`${match.url}/:id`} component={PhotoDetail} />
  </Switch>
);

export default Photos;
