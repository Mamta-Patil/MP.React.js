import React from 'react'
import { Route,Routes } from 'react-router-dom'
import { ProductPage } from './ProductPage'
import {AddProducts} from './AddProducts'
import HomePage from './HomePage'

export const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>       
        <Route path='/product' element={<ProductPage />}></Route>
        <Route path='/addproduct' element={<AddProducts />}></Route>
      </Routes>
    </div>
  )
}

// export default AllRoutes
