import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import UserHeaderNav from '../UserHeaderNav';
import './styles.scss';

export default function UserHeader() {
  const [title, setTitle] = useState('');
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case '/conta/estatisticas':
        setTitle('Estatísticas');
        break;
      case '/conta/postar':
        setTitle('Adicionar Foto');
        break;
      default:
        setTitle('Minha Conta');
    }
  }, [location]);

  return (
    <header className='user-header'>
      <h1 className='title'>{title}</h1>
      <UserHeaderNav />
    </header>
  );
}
