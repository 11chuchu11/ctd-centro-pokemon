import React,{createContext, useState} from "react";

export const DataContext = createContext()

export const DataProvider = ({ children }) => {
    const [dataPokemon, setDataPokemon] = useState({})
    return <DataContext.Provider value={{dataPokemon, setDataPokemon}}>
        {children}
    </DataContext.Provider>
}