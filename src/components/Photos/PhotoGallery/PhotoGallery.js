import React from "react";
import "./PhotoGallery.css";
import Thumbnail from "./Thumbnail";

const PhotoGallery = ({ photos, match }) => {
  return (
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
};

export default PhotoGallery;
