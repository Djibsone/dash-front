import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../../shared/Navbar';

const Layout = () => {
  return (
    <div className='bg-gray-100 w-screen h-screen overflow-hidden'>
      <Navbar />
      <div className='overflow-auto h-full mt-16 pb-6 p-2'>
        <Outlet />
      </div>
    </div>
  )
}

export default Layout;
