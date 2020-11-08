import React from 'react';
import './styles.scss';
import { Link } from 'react-router-dom';
import PhotoComments from '../PhotoComments';

export default function PhotoContent({ data }) {
  const { photo, comments } = data;

  return (
    <div className='photo'>
      <div className='photo-img'>
        <img src={photo.src} alt={photo.title} />
      </div>
      <div className='photo-details'>
        <div>
          <p className='photo-author'>
            <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>
            <span className='photo-views'>{photo.acessos}</span>
          </p>
          <h1 className='title'>
            <Link to={`/foto/${photo.id}`}>{photo.title}</Link>
          </h1>
          <ul className='photo-attributes'>
            <li>{photo.peso} kg</li>
            <li>{photo.idade} anos</li>
          </ul>
        </div>
      </div>
      <PhotoComments id={photo.id} comments={comments} />
    </div>
  );
}
