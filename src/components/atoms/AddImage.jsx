import React, { PureComponent } from 'react';

import Icon from './Icon';

class AddClothe extends PureComponent {
  render() {
    return (
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
        />
      </>
    );
  }
}

export default AddClothe;
