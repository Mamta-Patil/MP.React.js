import React from 'react'
import { Routes ,Route} from 'react-router-dom'
import Dashboard from './Dashboard'
import Sign_up from './Sign_up'
import HomePage from './HomePage'
import PrivateRoutes from './PrivateRoutes'
 const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage /> } ></Route>
        <Route path='dashboard' element={
          <PrivateRoutes>
           <Dashboard />
          </PrivateRoutes>
          } >          
        </Route>
        <Route path='login' element={<Sign_up />} ></Route>        
      </Routes>
    </div>
  )
}

export default AllRoutes
