const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');

async function getProphetData() {
  const response = await fetch(url);
  const data = await response.json();
  console.table(data.prophets); // Test the response in the console
  displayProphets(data.prophets); // Send the prophets array to the displayProphets function
}

getProphetData();

const displayProphets = (prophets) => {
  prophets.forEach((prophet) => {
    // Create a card for each prophet
    const card = document.createElement('section');
    
    // Create the full name and portrait elements
    const fullName = document.createElement('h2');
    const portrait = document.createElement('img');
    
    // Fill the full name with template string
    fullName.textContent = `${prophet.name} ${prophet.lastname}`;
    
    // Set the image attributes
    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', `${prophet.name} ${prophet.lastname} portrait`);
    portrait.setAttribute('loading', 'lazy');
    portrait.setAttribute('width', '200');
    portrait.setAttribute('height', '250');
    
    // Append the h2 and img elements to the card
    card.appendChild(fullName);
    card.appendChild(portrait);
    
    // Append the card to the main cards container
    cards.appendChild(card);
  });
};
