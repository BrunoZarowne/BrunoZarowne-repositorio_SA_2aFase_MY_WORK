import React, { useEffect } from 'react'
import './Cadastro.css'
import { useState,useContext } from 'react'
import { Link } from 'react-router-dom'
import Componemt_erro_usario from '../components/Componemt_erro_usario'
import { GlobalContext } from '../context/GlobalContext'

function CadastroMyWork() {
  const [nomeUser,setNomeUser]=useState('')
  const [emailUser,setEmailUser]=useState('')
  const [dataNascimento,setDataNascimento]=useState('')
  const [senhaUser,setSenhaUser]=useState('')
  const [cadastroNaoConcluindo,setCadastroNaoConcluido]=useState(false)
  const[permitirHome,setPermitirHome]=useState()

  const {vetorUsuarios,setVetorUsuarios,InfoUser}=useContext(GlobalContext)
 
   




  function cadastra(){
    let pessoaAdm=false
    let pessoaDev=false
   
    

    if(nomeUser=='' || emailUser=='' || dataNascimento==''
    || senhaUser==''){
      setCadastroNaoConcluido(true)
      

    }else if(nomeUser==''){

    }else{
      if(nomeUser=='caioDev123'){//<--Verrificação o usuario é um dev do site
        pessoaAdm=true
        pessoaDev=true

        let InfoUser = {
  
          nomePessosa:nomeUser,
          emailUsuario:emailUser,
          dataNascimentoUser:dataNascimento,
          senhaUsuario:senhaUser,
          eDev:pessoaDev,
          eAdm:pessoaAdm
        } 
        setCadastroNaoConcluido(false)
        setVetorUsuarios([...vetorUsuarios,InfoUser])
        

      }else if(nomeUser=="adm123"){//<-- Verrificação se o Usuario é Administradro
        pessoaAdm=true
        
       
        let InfoUser = {
  
          nomePessosa:nomeUser,
          emailUsuario:emailUser,
          dataNascimentoUser:dataNascimento,
          senhaUsuario:senhaUser,
          eDev:pessoaDev,
          eAdm:pessoaAdm,
          
        } 
        let userLogado=Object.assign({},InfoUser)
        console.log(vetorUsuarios)
        setCadastroNaoConcluido(false)
        setVetorUsuarios([...vetorUsuarios,InfoUser])
        console.log(vetorUsuarios)
        

      }else{//<-- Cadastro do Usuario
        let InfoUser = {
  
          nomePessosa:nomeUser,
          emailUsuario:emailUser,
          dataNascimentoUser:dataNascimento,
          senhaUsuario:senhaUser,
          eDev:pessoaDev,
          eAdm:pessoaAdm
        } 
      let pessoaBuscada="maria"
      alert(vetorUsuarios.findIndex(usuario => usuario.nomePessosa === pessoaBuscada))
        setCadastroNaoConcluido(false)
        setVetorUsuarios([...vetorUsuarios,InfoUser])
        console.log(vetorUsuarios)
      }

      
      // setInfoUsuario(u)
      // setInfoUsuario({...infoUsuario,senhaUsuario:senhaUser})
      // setInfoUsuario({...infoUsuario,emailUsuario:emailUser})
      // setInfoUsuario({...infoUsuario,dataNascimentoUser:dataNascimento})
  
      // setPermitirHome("/Home")}
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
