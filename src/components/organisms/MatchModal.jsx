import React from 'react';
import Modal from './Modal';

import Button from '../atoms/Button';
import Icon from '../atoms/Icon';
import Loader from '../atoms/Loader';

const MatchModal = ({ modalState, onCloseModal, userName, nameUserMatch }) => (
  <Modal
    modalState={modalState}
    onCloseModal={onCloseModal}
    closeButton
  >
    <div className="match-modal">
      <h1>
        ¡
        {userName}
        , haz hecho match
        <br />
        con
        {' '}
        {nameUserMatch}
        !
      </h1>
      <Icon iconName="party" size="120px" color="var(--Color-Grayscale-1)" />
      <h2>
        Ahora puedes contactarl@ a
        {` ${nameUserMatch}`}
        <br />
        a través de Whatsapp para intercambiar las prendas.
      </h2>
      <div className="match-modal__button">
        <Button
          type="normal"
          name="Contactar"
        >
          <Icon iconName="whatsapp" size="25px" color="var(--Color-Grayscale-1)" />
        </Button>
      </div>
      <h1 id="countdown"></h1>
      <Loader />
      <div className="match-modal__count">
        <h2>Aparecerá en tu bandeja de notificaciones</h2>
      </div>
    </div>
  </Modal>
);

export default MatchModal;
