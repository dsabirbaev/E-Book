


import { createContext, useState } from "react";

export const Localization = createContext();

const LocalWrapper = ({children}) => {
    const [lang, setLang] = useState("UZ");

    return <Localization.Provider value={{lang, setLang}}>
            {children}
        </Localization.Provider>    
}

export default LocalWrapper;

