import React from 'react'; 
import ReactDOM from 'react-dom/client'; // Update the import for ReactDOM
import App from './App';
import './index.css'

// Make sure this matches the id of the div in your theme template 
const targetDiv = document.getElementById('react-plugin-template'); 


// Only render the component if the div exists 
if (targetDiv) { 
  const root = ReactDOM.createRoot(targetDiv); // Create a root 
  root.render(<App />); // Use the new render method 
} 