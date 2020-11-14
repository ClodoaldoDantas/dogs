import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import LoginForm from './LoginForm';
import LoginCreate from './LoginCreate';
import LoginPasswordLost from './LoginPasswordLost';
import LoginPasswordReset from './LoginPasswordReset';
import { UserContext } from '../../context/UserContext';

import './styles.scss';
import NotFound from '../../components/NotFound';

export default function Login() {
  const { isLogged } = useContext(UserContext);

  if (isLogged) return <Navigate to='/conta' />;

  return (
    <section className='login'>
      <div className='login-forms'>
        <Routes>
          <Route path='/' element={<LoginForm />} />
          <Route path='criar' element={<LoginCreate />} />
          <Route path='perdeu' element={<LoginPasswordLost />} />
          <Route path='resetar' element={<LoginPasswordReset />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </section>
  );
}
