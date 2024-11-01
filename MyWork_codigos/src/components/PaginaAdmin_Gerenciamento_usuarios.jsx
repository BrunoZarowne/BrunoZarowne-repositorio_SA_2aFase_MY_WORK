import React from 'react'
import './PaginaAdmin_Gerenciamento_usuarios.css'
import { GlobalContext } from '../context/GlobalContext'
import { useState,useContext } from 'react'

function PaginaAdmin_Gerenciamento_usuarios(){

    const{vetorUsuarios,setVetorUsuarios}=useContext(GlobalContext)

  return (
    <div>
        <h1>estou funcinando</h1>
        <div className='containerCard'>
            {vetorUsuarios.map((A,index)=>(
            
                <div key={index} className='cardUsuarios'>
                    <p className='pNome'>Nome: {A.nomePessosa}</p>
                    <p className='pSenha'> Senha: {A.senhaUsuario}</p>
                    <p className='pDataNascimento'>Data de nascimento: {A.dataNascimentoUser}</p>
                    <p className='pEmail'>Email: {A.emailUsuario}</p>
                    


                </div>


            )
            
            
            )}
        </div>
    
    </div>
  )
}

export default PaginaAdmin_Gerenciamento_usuarios
