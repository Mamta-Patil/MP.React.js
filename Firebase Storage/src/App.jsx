import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {ProductPage} from './component/ProductPage'
import Navbar from './component/Navbar'
import {AllRoutes} from './component/AllRouTes'
import {AddProducts} from './component/AddProducts'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    <>
    {/* <ProductPage/> */}
    <Navbar />
    <AllRoutes />
    </>
  )
}

export default App
