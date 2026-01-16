import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import './index.css'
import App from './App.js'
import 'leaflet/dist/leaflet.css';
import 'uno.css' 
import './utils/leafletFix';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <BrowserRouter>
    <App />
  </BrowserRouter>
  </StrictMode>
)
