import { useState } from 'react'
import './App.css'
import router from './routes/Rotes'

function App() {
 
const [pagina,setPagina]=useState(router)
  return (
    <>
   {pagina}

      
    </>
  )
}

export default App
