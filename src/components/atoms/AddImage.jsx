import React from 'react';

import Icon from './Icon';

const AddClothe = ({ name }) => (
  <>
    <label
      htmlFor="addImage"
      className="addImage__label"
    >
      <Icon
        iconName="plus"
        color="#838F8C"
      />
      Agregar imagen
    </label>
    <input
      type="file"
      id="addImage"
      className="addImage"
      name={name}
    />
  </>
);

export default AddClothe;
