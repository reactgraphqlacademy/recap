import React from "react";
import { Switch, Route } from "react-router-dom";
import PhotoGallery from "./PhotoGallery";
import PhotoDetail from "./PhotoDetail";

function Photos({ match }) {
  return (
    <Switch>
      <Route exact path={`${match.url}`} component={PhotoGallery} />
      <Route path={`${match.url}/:id`} component={PhotoDetail} />
    </Switch>
  );
}

export default Photos;
