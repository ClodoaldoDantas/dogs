import React, { useContext, useState, useEffect } from 'react';
import { UserContext } from '../../../context/UserContext';
import { NavLink, useLocation } from 'react-router-dom';

import { ReactComponent as FeedSvg } from '../../../assets/feed.svg';
import { ReactComponent as StatsSvg } from '../../../assets/estatisticas.svg';
import { ReactComponent as AddSvg } from '../../../assets/adicionar.svg';
import { ReactComponent as LogoutSvg } from '../../../assets/sair.svg';

import { useMedia } from '../../../hooks/useMedia';

import './styles.scss';

export default function UserHeaderNav() {
  const { userLogout } = useContext(UserContext);
  const mobile = useMedia('(max-width: 40rem)');
  const [activeMenu, setActiveMenu] = useState(false);
  const { pathname } = useLocation();

  function getClassesMenu() {
    let navClasses = mobile ? 'user-header-nav-mobile' : 'user-header-nav';
    let activeClass = activeMenu ? 'active' : '';
    return `${navClasses} ${activeClass}`;
  }

  useEffect(() => {
    setActiveMenu(false);
  }, [pathname]);

  return (
    <>
      {mobile && (
        <button
          aria-label='Menu'
          className={`mobile-button ${activeMenu ? 'active' : ''}`}
          onClick={() => setActiveMenu(!activeMenu)}
        ></button>
      )}
      <nav className={getClassesMenu()}>
        <NavLink to='/conta' end activeClassName='active'>
          <FeedSvg />
          {mobile && 'Minhas Fotos'}
        </NavLink>

        <NavLink to='/conta/estatisticas' activeClassName='active'>
          <StatsSvg />
          {mobile && 'Estatíticas'}
        </NavLink>

        <NavLink to='/conta/postar' activeClassName='active'>
          <AddSvg />
          {mobile && 'Adicionar Foto'}
        </NavLink>

        <button onClick={userLogout}>
          <LogoutSvg />
          {mobile && 'Sair'}
        </button>
      </nav>
    </>
  );
}
