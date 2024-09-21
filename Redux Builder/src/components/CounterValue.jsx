import React from 'react'
import { useSelector } from 'react-redux'

const CounterValue = () => {
    const CounterValue=useSelector((state)=>state.Counterreducer.value)
 
  return (
    <div style={{padding:"5px"}}>
        {CounterValue}
    </div>
  )
}

export default CounterValue
