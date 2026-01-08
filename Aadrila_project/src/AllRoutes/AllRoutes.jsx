import React from 'react'
import { Route, Routes } from 'react-router-dom'

export const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/' element={<Industries/>}/>
        <Route path='/' element={<Product/>}/>
        <Route path='/' element={<Blog/>}/>
        <Route path='/' element={<Contact Us/>}/>
        <Route path='/' element={<About Us/>}/>
      </Routes>
    </div>
  )
}


