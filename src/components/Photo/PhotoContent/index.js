import React, { useContext } from 'react';
import './styles.scss';
import { Link } from 'react-router-dom';
import PhotoComments from '../PhotoComments';
import { UserContext } from '../../../context/UserContext';
import PhotoDelete from '../PhotoDelete';
import Image from '../../Image';

export default function PhotoContent({ data }) {
  const { photo, comments } = data;
  const user = useContext(UserContext);

  return (
    <div className='photo'>
      <div className='photo-img'>
        <Image src={photo.src} alt={photo.title} />
      </div>
      <div className='photo-details'>
        <div>
          <p className='photo-author'>
            {user.data && user.data.username === photo.author ? (
              <PhotoDelete id={photo.id} />
            ) : (
              <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>
            )}

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
