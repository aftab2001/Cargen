import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Router } from 'express'
import { AuthProvider } from './hooks/AuthProvider'
import { NotificationProvider } from './contexts/SocketContext.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
    <AuthProvider>
      <NotificationProvider>

    <App />
      </NotificationProvider>
    </AuthProvider>
    </Router>
  </StrictMode>,
)
