/* ─────────────────────────────────────────────────
   main.jsx
   React entry point.
   BrowserRouter wraps App so all routing works.
   The basename keeps Vercel deploys clean.
───────────────────────────────────────────────── */
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
