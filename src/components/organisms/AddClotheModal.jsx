import React from 'react';
import Modal from './Modal';

import AddImage from '../atoms/AddImage';
import Button from '../atoms/Button';
import InputSelect from '../atoms/InputSelect';

const AddClotheModal = ({ isClose, isOpenModal, buttonName }) => (
  <Modal
    isOpenModal={isOpenModal}
    isClose={isClose}
    type="isCloseAdd"
  >
    <form className="clothe">
      <h2>Agrega prenda</h2>
      <div className="clothe__description">
        <h4>Descripcion:</h4>
        <textarea
          className="description__clothe"
          name="description"
          placeholder="Descripcion"
        />
      </div>
      <div className="clothe__images">
        <h4>Imagen principal</h4>
        <AddImage
          name="clotheImage"
        />
        <div>
          <AddImage
            name="clotheImage"
          />
          <AddImage
            name="clotheImage"
          />
        </div>
      </div>
      <div className="clothe__details">
        <h4>Detalles</h4>
        <InputSelect
          label="Categoria"
          name="category"
        >
          <option>calcetines</option>
          <option>Zapatos</option>
          <option>Pantalon</option>
          <option>Camisa</option>
          <option>Playera</option>
          <option>Abrigo</option>
          <option>Chamarra</option>
          <option>Sueter</option>
          <option>Sombrero</option>
        </InputSelect>
        <InputSelect
          label="Color:"
          name="color"
        >
          <option>Negro</option>
          <option>Rojo</option>
          <option>Azul</option>
          <option>Gris</option>
          <option>Blanco</option>
          <option>Amarillo</option>
          <option>Naranja</option>
        </InputSelect>
        <InputSelect
          label="Talla:"
          name="size"
        >
          <option>XS</option>
          <option>S</option>
          <option>M</option>
          <option>L</option>
          <option>XL</option>
          <option>XXL</option>
        </InputSelect>
        <InputSelect
          label="Genero:"
          name="gener"
        >
          <option>Masculino</option>
          <option>Femenino</option>
          <option>Otro</option>
        </InputSelect>
        <InputSelect
          label="Estado:"
          name="state"
        >
          <option>Bueno</option>
          <option>Regular</option>
          <option>Nuevo</option>
        </InputSelect>
      </div>
      <Button
        type="normal"
        name={buttonName}
      />
    </form>
  </Modal>
);

export default AddClotheModal;
