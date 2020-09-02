import React from 'react';
import Modal from './Modal';

import Button from '../atoms/Button';
import Select from '../atoms/Select';
import Icon from '../atoms/Icon';

const MatchModal = ({ modalState, onCloseModal, nameUserMatch }) => (
  <Modal
    modalState={modalState}
    onCloseModal={onCloseModal}
    closeButton
  >

    <div className="match-modal">

      <h1>¡Felicidades!</h1>

      <h2>
        Haz hecho match
        <br />
        <br />
        con
        {' '}
        {nameUserMatch}
      </h2>

      <Icon iconName="party" size="120px" color="var(--Color-Grayscale-1)" />

      <p>Ahora puedes contactarl@ a través de Whatsapp para intercambiar las prendas</p>

      <div className="match-modal__button">
        <Icon iconName="whatsapp" size="25px" color="var(--Color-Grayscale-1)" />
        <Button
          type="normal"
          name="Contactar"
        />
      </div>

    </div>

  </Modal>
);

export default MatchModal;
