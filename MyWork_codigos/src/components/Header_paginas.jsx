import React from 'react'
import './Header_paginas.css'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../context/GlobalContext'
import { useState,useContext,useEffect } from 'react'


function Header_paginas() {
  
  const {fotoUsuario,setFotoUsuario}=useContext(GlobalContext)
  const {paginaAtiva,setPaginaAtiva}= useContext(GlobalContext)
  const {vetorUsuarios,setVetorUsuarios,UserLogado,setUserLogado}=useContext(GlobalContext)
  
  
  
  function ativaPagina (index){

    setPaginaAtiva(index)
    localStorage.setItem('paginaAtiva', index); // Salva o índice no Local Storage

  }

  useEffect(() => {
    const savedPage = localStorage.getItem('paginaAtiva');
    if (savedPage) {
      setPaginaAtiva(parseInt(savedPage, 10)); // Atualiza o estado com o valor salvo
    }
  }, [setPaginaAtiva]);


  return (
    <div className='divHeaderPage'>
      <div className='imgsNavBar'>
        <img className='sapo' src="../images/logo_sapo.png" alt="" />
      <div className='divNomeUserIcon'>
        <p className='PnomeUsuario'>{UserLogado.nomePessosa}</p>
        <Link to={"/Perfil_de_Usuario"}>
        <img className='user' src={fotoUsuario} alt="" />
        </Link>
     
      </div>
        
     
        
      </div>
      <div className='buttonsNav'>
      <a href=''>
          <button
            className={`bt1 ${paginaAtiva === 1 ? 'ativo' : 'inativo'}`}
            onClick={() => ativaPagina(1)}
          >
            Inicio
          </button>
        </a>

        <a href=''>
          <button
            className={`bt2 ${paginaAtiva === 2 ? 'ativo' : 'inativo'}`}
            onClick={() => ativaPagina(2)}
          >
            lançamentos
          </button>
        
        </a>
        
        <a href="">  <button className={`bt3 ${paginaAtiva === 3 ? 'ativo' : 'inativo'}`}
                onClick={() => ativaPagina(3)}>populares</button>
          
           </a>
        <a href=""><button className={`bt4 ${paginaAtiva === 4 ? 'ativo' : 'inativo'}`}
                onClick={() => ativaPagina(4)}>melhores Avaliados</button></a>
        
        <a href=""><button className={`bt5 ${paginaAtiva === 5 ? 'ativo' : 'inativo'}`}
                onClick={() => ativaPagina(5)}>updates</button></a>
      
      
      </div>
    </div>
  )
}

export default Header_paginas
