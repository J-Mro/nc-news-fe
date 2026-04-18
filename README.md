# NorthStar\* (formerly NC News Front End)

## Table of Contents

- [About](#-welcome)
- [Getting Started](#getting-started)
- [Running Locally](#hosting)
- [API Interaction (Connecting to the Back End)](#api-interaction-connecting-to-the-back-end)
- [Planning](#planning)
  - [User Stories](#user-stories)
  - [State Management](#state-management)
- [Custom Hooks](#custom-hooks)
- [Reflections](#reflections)
- [Credits](#credits)

## About

NorthStar\* is a news-application-style Front End SPA that provides a user-friendly interactive display using the API [nc-news-be](https://github.com/J-Mro/nc-back-end), providing the hottest topics and articles.

Please view the current deployed version [here](https://nc-northstar.netlify.app)!

This project was created using node v25.2.1, React v19.2.0 and Vite v7.3.1. Please note that earlier versions may not work for this application.

## Getting Started

To install this project for your own purposes, please carry out the following steps by running these commands in your terminal:

```
git clone https://github.com/J-Mro/nc-back-end

cd nc-news-fe

npm install
```

## Running Locally

NorthStar\* can be run locally using Vite. In the `package.json`, there are npm scripts that will run vite commands for you.

To do this in your browser, open a terminal in your code editor of choice and run the following command:

```
npm run dev
```

After running this, you should see something like this in your terminal, which you can click on to view a locally hosted version of this application:

```
Local: http://localhost:5173/
```

To build a production version of this app, execute the following command:

```
npm run build
```

## API Interaction (Connecting to the Back End)

NorthStar\* gets its data by contacting the [NC News Back End API](https://nc-back-end.onrender.com). Please note that this service is ocassionally paused; if you get a message on the NorthStar\* app saying:

```
"Couldn't fetch articles 😔"
```

this is probably why. If you would like to host the API locally, please find the necessary set up for NC News Back End [here](https://github.com/J-Mro/nc-back-end).

This application uses [Axios](https://axios-http.com/docs/intro) to parse CRUD requests. I opted to use axios instead of fetch for its readability, and because it automatically serialises request bodies into JSON format.

In order to separate out concerns, I kept all functions making CRUD requests in the `./public/utils/` directory.

Once you're connected, you should see a landing page that looks something like the image below:

<img src="planning/northstar-example-landing.png">

## Planning

### User Stories

Below is a list of user stories that were written during the planning phase of this project:

As a user, I want to be able to...

- ... view a list of all articles
- ... view an individual article
- ... view a list of comments associated with an article
- ... vote on an article
- ... post a new comment to an existing article
- ... delete comments
- ... view a separate page for each topic with a list of related articles
- ... sort articles by date and votes

### State Management

Below is a rough outline of my original component tree. For navigational ease I have created the following key:

- _Component with no state stored_: white rectangle 🤍
- _Component with state_: light blue rectangle 🩵
- _State_: yellow diamond 💛
- _Drop-down list_: black V shape 🖤
- _Drop-down list options_: black arrow pointing right (beneath components with a drop down list) 🖤

Note that different views (or pages) have serparate component trees and are distunguished by the API routes that they represent and fetch data from (e.g. /api/topics is a list of topics available on NC News Back End).

<img src = "./planning/nc-news-fe-plan-components-state.png">

## Custom Hooks

Due to the asynchronous nature of communicating with the back end API, data can take time to load. Bad requests to the API, or invalid routes can also lead to errors on the front end that would result in a poor user experience without proper handling. For these reasons, as well as the frequency of which it is done in this application I have implemented a custom hook `useLoadingError` that can be found in `./src/hooks`.

This hook is a function that takes 2 arguments:

- `reqFunction` : the request function (a CRUD request made within one of the util functions in `./src/utils`).
- `options` : an object with 2 properties
  - `dependencies` : state variables that are passed to the dependency array. These will trigger a re-render of the component where that state is stored (and its children) if that state is updated.
  - `params` : arguments passed to `reqFunction` (albeit with a confusing name).

This custom hook stores 3 states:

- `data` : the data received (intially `null`),
- `isLoading` : the current loading state (initially `true`),
- `error` : the error received in the even , the works with an async function `setUp` that is defined in the callback argument of the `useEffect` hook used as part of `useLoadingError` (intiailly `null`),

and returns an array of the form `[data, setData, isLoading, error]`.

Within the `useLoadingError` hook body, React's `useEffect` hook is invoked with a callback function and a dependency array that contains `...dependecies`. This callback function calls an async function `setUp` that sets the `isLoading` state to `true` then uses a `try/catch/finally` to attempt to make a CRUD request to the NC News Back End API, updating the `data` state in a successful case or the `error` state if something goes wrong. In any case, `isLoading` is set to `false`. The component `useLoadingError` has been called in can then interpret the return value and display a more desireable result to the user in the case of loading data and error handling.

## Reflections

This was a 10-day project was to create a complimenatry Front End SPA to the [NC News Back End API](https://github.com/J-Mro/nc-back-end) whilst completing the Northcoders Software Development with AI Bootcamp.

My main takeaways from this project were:

- an understanding of how front end applications can interact with APIs
- a deeper understanding of how React apps are constructed
- an improved understanding and appreciation of proper planning and clearly defined user stories
- an appreciation of how storing state as low as possible is beneficial not only for optimisation but for user experience

## Credits

This portfolio project was created as part of a Digital Skills Bootcamp in Software Engineering provided by [Northcoders](https://northcoders.com/).
