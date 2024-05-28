import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../../shared/Sidebar';
import Header from '../../shared/Header';

const ALayout = () => {
  return (
    <div className='h-screen w-screen overflow-hidden flex'>
        <Sidebar />
        <div className='flex flex-col flex-auto'>
          {/* <Header /> */}
          <div className='ml-0 mt-2 rounded-xl flex-auto p-2 min-h-0 overflow-auto'>
            <Outlet />
          </div>
        </div>
      </div>
  )
}

export default ALayout;