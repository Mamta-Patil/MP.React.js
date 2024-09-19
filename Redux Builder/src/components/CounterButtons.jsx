import React from 'react'
import { useDispatch } from 'react-redux'
import { handleAdd, handleReduce } from '../redux/actionType'

const CounterButtons = () => {
    const dispatch=useDispatch()
    // console.log(dispatch)
  return (
    <div>
     <button onClick={()=>dispatch(handleAdd(1))}>Add</button>
     <button onClick={()=>dispatch(handleReduce(1))}>Reduce</button>
    </div>
  )
}

export default CounterButtons
