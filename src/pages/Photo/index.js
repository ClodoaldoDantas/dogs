import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import api from '../../services/api';

import Error from '../../components/Error';
import Loading from '../../components/Loading';
import PhotoContent from '../../components/Photo/PhotoContent';
import Head from '../../components/Head';

export default function Photo() {
  const { id } = useParams();
  const { data, loading, error, request } = useFetch();

  useEffect(() => {
    const { url, options } = api.photoGet(id);
    request(url, options);
  }, [request, id]);

  if (error) return <Error message={error} />;
  if (loading) return <Loading />;
  if (!data) return null;

  return (
    <section className='container mainContainer'>
      <Head title={data.photo.title} />
      <PhotoContent single data={data} />
    </section>
  );
}
