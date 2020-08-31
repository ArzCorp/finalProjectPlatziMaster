import React from 'react';
import Modal from './Modal';
import LogoAnimated from '../atoms/LogoAnimated';

const LoginModal = ({ modalState, onCloseModal }) => (
  <Modal
    modalState={modalState}
    onCloseModal={onCloseModal}
  >
    <LogoAnimated />
  </Modal>
);

export default LoginModal;
