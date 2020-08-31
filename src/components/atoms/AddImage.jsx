import React from 'react';

import Icon from './Icon';

const AddImage = ({ id, onChange, name }) => (
  <>
    <label
      htmlFor={id || 'addImage'}
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
      id={id || 'addImage'}
      className="addImage"
      name={name}
      onChange={onChange}
    />
  </>
);

export default AddImage;
