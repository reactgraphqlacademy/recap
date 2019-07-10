export const fetchPhotos = () =>
  fetch("http://jsonplaceholder.typicode.com/photos?_limit=30", {
    method: "get"
  }).then(response => response.json());

export const fetchPhoto = id =>
  fetch(`http://jsonplaceholder.typicode.com/photos?id=${id}`, {
    method: "get"
  })
    .then(response => response.json())
    .then(photos => photos[0]);
