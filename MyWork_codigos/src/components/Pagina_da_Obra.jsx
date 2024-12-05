import { GlobalContext } from '../context/GlobalContext'
import React from 'react'
import Header_paginas from './Header_paginas'
import Rodape_Mywork from './Rodape_Mywork'
import { useParams } from 'react-router-dom'
import { useContext,useState,useEffect} from 'react'
import './Pagina_da_obra.css'

function Pagina_da_Obra() {
const {id}=useParams()
const {formState, setFormState,abrirObraClone,setAbrirObraClone} = useContext(GlobalContext)






  return (
    <div>
        <Header_paginas />
        <div className='pagina_obras'>
         <div className='container_titulo_capa_obras_sinopse'>
         <div className='container_titulo_capa_obras'>
          
          <h2 className='h2TituloObra'>{abrirObraClone.titulo}</h2> 
         
         <img src={abrirObraClone.imagemCatalogo} alt="imagem do catalogo da obra" className='Imagem_da_obra' />
         </div>
      
         
         <div className='container_sinopse'>
         <div className='container_h1_sinopse'><h1 className='h1_sinopse'>sinopse</h1></div>
        <p className='sinopse_obras'>{abrirObraClone.sinopse}</p>
        
        </div>
         
         
         </div>
         
        
         
   













      
        </div>
     
        
      
        <Rodape_Mywork />
      
    </div>
  )
}

export default Pagina_da_Obra
