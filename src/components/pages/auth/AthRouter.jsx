import React from 'react';
import { AthLayout, SignIn, SignUp, ForgotPassword, Error } from './index';
import { Routes, Route } from 'react-router-dom';

const AthRouter = () => {
  return (
    <Routes>
        <Route element={<AthLayout />}>
            <Route index element={<SignIn />} />
            <Route path='/sign-up' element={<SignUp />} />
            <Route path='/forgot-password' element={<ForgotPassword />} />
            <Route path='*' element={<Error />} />
        </Route>
    </Routes>
  )
}

export default AthRouter;
