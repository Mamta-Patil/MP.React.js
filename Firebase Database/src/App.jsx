import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'
import Navbar from './comonent/Navbar'
import AllRoutes from './comonent/AllRoutes'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    <>
    <Navbar />
    <AllRoutes />
    </>
  )
}

export default App
