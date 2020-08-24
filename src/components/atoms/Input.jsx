import React from 'react';
import '../../style/components/atoms/Input.scss';

const Input = ({ type, label, placeholder, name, id, onChange, onKeyPress }) => (
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
      onKeyPress={onKeyPress}
    />
  </div>
);

export default Input;
