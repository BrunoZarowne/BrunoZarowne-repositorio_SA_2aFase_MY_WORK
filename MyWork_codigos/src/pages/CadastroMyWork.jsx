import React from 'react'
import './Cadastro.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function CadastroMyWork() {
  return (
    <div className='ContainerCadastro'>
      <div className='divCadastro'>
        <div className='dvConteudo'>
        <h1 className='h1Cadastro'>Cadastro</h1>
        <p className='propostaSite'>seja bem vindo ao nosso mundo literario onde cada pagina e <br/> uma nova aventura esperando para ser  descoberta</p>
        
        <div className='diviInputs'>
          <input type="text" className='inptNome' placeholder='Nome' />
          <input type="email" className='inptEmail' placeholder='Email@' />
          <input type="date" className='inptDataNas' placeholder='Data' /> 
          <input type="password" className='inptPassword' placeholder='Senha' />
          <div className='divCustomRadio'>
            <input type="checkbox"id='inptradio' className='inptRadio' /><label htmlFor="inptradio" className='lblTermos'>Aceitar todos os termos e politicas</label>
           </div>
           <Link to={"/Home"}> 
<button className='butaoCadastro'>Cadastro</button>
           </Link>
<p className='possuiUmaConta'>ja Possui uma conta? se sim clique  <Link className='linkLogin' to={"/Login"}>Aqui</Link></p>
    
        </div>
        </div>
      


      </div>
     
    </div>
  )
}

export default CadastroMyWork
