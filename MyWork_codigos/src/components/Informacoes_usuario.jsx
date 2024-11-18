import React from 'react'
import { useState } from 'react'
import "./Informacoes_usuario.css" 
import { GlobalContext } from '../context/GlobalContext'
import { useContext } from 'react'

function Informacoes_usuario() {
  
  const limparNome=()=>{
    setUserLogado({...UserLogado,nomePessosa:''})
  }
  const[botaoAtivo,setBotaoAtivo]=useState(null)
  const[modalAtivo,setModalAtivo] = useState(false)
  const {vetorUsuarios,setVetorUsuarios,UserLogado,setUserLogado}=useContext(GlobalContext)
  console.log(UserLogado)

 
  console.log(vetorUsuarios)
  
  const handleClick = (index) => {
    setBotaoAtivo(index); 
    
    setModalAtivo(true)
  
    if(index===2)
    setModalAtivo(false)
  
  
  };


 
  return (
    <div className='container_info_usuarios'>
      <div className='div_inputs_user'>
<label htmlFor="" >nome</label><input type="text"  className='input_nome_user' value={UserLogado.nomePessosa} onChange={(event)=>{setUserLogado({...userLogado,nomePessosa:event.target.value})}}
/>
<label htmlFor="">email</label><input type="text" className='input_emai_user' value={UserLogado. emailUsuario}/>
<label htmlFor="">senha</label><input type="text" className='input_senha_user' value={UserLogado.senhaUsuario}/>
<label htmlFor="">data nascimento</label><input type="text" className='input_data_nascimento_user' value={ UserLogado.dataNascimentoUser}/>
</div>

<div className='container_button_edit_info_user'>
  <p className='titulo_edit_dados'>editar seus dados</p><br />
  <button className='bottao_edit_user' ></button>
  </div>


  
<button  className={`button_excluir_conta ${botaoAtivo === 1 ? 'ativo' : 'inativo'}`}
                onClick={() => handleClick(1)} >excluir conta</button>

<dialog open={modalAtivo} className='dialog_excluir_conta'>

<div className='div_container_certeza_exlui-conta'>



<div className='container_titulo'>
<h2>tem certeza que voce quer excluir sua conta?</h2>
</div>
<div className='container_bottao_excluir_conta_definitivo'>
<button className='bottao_excluir_conta_definitivo'>sim,excluir conta</button> <button    onClick={() => handleClick(2)} className='botton_cancela_excluzao'>não,manter conta</button>


</div>
</div>




</dialog>


    </div>
  )
}

export default Informacoes_usuario
