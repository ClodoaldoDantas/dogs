import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import Input from '../../../components/Input';
import Button from '../../../components/Button';
import { useForm } from '../../../hooks/useForm';
import api from '../../../services/api';

export default function LoginForm() {
  const username = useForm();
  const password = useForm();

  async function getUser(token) {
    const { url, options } = api.userGet(token);
    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!username.validate() || !password.validate()) return;

    const { url, options } = api.tokenPost({
      username: username.value,
      password: password.value,
    });

    const response = await fetch(url, options);

    const data = await response.json();
    localStorage.setItem('token', data.token);
    getUser(data.token);
  }

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) getUser(token);
  }, []);

  return (
    <section>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <Input type='text' name='username' label='Usuário' {...username} />
        <Input type='password' name='password' label='Senha' {...password} />
        <Button>Enviar</Button>
      </form>

      <Link to='/login/criar'>Cadastro</Link>
    </section>
  );
}
