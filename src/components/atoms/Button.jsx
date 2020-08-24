import React from 'react';
import '../../style/components/atoms/Button.scss';

const Button = ({name, id, onClick, type}) => (
  <button
    className={`btn__${type}`}
    id={id || null}
    onClick={onClick}
  >
    { name || 'Aceptar' }
  </button>
);

export default Button;
