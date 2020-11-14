import React from 'react';
import Feed from '../../../components/Feed';
import { useParams } from 'react-router-dom';
import Head from '../../../components/Head';

export default function UserProfile() {
  const { user } = useParams();

  return (
    <section className='container mainContainer'>
      <Head title={user} />
      <h1 className='title'>{user}</h1>
      <Feed user={user} />
    </section>
  );
}
