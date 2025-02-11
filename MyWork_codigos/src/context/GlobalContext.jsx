import { children, createContext,useState } from "react";

export const GlobalContext=createContext()

export const GlobalContextProvider =({children})=>{ 
let usuariologado="gill battes"
const [fotoUsuario,setFotoUsuario]=useState('../images/imagem_padrao_usuario.svg')
const [vetorUsuarios,setVetorUsuarios]=useState([])//Vetor para o gerencianto de pessoa no site
const[modalPostagem,setModalPostagem] = useState(false)
const [paginaAtiva,setPaginaAtiva]= useState(null)

const [obrasFavoritadas, setObrasFavoritadas] = useState([])
const [obrasVisitadas, setObrasVisitadas] = useState([])

const [UserLogado,setUserLogado] =useState( {
  
        nome:'',
        email:'',
        senha:'',
        dataNascimento:'',
        eDev:false,
        eAdm:false
      
        
      } )
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
      const [abrirObraClone,setAbrirObraClone]=useState({
        id:1,
        titulo:'Titulo padrão',
        autor:'Não ha',
        paginas:'12',
        data_lancamento:'xxxx/xx/xx',
        sinopse:'Sinopse padrão',
        imagemCatalogo:'https://media.istockphoto.com/id/1409329028/vector/no-picture-available-placeholder-thumbnail-icon-illustration-design.jpg?s=612x612&w=0&k=20&c=_zOuJu755g2eEUioiOUdz_mHKJQJn-tDgIAhQzyeKUQ=',
        genero:'Não possui'

      }) 
      const [modalCadastroConcluido,setModalCadastroConcluido]=useState(false)



 return(

<GlobalContext.Provider value={{

    usuariologado,
    setFotoUsuario,
    fotoUsuario,
    vetorUsuarios,
    setVetorUsuarios,
    UserLogado,
    setUserLogado,
    paginaAtiva,
    setPaginaAtiva,
    setFormState,
    formState,
    abrirObraClone,
    setAbrirObraClone,
    modalPostagem,
    setModalPostagem,
    modalCadastroConcluido,
    setModalCadastroConcluido,
    obrasFavoritadas,
    setObrasFavoritadas,
    obrasVisitadas,
    setObrasVisitadas
    }}>

{children}
</GlobalContext.Provider>
 )
 
}