import React from 'react';

const Input = ({ value, type, label, placeholder, name, id, onChange, onKeyPress, maxLength, checked }) => (
  <div className="form__input">
    <label htmlFor={id || name}>
      *
      {label || 'Label'}
    </label>
    <input
      placeholder={placeholder || label || 'Placeholder'}
      type={type || 'text'}
      name={name || label || null}
      id={id || name || null}
      onChange={onChange}
      onKeyPress={onKeyPress}
      defaultValue={value || ''}
      maxLength={maxLength || null}
      checked={checked || null}
    />
  </div>
);

export default Input;
