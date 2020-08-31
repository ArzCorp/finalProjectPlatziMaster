import React from 'react';
import Modal from './Modal';
import Loader from '../atoms/Loader';

const SignupModal = ({ modalState, onCloseModal }) => (
  <Modal
    modalState={modalState}
    onCloseModal={onCloseModal}
  >
    <Loader />
  </Modal>
);

export default SignupModal;
