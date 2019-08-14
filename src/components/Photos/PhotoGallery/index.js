import React, { useState, useEffect } from "react";
import { fetchPhotos } from "../../../api/photos";
import Loading from "../../Loading";
import Gallery from "./Gallery";

const PhotoGalleryContainer = ({ match }) => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetchPhotos().then(setPhotos);
  }, []);

  if (!photos.length) return <Loading />;

  return <Gallery photos={photos} match={match} />;
};

export default PhotoGalleryContainer;
