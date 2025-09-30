// Wait until the HTML content is fully loaded before running the script
document.addEventListener("DOMContentLoaded", () => {

    // Get references to all important DOM elements
    const cityInput = document.getElementById("city-input");       // Input field for city name
    const getWeatherBtn = document.getElementById("get-weather-btn"); // Button to fetch weather
    const weatherInfo = document.getElementById("weather-info");   // Section where weather is shown
    const cityName = document.getElementById("city-name");         // City name display element
    const temp = document.getElementById("temperature");           // Temperature display element
    const description = document.getElementById("description");    // Weather description element
    const errorMsg = document.getElementById("error-msg");         // Error message element

    // API key to authenticate with OpenWeatherMap
    const API_KEY = "YOUR_OPENWEATHERMAP_API_KEY";

    // Add click event listener to "Get Weather" button
    getWeatherBtn.addEventListener("click", async () => {
        const city = cityInput.value.trim();   // Get city name from input and remove extra spaces
        if (!city) return;                     // Stop if input is empty

        try {
            // Fetch weather data and show it on the page
            const weatherData = await fetchWeatherData(city);
            displayWeatherData(weatherData);
        } catch (error) {
            // If any error occurs (e.g., city not found), show error message
            showError();
        }
    });

    // Fetch weather data from OpenWeatherMap API
    async function fetchWeatherData(city) {
        // Build the API URL with city, metric units, and API key
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
        const response = await fetch(url);   // Send HTTP request and wait for response
        
        console.log(typeof response);        // Log response type (for debugging)
        console.log("RESPONSE", response);   // Log response object

        if (!response.ok) {                  // If server returns 404 or error
            throw new Error("City Not Found"); // Throw error to be caught in try...catch
        }

        const data = await response.json();  // Convert JSON response into JS object
        return data;                         // Return weather data
    }

    // Display fetched weather data on the page
    function displayWeatherData(data) {
        console.log(data);                            // Log full weather data (debugging)
        const { name, main, weather } = data;        // Destructure needed data fields
        cityName.textContent = name;                 // Show city name
        temp.textContent = `Temperature : ${main.temp}`;  // Show temperature
        description.textContent = `Weather : ${weather[0].description}`; // Show weather description

        weatherInfo.classList.remove("hidden");      // Show weather info section
        errorMsg.classList.add("hidden");            // Hide error message
    }

    // Show error message if API call fails or city is invalid
    function showError() {
        weatherInfo.classList.add("hidden");         // Hide weather info
        errorMsg.classList.remove("hidden");         // Show error message
    }

}); // End of DOMContentLoaded listener
