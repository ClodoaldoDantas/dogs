import { useState } from 'react';

const types = {
  email: {
    regex: /\S+@\S+/,
    message: 'Preencha um email válido',
  },
  number: {
    regex: /^\d+$/,
    message: 'Utilize apenas números',
  },
};

export const useForm = (type) => {
  const [value, setValue] = useState('');
  const [error, setError] = useState(null);

  function onChange(event) {
    const value = event.target.value;
    if (error) validate(value);
    setValue(value);
  }

  function validate(value) {
    if (type === false) return true;

    if (value.length === 0) {
      setError('Preencha um valor');
      return false;
    } else if (types[type] && !types[type].regex.test(value)) {
      setError(types[type].message);
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  return {
    value,
    error,
    setValue,
    onChange,
    validate: () => validate(value),
    onBlur: () => validate(value),
  };
};
