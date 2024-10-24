import React, { useState } from 'react'
import './Pagina_Usuario.css'
import { Link } from 'react-router-dom'

function Pagina_Usuario() {
const [fotoUsuario,setFotoUsuario]=useState('../images/Monstro_Vermelho.svg')

  return (
    <div className='container_pag_usuario'>
   
     <div className='back_groud_user_profile_div'>
     <Link>
     
     <img src="" alt="" />
     
     
     </Link>
  
  
  
  <img src="./images/imagem_padrao_usuario.svg" alt="" />
      </div>
      <div className='div_container_informações_usuarios'>



<div className='container_button'>
<button className='button_doações'>doações</button>
<button className='button_favoritos'>favoritos</button>
<button className='button_historico'>historico</button>
<button className='button_info_conta'>infromações da conta</button>
</div>








      </div>





    </div>
  )
}

export default Pagina_Usuario
