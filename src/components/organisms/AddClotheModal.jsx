import React from 'react';
import Modal from './Modal';

import Button from '../atoms/Button';

const AddClotheModal = ({ isClose, isOpenModal, buttonName }) => (
  <Modal
    isOpenModal={isOpenModal}
    isClose={isClose}
    type="isCloseAdd"
  >
    <Button
      type="normal"
      name={buttonName}
    />
  </Modal>
);

export default AddClotheModal;
