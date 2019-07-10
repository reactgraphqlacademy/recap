import React from "react";
import { Link } from "react-router-dom";

const Thumbnail = ({ to, image }) => (
  <div className="image-thumbnail">
    <Link to={to}>
      <img alt="thumbnail" src={image} />
    </Link>
  </div>
);

export default Thumbnail;
