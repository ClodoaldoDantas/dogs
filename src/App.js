import React from 'react';

import Header from './components/Header';
// import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import User from './pages/User';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import ProtectedRoute from './utils/ProtectedRoute';

const App = () => {
  return (
    <BrowserRouter>
      <UserProvider>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login/*' element={<Login />} />
          <ProtectedRoute path='/conta/*' element={<User />} />
        </Routes>
        {/* <Footer /> */}
      </UserProvider>
    </BrowserRouter>
  );
};

export default App;
