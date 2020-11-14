import React, { useEffect } from 'react';

import Error from '../../Error';
import Loading from '../../Loading';
import FeedPhotosItem from '../FeedPhotosItem';
import { useFetch } from '../../../hooks/useFetch';
import api from '../../../services/api';

import './styles.scss';

export default function FeedPhotos({ setModalPhoto, user, page, setInfinite }) {
  const { data, loading, error, request } = useFetch();

  useEffect(() => {
    async function fetchPhotos() {
      const total = 3;
      const { url, options } = api.photosGet({ page, user, total });
      const { response, json } = await request(url, options);

      if (response && response.ok && json.length < total) {
        setInfinite(false);
      }
    }

    fetchPhotos();
  }, [request, user, page, setInfinite]);

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
