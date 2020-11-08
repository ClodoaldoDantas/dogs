import React, { useEffect } from 'react';

import Error from '../../Error';
import Loading from '../../Loading';
import PhotoContent from '../../Photo/PhotoContent';
import { useFetch } from '../../../hooks/useFetch';
import api from '../../../services/api';

import './styles.scss';

export default function FeedModal({ photo, setModalPhoto }) {
  const { data, error, loading, request } = useFetch();

  useEffect(() => {
    const { url, options } = api.photoGet(photo.id);
    request(url, options);
  }, [request, photo]);

  function handleOutsideClick(event) {
    if (event.target === event.currentTarget) {
      setModalPhoto(null);
    }
  }

  return (
    <div onClick={handleOutsideClick} className='feed-modal'>
      {error && <Error message={error} />}
      {loading && <Loading />}
      {data && <PhotoContent data={data} />}
    </div>
  );
}
