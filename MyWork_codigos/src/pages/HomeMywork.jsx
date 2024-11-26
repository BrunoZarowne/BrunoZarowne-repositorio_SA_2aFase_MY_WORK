import React from 'react'
import Header_paginas from '../components/Header_paginas.jsx'
import Rodape_Mywork from '../components/Rodape_Mywork.jsx'
import './HomeMywork.css'

function HomeMywork() {
  return (
    <div className='container_Home'>
    <Header_paginas />
    <div className='container_conteudo'>
    <div className='container_titulo_introducao'>
        <div className='conatiner_titulo'>

          <h1> 🐸 bem vindo ao My Work 🐸</h1>




          </div>
          <div className='container_introducao'> 
          <p>💯seu site de mangas favorito💯</p>
        
        
        </div>

  


        </div>

        <div className='container_recomendacoes'>

<h2>📚recomendações do site 📚</h2>

</div>
<div className=' container_obras_recomendadas'>


<div className='obras_um' >
  
  <img src="https://m.media-amazon.com/images/I/917WFqQD1mL._AC_UF1000,1000_QL80_.jpg" className='capa_obra_um'/>
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
