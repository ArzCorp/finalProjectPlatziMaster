import React from 'react';

import Icon from './Icon';

const AddImage = ({ idLabel, id, onChange, name }) => (
  <>
    <label
      htmlFor={id || 'addImage'}
      className="addImage__label"
      id={idLabel || 'imageLabel'}
    >
      <Icon
        iconName="plus"
        color="#19704E"
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
