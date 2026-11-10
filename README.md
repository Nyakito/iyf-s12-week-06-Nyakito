## Author
- **Name:** Nyakito Noah
- **GitHub:** [@Nyakito](https://github.com/Nyakito)
- **Date:** November 10, 2026

## Project Description
This week focused on understanding asynchronous JavaScript and working with external APIs. I explored how JavaScript handles asynchronous operations using Promises and async/await, learned to fetch and process data from APIs, and dynamically display that data in the DOM.

The main project was a **Weather Dashboard**, which integrates with a weather API to retrieve and display weather information. The project provided practical experience handling API requests, loading states, errors, and user interactions.

## Technologies Used
- HTML5
- CSS3
- JavaScript (ES6+)
- Fetch API
- Promises
- Async/Await
- DOM Manipulation

## Features
- Understanding synchronous and asynchronous JavaScript execution.
- Creating and working with Promises.
- Chaining Promises correctly.
- Using `Promise.all()` and `Promise.race()`.
- Writing asynchronous functions using `async/await`.
- Handling errors using `try/catch`.
- Making HTTP requests using the Fetch API.
- Handling loading, success, and error states.
- Fetching and displaying API data dynamically in the DOM.
- Making POST requests to external APIs.
- Implementing search and filtering functionality on API data.
- Building a functional Weather Dashboard.
- Completing all assigned daily JavaScript challenges.

## Folder structure

- `lesson-11/` — callbacks, promises, async/await practice
- `lesson-12/` — fetch, DOM rendering, POST requests, live search
- `weather-dashboard/` — mini-project using OpenWeatherMap API

## How to run the HTML exercises

From the project root, start a simple local server:

```bash
cd "week-06"
python3 -m http.server 8000
```

Then open:

- `http://localhost:8000/lesson-12/02-user-directory/`
- `http://localhost:8000/lesson-12/03-post-form/`
- `http://localhost:8000/lesson-12/04-live-search/`
- `http://localhost:8000/weather-dashboard/`

## Notes

- The JavaScript files in `lesson-11/` can be run directly with Node.js.
- The weather dashboard requires an API key from OpenWeatherMap.
- Copy `weather-dashboard/config.example.js` to `weather-dashboard/config.js` and add your key.

## Lessons Learned
- The difference between synchronous and asynchronous code execution.
- How JavaScript handles asynchronous operations without blocking the main thread.
- How Promises work and how to chain them to manage asynchronous tasks.
- The practical differences between `Promise.all()` and `Promise.race()`.
- How `async/await` makes asynchronous code easier to read and maintain.
- How to handle errors in asynchronous operations using `try/catch`.
- How to communicate with external APIs using the Fetch API.
- How to process JSON responses and dynamically render API data in the DOM.
- The importance of providing loading indicators and meaningful error messages.
- How to make POST requests and implement search and filtering functionality using API data.

## Challenges Faced
- Understanding how asynchronous execution differs from normal synchronous execution.
- Understanding Promise resolution, rejection, and chaining.
- Handling errors when API requests fail or return unexpected responses.
- Managing loading states while waiting for API responses.
- Working with external API responses and displaying the returned data correctly.
- Ensuring search and filtering functionality works correctly with dynamically retrieved data.

These challenges were addressed through practical exercises, daily challenges, and the development of the Weather Dashboard.

## Live Demo (if deployed)
[View Live Demo](https://nyakito.github.io/iyf-s12-week-06-Nyakito/)

