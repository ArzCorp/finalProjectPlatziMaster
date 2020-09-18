import React from 'react';

import Icon from './Icon';

const InputSelect = ({ value, onChange, disabled, required, label, children, name }) => (
  <div className="form__Select">
    <div className="container">
      <label>{label}</label>
      <select
        className="select"
        name={name}
        disabled={disabled || false}
        required={required || false}
        defaultValue={value || ''}
        onChange={onChange}
      >
        {children}
      </select>
      <Icon iconName="down-arrow" size=".8rem" />
    </div>
  </div>
);

export default InputSelect;
