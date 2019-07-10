import React, { Component } from "react";
import { fetchPhoto } from "../../../api/photos";
import Loading from "../../Loading";
import Detail from "./Detail";

class PhotoDetailContainer extends Component {
  constructor() {
    super();
    this.state = {
      photo: null
    };
  }

  componentDidMount() {
    fetchPhoto(this.props.match.params.id).then(photo =>
      this.setState({ photo })
    );
  }

  render() {
    const { photo } = this.state;
    if (!photo) {
      return <Loading />;
    } else {
      return <Detail photo={photo} />;
    }
  }
}

export default PhotoDetailContainer;
