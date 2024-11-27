import { GlobalContext } from '../context/GlobalContext'
import React from 'react'
import Header_paginas from './Header_paginas'
import Rodape_Mywork from './Rodape_Mywork'
import { useParams } from 'react-router-dom'
import { useContext,useState,useEffect} from 'react'

function Pagina_da_Obra() {
const {id}=useParams()
const {formState, setFormState,abrirObraClone,setAbrirObraClone} = useContext(GlobalContext)






  return (
    <div>
        <Header_paginas />
        {abrirObraClone && abrirObraClone.imagemCatalogo ? (
        <img src={abrirObraClone.imagemCatalogo} alt="Imagem da obra" />
      ) : (
        <p>Carregando imagem...</p>
      )}
        
      
        <Rodape_Mywork />
      
    </div>
  )
}

export default Pagina_da_Obra
