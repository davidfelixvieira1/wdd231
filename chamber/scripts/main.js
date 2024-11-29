// Date for copyright and last modified
document.getElementById("current-year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;

// Fetching weather API data
const apiKey = 'YOUR_API_KEY'; // Replace with your actual API key
const city = 'YourCity'; // Replace with the relevant city
const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

fetch(weatherUrl)
  .then(response => response.json())
  .then(data => {
    document.getElementById('weather').innerHTML = `
      <p>Temperature: ${data.main.temp}°C</p>
      <p>Condition: ${data.weather[0].description}</p>
    `;
  })
  .catch(error => console.error('Error fetching weather data:', error));

// Member spotlight feature
const members = [
  { name: 'John Doe', role: 'President', image: 'images/john.jpg' },
  { name: 'Jane Smith', role: 'Vice President', image: 'images/jane.jpg' }
];

function displayMemberSpotlight() {
  const randomMember = members[Math.floor(Math.random() * members.length)];
  document.getElementById('member-spotlight').innerHTML = `
    <h2>${randomMember.name}</h2>
    <p>${randomMember.role}</p>
    <img src="${randomMember.image}" alt="${randomMember.name}">
  `;
}

displayMemberSpotlight();

