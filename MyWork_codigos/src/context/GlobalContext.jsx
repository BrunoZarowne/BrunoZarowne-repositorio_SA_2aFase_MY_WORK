import { children, createContext,useState } from "react";

export const GlobalContext=createContext()

export const GlobalContextProvider =({children})=>{ 
let usuariologado="gill battes"
const [fotoUsuario,setFotoUsuario]=useState('../images/imagem_padrao_usuario.svg')

 return(

<GlobalContext.Provider value={{

    usuariologado,
    setFotoUsuario,
    fotoUsuario}}>

{children}
</GlobalContext.Provider>
 )
 
}