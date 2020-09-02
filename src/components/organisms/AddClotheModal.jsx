import React, { useState } from 'react';
import { connect } from 'react-redux';

import * as modalActions from '../../actions/ModalActions';
import * as userActions from '../../actions/userActions';

import Modal from './Modal';
import Input from '../atoms/Input';
import AddImage from '../atoms/AddImage';
import Button from '../atoms/Button';
import InputSelect from '../atoms/InputSelect';

const AddClotheModal = ({ getUserClothes, turnModalState, addClothe, modalReducers: { AddClotheModalState } }) => {
  const data = localStorage.getItem('user');
  const jsonData = JSON.parse(data);
  const { token } = jsonData;

  const image01 = document.getElementById('image01');
  const image02 = document.getElementById('image02');
  const image03 = document.getElementById('image03');

  const [fields, setField] = useState(0);
  const handleChange = (ev) => {
    setField({
      ...fields,
      [ev.target.name]: ev.target.value,
    });
  };
  const handleSubmit = async (ev) => {
    ev.preventDefault();
    console.log(fields)
    await addClothe(fields, token, image01, image02, image03);
    await turnModalState('AddClotheModal', false);
    await getUserClothes(token);
  };

  return (
    <Modal
      modalState={AddClotheModalState}
      onCloseModal={() => turnModalState('AddClotheModal', false)}
      closeButton
    >
      <form
        className="clothe modal__scroll"
        method="post"
        name="addClothe"
        onSubmit={handleSubmit}
      >
        <h2>Agrega prenda</h2>
        <div className="clothe__description">
          <h4>Descripcion:</h4>
          <textarea
            className="description__clothe"
            name="description"
            placeholder="Descripcion"
            onChange={handleChange}
          />
        </div>
        <div className="clothe__images">
          <h4>Imagen principal</h4>
          <AddImage
            id="image01"
            onChange={handleChange}
            name="clotheImage"
          />
          <div>
            <AddImage
              id="image02"
              onChange={handleChange}
              name="clotheImage"
            />
            <AddImage
              id="image03"
              onChange={handleChange}
              name="clotheImage"
            />
          </div>
        </div>
        <div className="clothe__details">
          <h4>Detalles</h4>
          <InputSelect
            label="Categoria"
            name="category"
            onChange={handleChange}
          >
            <option selected defalutValue="Seleccione una opción">Seleccione una opción</option>
            <option>Calcetines</option>
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
            onChange={handleChange}
          >
            <option selected defalutValue="Seleccione una opción">Seleccione una opción</option>
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
            onChange={handleChange}
          >
            <option selected defalutValue="Seleccione una opción">Seleccione una opción</option>
            <option>XS</option>
            <option>S</option>
            <option>M</option>
            <option>L</option>
            <option>XL</option>
            <option>XXL</option>
            <option>NS</option>
          </InputSelect>
          <InputSelect
            label="Genero:"
            name="gender"
            onChange={handleChange}
            defalutValue={true}
          >
            <option selected defalutValue="Seleccione una opción">Seleccione una opción</option>
            <option>Masculino</option>
            <option>Femenino</option>
            <option>Otro</option>
          </InputSelect>
          <InputSelect
            label="Estado:"
            name="state"
            onChange={handleChange}
          >
            <option selected defalutValue="Seleccione una opción">Seleccione una opción</option>
            <option>Bueno</option>
            <option>Regular</option>
            <option>Nuevo</option>
            <option>Malo</option>
          </InputSelect>
        </div>
        <Input
          className="public"
          id="public"
          type="checkbox"
          label="Publicar"
          name="publicClothe"
          placeholder="si"
          onChange={handleChange}
          value="true"
        />
        <Button
          type="normal"
          name="Publicar"
        />
      </form>
    </Modal>
  );
};
const mapStateToProps = ({ modalReducers, userReducer }) => ({
  modalReducers,
  userReducer,
});

const mapDipatchToProps = {
  ...userActions,
  ...modalActions,
};

export default connect(mapStateToProps, mapDipatchToProps)(AddClotheModal);
