import React from 'react'
import { useState } from 'react'
import axios from 'axios'
// const logout=()=>{
//   remove
// }
const Login = () => {
  const [email,setemail]=useState("")
  const [password,setpassword]=useState("")

  const handlesubmit=(e)=>{
    e.preventDefault(),
    console.log(email,password)

    let userdata={
      email,
      password
    }

    // // Fetch
    // fetch("https://reqres.in/api/login")
    // .then((res)=>res.json())
    // .then((data)=>console.log(data))
    // .catch((err)=>console.log(err))
    
    // using axios function
    axios.post("https://reqres.in/api/login",userdata).then((res)=>{
      let tokenfromequres=res.data.token
      // console.log(res)
      localStorage.setItem("token",tokenfromequres)
      // console.log(tokenfromequres)
    })
    .catch((err)=>console.log(err))
  
  } 

  const logout=(e)=>{
    e.preventDefault()
    localStorage.removeItem("token")
  }

  
  return (
    <div className='form'>
      <h4>Login page</h4>
      <form action='' onSubmit={(e)=>handlesubmit(e)}>
      <input type='email' onChange={(e)=>setemail(e.target.value)} placeholder='Enter your email' />
      <br /><br />
      <input type='password' onChange={(e)=>setpassword(e.target.value)} placeholder='Enter your password' />
      <br /><br />
      <input type='submit' />
      <button onClick={(e)=>logout(e)}>Log out</button>
      </form>
    </div>
  )
}

export default Login
