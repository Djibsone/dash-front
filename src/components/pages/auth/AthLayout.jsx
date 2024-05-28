import React, { Fragment } from 'react';
import { Outlet } from 'react-router-dom';

const AthLayout = () => {
  return (
    // <Fragment className='h-screen w-screen overflow-hidden'>          
        <Outlet />
    // </Fragment>
  )
}

export default AthLayout;
