import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Routers from './Routers'; // Импортируй Routers
import reportWebVitals from './reportWebVitals';
import { CartProvider } from './pages/cart';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode> <CartProvider>
 <Router>
      <Routers />
    </Router>
  </CartProvider>
   
  </React.StrictMode>
);

