import buyImage1 from './assets/buy1.jpg';
import buyImage2 from './assets/buy2.jpg';
import buyImage3 from './assets/buy3.jpg';
import buyImage4 from './assets/buy4.jpg';
import buyImage5 from './assets/buy5.jpg';
import buyImage6 from './assets/buy6.jpg';
import rentImage1 from './assets/rent1.jpg';
import rentImage2 from './assets/rent2.jpg';
import rentImage3 from './assets/rent3.jpg';
import rentImage4 from './assets/rent4.jpg';
import rentImage5 from './assets/rent5.jpg';
import rentImage6 from './assets/rent6.jpg';
import rentImage7 from './assets/rent7.jpg';

const products = [
  // Buy products
  {
    id: 1,
    name: 'Island Paradise',
    description: 'This idyllic island offers serene landscapes, secure access, and ultimate relaxation for your getaway.',
    image: buyImage1,
    category: 'buy',
    price: 10000,
    agentNumber: 'Agent: +91 98765 43210',
    weatherForecast: 'Sunny with clear skies',
    temperature: '28°C',
  },
  {
    id: 2,
    name: 'Ocean View Retreat',
    description: 'A tranquil retreat boasting stunning ocean views, reliable access, and forecasts for an unforgettable stay.',
    image: buyImage2,
    category: 'buy',
    price: 15000,
    agentNumber: 'Agent: +91 87654 32109',
    weatherForecast: 'Partly cloudy with a chance of rain',
    temperature: '26°C',
  },
  {
    id: 3,
    name: 'Private Island Getaway',
    description: 'Discover your personal paradise with safe access and up-to-date weather details for a delightful experience.',
    image: buyImage3,
    category: 'buy',
    price: 20000,
    agentNumber: 'Agent: +91 76543 21098',
    weatherForecast: 'Mostly sunny',
    temperature: '30°C',
  },
  {
    id: 4,
    name: 'Luxury Island Escape',
    description: 'Indulge in luxury with secure access, breathtaking surroundings, and precise forecasts for your vacation.',
    image: buyImage4,
    category: 'buy',
    price: 25000,
    agentNumber: 'Agent: +91 65432 10987',
    weatherForecast: 'Cloudy with occasional showers',
    temperature: '25°C',
  },
  {
    id: 5,
    name: 'Tropical Island Resort',
    description: 'Unwind in a tropical paradise with safe agent contact and reliable forecasts for a blissful escape.',
    image: buyImage5,
    category: 'buy',
    price: 30000,
    agentNumber: 'Agent: +91 54321 09876',
    weatherForecast: 'Warm and sunny',
    temperature: '27°C',
  },
  {
    id: 6,
    name: 'Secluded Beach Island',
    description: 'Experience seclusion with exclusive agent access and timely weather updates for a perfect retreat.',
    image: buyImage6,
    category: 'buy',
    price: 35000,
    agentNumber: 'Agent: +91 43210 98765',
    weatherForecast: 'Breezy with sunny spells',
    temperature: '29°C',
  },
  // Rent products
  {
    id: 7,
    name: 'Sunny Beach Villa',
    description: 'This beach villa provides a comfortable stay, secure contact, and great service.',
    image: rentImage1,
    category: 'rent',
    price: 5000,
    agentNumber: 'Agent: +91 32109 87654',
    weatherForecast: 'Sunny with mild breezes',
    temperature: '28°C',
  },
  {
    id: 8,
    name: 'Cozy Island Hut',
    description: 'A cozy hut for your perfect getaway with all comfortable stay, security and weather updates.',
    image: rentImage2,
    category: 'rent',
    price: 6000,
    agentNumber: 'Agent: +91 21098 76543',
    weatherForecast: 'Light showers possible',
    temperature: '27°C',
  },
  {
    id: 9,
    name: 'Seaside Cottage',
    description: 'Charming seaside cottage with all amenities and secure agent access for fun.',
    image: rentImage3,
    category: 'rent',
    price: 7000,
    agentNumber: 'Agent: +91 10987 65432',
    weatherForecast: 'Sunny and warm',
    temperature: '26°C',
  },
  {
    id: 10,
    name: 'Tropical Getaway',
    description: 'Experience a tropical getaway with a secure environment and forecasts here.',
    image: rentImage4,
    category: 'rent',
    price: 8000,
    agentNumber: 'Agent: +91 09876 54321',
    weatherForecast: 'Sunny with a few clouds',
    temperature: '29°C',
  },
  {
    id: 11,
    name: 'Island Retreat',
    description: 'Your ideal retreat awaits with secure features and real-time weather updates.',
    image: rentImage5,
    category: 'rent',
    price: 9000,
    agentNumber: 'Agent: +91 98765 43210',
    weatherForecast: 'Clear skies',
    temperature: '28°C',
  },
  {
    id: 12,
    name: 'Luxury Beach House',
    description: 'Luxury living at the beach with complete security and amenities for guests.',
    image: rentImage6,
    category: 'rent',
    price: 10000,
    agentNumber: 'Agent: +91 87654 32109',
    weatherForecast: 'Warm and sunny',
    temperature: '30°C',
  },
  {
    id: 13,
    name: 'Cliffside Villa',
    description: 'A stunning cliffside view with secure access and updated weather forecast data.',
    image: rentImage7,
    category: 'rent',
    price: 12000,
    agentNumber: 'Agent: +91 76543 21098',
    weatherForecast: 'Partly cloudy',
    temperature: '26°C',
  },
];

// Function to get products by category
export const getProductsByCategory = (category) => {
  return products.filter(product => product.category === category);
};

export default products;
