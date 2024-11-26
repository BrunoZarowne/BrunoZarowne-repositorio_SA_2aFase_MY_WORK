import React from 'react'
import './LandingPage.css'
import { Link, useNavigate } from 'react-router-dom'
import CadastroMyWork from './CadastroMyWork.jsx'
import { useState,useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'
function LandingPage() {
  const navigate = useNavigate("")
  
  const {vetorUsuarios,setVetorUsuarios,UserLogado,setUserLogado}=useContext(GlobalContext)
console.log(vetorUsuarios)
  return (
    <div className='containerLanding'>
  <div className='divImagem'></div>

      <div className='divText' >
       <img src="../images/logo_myWork.png" className='sapo_logo' />
        
            <div className='divTextP'>
            <p className='pInfoSite'>seja bem vindo ao nosso mundo <br />literario onde cada pagina e uma nova <br /> aventura esperando para ser  descoberta</p>
            </div>
            <div className='divButaos'>
                <button className='butaoUm'>Dowload</button> <button className='butaoDois'><Link to={"/cadastro"} className='linkCadastro'>Sing</Link></button>
            </div>
        </div>
    
    </div>
  )
}

export default LandingPage
