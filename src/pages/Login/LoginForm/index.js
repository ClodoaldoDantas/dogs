import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import Input from '../../../components/Input';
import Button from '../../../components/Button';
import Error from '../../../components/Error';
import { useForm } from '../../../hooks/useForm';
import { UserContext } from '../../../context/UserContext';

import './style.scss';
import Head from '../../../components/Head';

export default function LoginForm() {
  const username = useForm();
  const password = useForm();

  const { userLogin, error, loading } = useContext(UserContext);

  async function handleSubmit(e) {
    e.preventDefault();

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  }

  return (
    <section className='login-form animeLeft'>
      <Head title='Login' />
      <h1 className='title'>Login</h1>
      <form onSubmit={handleSubmit}>
        <Input type='text' name='username' label='Usuário' {...username} />
        <Input type='password' name='password' label='Senha' {...password} />
        {loading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>Enviar</Button>
        )}
        <Error message={error} />
      </form>

      <Link className='lost' to='/login/perdeu'>
        Perdeu a senha ?
      </Link>
      <div className='register'>
        <h2 className='register-title'>Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se no site</p>
        <Button href='/login/criar'>Cadastro</Button>
      </div>
    </section>
  );
}
