import React from 'react'
import {Routes, Route} from 'react-router-dom'
import LandingPage from '../pages/landing page/LandingPage'
import Dashboard from '../pages/dashboard/Dashboard'
import Cart from '../pages/cart/Cart'

export default function AllRoutes() {
  return (
    <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/cart' element={<Cart/>}/>
    </Routes>
  )
}
