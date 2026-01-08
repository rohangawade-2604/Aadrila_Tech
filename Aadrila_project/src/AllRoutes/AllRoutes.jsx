import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Hero } from '../Hero_Component/Hero'

export const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Hero/>}/>
        <Route path='/industries' element={<industries/>}/>
        <Route path='/product' element={<product/>}/>
        <Route path='/blog' element={<blog/>}/>
        <Route path='/contact_us' element={<contact_us/>}/>
        <Route path='/about_us' element={<about_Us/>}/>
      </Routes>
    </div>
  )
}


