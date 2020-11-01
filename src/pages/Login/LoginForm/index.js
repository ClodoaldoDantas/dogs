import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import Input from '../../../components/Input';
import Button from '../../../components/Button';
import { useForm } from '../../../hooks/useForm';
import { UserContext } from '../../../context/UserContext';

export default function LoginForm() {
  const username = useForm();
  const password = useForm();

  const { userLogin, error, loading } = useContext(UserContext);

  async function handleSubmit(e) {
    e.preventDefault();

    if (username.validate() || password.validate()) {
      userLogin(username.value, password.value);
    }
  }

  return (
    <section>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <Input type='text' name='username' label='Usuário' {...username} />
        <Input type='password' name='password' label='Senha' {...password} />
        {loading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>Enviar</Button>
        )}
        {error && <p>{error}</p>}
      </form>

      <Link to='/login/criar'>Cadastro</Link>
    </section>
  );
}
