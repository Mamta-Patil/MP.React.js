import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Studentorm from './studentform'
import "./studentform.css"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<Studentorm/>
    </>
  )
}

export default App
