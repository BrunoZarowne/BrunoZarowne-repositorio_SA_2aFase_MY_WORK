import { GlobalContext } from '../context/GlobalContext'
import React from 'react'
import Header_paginas from './Header_paginas'
import Rodape_Mywork from './Rodape_Mywork'
import { useParams } from 'react-router-dom'
import { useContext,useState,useEffect} from 'react'
import './Pagina_da_obra.css'
import { use } from 'react'
import axios from 'axios'

function Pagina_da_Obra() {
const {id}=useParams()
const {UserLogado,formState, setFormState,abrirObraClone,setAbrirObraClone,setUserLogado} = useContext(GlobalContext)
const [telaDoacao,setTelaDoacao]=useState(false)
const [inptFormaPagamento,setInptFormaPagamento]=useState('')
const [inptValor,setInptValor]=useState('')
const [vetorDoacoes,setVetorDoacoes]=useState([])

const  doacoesObra = async()=>{
  try{
    const obra = {obra:abrirObraClone.titulo }// Pegando o título da obra
   
    const resultado = await axios.post('http://localhost:3333/doacoesObra', obra );
    setVetorDoacoes(resultado.data); // Atualizando o estado com os dados recebidos

  }catch(erro){
    console.log('seu erro é: ',erro)
    
  }

}

useEffect(()=>{
  doacoesObra()
})
useEffect(()=>{
  console.log(vetorDoacoes)
},[])

const Doar= async() => {
  if(inptValor=='' || inptFormaPagamento==''){
    alert('prencha os dados requeridos')
  }else{
    try{
  
      const hoje = new Date();
      const dataFormatada = hoje.toISOString().split('T')[0];
      console.log(dataFormatada);
      let info = {
        valor:inptValor,
        usuario:UserLogado.nome,
        obra:abrirObraClone.titulo,
        formapagamento:inptFormaPagamento,
        datadoacao:dataFormatada
  
      } 
      const resultado = await axios.post('http://localhost:3333/doacoes' ,info)
  
    }catch(erro){
      console.log('o erro foi: ',erro)
    }
    
  }

  }
  






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
         <div className='container_genero'>
         <div className='pading_genero'>
         <h1 className='autor-h1'>autor:   {abrirObraClone.autor}</h1>
         <h1 className='genero_h1'>genero:   {abrirObraClone.genero}</h1>
         {(UserLogado.nome === abrirObraClone.autor || UserLogado.edev === true || UserLogado.eadm === true) && (
  <button>apagar a obras</button>
)}
         </div>
       
       <dialog open={true}>{vetorDoacoes.map((item,index)=>{
        <div key={index}>
          <p>{item.obra}</p><p>
            ola
          </p>
        </div>

       })}</dialog>
   






        </div>
        <button className="openModalButton" onClick={() =>setTelaDoacao(true)}>
                Fazer Doação
            </button>

            {(UserLogado.nome === abrirObraClone.autor || UserLogado.edev === true || UserLogado.eadm === true) && (<button>ver doações</button>)}

            

            {telaDoacao && (
                <div className="backdrop" onClick={() => setIsModalOpen(false)}>
                    <div className="modal" onClick={(e) => e.stopPropagation()}>
                    <button
                            className="closeModalButton"
                            onClick={() => setTelaDoacao(false)}
                        >
                            Fechar
                        </button>
                        <p className='fontPdoacao'>A sua contribuição ajuda a manter nosso projeto em funcionamento!</p>
                        <input
                            type="number"
                            className="donationInput"
                            placeholder="Digite o valor da doação"
                            value={inptValor}
                            onChange={(event)=>{setInptValor(event.target.value)}}
                            
                       
                       />
                        <select 
    className='input_select_genero'
    required 
    value={inptFormaPagamento}
    onChange={(event)=>{setInptFormaPagamento(event.target.value)}}
   
  >
    <option value="" disabled>formas de pagamento</option>
    <option value="Manga">debito</option>
    <option value="credito">credito</option>
    <option value="pix">pix</option>
  </select><br/>
                        <button className="donateButton" onClick={Doar}>Doar</button>
                        
                    </div>
                </div>
            )}
   







      
        </div>
     
        
      
        <Rodape_Mywork />
      
    </div>
  )
}

export default Pagina_da_Obra
