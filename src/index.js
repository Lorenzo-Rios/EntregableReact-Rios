import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './scripts/App';
import reportWebVitals from './scripts/reportWebVitals.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


reportWebVitals();
