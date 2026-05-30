import React from 'react';
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { AnimalProvider } from './context/AnimalContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AnimalProvider>
      <App />
    </AnimalProvider>
    
  </React.StrictMode>,
)
