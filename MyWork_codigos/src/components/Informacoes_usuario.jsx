import React from 'react'
import { useState } from 'react'
import "./Informacoes_usuario.css" 
import { GlobalContext } from '../context/GlobalContext'
import { useContext,useEffect } from 'react'
import { Link,useNavigate} from 'react-router-dom'
import PaginaAdmin_Gerenciamento_usuarios from './PaginaAdmin_Gerenciamento_usuarios'
import axios from 'axios'

function Informacoes_usuario() {
  
  
  const[botaoAtivo,setBotaoAtivo]=useState(null)
  const[modalAtivo,setModalAtivo] = useState(false)
  const {vetorUsuarios,setVetorUsuarios,UserLogado,setUserLogado}=useContext(GlobalContext)
  const [modalIsOpenUpdateUser,setModalIsOpenUdateUser]=useState(false)
  const[pagina,setPagina]=useState('')
  const irParaLanding=useNavigate('/')
//variaveis para a troca de  informações

const [inptEmail,setInptEmail]=useState('')
const [inptDataNascimento,setInptDataNascimento]=useState('')
const [inptSenha,setInptSenha]=useState('')

const usuarioOnline = async()=>{
  try{
    const resultado = await axios.get('http://localhost:3333/UsuarioLogado')
    setUserLogado(resultado.data)

  }catch(erro){
    console.error(erro)

  }

}
useEffect(()=>{
  usuarioOnline()
},[])
useEffect(()=>{
  console.log(UserLogado)
},[UserLogado])


  const atualizarUsuario = async() =>{
    let infosNovas={
      email:inptEmail,
      senha:inptSenha,
      dataNascimento:inptDataNascimento

    }
    console.log(infosNovas)

    try{
      const response = await axios.put(`http://localhost:3333/Usuarios/atualizar/${UserLogado.nome}`,infosNovas)
      const resultado = await axios.put('http://localhost:3333/UsuarioLogado',infosNovas)
     

    }catch(err){
      console.log("seu erro foi esse: ",err)
    }
  }

  const atualizarUsuarios = async() =>{
    try{
      const response = await axios.get('http://localhost:3333/Usuarios')
      console.log(response.data)
      setVetorUsuarios(response.data)
      
    }catch(err){
      console.erro('erro ao buscar um cliente',err)
    }

  }

 const deletarUsuario =  async (nome) => {
   try{
    console.log(nome)
     
      const response=  await axios.delete(`http://localhost:3333/Usuarios/${nome}`)
      if(response.status==200){
        atualizarUsuarios()
        irParaLanding('/')
      }
    }catch(err){
      console.error('Erro ao deletar um clinete',err)
      console.log(nome)

    }

  
  
 }

  const handleClick = (index) => {
    setBotaoAtivo(index); 
    
      setModalAtivo(true)
    
    
  
    if(index===2)
    setModalAtivo(false)
  
  
  };
 


 
  return (
    <div className='container_info_usuarios'  >
      <div className='div_inputs_user'>
<label htmlFor="inptNomeUser" >nome</label><input type="text"  className='input_nome_user' defaultValue={UserLogado.nome}  name='inptNomeUser'/>
<label htmlFor="inptEmailuser">email</label><input type="text" className='input_emai_user' defaultValue={UserLogado. email} name='inptEmailuser'/>
<label htmlFor="inptDataNasUser">data nascimento</label><input type="text" className='input_data_nascimento_user' defaultValue={ UserLogado.datanascimento } name='inptDataNasUser'/>
<label htmlFor="inptSenhaUser">senha</label><input type="text" className='input_senha_user' defaultValue={UserLogado.senha} name='inptSenhaUser'/>

</div>

<div className='container_button_edit_info_user'>
  <p className='titulo_edit_dados'>editar seus dados</p><br />
  <button className='bottao_edit_user'onClick={()=>{setModalIsOpenUdateUser(true)}}></button>
  </div>
 { modalIsOpenUpdateUser 
 && <div className='BackDrop'><dialog open={modalIsOpenUpdateUser} className='modalUsuarioTrocaInfo'>
  <p>
  Insira as Informações que deseja trocar
  </p>
  <div className='divInpt'>



    <div className='containerNovoEmail'>
      <label htmlFor="inptNovoEmail">insira seu novo email:</label><input type="text" name='inptNovoEmail' className='inptCadastroNovoEmail' 
      value={inptEmail} onChange={(event)=>{setInptEmail(event.target.value)}} />
    </div>

    <div>
      <label htmlFor="inptNovaDataNas" type='date' className='label_nova_dat_nasc'>insira sua nova data de nascimento: </label> <input type="date" name='inptNovaDataNas' className='inputCadastroNovaDataNascimento'  
      value={inptDataNascimento} onChange={(event)=>{setInptDataNascimento(event.target.value)}}/>
    </div>

    <div className='containersenhaNova'>
      <label htmlFor="inptNovaSenha">insira sua vova senha: </label> <input name='inptNovaSenha' type="password" className='inptCadastroNovasenha'
      value={inptSenha} onChange={(event)=>{setInptSenha(event.target.value)}} />
      </div>
   <div className='container_comfirm_troca_dados'>

      <button onClick={atualizarUsuario} className='comfirma_troca_dados'>Sim,quero trocar</button><button onClick={()=>{setModalIsOpenUdateUser(false)}} className='nao_quer_trocar os dados'>Não,voltar para o perfil!</button>
   </div>

  </div>
  </dialog> </div>}
    



  <div className='divBotoesEscolha'>
<button  className={`button_excluir_conta ${botaoAtivo === 5 ? 'ativo' : 'inativo'}`}
                onClick={() => {handleClick(5)}} >excluir conta</button>

                <button className='butonSairConta' onClick={()=> {irParaLanding('/')}}>Sair da conta</button>

  </div>


{ modalAtivo && <div className='BackDrop'><dialog open={modalAtivo} className='dialog_excluir_conta'>
<div className='div_container_certeza_exlui-conta'>

<div className='container_titulo'>
  <h2>tem certeza que voce quer excluir sua conta?</h2>
</div>
<div className='container_bottao_excluir_conta_definitivo'>
  <Link to={pagina}>
   <button className='bottao_excluir_conta_definitivo' onClick={() => deletarUsuario(UserLogado.nome)}>sim,excluir conta</button> <button    onClick={() => {handleClick(2)}} className='botton_cancela_excluzao'>não,manter conta</button>
  </Link>


</div>
</div>
</dialog>
</div>}

    </div>
  )
}

export default Informacoes_usuario
