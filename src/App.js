import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UserProvider } from './context/UserContext';

const App = () => {
  return (
    <BrowserRouter>
      <UserProvider>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login/*' element={<Login />} />
        </Routes>
        <Footer />
      </UserProvider>
    </BrowserRouter>
  );
};

export default App;
