import React from 'react';
import './styles.scss';

export default function Input({
  type,
  label,
  name,
  value,
  onChange,
  onBlur,
  error,
}) {
  return (
    <div className='input-wrapper'>
      <label className='label' htmlFor={name}>
        {label}
      </label>
      <input
        className='input'
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error && <p className='error'>{error}</p>}
    </div>
  );
}
