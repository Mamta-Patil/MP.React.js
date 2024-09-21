import { createContext, useState } from "react";


let authdata={
   isAuth:false,
   token:null
}

export const AuthContext=createContext()

function AuthContextProvider({children}) {
    const [auth,setauth]=useState(authdata)

    const loginuser=(value)=>{
        setauth({isAuth:true,token:value})        
    }

    const logoutuser=()=>{
        setauth({isAuth:false,token:null})
    }

    return (
    <AuthContext.Provider value={{loginuser,logoutuser,auth}}>
        {children}
    </AuthContext.Provider>
    )
}

export default AuthContextProvider;
