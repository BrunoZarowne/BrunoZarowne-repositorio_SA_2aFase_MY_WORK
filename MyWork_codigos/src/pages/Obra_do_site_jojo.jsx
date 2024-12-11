import React from 'react'
import Header_paginas from '../components/Header_paginas'
import Rodape_Mywork from '../components/Rodape_Mywork'
import './obra_do_site_jojo.css'
function Obra_do_site_jojo() {
  return (
    <div>
      

      <Header_paginas />
        <div className='pagina_obras'>
         <div className='container_titulo_capa_obras_sinopse'>
         <div className='container_titulo_capa_obras'>
          
          <h2 className='jojo_titulo'>steel ball run</h2> 
         
         <img src='https://m.media-amazon.com/images/I/917WFqQD1mL._AC_UF1000,1000_QL80_.jpg' alt="imagem do catalogo da obra" className='Imagem_da_obra_jojo' />
         </div>
      
         
         <div className='container_sinopse'>
         <div className='container_h1_sinopse'><h1 className='h1_sinopse'>sinopse</h1></div>
        <p className='sinopse_obras'>Ambientado nos Estados Unidos em 1890, a história segue Johnny Joestar, um ex-jóquei paraplégico, e Gyro Zeppeli, mestre em uma arte mística chamada Spin, enquanto competem com um grande número de outros na corrida Steel Ball Run: um corrida louca pela América por um grande prêmio de 50 milhões de dólares.</p>
        
        </div>
         </div>
         <div className='container_genero'>
         <div className='pading_genero'>
         <h1 className='autor-h1'>autor: Hirohiko Araki  </h1>
         <h1 className='genero_h1'>genero: Manga  </h1>
         </div>
   






        </div>







      
        </div>
     
        
      
        <Rodape_Mywork />
      





    </div>
  )
}

export default Obra_do_site_jojo
