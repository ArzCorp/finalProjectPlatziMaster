import React from 'react';
import Input from './Input';

const NumberInput = ({ type, label, placeholder, name, onChange }) => {
  const numbers = [13, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59];

  const handleKeyPress = (ev) => {
    const key = ev.charCode;
    if (!numbers.includes(key)) {
      ev.preventDefault();
    }
  };

  return (
    <Input
      type={type}
      label={label}
      placeholder={placeholder}
      name={name}
      onChange={onChange}
      maxLength="10"
      onKeyPress={(ev) => handleKeyPress(ev)}
    />
  );
};

export default NumberInput;
