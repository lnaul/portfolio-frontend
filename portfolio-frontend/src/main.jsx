import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import { gsap } from 'gsap'; // Added
import { ScrollTrigger } from 'gsap/ScrollTrigger'; // Added

gsap.registerPlugin(ScrollTrigger); // Added

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
