import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { GoogleOAuthProvider } from '@react-oauth/google'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="346903775818-d2c322gqtk9igd0pmt1kup5m0i414kq0.apps.googleusercontent.com">
    <App />
    </GoogleOAuthProvider>;
  </React.StrictMode>,
)
