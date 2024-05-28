import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout, Home, Service, About, Blog, Contact, Error } from './index'

const PRouter = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/services' element={<Service />} />
        <Route path='/about' element={<About />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<Error />} />
      </Route>
    </Routes>
  )
}

export default PRouter;
