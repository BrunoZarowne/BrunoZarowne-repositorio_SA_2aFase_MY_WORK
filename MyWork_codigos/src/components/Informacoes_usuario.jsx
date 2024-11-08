import React from 'react'
import { useState } from 'react'
import "./Informacoes_usuario.css"

function Informacoes_usuario() {
  return (
    <div className='container_info_usuarios'>
      <div className='div_inputs_user'>
<label htmlFor="">nome</label><input type="text"  className='input_nome_user'/>
<label htmlFor="">email</label><input type="text" className='input_emai_user'/>
<label htmlFor="">senha</label><input type="text" className='input_senha_user'/>
<label htmlFor="">data nascimento</label><input type="text" className='input_data_nascimento_user'/>
</div>

<div className='container_button_edit_info_user'>
  <p className='titulo_edit_dados'>editar seus dados</p><br /><button className='bottao_edit_user'></button></div>


  
<button  className='botao_excluir_conta'>excluir conta</button>



    </div>
  )
}

export default Informacoes_usuario
