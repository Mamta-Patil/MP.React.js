import React, { useState } from 'react'
import { auth } from './firebase';
import { createUserWithEmailAndPassword } from "firebase/auth";

const Sign_up = ({isvalid}) => {
  const [email,setemail]=useState("");
  const [password,setpassword]=useState("")

  const handlesubmit=(e)=>{
    e.preventDefault();
    createUserWithEmailAndPassword(auth,email,password)
    .then((res)=>{
      alert("your account is creted 🤩")
      console.log(email,password)
  })
    .catch((err)=>console.log(err))

  }
  
  return (
    <div>
     <div>
     <form onSubmit={handlesubmit} className='signup_form'>
      <h3>Create your Account</h3>
        <input type='text' value={email}  onChange={(e)=>setemail(e.target.value)} placeholder='Enter your Email' /> <br /><br />
        <input type='password' value={password} onChange={(e)=>setpassword(e.target.value)} placeholder='Enter your Password' /> <br /><br />
        <input type='submit' onClick={handlesubmit} />
       <p onClick={isvalid}>Login</p>

      </form>
     </div>
    </div>
  )
}

export default Sign_up
