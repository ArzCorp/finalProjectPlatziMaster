import React from 'react';

const Button = ({ name, id, onClick, type, children }) => (
  <button
    type="submit"
    className={`btn__${type}`}
    id={id || null}
    onClick={onClick}
  >
    {name || 'Aceptar'}
    {children || null}
  </button>
);

export default Button;
