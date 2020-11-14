import React from 'react';
import { ReactComponent as DogsSvg } from '../../assets/dogs-footer.svg';
import './styles.scss';

export default function Footer() {
  return (
    <footer className='footer'>
      <DogsSvg />
      <p>Dogs. Alguns direitos reservados</p>
    </footer>
  );
}
