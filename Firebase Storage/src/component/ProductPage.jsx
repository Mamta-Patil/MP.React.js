import { addDoc, collection, getDoc, getDocs, updateDoc } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useFetcher } from 'react-router-dom'
import { doc, deleteDoc } from "firebase/firestore";

import { db } from '../Services/Firebase'
 export const ProductPage = () => {
const [data,setdata]=useState([])
const [formdata,setformdata]=useState({
  image:'',
  title:'',
  category:'',
  price:'',
  description:'',
  id:null
})

const handlesubmit=async(e)=>{
  e.preventDefault()
  if(formdata.id)
  {
    const productref = doc(db,"products",formdata.id);
    await updateDoc(productref,{
      image:formdata.image,
      title:formdata.title,
      category:formdata.category,
      price:formdata.price,
      descrption:formdata.description,
    })
  }
  else
  {
    await addDoc(collection(db,"products"),{
      image:formdata.image,
      title:formdata.title,
      category:formdata.category,
      price:formdata.price,
      descrption:formdata.description,
    })
  }
  setformdata({image:'',title:'',category:'',price:'',description:'',id:null})
  getdataFromFirebase()
}

const handlEdit=(product)=>{
setformdata(product)
}

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

  const handledelet= async (id)=>{
    try{
      await deleteDoc(doc(db, "products",id));
getdataFromFirebase()
    }
    catch(err) {
console.log(err)
    }
  }
  
  return (
   <div>
    <div>
<form onSubmit={handlesubmit}>
  <input type='text' value={formdata.image} placeholder='image' onChange={(e)=>setformdata({...formdata,image:e.target.value})} /><br />
  <input type='text' value={formdata.title} placeholder='title' onChange={(e)=>setformdata({...formdata,title:e.target.value})} /><br />
  <select value={""}  onChange={(e)=>setformdata({...formdata,category:e.target.value})}> 
    <option value={""}>Select Categories</option>
    <option value={"men's clothing"}>Men's Clothing</option>
    <option value={"jewelery"}></option>jewelary
    <option value={"electronics"}>Electronics</option>
    <option value={"women's clothing"}>Women's Clothing</option>    
  </select>
  <input type='text' value={formdata.price} placeholder='Price' onChange={(e)=>setformdata({...formdata,price:e.target.value})} /><br />
  <input type='text' value={formdata.description} placeholder='Description' onChange={(e)=>setformdata({...formdata,description:e.target.value})} /><br />
<input type='submit' />
</form>
    </div>
    <div className='row m-0 mt-5 justify-content-evenly'>
      {data.map((el)=>(
    <div key={el.id}  className='col-lg-4 col-md-6 products text-center'>
<img src={el.image} height={150} width={150} />
<h6>{el.id} </h6>
<h6>{el.title} </h6>
<h6>{el.price} </h6>
<h6>{el.description} </h6>
<h6>{el.category} </h6>
<div className='d-flex justify-content-between'>
<button onClick={()=>handlEdit(el)}>Edit</button>
<button onClick={()=>handledelet(el.id)} className='ms-4'>Delete</button>
</div>
    </div>
 
      ))}
    </div>   
   </div> 
  )
}

//  ProductPage
