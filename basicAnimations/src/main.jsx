import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Basics from './basics.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Basics />
  </StrictMode>,
)
