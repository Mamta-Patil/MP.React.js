import React from 'react'
import { useState } from 'react'
import Sign_up from './Component/Sign_up'
import Signin_form from './Component/Signin_form'
const Auth = () => {
    
    const [toggle,settoggle]=useState(true)

    const isvalid=()=>{
        settoggle(!toggle)
    }

  return (  
    <div>
       {toggle ? <Sign_up isvalid={isvalid} />:<Signin_form isvalid={isvalid} />}      
    </div>
  )
}

export default Auth
