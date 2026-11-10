# Weather Dashboard

A simple weather dashboard built with JavaScript and the OpenWeatherMap API.

## Setup

1. Copy `config.example.js` to `config.js`.
2. Open `config.js` and add your OpenWeatherMap API key.
3. Run a local server and open `index.html` in the browser.

```bash
cd "week-06/weather-dashboard"
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Features

- search by city
- display current weather conditions
- show loading and error states
- save last 5 cities in `localStorage`
- clickable recent searches

## Important

The API key must not be committed to git. `config.js` is git-ignored. The example file tells others what to create.
