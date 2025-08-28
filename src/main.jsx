import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import WindowContext from './Components/WindowSize.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <WindowContext>
      <BrowserRouter>
       <App />
       </BrowserRouter>
    </WindowContext>
  </StrictMode>,
)
