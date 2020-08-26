import React from 'react';
import Modal from './Modal';

import AddImage from '../atoms/AddImage';
import Button from '../atoms/Button';

const AddClotheModal = ({ isOpenModal, isOpen, isClose }) => (
  <Modal
    isOpenModal={isOpenModal}
    isOpen={isOpen}
    isClose={isClose}
    type="isCloseImage"
  >
    <AddImage />
    <Button
      type="normal"
      name="Guardar"
    />
  </Modal>
);

export default AddClotheModal;
