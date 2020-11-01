import React, { createContext, useState, useEffect, useCallback } from 'react';
import api from '../services/api';
import { useNavigate } from 'react-router-dom';

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [data, setData] = useState(null);
  const [isLogged, setIsLogged] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  async function getUser(token) {
    const { url, options } = api.userGet(token);
    const response = await fetch(url, options);
    const data = await response.json();
    setData(data);
    setIsLogged(true);
  }

  async function userLogin(username, password) {
    try {
      setError(null);
      setLoading(true);

      const { url, options } = api.tokenPost({ username, password });
      const response = await fetch(url, options);

      if (!response.ok) throw new Error('Erro: Usuário inválido');

      const { token } = await response.json();
      localStorage.setItem('token', token);
      await getUser(token);
      navigate('/conta');
    } catch (err) {
      setError(err.message);
      setIsLogged(false);
    } finally {
      setLoading(false);
    }
  }

  const userLogout = useCallback(() => {
    setData(null);
    setError(null);
    setLoading(false);
    setIsLogged(false);
    navigate('/login');
    localStorage.removeItem('token');
  }, [navigate]);

  useEffect(() => {
    async function autoLogin() {
      const token = localStorage.getItem('token');
      if (!token) return;

      try {
        setError(null);
        setLoading(true);

        const { url, options } = api.tokenValidatePost(token);
        const response = await fetch(url, options);

        if (!response.ok) throw new Error('Token Inválido');
        await getUser(token);
      } catch (err) {
        userLogout();
      } finally {
        setLoading(false);
      }
    }

    autoLogin();
  }, [userLogout]);

  return (
    <UserContext.Provider
      value={{ userLogin, userLogout, data, error, loading, isLogged }}
    >
      {children}
    </UserContext.Provider>
  );
}
