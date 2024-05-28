import React from 'react';
import { ALayout, Dashboard, Page, Media, Project, Analytic, Profile, Inbox, Setting, Error } from './index';
import { Routes, Route } from 'react-router-dom';

const ARouter = () => {
  return (
    <Routes>
        <Route element={<ALayout />}>
            <Route index path='/' element={<Dashboard />} />
            <Route path='/pages' element={<Page />} />
            <Route path='/media' element={<Media />} />
            <Route path='/projects/submenu' element={<Project />} />
            <Route path='/analytics' element={<Analytic />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/inbox' element={<Inbox />} />
            <Route path='/settings' element={<Setting />} />
            <Route path='*' element={<Error />} />
        </Route>
    </Routes>
  )
}

export default ARouter;
