import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Error from './utils/Error';
import PRouter from './components/pages/public/PRouter';
import ARouter from './components/pages/admin/ARouter';
import AthRouter from './components/pages/auth/AthRouter';
import AuthGuard from './helpers/AuthGuard';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <Router>
      <ToastContainer />
      <Routes>
        <Route path='/*' element={<PRouter />} />
        <Route path='/auth/*' element={<AthRouter />} />
        <Route path='/admin/*' element={
          <AuthGuard>
            <ARouter />
          </AuthGuard>
        } />
      </Routes>
    </Router>
  );
}

export default App;