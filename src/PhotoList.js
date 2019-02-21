import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class PhotoList extends Component {
  constructor() {
    super()
    this.state = {
      photos: []
    }
  }

  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/photos?_limit=30', {
    method: 'get',
  })
  .then(response => response.json())
  .then(photos => {
    this.setState({ photos })
  })

  }

  render() {
    

    return (
      <React.Fragment>
        <h1>photo list</h1>
        {this.state.photos.map(photo =>
        <img src={photo.thumbnailUrl}></img>
      )}
      </React.Fragment>
    )
  }
}

export default PhotoList;
