import React from 'react'
import { NavLink } from 'react-router-dom'
import { getAuth, signOut } from "firebase/auth";
import { auth } from '../Service/Firebase';
const Navbar = () => {

const Logout=()=>{
  signOut(auth)
  .then((res)=>{
    alert("logout")
  })
  .catch((err)=>{
    console.log(err)
  })

}
  
  return (
    <div className='d-flex justify-content-evenly bg-black text-light p-2'>
    <NavLink to='/' className="nav-link">Home</NavLink>
    <NavLink to='dashboard' className="nav-link">Dashboard</NavLink>
    <NavLink to='login' className="nav-link" >Login</NavLink>
    <button onClick={Logout}>Logout</button>    
    </div>
  )
}

export default Navbar
