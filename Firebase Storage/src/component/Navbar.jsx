import React from 'react'
import { NavLink } from 'react-router-dom'
import HomePage from './HomePage'

const Navbar = () => {
  return (
    <div className='d-flex justify-content-between p-2' style={{backgroundColor:"black",color:"#fff"}}>
      <NavLink to={"/"} className="nav-link ps-4">HomePage</NavLink>
      <NavLink to={"/product"} className="nav-link ps-4">ProductPage</NavLink>
      <NavLink to={"/addproduct"} className="nav-link pe-4">AddproductPage</NavLink>
    </div>
  )
}

export default Navbar
