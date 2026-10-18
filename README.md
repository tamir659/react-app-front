# Restaurant Menu — React Frontend

A React single-page app that displays a restaurant menu by category, fetching its data from a
REST API ([react-app-api](https://github.com/tamir659/react-app-api)).

Built as part of a full-stack web development course (2023).

## Features

- Home page and a menu page with client-side routing
- Menu grouped by category, each category loading its dishes from the API
- Material UI app bar and styled dish cards

## Tech stack

- React 18, React Router 6
- Material UI (MUI)
- Axios for HTTP requests
- Docker

## Project structure

```
src/App.js                 # routes: "/" (Home) and "/menu" (Dishes)
src/Pages/Home.js          # landing page
src/Pages/Dishes.js        # fetches all categories
src/components/Menu.js     # fetches and renders the dishes of one category
src/components/Appbar.js   # top navigation bar
```

## Running locally

Start the API first (see [react-app-api](https://github.com/tamir659/react-app-api)), then:

```bash
npm install
npm start
```

Open http://localhost:3000. By default the app calls the API at `http://localhost:5000`;
to point it elsewhere, set `REACT_APP_API_URL` before starting.

### Docker

```bash
docker build -t react-app-front .
docker run -p 3000:3000 react-app-front
```
