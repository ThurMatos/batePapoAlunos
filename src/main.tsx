import React from 'react'
import ReactDOM from 'react-dom/client'
import "./styles/global.css"
import { Routes } from './Routes'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Routes/>
  </React.StrictMode>,
)