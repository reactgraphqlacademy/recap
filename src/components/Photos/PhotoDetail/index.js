import React, { Component } from "react";
import { fetchPhoto } from "../../../api/photos";
import Loading from "../../Loading";
import PhotoDetail from "./PhotoDetail";

class PhotoDetailContainer extends Component {
  constructor() {
    super();
    this.state = {
      photo: {}
    };
  }

  componentDidMount() {
    fetchPhoto(this.props.match.params.id).then(photo =>
      this.setState({ photo })
    );
  }

  render() {
    const { photo } = this.state;
    console.log(photo);
    let content;
    if (!photo || !photo.id) {
      content = <Loading />;
    } else {
      content = <PhotoDetail photo={photo} />;
    }
    return content;
  }
}

export default PhotoDetailContainer;
