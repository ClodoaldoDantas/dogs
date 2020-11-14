import React from 'react';
import Feed from '../../../components/Feed';
import { useParams } from 'react-router-dom';

export default function UserProfile() {
  const { user } = useParams();

  return (
    <section className='container mainContainer'>
      <h1 className='title'>{user}</h1>
      <Feed user={user} />
    </section>
  );
}
