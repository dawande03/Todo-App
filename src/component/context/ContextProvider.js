import React, { createContext, useState } from 'react'
export const DeleteContext = createContext("")

const ContextProvider = ({children}) => {
    const [dlttask, setDlttask] = useState(false)
  return (
    <div>
        <DeleteContext.Provider value={{dlttask, setDlttask}}>
            {children}
        </DeleteContext.Provider>
    </div>
  )
}

export default ContextProvider
