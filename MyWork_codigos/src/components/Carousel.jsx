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
  const {formState, setFormState,abrirObraClone,setAbrirObraClone,UserLogado,setUserLogado,modalPostagem,setModalPostagem,} = useContext(GlobalContext)
  const [obrasHq,setObrasHq]=useState([])
  const [obrasMangaVetor,setObrasMangaVetor]=useState([])
  const [obrasLivrosVetor,setObrasLivroVetor]=useState([])


  

  const [livros, setLivros] = useState([
    {
    id: '1',
    title: 'Harry Potter',
    author: 'J. K. Rowling',
    pages: '590',
    date: '26/06/1997',
    summary: 'Harry Potter é um garoto órfão que vive infeliz com seus tios, os Dursleys. Ele recebe uma carta contendo um convite para ingressar em Hogwarts, uma famosa escola especializada em formar jovens bruxos. Inicialmente, Harry é impedido de ler a carta por seu tio, mas logo recebe a visita de Hagrid, o guarda-caça de Hogwarts, que chega para levá-lo até a escola. Harry adentra um mundo mágico que jamais imaginara, vivendo diversas aventuras com seus novos amigos, Rony Weasley e Hermione Granger.',
    image: 'https://m.media-amazon.com/images/I/81ibfYk4qmL._AC_UF1000,1000_QL80_.jpg',
    genre: 'Livro'
    },

    {
    id: '2',
    title: 'O Senhor dos Anéis',
    author: 'J. R. R. Tolkien',
    pages: '1228',
    date: '03/01/1892',
    summary: 'Numa cidadezinha indolente do Condado, um jovem hobbit é encarregado de uma imensa tarefa. Deve empreender uma perigosa viagem através da Terra-média até as Fendas da Perdição, e lá destruir o Anel do Poder - a única coisa que impede o domínio maléfico do Senhor do Escuro.',
    image: 'https://m.media-amazon.com/images/I/81hCVEC0ExL._AC_UF1000,1000_QL80_.jpg',
    genre: 'Livro'
    },

    {
    id: '3',
    title: 'Anne Frank',
    author: 'Anne Frank',
    pages: '416',
    date: '25/06/1947',
    summary: 'Suas anotações narram os sentimentos, os medos e as pequenas alegrias de uma menina judia que, como sua família, lutou em vão para sobreviver ao Holocausto. Uma poderosa lembrança dos horrores de uma guerra, um testemunho eloquente do espírito humano. Assim podemos descrever os relatos feitos por Anne em seu diário.',
    image: 'https://m.media-amazon.com/images/I/91RMqWB-CTL._AC_UF1000,1000_QL80_.jpg',
    genre: 'Livro'
    },

    {
    id: '4',
    title: 'O Pequeno Principe',
    author: 'Antoine de Saint-Exupéry',
    pages: '94',
    date: '06/04/1943',
    summary: 'É um conto poético, com ilustrações em aquarela do autor, em que um piloto perdido no deserto encontra um jovem príncipe em visita à Terra vindo de um minúsculo asteroide. A história é filosófica e inclui críticas sociais ao mundo adulto.',
    image: 'https://m.media-amazon.com/images/I/71LJ4k-k9hL._AC_UF1000,1000_QL80_.jpg',
    genre: 'Livro'
    },

    {
    id: '5',
    title: 'A Culpa É Das Estrelas',
    author: 'John Green',
    pages: '224',
    date: '10/01/2012',
    summary: 'Hazel foi diagnosticada com câncer aos treze anos e agora, aos dezesseis, sobrevive graças a uma droga revolucionária que detém a metástase em seus pulmões. Ela sabe que sua doença é terminal e passa os dias vendo tevê e lendo Uma aflição imperial, livro cujo autor deixou muitas perguntas sem resposta.',
    image: 'https://m.media-amazon.com/images/I/51M9IbBqxCL.jpg',
    genre: 'Livro'
    },

    {
    id: '6',
    title: 'A Cabana',
    author: 'William P. Young',
    pages: '232',
    date: '10/05/2007',
    summary: 'Missy, a filha mais nova, foi raptada e, de acordo com as provas encontradas numa cabana abandonada, brutalmente assassinada. Quatro anos mais tarde, Mack, mergulhado numa depressão da qual nunca recuperou, recebe um bilhete, aparentemente escrito por Deus, convidando-o a voltar à malograda cabana.',
    image: 'https://m.media-amazon.com/images/I/91fLBlcmpXL._AC_UF1000,1000_QL80_.jpg',
    genre: 'Livro'
    },
  ]) 

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
  },[obrasMangaVetor])
  
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
  },[obrasHQ])

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
  },[obrasLivrosVetor])
 
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



  function guardar_infos_postagem () {
    if (formState.title == '' || formState.author == '' || formState.pages == '' || 
    formState.date == '' || formState.summary == '' || formState.images == '' || formState.genre == ''){
      alert('Você esqueceu de preencher um dos campos, por favor preencha para poder postar sua obra 😊')
    }else{
      if (formState.genre == "Manga"){
        // setImagensObrasMangas((imagensObrasMangas) => 
        // [...imagensObrasMangas, 
        // {id: imagensObrasMangas.length + 1, title: formState.title, author: formState.author, pages: formState.pages, date: formState.date,
        // summary: formState.summary, image: formState.images, genre: formState.genre}])
        // console.log(imagensObrasMangas)
       
      }
      else if( formState.genre == "HQ"){
        setImagensObrasHQs((imagensObrasHQs) => 
        [...imagensObrasHQs, 
        {id: imagensObrasHQs.length + 1, title: formState.title, author: formState.author, pages: formState.pages, date: formState.date,
        summary: formState.summary, image: formState.images, genre: formState.genre}])
        console.log(imagensObrasHQs)
      }
      else if( formState.genre == "Livro"){
        setLivros((livros) => 
        [...livros, 
        {id: livros.length + 1, title: formState.title, author: formState.author, pages: formState.pages, date: formState.date,
        summary: formState.summary, image: formState.images, genre: formState.genre}])
        console.log(livros)
      }
    }


  }
  const postarObras = async() =>{
    try{
      const infoObras={
        title: formState.title,
        author: UserLogado.nome,
        pages: formState.pages,
        date: formState.date,
        summary: formState.summary,
        image: formState.images,
        genre: formState.genre
      }
      console.log(infoObras)
      
      const resultado = await axios.post('http://localhost:3333/PostarObras',infoObras)

    }catch(erro){
      console.error('o erro foi :',erro)
      alert("url muito grande")

    }
    
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
          <SwiperSlide key={index} className='SwiperSlideManga' >
            <Link to={`/detalhes/${item.id}`}>
              <img className='imgsMangas' src={item.image} onClick={()=>{abrirModalObras(item.id) ,setAbrirObraClone({ id:item.id, titulo:item.title,
              autor:item.author,
              paginas:item.pages,
              data_lancamento:item.date,
              sinopse:item.summary,
              imagemCatalogo:item.image,
              genero:item.genre})}}/><br />
              </Link>
            <label>{item.title}</label>
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
            <img className='imgsHQs' src={item.image}onClick={()=>{abrirModalObras(item.id) ,setAbrirObraClone({ id:item.id, titulo:item.title,
              autor:item.author,
              paginas:item.pages,
              data_lancamento:item.date,
              sinopse:item.summary,
              imagemCatalogo:item.image,
              genero:item.genre})}}/>
              </Link>
         <br />
          <label>{item.title}</label>
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
        <button className='buttonFecharModal' onClick={()=>{setModalPostagem(false)}}><img src="./images/fechar_modal.svg"/></button>
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

            <label>Nome do Autor</label><br />
            <input 
            type="text" 
            required 
            value={formState.author} 
            onChange={(e) => 
            setFormState({...formState, author: e.target.value})}/>
            <br /><br /><br />

            <label>Gênero</label><br />
  <select 
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
                <textarea 
                name="" 
                id="" 
                cols="55" 
                rows="30" 
                required 
                value={formState.summary} 
                onChange={(e) => 
                setFormState({...formState, summary: e.target.value})}></textarea><br /><br />
             

               
               
               
                <button type="submit" onClick={postarObras}>Postar</button>
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