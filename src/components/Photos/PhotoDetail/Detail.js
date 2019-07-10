import React from "react";
import { Link } from "react-router-dom";

const Detail = ({ photo }) => (
  <React.Fragment>
    <div style={{ padding: 20 }}>
      <Link to="/photos">go to Gallery</Link>
    </div>
    <img alt={`detail ${photo.id}`} src={photo.url} />
  </React.Fragment>
);

export default Detail;
