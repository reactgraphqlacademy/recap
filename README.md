# Recap 1

The goals of this exercise is to create a photo application with React and consolidate some of the foundational concepts you've seen so far. 


## Exercise

- [ ] Choose your photo-like api:
  - [http://jsonplaceholder.typicode.com/](http://jsonplaceholder.typicode.com/)
  - [Rick & Morty](https://rickandmortyapi.com/)
- [ ] Create your app using `create-react-app`. Follow this [link](https://github.com/facebook/create-react-app#quick-overview) to learn how to get started with `create-react-app` if you haven't used it before. You'll need to follow the instructions from the link and execute 3 commands to create your app.

If you use http://jsonplaceholder.typicode.com:

- [ ] There should be a page that displays a list of photos in the following path `/photos`. You can fetch the photos from this endpoint http://jsonplaceholder.typicode.com/photos?_limit=30
- [ ] There should be a page that displays a single photo in the following path `/photos/:id`. Endpoint example http://jsonplaceholder.typicode.com/photos/12.  You have more info about the API on its [docs](http://jsonplaceholder.typicode.com/)
- [ ] When the user clicks on a photo in `/photos` the app should take the user to `/photos/:id`

Else if you use https://rickandmortyapi.com/:

- [ ] There should be a page that displays a list of characters in the following path `/characters`. You can fetch the photos from this endpoint https://rickandmortyapi.com/api/character/

- [ ] There should be a page that displays a single character in the following path `/characters/:id`. Endpoint example https://rickandmortyapi.com/api/character/2. You have more info about the API on its [docs](https://rickandmortyapi.com/documentation/#rest).

- [ ] When the user clicks on a character in `/characters` the app should take the user to `/characters/:id`


### Additional requirements
- If you reload the detail page, example `/characters/1` or `/photos/1`, it should display the page with the data.

### Notes

This is not a master detail page. It's more simple than the Messenger app.

To fetch photos use [http://jsonplaceholder.typicode.com/photos?\_limit=30](http://jsonplaceholder.typicode.com/photos?_limit=30).
Don't forget the `_limit=30` parameter at the end of the query or it will be slow.

To fetch a single photo use [http://jsonplaceholder.typicode.com/photos/<PHOTO_ID>](http://jsonplaceholder.typicode.com/photos/3)

Use `react-router` for the routing:

```
npm install --save react-router-dom
```

## Core learning objectives to be consolidated 

- React composition model
- Data fetching
- Declarative Routing

## Bonus

- Create your own `Link` component that composes with the `Link` component from "react-router-dom". Your `Link` component will add a prop `rel="nofollow noopener"` to the react-router-dom `Link` if the link points `to` an external link. You can use the following snippet to determine if the `to` prop is an external link: 

```
if (props.to && props.to.match(/^(https:\/\/*|http:\/\/*|mailto:*)/)) {
 // it's an external lin
}
```
- [ ] Add some style with [https://react-bootstrap.github.io/](https://react-bootstrap.github.io/) or [http://material-ui.com/](http://material-ui.com/)
- [ ] Using this endpoint [http://jsonplaceholder.typicode.com/posts](http://jsonplaceholder.typicode.com/posts), create a page that displays a list of posts in the following path: [http://localhost:3000/posts](http://localhost:3000/posts)
- [ ] Add a form at the top of the page to add a new post. This url [http://jsonplaceholder.typicode.com/posts](http://jsonplaceholder.typicode.com/posts) also accepts the verb "POST" to add a new post
- [ ] If you use the Rick & Morty API, you can add a [filter](https://rickandmortyapi.com/documentation/#filter-characters) of the characters list
- [ ] You can specify a NOT_FOUND route in the Root of your app. (`<Route component={NotFound} />`)
- [ ] Deploy to `gh-pages` or [https://www.netlify.com/](https://www.netlify.com/)

## License

This material is available for private, non-commercial use under the [GPL version 3](http://www.gnu.org/licenses/gpl-3.0-standalone.html).

