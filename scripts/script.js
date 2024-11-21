// Date for copyright and last modified
document.getElementById("current-year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;

// Hamburger menu toggle
document.getElementById("hamburger").onclick = () => {
  const navUl = document.querySelector("nav ul");
  navUl.style.display = navUl.style.display === "flex" ? "none" : "flex";
};

// Weather Section - Fetch Weather Data
async function fetchWeather() {
  const apiKey = "YOUR_API_KEY"; // Replace with your OpenWeatherMap API key
  const city = "Chamber Location City";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    document.getElementById("weather-temp").textContent = `${Math.round(data.main.temp)}°C`;
    document.getElementById("weather-desc").textContent = capitalize(data.weather[0].description);
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
}

// Capitalize weather description
function capitalize(str) {
  return str.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
}

// Spotlight Section - Random Members
const members = [
  {
    name: "Tech Solutions",
    logo: "images/techsolutions.jpeg",
    phone: "123-456-7890",
    address: "456 Tech Avenue",
    website: "https://techsolutions.com",
    level: "Gold",
  },
  {
    name: "Green Gardens",
    logo: "images/greengardens.jpeg",
    phone: "987-654-3210",
    address: "789 Green Road",
    website: "https://greengardens.com",
    level: "Silver",
  },
  {
    name: "Auto Mechanics",
    logo: "images/automechanics.jpeg",
    phone: "555-123-4567",
    address: "101 Car Street",
    website: "https://automechanics.com",
    level: "Gold",
  },
];

function displaySpotlights() {
  const spotlightContainer = document.getElementById("spotlights");
  spotlightContainer.innerHTML = ""; // Clear previous content

  const goldAndSilverMembers = members.filter(
    (member) => member.level === "Gold" || member.level === "Silver"
  );

  // Select 2-3 random members
  const randomMembers = goldAndSilverMembers
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

  randomMembers.forEach((member) => {
    const spotlight = document.createElement("div");
    spotlight.classList.add("spotlight");
    spotlight.innerHTML = `
      <img src="${member.logo}" alt="${member.name} Logo">
      <h3>${member.name}</h3>
      <p>${member.address}</p>
      <p>${member.phone}</p>
      <a href="${member.website}" target="_blank">Visit Website</a>
    `;
    spotlightContainer.appendChild(spotlight);
  });
}

// Initialize functions
fetchWeather();
displaySpotlights();

