import React, { useEffect } from 'react';

import Error from '../../Error';
import Loading from '../../Loading';
import FeedPhotosItem from '../FeedPhotosItem';
import { useFetch } from '../../../hooks/useFetch';
import api from '../../../services/api';

import './styles.scss';

export default function FeedPhotos({ setModalPhoto }) {
  const { data, loading, error, request } = useFetch();

  useEffect(() => {
    async function fetchPhotos() {
      const { url, options } = api.photosGet({ page: 1, total: 6, user: 0 });
      const { response, json } = await request(url, options);

      console.log(response, json);
    }

    fetchPhotos();
  }, [request]);

  if (error) return <Error message={error} />;
  if (loading) return <Loading />;

  return (
    <ul className='feed animeLeft'>
      {data &&
        data.map((photo) => (
          <FeedPhotosItem
            setModalPhoto={setModalPhoto}
            key={photo.id}
            photo={photo}
          />
        ))}
    </ul>
  );
}
