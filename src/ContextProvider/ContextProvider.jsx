import { createContext, useState } from "react"

export const InfoProvider = createContext(null);

export default function ContextProvider({children}){
    const [themeMode,setTheme] = useState(true);

    const changeTheme=(value)=>{
        setTheme(value);

        console.log(themeMode);
    }

    const infoBundle={changeTheme,themeMode}
    return(
        <>
            <InfoProvider.Provider value={infoBundle}>
                {children}
            </InfoProvider.Provider>
        </>
    )
}