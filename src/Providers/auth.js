import React, { useState, createContext } from 'react'

export const AuthContext = createContext({})

export const AuthProvider = (props) => {

    const [itens, setItens] = useState()

    return(
        <AuthContext.Provider value={{itens, setItens}}>
            {props.children}
        </AuthContext.Provider>
    )
}