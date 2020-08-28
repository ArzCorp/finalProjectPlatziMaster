import React from "react";
import Icon from './Icon'

const Select = ({ label, id, opt1, opt2, opt3, opt4 }) => (

  <div className="form__Select">
    <div className="container">
      <label for={label}>{ label }</label>
      <select name={label} id={id} className="select">
        <option selected disabled>Seleccione una opción</option>
        <option value="1">{opt1}</option>
        <option value="2">{opt2}</option>
        <option value="3">{opt3}</option>
        <option value="">{opt4}</option>
      </select>
      <Icon iconName="down-arrow" size='.8rem'/>     
    </div>

  
  </div>
);

export default Select;
