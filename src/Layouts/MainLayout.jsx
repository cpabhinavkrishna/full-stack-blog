import React from 'react'
import NavBar from '../Components/NavBar/NavBar'
import { Outlet } from 'react-router-dom'
import './MainLayout.css'
const MainLayout = () => {
  return (
    <div className='main-layout'>
      <NavBar/>
      <Outlet/>
    </div>
  )
}

export default MainLayout
