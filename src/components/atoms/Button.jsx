import React from 'react';
import '../../style/components/atoms/Button.scss';

const Button = ({name, id}) => (
  <button
    className="btn"
    id={ id || null }
  >
    {name || 'Aceptar'}
  </button>
);

export default Button;