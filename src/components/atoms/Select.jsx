import React from 'react';
import Icon from './Icon';

const Select = ({ label, id, opt1, opt2, opt3, opt4 }) => (

  <div className="form__Select">
    <div className="container">
      <label htmlFor={label}>{ label }</label>
      <select name={label} id={id} className="select">
        <option selected disabled>Seleccione una opción</option>
        <option deafulvalue="1">{opt1}</option>
        <option deafulvalue="2">{opt2}</option>
        <option deafulvalue="3">{opt3}</option>
        <option deafulvalue="">{opt4}</option>
      </select>
      <Icon iconName="down-arrow" size=".8rem" />
    </div>

  </div>
);

export default Select;
