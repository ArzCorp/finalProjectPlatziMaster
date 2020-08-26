import React, { PureComponent } from 'react';

import Button from './Button';
import EditClotheModal from '../organisms/EditClotheModal';

class EditClothe extends PureComponent {
  render() {
    const { src, type, isOpenModal, isOpen, isClose } = this.props;
    return (
      <>
        <Button
          name={(
            <>
              <img
                src={src}
                alt={`imagen de ${type}`}
                className="clothe__image"
              />
              ,
              <h3>
                tipo
              </h3>
            </>
          )}
          onClick={() => {
            isOpen('isOpenEdit');
          }}
          id="btn-editclothe"
        />
        <EditClotheModal isOpenModal={isOpenModal} isClose={isClose} buttonName="Editar" />
      </>
    );
  }
}

export default EditClothe;
