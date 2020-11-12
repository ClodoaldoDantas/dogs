import React from 'react';
import { useFetch } from '../../../hooks/useFetch';
import api from '../../../services/api';
import './styles.scss';

export default function PhotoDelete({ id }) {
  const { loading, request } = useFetch();

  async function handleClick() {
    const confirm = window.confirm('Tem certeza que deseja deletar ?');

    if (confirm) {
      const { url, options } = api.photoDelete(id);
      const { response } = await request(url, options);

      if (response.ok) {
        window.location.reload();
      }
    }
  }

  return (
    <>
      {loading ? (
        <button disabled className='photo-delete-button'>
          Deletando ...
        </button>
      ) : (
        <button onClick={handleClick} className='photo-delete-button'>
          Deletar
        </button>
      )}
    </>
  );
}
