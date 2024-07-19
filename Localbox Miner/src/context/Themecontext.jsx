import { createContext, useContext ,useState} from "react";
// create context
export const  themeContext=createContext()

// provide function
export function ThemeContextProviderFunction({children})
{
    const [theme,settheme]=useState("dark")
    const setthemefuntion=()=>{
        settheme(theme=="light"?"dark":'light')
    }
    return  (
        <themeContext.Provider  value={{theme,setthemefuntion}}>
        {children}
        </themeContext.Provider>
    )
}
