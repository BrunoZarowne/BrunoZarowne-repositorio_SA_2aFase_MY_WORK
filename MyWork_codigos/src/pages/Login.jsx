import React from 'react'
import './login.css'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../context/GlobalContext'
import { useState,useContext } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Login() {
  const {vetorUsuarios,setVetorUsuarios,UserLogado,setUserLogado}=useContext(GlobalContext)
  const [inptEmail,setInptEmail]=useState('')
  const [inptSenha,setInptSenha]=useState('')
  const [IrParaHome,setIrParaHome]=useState('')

const ipParaHome=useNavigate()

  const login = async() => {
    try{
      let loginInfos = {
        email:inptEmail,
        senha:inptSenha
      }
      console.log(loginInfos)

       axios.delete('http://localhost:3333/UsuarioLogado')

      const resposta = await axios.post('http://localhost:3333/Usuarios/login',loginInfos)

      if (resposta.data.success) {
        // Definindo o estado 'UserLogado' com os dados do usuário
        console.log('Resposta do backend:', resposta.data);
        setUserLogado(resposta.data.user)
      

        let InfoUser =  await resposta.data.user
        console.log(InfoUser)

        axios.post('http://localhost:3333/UsuarioLogado',InfoUser)
        ipParaHome('/Home')
  
        // Redireciona para a home após login bem-sucedido
        console.log("Usuário logado:", resposta.data.user)
      } else {
        // Caso o login falhe, você pode adicionar algum tratamento
        alert(resposta.data.message || "Falha no login")
        alert('falha ao logar')
      }

    }catch(erro){
     console.error('o erro foi:',erro)
    }

  }

 
 
 
  return (
    <div className='divImagemFundo'>
     <div className='divContainerInfo'>
      
        <p className='login_h1'>Login</p>

        
      <p className='pText'>"Bem-vindo ao nosso espaço literário! Faça login e mergulhe em um mundo repleto de histórias fascinantes,<br/> descobertas e conhecimento compartilhado. Junte-se a nós na celebração<br/> da literatura!.</p>
   
        
        <div className='divInpt'>


           <label htmlFor="">insira seu email:</label> <input type="email" className='Email_User' placeholder='   insira seu email' value={inptEmail} onChange={(event)=>{setInptEmail(event.target.value)}} /> <br />
           <label htmlFor="">insira sua senha:</label> <input type="password" className='senha_User'  placeholder='  insira sua senha'  value={inptSenha} onChange={(event)=>{setInptSenha(event.target.value)}}/>
        
       <div className='container_button'>
       
        <button className='button_logar' onClick={()=>{login()}}>logar</button>
        
        </div>
        
        <p className='naoPossuiUmaConta'>nao possui uma conta? clique <Link to={"/cadastro"} className='link_login'>Aqui</Link> </p>
        
        </div>




     </div>
    </div>
  )
}

export default Login
