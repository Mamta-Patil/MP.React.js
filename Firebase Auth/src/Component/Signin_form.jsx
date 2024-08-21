import React ,{useState} from 'react'
import { getAuth,signInWithEmailAndPassword,GoogleAuthProvider } from "firebase/auth";
import GoogleButton from 'react-google-button'
import { auth,provider } from './firebase'
import { signInWithPopup } from 'firebase/auth';

const Signin_form = ({isvalid}) => {  
  const [email,setemail]=useState("");
  const [password,setpassword]=useState("")

    const sign_in=(e)=>{
        e.preventDefault()
       signInWithEmailAndPassword(auth,email,password)
       .then((res)=>{
         alert("you are login scucessfully 🤩")
         console.log(res)
       })
       .catch((err)=>{
         alert("first create your account 😎")
         console.log(err)
       })
     }

    const SigninWithGoogle=(e)=>{
      e.preventDefault();
      signInWithPopup(auth,provider)
      .then((res)=>alert("Login scuceessfully🤩"))
      .catch((err)=>alert("First create your account😎"))
    }

  return (
    <div>
 <div>
      <form onSubmit={sign_in} className="signin_form">
        <h3>Signin </h3>
        <input type='text' value={email} name='email' onChange={(e)=>setemail(e.target.value)} placeholder='Enter your Email' /> <br /> <br/>
        <input type='password' value={password} name='password' onChange={(e)=>setpassword(e.target.value)} placeholder='Enter your Password' /> <br /><br />
        <input type='submit' onClick={sign_in} />
        <p> -------or------- </p>
        <GoogleButton onClick={SigninWithGoogle} />
        <p onClick={isvalid}>Create your account</p>
      </form>
     </div>
    </div>
  )
}

export default Signin_form
