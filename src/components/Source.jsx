import React from 'react'
import C from './C'

export const Usercontext = React.createContext();

export default function Source() {
    
  return (
    <div>
      <Usercontext.Provider value={"Archis"}>
        <C />
      </Usercontext.Provider>
    </div>
  )
}
