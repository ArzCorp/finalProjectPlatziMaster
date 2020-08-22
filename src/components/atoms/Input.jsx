import React from 'react';
const Input = ({ type, label, placeholder, name, id, onChange }) => (
  <div className="form__input">
    <label>
      *
      { label || 'Label' }
    </label>
    <input
      placeholder={placeholder || label || 'Placeholder'}
      type={type || 'text'}
      name={name || label || null}
      id={id || null}
      onChange={onChange}
    />
  </div>
);

export default Input;
