import React, { useContext } from 'react';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import Error from '../../../components/Error';

import { useForm } from '../../../hooks/useForm';
import { UserContext } from '../../../context/UserContext';
import { useFetch } from '../../../hooks/useFetch';
import api from '../../../services/api';
import Head from '../../../components/Head';

export default function LoginCreate() {
  const username = useForm();
  const email = useForm('email');
  const password = useForm();

  const { userLogin } = useContext(UserContext);
  const { loading, error, request } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = api.userPost({
      email: email.value,
      username: username.value,
      password: password.value,
    });

    const { response } = await request(url, options);
    if (response.ok) userLogin(username.value, password.value);
  }

  return (
    <section className='animeLeft'>
      <Head title='Crie sua conta' />
      <h1 className='title'>Cadastre-se</h1>

      <form onSubmit={handleSubmit}>
        <Input label='Usuário' type='text' name='username' {...username} />
        <Input label='E-mail' type='email' name='email' {...email} />
        <Input label='Senha' type='password' name='password' {...password} />
        {loading ? (
          <Button disabled>Cadastrando...</Button>
        ) : (
          <Button>Cadastrar</Button>
        )}

        <Error message={error} />
      </form>
    </section>
  );
}
