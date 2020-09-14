import React from 'react';

const Input = ({ className, value, type, label, placeholder, name, id, onChange, onKeyPress, maxLength, checked }) => (
  <div className="form__input">
    <label htmlFor={id}>
      *
      {label || 'Label'}
    </label>
    <input
      className={className || ''}
      placeholder={placeholder || label || 'Placeholder'}
      type={type || 'text'}
      name={name || label || null}
      id={id || null}
      onChange={onChange}
      onKeyPress={onKeyPress}
      defaultValue={value || ''}
      maxLength={maxLength || null}
      checked={checked || null}
    />
  </div>
);

export default Input;
