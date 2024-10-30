import React, { useState,useContext } from 'react'
import './Pagina_Usuario.css'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../context/GlobalContext'

import Informacoes_usuario from '../components/Informacoes_usuario'
function Pagina_Usuario() {
const [pagInfoUsuario,setPagInfoUsuario] = useState(false)
const [modalIconUser,setModalIconUser]=useState(false)//modal para trocar a foto do usario
const {fotoUsuario,setFotoUsuario} = useContext(GlobalContext)// informações do usuario


  return (
    <div className='container_pag_usuario'>
     <div className='back_groud_user_profile_div'>
     
  
  
<div className='div_botão'>
  
  
  <Link to={"/Home"}>
 <img src="./images/icon_voltar.svg" alt="" />
  </Link>
 
 </div>




<div> <img src={fotoUsuario} alt="" /> 
<img src="../images/Adicionar_icon.svg" alt="" className='imgAdicionarIcons' onClick={()=>{setModalIconUser(true)}} /></div>
 <div className='div_vazia'></div>

<dialog open={modalIconUser} className='modalFotosUser'>
<p className='pTrocarFoto'>escolha uma das fotos abaixo</p>
  <img src="../images/icons/Coruja.svg" alt="" className='iconUser' onClick={()=>{setFotoUsuario("../images/icons/Coruja.svg"),setModalIconUser(false) }} />

  <img src="../images/icons/Monstro_amarelo.svg" alt="" className='iconUser'  onClick={()=>{setFotoUsuario("../images/icons/Monstro_amarelo.svg"),setModalIconUser(false) }}  />
  
  <img src="../images/icons/Monstro_azul_escuro.svg" alt=""className='iconUser'  onClick={()=>{setFotoUsuario("../images/icons/Monstro_azul_escuro.svg"),setModalIconUser(false) }}/>

  <img src="../images/icons/Monstro_ciano.svg" alt="" className='iconUser' onClick={()=>{setFotoUsuario("../images/icons/Monstro_ciano.svg"),setModalIconUser(false) }} />

  <img src="../images/icons/Monstro_roxo.svg" alt=""  className='iconUser'  onClick={()=>{setFotoUsuario("../images/icons/Monstro_roxo.svg"),setModalIconUser(false) }}/>

  <img src="../images/icons/Monstro_vermelho1.svg" alt="" className='iconUser'  onClick={()=>{setFotoUsuario("../images/icons/Monstro_vermelho1.svg"),setModalIconUser(false) }} />

  <img src="../images/icons/Monstro_vermelho2.svg" alt="" className='iconUser'  onClick={()=>{setFotoUsuario("../images/icons/Monstro_vermelho2.svg"),setModalIconUser(false) }} />

  <img src="../images/icons/MonstroLaranja.svg" alt="" className='iconUser'  onClick={()=>{setFotoUsuario("../images/icons/MonstroLaranja.svg"),setModalIconUser(false) }}/>

  <img src="../images/icons/MonstroVerde.svg" alt="" className='iconUser'  onClick={()=>{setFotoUsuario("../images/icons/MonstroVerde.svg"),setModalIconUser(false) }}/>
  
  
  </dialog>
 
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
