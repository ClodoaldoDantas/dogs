import React, { useContext, useState } from 'react';
import { UserContext } from '../../../context/UserContext';
import { NavLink } from 'react-router-dom';

import { ReactComponent as FeedSvg } from '../../../assets/feed.svg';
import { ReactComponent as StatsSvg } from '../../../assets/estatisticas.svg';
import { ReactComponent as AddSvg } from '../../../assets/adicionar.svg';
import { ReactComponent as LogoutSvg } from '../../../assets/sair.svg';

import './styles.scss';

export default function UserHeaderNav() {
  const { userLogout } = useContext(UserContext);
  const [mobile, setMobile] = useState(null);

  return (
    <nav className='user-header-nav'>
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
  );
}
