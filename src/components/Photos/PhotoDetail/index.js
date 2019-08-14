import React, { useState, useEffect } from "react";
import { fetchPhoto } from "../../../api/photos";
import Loading from "../../Loading";
import Detail from "./Detail";

const PhotoDetailContainer = ({
  match: {
    params: { id }
  }
}) => {
  const [photo, setPhoto] = useState();

  useEffect(() => {
    fetchPhoto(id).then(setPhoto);
  }, []);

  if (!photo) {
    return <Loading />;
  } else {
    return <Detail photo={photo} />;
  }
};

export default PhotoDetailContainer;
