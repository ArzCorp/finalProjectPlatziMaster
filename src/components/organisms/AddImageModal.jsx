import React from 'react';
import { connect } from 'react-redux';

import * as modalActions from '../../actions/ModalActions';

import Modal from './Modal';
import AddImage from '../atoms/AddImage';
import Button from '../atoms/Button';

const AddClotheModal = ({ modalReducers: { AddImageModalState }, turnModalState }) => (
  <Modal
    modalState={AddImageModalState}
    onCloseModal={() => { turnModalState('AddImageModal', false); }}
  >
    <AddImage />
    <Button
      type="normal"
      name="Guardar"
    />
  </Modal>
);

const mapStateToProps = ({ modalReducers }) => ({
  modalReducers,
});

export default connect(mapStateToProps, modalActions)(AddClotheModal);
