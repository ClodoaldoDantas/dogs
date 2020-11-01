import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Dogs } from '../../assets/dogs.svg';
import './styles.scss';
import { UserContext } from '../../context/UserContext';

export default function Header() {
  const { data, userLogout } = useContext(UserContext);

  return (
    <header className='header'>
      <nav className='nav container'>
        <Link className='logo' to='/' aria-label='Dogs - Home'>
          <Dogs />
        </Link>
        {data && data.email}
        {data ? (
          <Link className='login' to='/conta'>
            {data.nome}
            <button onClick={userLogout}>Sair</button>
          </Link>
        ) : (
          <Link className='login' to='/login'>
            Login / Criar
          </Link>
        )}
      </nav>
    </header>
  );
}
