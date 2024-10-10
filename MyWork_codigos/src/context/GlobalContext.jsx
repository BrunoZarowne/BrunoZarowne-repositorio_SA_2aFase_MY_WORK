import { children, createContext,useState } from "react";

export const GlobalContext=createContext()

export const GlobalContextProvider =({children})=>{ 
let usuariologado="gill battes"

 return(

<GlobalContext.Provider value={{usuariologado}}>
{children}
</GlobalContext.Provider>
 )
 
}