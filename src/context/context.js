import React from 'react'

export const StateContext = React.createContext({})

export function StateProvider({ children }) {
    
    // Login state
    const [loginToken, setLoginToken] = React.useState("")

    return (
        <StateContext.Provider value={{
            loginToken, setLoginToken
        }}>
            {children}
        </StateContext.Provider>
    )
}
