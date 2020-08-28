import React from 'react';
import Modal from './Modal';
import Loader from '../atoms/Loader';

const LoginModal = ({ modalState, onCloseModal }) => (
  <Modal
    modalState={modalState}
    onCloseModal={onCloseModal}
  >
    <h1>Accediendo a la pagina principal...</h1>
    <Loader />
  </Modal>
);

export default LoginModal;