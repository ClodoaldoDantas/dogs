import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className='header'>
      <nav className='container'>
        <Link to='/'>Home</Link>
        <Link to='/login'>Login / Criar</Link>
      </nav>
    </div>
  );
}
