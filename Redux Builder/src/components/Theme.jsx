import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handleTheme } from '../redux/actionType'
import { MdOutlineWbSunny } from "react-icons/md";
import { FaRegMoon } from "react-icons/fa";

const Theme = () => {
  const dispatch = useDispatch()
  const theme = useSelector((state) => state.Themereducer.theme);
  const Theme = {
    backgroundColor: theme === 'light' ? 'white' : 'black',
    color: theme === 'light' ? 'black' : 'white',
    paddingTop: "100px",
    marginTop: "10%",
    display: "flex",
    paddingLeft: "42%"
  }
 
  return (
    <div style={Theme}>
      <div style={{textAlign:"center"}}>
        <p>Light Theme</p>
        <MdOutlineWbSunny disabled={theme == 'light'} onClick={() => dispatch(handleTheme('light'))} style={{ fontSize: "20px" }} />
      </div>
      <div style={{ paddingLeft: "20px" }}>
        <p>Dark Theme</p>
        <FaRegMoon disabled={theme == 'dark'} onClick={() => dispatch(handleTheme('dark'))} style={{ marginLeft: "10px", fontSize: "20px" }} />
      </div>
    </div>
  )
}

export default Theme
