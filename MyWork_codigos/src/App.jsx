import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter,Router,Route, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import CadastroMyWork from './pages/CadastroMyWork'
function App() {
 

  return (
    <>
    <BrowserRouter>
    <Routes>
<Route path="/" element={<LandingPage />} />
<Route path='/Cadastro' element={<CadastroMyWork />} />
      
    </Routes>
    </BrowserRouter>

      
    </>
  )
}

export default App
