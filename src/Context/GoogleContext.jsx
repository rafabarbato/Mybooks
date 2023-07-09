import { createContext, useState } from 'react';


export const GoogleContext = createContext({});
export  function GoogleProvider({children}) {
  


const [googleCredential, setGoogleCrediential] = useState('')

const data = {
    googleCredential,
    setGoogleCrediential
}

  return (
    <GoogleContext.Provider value={data} >
        {children}
    </GoogleContext.Provider>
  )
}
