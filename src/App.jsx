import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Error from './utils/Error';
import PRouter from './components/pages/public/PRouter';
import ARouter from './components/pages/admin/ARouter';
import AthRouter from './components/pages/auth/AthRouter';
import AuthGuard from './helpers/AuthGuard';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [authenticated, setAuthenticated] = useState(false);

  // Fonction pour vérifier l'authentification de l'utilisateur
  const checkAuthentication = () => {
    // Récupérer le token d'authentification depuis le stockage local
    const token = localStorage.getItem('authToken');
      
    // Vérifier si le token existe et n'est pas expiré
    if (token) {
      // Ici, vous pouvez également décoder le token pour vérifier d'autres informations, telles que l'expiration
      setAuthenticated(true); // L'utilisateur est authentifié
    } else {
      setAuthenticated(false); // L'utilisateur n'est pas authentifié
    }
  };  

  // Appel de la fonction de vérification de l'authentification au chargement de l'application
  useEffect(() => {
    checkAuthentication();
  }, []);

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