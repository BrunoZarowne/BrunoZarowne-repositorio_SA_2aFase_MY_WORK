import React from 'react'
import './login.css'
import { Link } from 'react-router-dom'

function Login() {
 
 
  return (
    <div className='divImagemFundo'>
     <div className='divContainerInfo'>
      
        <p className='login_h1'>Login</p>

        
      <p className='pText'>"Bem-vindo ao nosso espaço literário! Faça login e mergulhe em um mundo repleto de histórias fascinantes,<br/> descobertas e conhecimento compartilhado. Junte-se a nós na celebração<br/> da literatura!.</p>
   
        
        <div className='divInpt'>


            <input type="email" className='Email_User' placeholder='   insira seu email' /> <br />
            <input type="password" className='senha_User'  placeholder='  insira sua senha'/>
        
       <div className='container_button'>
        <Link to={"/Home"}>
        <button className='button_logar'>logar</button>
        </Link>
        </div>
        
        <p className='naoPossuiUmaConta'>nao possui uma conta? clique <Link to={"/cadastro"} className='link_login'>Aqui</Link> </p>
        
        </div>




     </div>
    </div>
  )
}

export default Login
