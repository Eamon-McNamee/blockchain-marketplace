import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './assets/css/styles.css'; // Component-specific styles
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
