import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handleTheme } from '../redux/actionType'
import { MdOutlineWbSunny } from "react-icons/md";
import { FaRegMoon } from "react-icons/fa";

const Theme = () => {
const dispatch=useDispatch()
const theme = useSelector((state) => state.Themereducer.theme);
const Theme ={
    backgroundColor:theme === 'light' ? 'white' : 'black',
    color: theme === 'light' ? 'black' : 'white'
}
const light = {
  color:"black",
  // marginTop:"30px",
  borderRadius:"50px",
  border:"none",
  backgroundColor: theme === 'light' ? 'white' : 'black',
}
const Dark = {
    color:"black",
   borderRadius:"50px",
   border:"none",
}
  return (
    <div style={Theme}>
      <button disabled={theme=='light'} onClick={()=>dispatch(handleTheme('light'))} style={light} > <MdOutlineWbSunny /></button>
      <button  disabled={theme=='Dark'} onClick={()=>dispatch(handleTheme('dark'))} style={Dark} > <FaRegMoon /></button>
    </div>
  )
}

export default Theme
