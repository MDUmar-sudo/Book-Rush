import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './components/App.jsx'
import Faqs from './components/FAQS.jsx'
import Email from './components/email.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/email" element={<Email />} />
        </Routes>
    </BrowserRouter>
  </StrictMode>,
);
