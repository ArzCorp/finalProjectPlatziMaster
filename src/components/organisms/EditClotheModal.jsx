import React from 'react';
import Modal from './Modal';

import Button from '../atoms/Button';

const EditClotheModal = ({ isClose, isOpenModal, buttonName }) => (
  <Modal
    isOpenModal={isOpenModal}
    isClose={isClose}
    type="isCloseEdit"
  >
    <h1>Hola mundo</h1>
    <Button
      type="normal"
      name={buttonName}
    />
  </Modal>
);

export default EditClotheModal;
