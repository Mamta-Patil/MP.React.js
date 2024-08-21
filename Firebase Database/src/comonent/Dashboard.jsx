// import React from 'react'
import { collection, getDoc, getDocs } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useFetcher } from 'react-router-dom'
import { doc, deleteDoc } from "firebase/firestore";

import { db } from '../Service/Firebase'

const Dashboard = () => {
  const [data,setdata]=useState([])
  const getdataFromFirebase=()=>{
  getDocs(collection(db,"products"))
    .then((res)=>{
      let newarr=res.docs.map((el)=>({...el.data(),id:el.id}))
      console.log(newarr)
      setdata(newarr)
    })
    .catch((err)=>{
      console.log(err)
    })
  } 
  useEffect(()=>{
    getdataFromFirebase()
  },[]) 

  const handledelet=async()=>{
    await deleteDoc(doc(db, "products"));
  }

  return (
    <div className='row m-0 mt-5 justify-content-evenly'>
    {data.map((el)=>(
  <div key={el.id}  className='col-lg-4 col-md-6 products text-center'>
<img src={el.image} height={150} width={150} />

<h6>{el.id} </h6>
<h6>{el.title} </h6>
<h6>{el.descrption} </h6>
<h6>{el.category} </h6>
<button onClick={handledelet}>Delete</button>

  </div>

    ))}
  </div>    
  )
}

export default Dashboard
