import React, { useState } from 'react';
import { ReactComponent as Enviar } from '../../../assets/enviar.svg';
import { useFetch } from '../../../hooks/useFetch';
import Error from '../../Error';
import api from '../../../services/api';

export default function PhotoCommentsForm({ id, setComments }) {
  const { error, request } = useFetch();
  const [comment, setComment] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = api.commentPost(id, { comment });
    const { response, json } = await request(url, options);

    if (response.ok) {
      setComment('');
      setComments((comments) => [...comments, json]);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        placeholder='Comente ...'
        id='comment'
        name='comment'
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button>
        <Enviar />
      </button>

      <Error message={error} />
    </form>
  );
}
