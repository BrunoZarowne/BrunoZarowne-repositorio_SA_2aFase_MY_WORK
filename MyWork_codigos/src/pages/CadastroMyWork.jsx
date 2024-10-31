import React from 'react'
import './Cadastro.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Componemt_erro_usario from '../components/Componemt_erro_usario'

function CadastroMyWork() {
  const [nomeUser,setNomeUser]=useState('')
  const [emailUser,setEmailUser]=useState('')
  const [dataNascimento,setDataNascimento]=useState('')
  const [senhaUser,setSenhaUser]=useState('')
  const [cadastroNaoConcluindo,setCadastroNaoConcluido]=useState(false)
  const[permitirHome,setPermitirHome]=useState()




  function cadastra(){
    let PessoasCadastradas=[]
    let nomePessoa=nomeUser
    let emailPessoa=emailUser
    let dataNascimentoPessoa=dataNascimento
    let senhaUsuario=senhaUser

    if(nomeUser=='' || emailUser=='' || dataNascimento==''
    || senhaUser==''){
      setCadastroNaoConcluido(true)
      

    }else{

      let infoPessoa={
        nome: nomePessoa,
        emailPessoa:emailPessoa,
        nascimento:dataNascimentoPessoa,
        senhaUsuario:senhaUsuario
      }
      
      PessoasCadastradas.push(infoPessoa)
      console.table(PessoasCadastradas)
      setPermitirHome("/Home")
      
      
    }
  }
  return (
    <div className='ContainerCadastro'>
      {cadastroNaoConcluindo && <Componemt_erro_usario />}
      <div className='divCadastro'>
        <div className='dvConteudo'>
        <h1 className='h1Cadastro'>Cadastro</h1>
        <p className='propostaSite'>seja bem vindo ao nosso mundo literario onde cada pagina e <br/> uma nova aventura esperando para ser  descoberta</p>
        
        <div className='diviInputs'>
          <input type="text" className='inptNome' placeholder=' Nome' value={nomeUser} onChange={(event)=>{setNomeUser(event.target.value) }} />
          <input type="email" className='inptEmail' placeholder=' Email@' value={emailUser}  onChange={(event)=>{setEmailUser(event.target.value) }} />
          <input type="date" className='inptDataNas' placeholder=' Data' value={dataNascimento}  onChange={(event)=>{setDataNascimento(event.target.value) }} /> 
          <input type="password" className='inptPassword' placeholder=' Senha' value={senhaUser}  onChange={(event)=>{setSenhaUser(event.target.value) }} />
          <div className='divCustomRadio'>
            <input type="checkbox"id='inptradio' className='inptRadio' /><label htmlFor="inptradio" className='lblTermos'>Aceitar todos os termos e politicas</label>
           </div>
           <Link to={permitirHome}> 
<button className='butaoCadastro' onClick={cadastra}>Cadastro</button>
           </Link>
<p className='possuiUmaConta'>ja Possui uma conta? se sim clique  <Link className='linkLogin' to={"/Login"}>Aqui</Link></p>
    
        </div>
        </div>
      


      </div>
     
    </div>
  )
}

export default CadastroMyWork
