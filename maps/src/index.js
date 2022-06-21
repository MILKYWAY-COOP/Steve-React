import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';

// load the styles for the spinner
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
    <App />
  </>
);
