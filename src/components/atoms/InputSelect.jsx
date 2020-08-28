import React from 'react';

const InputSelect = ({ value, onChange, disabled, required, label, children, name }) => (
  <div className="select">
    <label>{label}</label>
    <select
      className="select__input"
      name={name}
      disabled={disabled || false}
      required={required || false}
      defaultValue={value || ''}
      onChange={onChange}
    >
      {children}
    </select>
  </div>
);

export default InputSelect;
