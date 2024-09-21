import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handleAdd, handleReduce } from '../redux/actionType'
import Counter from './Counter'

const CounterButtons = () => {
    const dispatch=useDispatch()
    console.log(dispatch)
    const value=useSelector((state)=>state.Counterreducer.value)
  return (
    <div>
     <button onClick={()=>dispatch(handleAdd(1))}  >Add</button>
     <button onClick={()=>dispatch(handleReduce(1))} style={{marginLeft:"10px"}} disabled={value==0} >Reduce</button>
    </div>
  )
}

export default CounterButtons