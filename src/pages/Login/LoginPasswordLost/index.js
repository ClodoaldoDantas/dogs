import React from 'react';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import Error from '../../../components/Error';

import { useForm } from '../../../hooks/useForm';
import { useFetch } from '../../../hooks/useFetch';
import api from '../../../services/api';

export default function LoginPasswordLost() {
  const login = useForm();
  const { data, loading, error, request } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    if (login.validate()) {
      const { url, options } = api.passwordLost({
        login: login.value,
        url: window.location.href.replace('perdeu', 'resetar'),
      });

      const { json } = await request(url, options);
      console.log(json);
    }
  }

  return (
    <section>
      <h1 className='title'>Perdeu a senha ?</h1>
      {data ? (
        <p style={{ color: '#4c1' }}>{data}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <Input label='E-mail / Usuário' type='text' name='login' {...login} />

          {loading ? (
            <Button disabled>Enviando...</Button>
          ) : (
            <Button>Enviar e-mail</Button>
          )}
        </form>
      )}

      <Error message={error} />
    </section>
  );
}
