import React, { useEffect } from 'react'
import './Cadastro.css'
import { useState,useContext } from 'react'
import { Link } from 'react-router-dom'
import Componemt_erro_usario from '../components/Componemt_erro_usario'
import { GlobalContext } from '../context/GlobalContext'

function CadastroMyWork() {
  const [nomeUser,setNomeUser]=useState('')//pega o valor do input senha
  const [emailUser,setEmailUser]=useState('')//pega o valor do input email
  const [dataNascimento,setDataNascimento]=useState('')//pega o valor do input data nascimento
  const [senhaUser,setSenhaUser]=useState('')// pega o valor do input senha

  const [cadastroNaoConcluindo,setCadastroNaoConcluido]=useState(false)
  const[permitirHome,setPermitirHome]=useState()
  const {vetorUsuarios,setVetorUsuarios,InfoUser}=useContext(GlobalContext)
  const[inptValidado,setInptValidado]=useState(false)
  const[inptValidadoEmail,setInptValidadoEmail]=useState(false)
  const[inptValidadoDataNascimento,setInptValidadoDataNascimento]=useState(false)
  const[inptValidadoSenha,setInptValidadoSenha]=useState(false)
  
  

  function cadastra(){
    let pessoaAdm=false
    let pessoaDev=false
    

    
    
    
    

    if(nomeUser=='' || emailUser=='' || dataNascimento==''
    || senhaUser==''){
      setCadastroNaoConcluido(true)
      if(inptValidado==''){
        setInptValidado(true)
      }
      if(emailUser==''){
        setInptValidadoEmail(true)

      }
      if(dataNascimento==''){
       setInptValidadoDataNascimento(true)

     }
     if(senhaUser==''){
      setInptValidadoSenha(true)

     }
      

      

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
            eAdm:pessoaAdm} 

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
          
         
          setCadastroNaoConcluido(false)
          setVetorUsuarios([...vetorUsuarios,InfoUser])
          console.log(vetorUsuarios)
          
         
        }else{//<-- Cadastro do Usuario
          let nomeUsuario=nomeUser.split('')
  
          if(nomeUsuario.length>=5){
            
  
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
            console.log(vetorUsuarios)
          }else{
            alert("Insira um nome Maior")
          }
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
          {inptValidado && <p className='pNomePequeno'>Insira o nome</p>}
          <input type="text" className='inptNome' placeholder=' Nome' value={nomeUser} 
          style={ {borderColor: inptValidado ? '#f40000' : '#000027',borderWidth: '2px',transition:'400ms' }} 
          onChange={(event)=>{setNomeUser(event.target.value)
            if(nomeUser==''&& cadastroNaoConcluindo(false)){
              setInptValidado(true)

            }else{
              setInptValidado(false)
              setCadastroNaoConcluido(false)
            }
          
          }} 
         />{/*<- esse codigo coleta info sobre o usuario,verfica se ja inseriu informações é se não tiver mudar a borda o input */}

          <input type="email" className='inptEmail' placeholder=' Email@' value={emailUser} 
           style={ {borderColor: inptValidadoEmail ? '#f40000' : '#000027',borderWidth: '2px',transition:'400ms' }} 
           onChange={(event)=>{setEmailUser(event.target.value) 
            if(emailUser=='' && cadastroNaoConcluindo(true)){
              setInptValidadoEmail(true)

            }else{
              setInptValidadoEmail(false)
              setCadastroNaoConcluido(false)

            }
          
          
          }} 
           />{/*<- esse codigo coleta info sobre o usuario,verfica se ja inseriu informações é se não tiver muda a cor da borda do input */}

          <input type="date" className='inptDataNas' placeholder=' Data' value={dataNascimento}  
          onChange={(event)=>{setDataNascimento(event.target.value) 
            if(dataNascimento=='' && cadastroNaoConcluindo==true){
              setInptValidadoDataNascimento(true)
          }else{
            setInptValidadoDataNascimento(false)
            setCadastroNaoConcluido(false)

          }
         }} // Lembrete usar functions pra ficar mais organizado
          style={ {borderColor: inptValidadoDataNascimento ? '#f40000' : '#000027',borderWidth: '2px',transition:'400ms' }} 
          /> {/*<- esse codigo coleta info sobre o usuario,verfica se ja inseriu informações é se não tiver muda a cor da borda do input */}
          
          <input type="password" className={'inptPassword'} placeholder=' Senha' value={senhaUser}  //
          onChange={(event)=>{setSenhaUser(event.target.value) 
            if(senhaUser =='' && cadastroNaoConcluindo==true){
              setInptValidadoSenha(true)

            }else{
              setInptValidadoSenha(false)
              setCadastroNaoConcluido(false)
            }
          }} 
          style={ {borderColor: inptValidadoSenha ? '#f40000' : '#000027',borderWidth: '2px',transition:'400ms' }}  
           />{/*<- esse codigo coleta info sobre o usuario,verfica se ja inseriu informações é se não tiver muda cor da borda do input */}

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
