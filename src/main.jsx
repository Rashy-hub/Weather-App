import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { weatherApi } from './api/weatherApiSlice.js'
import { ApiProvider } from '@reduxjs/toolkit/query/react'

ReactDOM.createRoot(document.getElementById('root')).render(
    <ApiProvider api={weatherApi}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </ApiProvider>
)
