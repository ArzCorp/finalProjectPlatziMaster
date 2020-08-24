import React from 'react';

const Button = ({name, id, onClick, type}) => (
  <button
    type="submit"
    className={`btn__${type}`}
    id={id || null}
    onClick={onClick}
  >
    { name || 'Aceptar' }
  </button>
);

export default Button;
