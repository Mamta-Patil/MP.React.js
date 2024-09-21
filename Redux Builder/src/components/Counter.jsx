import React from 'react'
import CounterButtons from './CounterButtons'
import CounterValue from './CounterValue'
import { useSelector } from 'react-redux'

const Counter = () => {
    const theme=useSelector((state)=>state.Themereducer.theme)
    const counterstyle = {
        backgroundColor: theme === 'light' ? 'white' : 'black',
        color: theme === 'light' ? 'black' : 'white',
        textAlign: "center",
        paddingBottom:"100px",
        paddingTop:"5px"
      }
  return (
    <div className={theme==="light"?"light_theme":"dark_theme"} style={counterstyle} >
      <h3 style={{margin:"0px",padding:"5px"}} >Counter</h3>
      <CounterValue  />
      <CounterButtons />
    </div>
  )
}

export default Counter
