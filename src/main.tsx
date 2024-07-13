import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from "react-helmet-async";
import App from './App.tsx'
import './index.css'

if ((window as any).__REACT_DEVTOOLS_GLOBAL_HOOK__ === 'object') {
  (window as any).__REACT_DEVTOOLS_GLOBAL_HOOK__.inject = function() {};
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
  <HelmetProvider>
    <App />
    </HelmetProvider>,
  </React.StrictMode>,
)
