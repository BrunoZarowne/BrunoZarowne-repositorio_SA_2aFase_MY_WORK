import React, { useState,useContext } from 'react'
import './Pagina_Usuario.css'
import { Form, Link } from 'react-router-dom'
import { GlobalContext } from '../context/GlobalContext'
import PaginaAdmin_Gerenciamento_usuarios from '../components/PaginaAdmin_Gerenciamento_usuarios'

import Informacoes_usuario from '../components/Informacoes_usuario'
function Pagina_Usuario() {
  const[botaoAtivo,setBotaoAtivo]=useState(1)
  const [pagInfoUsuario,setPagInfoUsuario] = useState(false)
  const [modalIconUser,setModalIconUser]=useState(false)//modal para trocar a foto do usario
  const {fotoUsuario,setFotoUsuario} = useContext(GlobalContext)// informações do usuario
  
  
  const handleClick = (index) => {
    setBotaoAtivo(index); 
};



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
<button
                className={`button_doacoes ${botaoAtivo === 1 ? 'ativo' : 'inativo'}`}
                onClick={() => handleClick(1)}
            >
                doações
            </button>
            <button
                className={`button_favoritos ${botaoAtivo === 2 ? 'ativo' : 'inativo'}`}
                onClick={() => handleClick(2)}
            >favoritos
               
            </button>
            <button
                className={`button_historico ${botaoAtivo === 3 ? 'ativo' : 'inativo'}`}
                onClick={() => handleClick(3)}
            >
                historico
            </button>
            <button
                className={`button_info_conta ${botaoAtivo === 4 ? 'ativo' : 'inativo'}`}
                onClick={() => handleClick(4)}
            >
            informações da conta
            </button>
            {/* Renderização Condicional de Componentes */}
            <div className="conteudo-ativo">
                {botaoAtivo === 1 && <dsd />}
             
            </div>


</div>
{pagInfoUsuario && <Informacoes_usuario/> }
<PaginaAdmin_Gerenciamento_usuarios />

      </div>

      





    </div>
  )
}

export default Pagina_Usuario
