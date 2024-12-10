import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

import { geoApi } from './api/geoApiSlice.js';

import { ApiProvider } from '@reduxjs/toolkit/query/react';
import { weatherApi } from './api/weatherApiSlice.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApiProvider api={geoApi}>
      <ApiProvider api={weatherApi}>
        <App />
      </ApiProvider>
    </ApiProvider>
  </React.StrictMode>
);
