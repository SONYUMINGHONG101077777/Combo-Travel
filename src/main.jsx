import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ProductProvider } from './context/ProductContext'
import { ThemeProvider } from './context/ThemeContext'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ProductProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ProductProvider>
    </BrowserRouter>
  </StrictMode>
);

// មានន័យថាយើង switch link បាន
