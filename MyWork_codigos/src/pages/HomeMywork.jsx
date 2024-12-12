import React, { useState,useContext,useEffect } from 'react'
import Header_paginas from '../components/Header_paginas.jsx'
import Rodape_Mywork from '../components/Rodape_Mywork.jsx'
import './HomeMywork.css'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../context/GlobalContext.jsx'
function HomeMywork() {
 const {modalCadastroConcluido,setModalCadastroConcluido}=useContext(GlobalContext)

 const [isModalOpen, setIsModalOpen] = useState(false);
 useEffect(() => {
  if (modalCadastroConcluido) {
    const timeout = setTimeout(() => {
      setModalCadastroConcluido(false);
    }, 3000);

    // Limpeza do timeout ao desmontar ou ao atualizar o estado
    return () => clearTimeout(timeout);
  }
}, [modalCadastroConcluido, setModalCadastroConcluido]);

 
  return (
    <div className='container_Home'>
    <Header_paginas />
    <div className='container_conteudo'>
    <div className='container_titulo_introducao'>
        <div className='conatiner_titulo'>
         {/* Botão para abrir o modal */}
       
       


          <h1> 🐸 bem vindo ao My Work 🐸</h1>
          <p></p>



          </div>
          <div className='container_introducao'> 
          <div className='conainer_proposta'>
          <p className='text_proposta'>🎨 O que você pode fazer aqui?🎨</p>
       <p className='text_proposta'>Postar suas obras criativas:</p>

<p className='text_proposta'>Compartilhe sua paixão! Seja você um escritor, ilustrador ou criador de HQs e mangás, aqui é o lugar para publicar suas criações.</p>
        
       </div>
        </div>

      {/* <dialog open={modalCadastroConcluido} className='cadastroDoUsuario' >
        <p className='pCadastro'>Cadastro concluido 😊</p>
        </dialog> */}


        </div>

        <div className='container_recomendacoes'>

<h2 className='recomendações_site'>📚recomendações do site 📚</h2>

</div>
<div className=' container_obras_recomendadas'>


<div className='obras_um' >
  <Link to={'/Obra_do_site_jojo'}>
  <img src="https://m.media-amazon.com/images/I/917WFqQD1mL._AC_UF1000,1000_QL80_.jpg" className='capa_obra_um'/>
  </Link>
 <div className='container_titulo_autor'>
 <div className='titulo_obra_um'>
 <p>steell ball run</p>
 </div>

 <div className='autor_obra_um'>
  <p>autor:  Hirohiko Araki</p>
  </div>
  </div>
  </div>
  

  
  <div className='obra_dois'>


  <img src="https://comicboom.com.br/shop/wp-content/uploads/2022/06/jujutsu-kaisen-18.jpg" className='capa_obra_um'/>
 <div className='container_titulo_autor'>
 <div className='titulo_obra_um'>
 <p>jujutsu kaisen</p>
 </div>

 <div className='autor_obra_um'>
  <p>autor:  gege akutami</p>
  </div>
  </div>
  




    
  </div>

  </div>
    </div>
  

    
    <Rodape_Mywork />
   
      
    </div>
  )
}

export default HomeMywork
