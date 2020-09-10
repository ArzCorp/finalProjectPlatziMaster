import React from 'react';
import Modal from './Modal';

import KeyboardImage from '../../../public/assets/images/keyboard_explanation.svg';

const KeyboardExplanationModal = ({ modalState, onCloseModal }) => (
  <Modal modalState={modalState} onCloseModal={onCloseModal} closeButton>
    <div className="match-modal">
      <h1>Navega de forma fácil</h1>
      <img src={KeyboardImage} alt="Keyboard explanation" />
      <p>
        Si estás en una PC, usa las teclas seleccionadas para una navegación más
        facil y cómoda.
      </p>
      <br />
    </div>
  </Modal>
);

export default KeyboardExplanationModal;
