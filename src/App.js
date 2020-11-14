import React from 'react';

import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import User from './pages/User';
import Photo from './pages/Photo';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import ProtectedRoute from './utils/ProtectedRoute';
import UserProfile from './pages/User/UserProfile';
import NotFound from './components/NotFound';
// import Footer from './components/Footer';

const App = () => {
  return (
    <BrowserRouter>
      <UserProvider>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login/*' element={<Login />} />
          <ProtectedRoute path='/conta/*' element={<User />} />
          <Route path='/foto/:id' element={<Photo />} />
          <Route path='/perfil/:user' element={<UserProfile />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        {/* <Footer /> */}
      </UserProvider>
    </BrowserRouter>
  );
};

export default App;
