import { addDoc, collection } from 'firebase/firestore'
import React, { useState } from 'react'
import { db } from '../Services/Firebase'
export const AddProducts = () => {
    const [formdata,setformdata]=useState({
        title:"",
        price:"",
        description:"",
        image:"",
        category:""
    })

const {title,price,description,category,image}=formdata
const handlechange=(e)=>{
    setformdata({...formdata,[e.target.name]:e.target.value})
}
const handlesubmit=async(e)=>{
e.preventDefault()
console.log(formdata)
// addDoc(collection(db,"products"),formdata)
// .then((res)=>{
//     alert("data added scuessfully")
// })
// .catch((err)=>{
// console.log(err)
// })
try{
    const res=await addDoc(collection(db,"products"),formdata)
}
catch(error)
{
console.log(error)
}
}
  return (
    <div>
<form onSubmit={(e)=>handlesubmit(e)}>
<input name='image' type='text' value={image} placeholder='image' onChange={(e)=>handlechange(e)} /><br /><br />
<input name='title' type='text' value={title} placeholder='title' onChange={(e)=>handlechange(e)} /><br /><br />
<select name='category' value={category} onChange={(e)=>handlechange(e)}>
    <option value={''}>Select your categories</option>
    <option value={"men's category"}>men's category</option>
    <option value={"jewelary"}>jewelery</option>
    <option value={"electronics"}>electonics</option>
    <option value={"women's category"}>women's category</option>
</select><br /><br />
<input name='price' value={price} type='text' placeholder='price' onChange={(e)=>handlechange(e)} /><br /><br />
<input name='description' value={description} type='text' placeholder='description' onChange={(e)=>handlechange(e)} /><br /><br />
<button type='submit'>Submit</button>
</form>    
</div>
  )
}

