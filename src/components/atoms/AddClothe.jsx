import React, { PureComponent } from 'react';

import AddClotheModal from '../organisms/AddClotheModal';
import Button from './Button';
import Icon from './Icon';

class AddClothe extends PureComponent {
  render() {
    const { isOpenModal, isOpen, isClose } = this.props;
    return (
      <>
        <Button
          name={(
            <p>
              <Icon
                iconName="plus"
                color="#838F8C"
              />
              ,
              Agregar ropa
            </p>
          )}
          onClick={() => {
            isOpen('isOpenAdd');
          }}
          id="btn-addclothe"
        />
        <AddClotheModal isOpenModal={isOpenModal} isClose={isClose} buttonName="Publicar" type="hoohs" />
      </>
    );
  }
}

export default AddClothe;
