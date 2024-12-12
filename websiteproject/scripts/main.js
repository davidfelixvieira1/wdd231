document.addEventListener('DOMContentLoaded', () => {
    console.log('Website loaded successfully');
});
import { fetchData } from './api.js';

async function displayData() {
    try {
        const data = await fetchData('data/ai-data.json');
        console.log(data);
    } catch (error) {
        console.error('Error loading data:', error);
    }
}

document.addEventListener('DOMContentLoaded', displayData);
