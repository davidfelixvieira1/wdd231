// Select the HTML elements to manipulate
const tempElement = document.getElementById('current-temp');
const weatherIcon = document.getElementById('weather-icon');
const weatherDesc = document.getElementById('weather-desc');

// OpenWeatherMap API URL
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&units=metric&appid=YOUR_API_KEY';

// Asynchronous function to fetch weather data
async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // For debugging
      displayResults(data);
    } else {
      throw new Error(`Error: ${response.statusText}`);
    }
  } catch (error) {
    console.error(error.message);
  }
}

// Function to display the results
function displayResults(weatherData) {
  tempElement.textContent = weatherData.main.temp.toFixed(1); // Display temperature
  const iconCode = weatherData.weather[0].icon; // Get weather icon code
  const description = weatherData.weather[0].description; // Get description

  // Set the image source and alt text
  weatherIcon.src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
  weatherIcon.alt = description;
  weatherDesc.textContent = description; // Set the description as the figcaption
}

// Call the API function
apiFetch();
