import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Dogs } from '../../assets/dogs.svg';
import './styles.scss';
import { UserContext } from '../../context/UserContext';

export default function Header() {
  const { data } = useContext(UserContext);

  return (
    <header className='header'>
      <nav className='header-nav container'>
        <Link className='header-logo' to='/' aria-label='Dogs - Home'>
          <Dogs />
        </Link>
        {data ? (
          <Link className='header-login' to='/conta'>
            {data.nome}
          </Link>
        ) : (
          <Link className='header-login' to='/login'>
            Login / Criar
          </Link>
        )}
      </nav>
    </header>
  );
}
