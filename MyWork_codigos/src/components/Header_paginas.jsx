import React from 'react'
import './Header_paginas.css'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../context/GlobalContext'
import { useState,useContext } from 'react'


function Header_paginas() {
  

  const {fotoUsuario,setFotoUsuario,Use}=useContext(GlobalContext)

  return (
    <div className='divHeaderPage'>
      <div className='imgsNavBar'>
        <img className='sapo' src="../images/logo_sapo.png" alt="" />
        <Link to={"/Perfil_de_Usuario"}>
        <img className='user' src={fotoUsuario} alt="" />
        </Link>
     
        
      </div>
      <div className='buttonsNav'>
        <a href=""><button className='bt1'>Inicio</button></a>
        <a href=""><button className='bt2'>Lançamentos</button></a>
        <a href=""><button className='bt3'>Populares</button></a>
        <a href=""><button className='bt4'>Melhores Avaliados</button></a>
        <a href=""><button className='bt5'>Updates</button></a>
      </div>
    </div>
  )
}

export default Header_paginas
