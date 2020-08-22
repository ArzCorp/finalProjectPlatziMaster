import React from 'react';
// import '../../style/components/atoms/Button.scss';

const Button = ({name, id, onClick}) => (
  <button
    type="submit"
    className="btn"
    id={ id || null }
    onClick={onClick}
  >
    { name || 'Aceptar' }
  </button>
);

export default Button;
