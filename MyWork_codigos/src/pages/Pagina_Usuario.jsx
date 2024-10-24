import React, { useState } from 'react'
import './Pagina_Usuario.css'
function Pagina_Usuario() {
const [fotoUsuario,setFotoUsuario]=useState('../images/Monstro_Vermelho.svg')

  return (
    <div>
       <div><img src={fotoUsuario} alt="" onClick={()=>{setFotoUsuario('../images/logo_sapo.png')}} /></div>
        
      
    </div>
  )
}

export default Pagina_Usuario
