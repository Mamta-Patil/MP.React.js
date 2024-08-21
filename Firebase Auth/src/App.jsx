import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sign_up from './Component/Sign_up'
import Signin_form from "./Component/Signin_form"
import Auth from './Auth'

function App() {

  return (
    <div>
    <div className='main'>
      <Auth />
    </div>
    </div>
  )
}

export default App
