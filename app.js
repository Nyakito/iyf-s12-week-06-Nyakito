const API_KEY = window.API_KEY || "";

const form = document.getElementById("search-form");
const cityInput = document.getElementById("city-input");
const loading = document.getElementById("loading");
const errorDiv = document.getElementById("error");
const weatherDisplay = document.getElementById("weather-display");
const cityName = document.getElementById("city-name");
const weatherIcon = document.getElementById("weather-icon");
const temperature = document.getElementById("temperature");
const description = document.getElementById("description");
const feelsLike = document.getElementById("feels-like");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const pressure = document.getElementById("pressure");
const searchHistory = document.getElementById("search-history");

function showLoading() {
  loading.classList.remove("hidden");
  errorDiv.classList.add("hidden");
}

function hideLoading() {
  loading.classList.add("hidden");
}

function showError(message) {
  errorDiv.textContent = `Error: ${message}`;
  errorDiv.classList.remove("hidden");
}

function saveRecentSearch(city) {
  const trimmedCity = city.trim();
  if (!trimmedCity) return;

  const recent = JSON.parse(localStorage.getItem("recent") || "[]");
  const filtered = recent.filter(
    (item) => item.toLowerCase() !== trimmedCity.toLowerCase()
  );

  filtered.unshift(trimmedCity);
  const nextRecent = filtered.slice(0, 5);
  localStorage.setItem("recent", JSON.stringify(nextRecent));
  renderRecentSearches();
}

function renderRecentSearches() {
  const recent = JSON.parse(localStorage.getItem("recent") || "[]");

  if (!recent.length) {
    searchHistory.innerHTML = "<li>No recent searches yet</li>";
    return;
  }

  searchHistory.innerHTML = recent
    .map(
      (city) => `
        <li data-city="${city}">${city}</li>
      `
    )
    .join("");

  searchHistory.querySelectorAll("li").forEach((item) => {
    item.addEventListener("click", () => {
      const selectedCity = item.dataset.city;
      cityInput.value = selectedCity;
      searchWeather(selectedCity);
    });
  });
}

async function fetchWeather(city) {
  if (!API_KEY || API_KEY === "paste-your-key-here") {
    throw new Error(
      "Missing API key. Copy config.example.js to config.js and add your key."
    );
  }

  const encodedCity = encodeURIComponent(city.trim());
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${encodedCity}&appid=${API_KEY}&units=metric`
  );

  if (!response.ok) {
    throw new Error("City not found or API request failed.");
  }

  return response.json();
}

function displayWeather(data) {
  const iconCode = data.weather[0].icon;
  const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

  cityName.textContent = data.name;
  weatherIcon.src = iconUrl;
  weatherIcon.alt = data.weather[0].description;
  temperature.textContent = `${Math.round(data.main.temp)}°C`;
  description.textContent = data.weather[0].description;
  feelsLike.textContent = `${Math.round(data.main.feels_like)}°C`;
  humidity.textContent = `${data.main.humidity}%`;
  wind.textContent = `${data.wind.speed} m/s`;
  pressure.textContent = `${data.main.pressure} hPa`;

  weatherDisplay.classList.remove("hidden");
}

async function searchWeather(city) {
  const trimmedCity = city.trim();

  if (!trimmedCity) {
    showError("Please enter a city name.");
    return;
  }

  showLoading();

  try {
    const weatherData = await fetchWeather(trimmedCity);
    displayWeather(weatherData);
    saveRecentSearch(trimmedCity);
  } catch (error) {
    showError(error.message);
  } finally {
    hideLoading();
  }
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  searchWeather(cityInput.value);
});

renderRecentSearches();
