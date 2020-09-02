import React from 'react';
import Modal from './Modal';

import Button from '../atoms/Button';
import Select from '../atoms/Select';

const FilterModal = ({ modalState, onCloseModal }) => (
  <Modal
    modalState={modalState}
    onCloseModal={onCloseModal}
    closeButton
  >

    <div className="filter-modal">

    <div>

      <h1>¿Qué estás buscando?</h1>
      <br />
      <p>Elige las opciones para encontrar tu próxima prenda</p>
      <br />

      <Select label="Categoría" opt1="Camisas" opt2="Jeans" opt3="Zapatos" />
      <Select label="Género" />
      <Select label="Marca" />
      <Select label="Estado" />
      <Select label="Talla" />
      <Select label="Color" />

    </div>

      <Button
        type="normal"
        name="filtrar"
      />

    </div>

  </Modal>
);

export default FilterModal;
