import React from 'react'
import CounterButtons from './CounterButtons'
import CounterValue from './CounterValue'
import { useSelector } from 'react-redux'

const Counter = () => {
    const theme=useSelector((state)=>state.Themereducer.theme)
    // console.log(theme)
    const counterstyle = {
        // height: "455px",
        width:"100%",
        backgroundColor: theme === 'light' ? 'white' : 'black',
        color: theme === 'light' ? 'black' : 'white',
        textAlign: "center",
        // paddingTop: "60px",
      }
  return (
    <div className={theme==="light"?"light_theme":"dark_theme"} style={counterstyle} >
      <h3>Counter</h3>
      <CounterValue />
      <CounterButtons />
    </div>
  )
}

export default Counter
