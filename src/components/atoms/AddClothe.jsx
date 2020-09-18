import React from 'react';
import { connect } from 'react-redux';

import * as modalActions from '../../actions/ModalActions';

import AddClotheModal from '../organisms/AddClotheModal';
import Button from './Button';
import Icon from './Icon';

const AddClothe = ({ turnModalState }) => (
  <>
    <Button
      name={(
        <p>
          <Icon
            iconName="plus"
            color="#838F8C"
          />
          Agregar ropa
        </p>
      )}
      onClick={() => {
        turnModalState('AddClotheModal', true);
      }}
      id="btn-addclothe"
    />
    <AddClotheModal />
  </>
);

const mapStateToProps = ({ modalReducers }) => ({
  modalReducers,
});

export default connect(mapStateToProps, modalActions)(AddClothe);
