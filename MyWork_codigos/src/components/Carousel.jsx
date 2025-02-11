import React, { useContext,useEffect} from 'react'
import { useState } from 'react'
import './Carousel.css'
import { register } from 'swiper/element/bundle'
import Modal from 'react-modal'
import { GlobalContext } from '../context/GlobalContext'
import axios from 'axios'


register()
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

import { Swiper, SwiperSlide } from 'swiper/react'
import Header_paginas from './Header_paginas'
import Rodape_Mywork from './Rodape_Mywork'
import { Link } from 'react-router-dom'

function Carousel() { 
  const [modalObras,setModalObras]=useState(null)
  const {formState, setFormState,abrirObraClone,setAbrirObraClone,UserLogado,setUserLogado,modalPostagem,setModalPostagem,modalCadastroConcluido,setModalCadastroConcluido} = useContext(GlobalContext)
  const [obrasHq,setObrasHq]=useState([])
  const [obrasMangaVetor,setObrasMangaVetor]=useState([])
  const [obrasLivrosVetor,setObrasLivroVetor]=useState([])
  const {obrasFavoritadas, setObrasFavoritadas} = useContext(GlobalContext)
  const {obrasVisitadas, setObrasVisitadas} = useContext(GlobalContext)


  
  const salvarObraSelecionada = async(item) =>{
    try{
      const infoObraSelecionada={ 
      title:item.title,
      author:item.author,
       pages:item.pages,
       date:item.date,
       summary:item.summary,
       image:item.image,
        genre:item.genre
      }
      const salvarObraSelecionada = async(item) =>{
        try{
          const infoObraSelecionada={ 
          title:item.title,
          author:item.author,
           pages:item.pages,
           date:item.date,
           summary:item.summary,
           image:item.image,
            genre:item.genre
          }
           axios.delete('http://localhost:3333//ObrasSelecionadaDeletar')
          console.log(deletarObras.data)



           const resultado = await axios.post('http://localhost:3333/ObrasSelecionada',infoObraSelecionada)
           console.log(resultado.data)
    
        }catch(erro){
          console.error('seu erro foi :',erro)
          
        }
    
      }
       const resultado = await axios.post('http://localhost:3333/ObrasSelecionada',infoObraSelecionada)
       console.log(resultado)

    }catch(erro){
      console.error('seu erro foi :',erro)
      
  
    }

  }

  const obrasManga = async() => {
    try{
      const resposta = await axios.get('http://localhost:3333/obrasManga')
      setObrasMangaVetor(resposta.data)


    }catch(erro){
      console.error(erro)

    }}
  useEffect(() => {
    obrasManga()

  },[])

  useEffect(()=>{
    console.log(obrasMangaVetor)
  },[])
  
  const obrasHQ = async() => {
   try{
    const resultado = await axios.get('http://localhost:3333/obrasHQ')
    setObrasHq(resultado.data)



   }catch(erro){

   }
  }
  useEffect(()=>{
    obrasHQ()
  },[])
  useEffect(()=>{
    console.log(obrasHq)
  },[])

  const obrasLivros = async() => {
    try{
      const resultado = await axios.get('http://localhost:3333/obrasLivros')
      setObrasLivroVetor(resultado.data)
      


    }catch(erro){
      console.error('seu erro foi: ',erro)

    }
  } 
  useEffect(()=>{
    obrasLivros()
  },[])

  useEffect(()=>{
    console.log(obrasLivrosVetor)
  },[])
 
  function vericarurl(url){
  const verrificar=/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i
  return verrificar.test(url)


 }


  const [modalIsOpen, setIsOpen] = useState(false)
  function abrirModal() {
    setIsOpen(true)
  }
  function fecharModal() {
    setIsOpen(false)
    
  }
  function adcImagens() {
    abrirModal()
    
  }
  const abrirModalObras = (id) => {
    setModalObras(modalObras === id ? null:id)
  }



 
  const postarObras = async() => {

    if (formState.title == ''  || formState.pages == '' || 
      formState.date == '' || formState.summary == '' || formState.images == '' || formState.genre == ''){
        alert('Você esqueceu de preencher um dos campos, por favor preencha para poder postar sua obra 😊')
      
  
    }else{
      const hoje = new Date();
      const dia = hoje.getDate().toString().padStart(2, '0');
      const mes = (hoje.getMonth() + 1).toString().padStart(2, '0'); // Lembre-se que os meses começam em 0
      const ano = hoje.getFullYear();

      const dataFormatada = `${dia}/${mes}/${ano}`;
      console.log(dataFormatada);


      try {
          const infoObras = {
              title: formState.title,
              author: UserLogado.nome,
              pages: formState.pages,
              date: formState.date,
              summary: formState.summary,
              image: formState.images,
              genre: formState.genre
          };
          
          console.log(infoObras);
          
          const resultado = await axios.post('http://localhost:3333/PostarObras', infoObras);
          console.log(resultado.data);
          
          // Limpa os inputs após o envio
          setFormState({
              id: "",
              title: "",
              author: "",
              pages: "",
              date: "",
              summary: "",
              images: "",
              genre: ""
          });
  
          alert('Obra postada com sucesso!');
      } catch (erro) {
          console.error('O erro foi:', erro);
          alert("Erro ao postar obra. Verifique os dados e tente novamente.");
      }
    }
};
function adcObrasFavManga(event){ 
  const idManga = event.currentTarget.getAttribute('data-idmanga');
  const titleManga = event.currentTarget.getAttribute('data-titlemanga');
  const imageManga = event.currentTarget.getAttribute('data-imagemanga');
  
  setObrasFavoritadas((fav) =>
  [...obrasFavoritadas, {id: idManga, title: titleManga, img: imageManga}])
  console.log(obrasFavoritadas)
}

function adcObrasHistManga(event){
  const idMangaHist = event.currentTarget.getAttribute('data-idhistmanga');
  const titleMangaHist = event.currentTarget.getAttribute('data-titlehistmanga');

  const dataAtual = new Date()
  const dataHoras = dataAtual.getHours()
  const dataMinutos = dataAtual.getMinutes()
  const dataShow = dataHoras.toString() + ':' + dataMinutos.toString()
  
  setObrasVisitadas(
    [...obrasVisitadas, {id: idMangaHist, title: titleMangaHist, time: dataShow}])
  console.log(obrasVisitadas)
}
// mangas //

// HQ //

function adcObrasFavHQs(event){
const idHQ = event.currentTarget.getAttribute('data-idhq')
const titleHQ = event.currentTarget.getAttribute('data-titlehq')
const imageHQ = event.currentTarget.getAttribute('data-imagehq')

setObrasFavoritadas((fav) =>
  [...obrasFavoritadas, {id: idHQ, title: titleHQ, img: imageHQ}])
  console.log(obrasFavoritadas)
}

function adcObrasHistHQs(event){
const idHQHist = event.currentTarget.getAttribute('data-idhisthq')
const titleHQHist = event.currentTarget.getAttribute('data-titlehisthq')

const dataAtual = new Date()
const dataHoras = dataAtual.getHours()
const dataMinutos = dataAtual.getMinutes()
const dataShow = dataHoras.toString() + ':' + dataMinutos.toString()

setObrasVisitadas(
  [...obrasVisitadas, {id: idHQHist, title: titleHQHist, time: dataShow}])
console.log(obrasVisitadas)
}

// HQ //

// Livro //

function adcObrasFavLivros(event){
const idLivro = event.currentTarget.getAttribute('data-idlivro')
const titleLivro = event.currentTarget.getAttribute('data-titlelivro')
const imageLivro = event.currentTarget.getAttribute('data-imagelivro')

setObrasFavoritadas((fav) =>
  [...obrasFavoritadas, {id: idLivro, title: titleLivro, img: imageLivro}])
  console.log(obrasFavoritadas)
}

function adcObrasHistlivro(event){
const idLivroHist = event.currentTarget.getAttribute('data-idhistlivro')
const titleLivroHist = event.currentTarget.getAttribute('data-titlehistlivro')

const dataAtual = new Date()
const dataHoras = dataAtual.getHours()
const dataMinutos = dataAtual.getMinutes()
const dataShow = dataHoras.toString() + ':' + dataMinutos.toString()

setObrasVisitadas(
  [...obrasVisitadas, {id: idLivroHist, title: titleLivroHist, time: dataShow}])
console.log(obrasVisitadas)
}

  return (
    <div className='containerCarousel'>
         
      
      
    <div className='carouselMangas'>
    <h1 className='Mangas'>Mangas</h1>
      <Swiper
        
        slidesPerView={4}
        pagination={{ clickable: true}}
        navigation className='swiper'>
        {obrasMangaVetor.map((item,index) => (
          <SwiperSlide key={index}  >
         
            <Link to={`/detalhes/${item.id}`}>
              
              <img className='imgsMangas' src={item.image} onClick={()=>{abrirModalObras(item.id)
              
              ,setAbrirObraClone({ id:item.id, titulo:item.title,
              autor:item.author,
              paginas:item.pages,
              data_lancamento:item.date,
              sinopse:item.summary,
              imagemCatalogo:item.image,
              genero:item.genre})}}/><br />
              
              </Link>

            <label>{item.title}</label>
           
            <button className='buttonFav'
   data-idmanga={item.id}
   data-titlemanga={item.title}
   data-imagemanga={item.image}
   onClick={adcObrasFavManga}>curtir
 
</button>

              
          </SwiperSlide>
        ))}
      </Swiper>
     </div><br /><br /><br />     
     <div className='carouselHQs'>
     <h1 className='hq'>HQ</h1>
     <Swiper
      slidesPerView={4}
      pagination={{ clickable: true}}
      navigation  
     >
      {obrasHq.map((item) => (
       
       <SwiperSlide key={item.id}>
     
     <Link to={`/detalhes/${item.id}`}>
            <img className='imgsHQs' src={item.image} onClick={()=>{abrirModalObras(item.id) ,setAbrirObraClone({ id:item.id, titulo:item.title,
              autor:item.author,
              paginas:item.pages,
              data_lancamento:item.date,
              sinopse:item.summary,
              imagemCatalogo:item.image,
              genero:item.genre}),salvarObraSelecionada(item)}}/>
              </Link>
         <br />
          
          <label>{item.title}</label>  <button className='buttonFav'
 data-idhq={item.id}
 data-titlehq={item.title}
 data-imagehq={item.image}
 onClick={adcObrasFavHQs}>cutir

</button>
              
        </SwiperSlide>
      ))}
     </Swiper>
     </div><br />
     <div className='carouselLivros'>
      <h1 className='livros'>livros</h1>
      <Swiper
        slidesPerView={4}
        pagination={{ clickable: true}}
        navigation  
      >
        {obrasLivrosVetor.map((item) => (
          <SwiperSlide key={item.id}>
              <Link to={`/detalhes/${item.id}`}>
              <img className='imgsLivros' src={item.image}onClick={()=>{abrirModalObras(item.id) ,setAbrirObraClone({ id:item.id, titulo:item.title,
              autor:item.author,
              paginas:item.pages,
              data_lancamento:item.date,
              sinopse:item.summary,
              imagemCatalogo:item.image,
              genero:item.genre})}}/>
              </Link><br />
            <label>{item.title}</label>
          
            <button className='buttonFav'
 data-idlivro={item.id}
 data-titlelivro={item.title}
 data-imagelivro={item.image}
 onClick={adcObrasFavLivros}>
curtir
</button>
          
          </SwiperSlide>
        ))}
      </Swiper>
     </div><br />
     <Modal
      className='modalPostagem'
      isOpen={modalPostagem}
      onRequestClose={fecharModal}
      contentLabel='Modal de exemplo'
      ariaHideApp={false}
      >
      
        
        <div className='infosObra'>
        <button className='buttonFecharModal' onClick={()=>{setModalPostagem(false)}}>voltar</button>
          <div className='inputsUm'>
            <label>Link da sua imagen</label><br />
            <input 
            
            type="text" 
            required 
            value={formState.images} 
            onChange={(e) => 
              setFormState({ ...formState, images: e.target.value })
            }
            onBlur={() => {
              if (!vericarurl(formState.images)) {
                alert('Por favor, insira um link válido para a imagem 😊');
                setFormState({ ...formState, images: '' }); // Limpa o campo se a URL for inválida
              }
            }}
          />
          <br /><br /><br />
            
            <label>Titulo</label><br />
            <input 
            type="text" 
            required 
            value={formState.title} 
            onChange={(e) => 
            setFormState({...formState, title: e.target.value})}/>
            <br /><br /><br />

            

            <label>Gênero</label><br />
  <select 
    className='input_select_genero'
    required 
    value={formState.genre} 
    onChange={(e) => 
    setFormState({...formState, genre: e.target.value})}>
    <option value="" disabled>Selecione o gênero</option>
    <option value="Manga">Mangá</option>
    <option value="HQ">HQ</option>
    <option value="Livro">Livro</option>
  </select>
  <br /><br /><br /><br />

            <label>Numero de paginas</label><br />
            <input 
            className='inputMenor' 
            type="number" 
            required 
            value={formState.pages} 
            onChange={(e) => 
            setFormState({...formState, pages: e.target.value})}/>
            <br /><br /><br />
            
            
            <label>Data lançamento</label><br />
            <input 
            className='inputMenor' 
            type="date" 
            required 
            value={formState.date} 
            onChange={(e) => 
            setFormState({...formState, date: e.target.value})}/>
          </div>
            
            <div className='caixaSinopse'>
                <label>Sinopse</label><br />
                <textarea className='input_sinopse'
                name="" 
                id="" 
                cols="55" 
                rows="30" 
                required 
                value={formState.summary} 
                onChange={(e) => 
                setFormState({...formState, summary: e.target.value})}></textarea><br /><br />
             

               
               
               
                <button type="submit" onClick={()=>{postarObras(),setModalPostagem(false)}} className='botao_postar'>Postar</button>
            </div>
        
        </div>
      </Modal>
    </div>
  )
}

export default Carousel

// qnd for usar dar usar esse comando
// npm i swiper
// npm i react-modal

/*
const [formState, setFormState] = useState({
      id: "",
      title: "",
      author: "",
      pages: "",
      date: "",
      summary: "",
      images: "",
      genre: ""
    })

    formState,
    setFormState
*/