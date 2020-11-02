import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

export default function Button({ children, href, ...props }) {
  return href ? (
    <Link to={href} className='button'>
      {children}
    </Link>
  ) : (
    <button className='button' {...props}>
      {children}
    </button>
  );
}

Button.defaultProps = {
  href: false,
};
