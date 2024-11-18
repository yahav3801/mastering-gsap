import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ScrollEffects from './scrollEffects.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ScrollEffects />
  </StrictMode>,
)
