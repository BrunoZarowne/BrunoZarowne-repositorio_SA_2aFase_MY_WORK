import { children, createContext,useState } from "react";

export const GlobalContext=createContext()

export const GlobalContextProvider =({children})=>{ 
let usuariologado="gill battes"
const [fotoUsuario,setFotoUsuario]=useState('../images/imagem_padrao_usuario.svg')
const [vetorUsuarios,setVetorUsuarios]=useState([])//Vetor para o gerencianto de pessoa no site

 return(

<GlobalContext.Provider value={{

    usuariologado,
    setFotoUsuario,
    fotoUsuario,
    vetorUsuarios,
    setVetorUsuarios

    }}>

{children}
</GlobalContext.Provider>
 )
 
}