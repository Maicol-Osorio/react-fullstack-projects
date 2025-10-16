import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ButgetProvider } from './context/ButgetContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>

    <ButgetProvider>
      <App />
    </ButgetProvider>

  </StrictMode>,
)
