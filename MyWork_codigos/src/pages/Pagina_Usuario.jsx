import React, { useState } from 'react'
import './Pagina_Usuario.css'
import { Link } from 'react-router-dom'

import Informacoes_usuario from '../components/Informacoes_usuario'
function Pagina_Usuario() {
const [fotoUsuario,setFotoUsuario]=useState('../images/Monstro_Vermelho.svg')
const [pagInfoUsuario,setPagInfoUsuario] = useState(false)








  return (
    <div className='container_pag_usuario'>
     <div className='back_groud_user_profile_div'>
     
  
  
<div className='div_botão'>
  
  
  
 <img src="./images/icon_voltar.svg" alt="" /></div>




<div> <img src="./images/imagem_padrao_usuario.svg" alt="" /></div>
 <div className='div_vazia'></div>
 
      </div>
      <div className='div_container_informações_usuarios'>



<div className='container_button'>
<button className='button_doações'>doações</button>
<button className='button_favoritos'>favoritos</button>
<button className='button_historico'>historico</button>

<button className='button_info_conta' onClick={()=>{setPagInfoUsuario(true)}}>infromações da conta</button>


</div>
{pagInfoUsuario && <Informacoes_usuario/> }
      </div>

      





    </div>
  )
}

export default Pagina_Usuario
