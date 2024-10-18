import React from 'react'
import './login.css'
function Login() {
  return (
    <div className='divImagemFundo'>
     <div className='divContainerInfo'>
        <h1>login</h1>

        <p className='pText'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, eius neque <br /> ducimus dicta facilis unde cum. Ex harum, mollitia culpa officiis quaerat, unde impedit atque <br />doloribus alias iste necessitatibus sint?</p>
        <div className='divInpt'>
            <input type="date" className='nomeUsuarioLogin' /> <br />
            <input type="password" className='senhaUsuarioLogin' />
        </div>




     </div>
    </div>
  )
}

export default Login
