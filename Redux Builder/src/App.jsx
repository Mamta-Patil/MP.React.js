import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/Counter'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import Theme from './components/Theme'

function App() {
  return (
    <Provider store={store}>
      <Theme />
     <Counter />
    </Provider>
  )
}

export default App
