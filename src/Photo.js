import React, { Component } from "react";

class Photo extends Component {
  constructor() {
    super();
    this.state = {
      photo: null
    };
  }

  componentDidMount() {
    const photoId = this.props.match.params.id;

    fetch(`http://jsonplaceholder.typicode.com/photos/${photoId}`)
      .then(response => response.json())
      .then(photo => {
        this.setState({ photo });
      });
  }

  render() {
    const { photo } = this.state;
    if (!this.state.photo) {
      return <h1>Loading</h1>;
    }

    return (
      <React.Fragment>
        <h1>photo {photo.id}</h1>
        <img src={photo.thumbnailUrl} />
      </React.Fragment>
    );
  }
}

export default Photo;
