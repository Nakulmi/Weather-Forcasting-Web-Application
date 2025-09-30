
# Weather Forecasting Web-Application

A simple, lightweight Weather Forecasting web app that fetches current weather data for any city using the OpenWeatherMap API and displays the city name, temperature (°C) and short weather description. Built for learning and quick demos.


## Features

- Search weather by city name

- Displays city, temperature (in °C) and weather description

- Error handling for invalid city names

- Persists a clean, minimal UI for quick lookup

- Easy to extend (add forecast, icons, styling, etc.)


## Tech Stack

**HTML** — basic UI structure

**CSS** — styling (you can replace with any framework)

**JavaScript (ES6)** — app logic and API calls (fetch & async/await)

**OpenWeatherMap API** — weather data provider
## Installation

1. Clone the repo

```bash
git clone <your-repo-url>
cd weather-forecasting
```

2. Files

```pgsql
weather-forecasting/
├─ index.html
├─ style.css
└─ script.js
```

3. Get an API Key

- Sign up at [OpenWeatherMap](https://openweathermap.org/) and get your API key.

4. Add your API key

- Quick edit — open script.js and replace the API_KEY value:

```js
const API_KEY = "YOUR_OPENWEATHERMAP_API_KEY";
```

## Usage/Examples

1. Open index.html in your browser (double-click or serve with a static server).

2. Enter a city name in the input field.

3. Click Get Weather.

4. The app will show:

- City name

- Temperature : <value> (in °C)

- Weather : <short description>

5. If the city is invalid or the API call fails, an error message is shown.


## Authors

Nakul Mishra
- Contact: nakulmi007@gmail.com

