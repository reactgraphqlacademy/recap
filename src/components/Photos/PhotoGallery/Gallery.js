import React from "react";
import "./Gallery.css";
import Thumbnail from "./Thumbnail";

const Gallery = ({ photos, match }) => (
  <div className="photo-gallery">
    {photos.map(photo => (
      <Thumbnail
        key={photo.id}
        to={`${match.url}/${photo.id}`}
        image={photo.thumbnailUrl}
      />
    ))}
  </div>
);

export default Gallery;
