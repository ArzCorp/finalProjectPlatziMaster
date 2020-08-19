import React from 'react';
import '../../style/components/atoms/Input.scss';

const Input = ({ type, label, placeholder, id }) => (
  <div className="form__input">
    <label>
      *
      { label || "Label"}
    </label>
    <input
      placeholder={ placeholder || label || "Placeholder" }
      type={ type || "text" }
      name={ label || null }
      id={ id || null }
    />
  </div>
);

export default Input;
