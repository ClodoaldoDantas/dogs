import React from 'react';
import { Link } from 'react-router-dom';

import Input from '../../../components/Input';
import Button from '../../../components/Button';
import { useForm } from '../../../hooks/useForm';

export default function LoginForm() {
  const username = useForm();
  const password = useForm();

  async function handleSubmit(e) {
    e.preventDefault();

    if (!username.validate() || !password.validate()) return;

    const response = await fetch(
      'https://dogsapi.origamid.dev/json/jwt-auth/v1/token',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username.value,
          password: password.value,
        }),
      }
    );

    const data = await response.json();
    console.log(data);
  }

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
