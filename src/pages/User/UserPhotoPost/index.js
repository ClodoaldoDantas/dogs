import React, { useState } from 'react';

import Input from '../../../components/Input';
import Button from '../../../components/Button';
import { useForm } from '../../../hooks/useForm';
import { useFetch } from '../../../hooks/useFetch';
import Error from '../../../components/Error';
import { useNavigate } from 'react-router-dom';

import api from '../../../services/api';
import './styles.scss';
import Head from '../../../components/Head';

export default function UserPhotoPost() {
  const nome = useForm();
  const peso = useForm('number');
  const idade = useForm('number');
  const [img, setImg] = useState({});
  const { error, loading, request } = useFetch();
  const navigate = useNavigate();

  function handleImg(event) {
    setImg({
      preview: URL.createObjectURL(event.target.files[0]),
      raw: event.target.files[0],
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData();
    formData.append('img', img.raw);
    formData.append('nome', nome.value);
    formData.append('peso', peso.value);
    formData.append('idade', idade.value);

    const token = localStorage.getItem('token');
    const { url, options } = api.photoPost(formData, token);
    const { response } = await request(url, options);
    if (response.ok) navigate('/conta');
  }

  return (
    <section className='photo-post animeLeft'>
      <Head title='Poste sua foto' />
      <form onSubmit={handleSubmit}>
        <Input label='Nome' type='text' name='nome' {...nome} />
        <Input label='Peso' type='number' name='peso' {...peso} />
        <Input label='Idade' type='number' name='idade' {...idade} />

        <input type='file' name='img' id='img' onChange={handleImg} />
        {loading ? (
          <Button disabled>Enviando...</Button>
        ) : (
          <Button>Enviar</Button>
        )}

        <Error message={error} />
      </form>
      <div>
        {img.preview && (
          <div
            className='preview'
            style={{ backgroundImage: `url('${img.preview}')` }}
          ></div>
        )}
      </div>
    </section>
  );
}
