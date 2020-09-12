import React, { useState } from 'react';
import { connect } from 'react-redux';

import * as modalActions from '../../actions/ModalActions';
import * as userActions from '../../actions/userActions';

import Modal from './Modal';
import Input from '../atoms/Input';
import AddImage from '../atoms/AddImage';
import Button from '../atoms/Button';
import InputSelect from '../atoms/InputSelect';
import Loader from '../atoms/Loader';

const AddClotheModal = ({ getUserClothes, turnModalState, addClothe, turnStatusResponse, modalReducers: { AddClotheModalState }, userReducer: { loading, error, statusMessage } }) => {
  const data = localStorage.getItem('user');
  const jsonData = JSON.parse(data);
  const { token } = jsonData;

  const image01 = document.getElementById('image01');
  const image02 = document.getElementById('image02');
  const image03 = document.getElementById('image03');

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return (
      <div className="alert">
        <h1>{statusMessage}</h1>
        <button
          className="btn__normal"
          type="button"
          onClick={() => { turnStatusResponse(false); }}
        >
          OK
        </button>
      </div>
    );
  }

  const previewFile01 = () => {
    const fileInput01 = document.getElementById('image01');
    if (fileInput01.files && fileInput01.files[0]) {
      const view = new FileReader();
      view.onload = (e) => {
        document.getElementById('imageLabel01').innerHTML = `<img src=${e.target.result} alt=${'Sin vista previa'} width="100%" height="100%" />`;
      };
      view.readAsDataURL(fileInput01.files[0]);
    }
  };

  const previewFile02 = () => {
    const fileInput02 = document.getElementById('image02');
    if (fileInput02.files && fileInput02.files[0]) {
      const view = new FileReader();
      view.onload = (e) => {
        document.getElementById('imageLabel02').innerHTML = `<img src=${e.target.result} alt=${'Sin vista previa'} width="100%" height="100%" />`;
      };
      view.readAsDataURL(fileInput02.files[0]);
    }
  };

  const previewFile03 = () => {
    const fileInput03 = document.getElementById('image03');
    if (fileInput03.files && fileInput03.files[0]) {
      const view = new FileReader();
      view.onload = (e) => {
        document.getElementById('imageLabel03').innerHTML = `<img src=${e.target.result} alt=${'Sin vista previa'} width="100%" height="100%" />`;
      };
      view.readAsDataURL(fileInput03.files[0]);
    }
  };

  const [fields, setField] = useState(0);
  const handleChange = (ev) => {
    setField({
      ...fields,
      [ev.target.name]: ev.target.value,
    });
    previewFile01();
    previewFile02();
    previewFile03();
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
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
        <h4>Imagen principal</h4>
        <div className="clothe__images">
          <AddImage
            id="image01"
            onChange={handleChange}
            name="clotheImage"
            idLabel="imageLabel01"
          />
          <AddImage
            id="image02"
            onChange={handleChange}
            name="clotheImage"
            idLabel="imageLabel02"
          />
          <AddImage
            id="image03"
            onChange={handleChange}
            name="clotheImage"
            idLabel="imageLabel03"
          />
        </div>
        <div className="clothe__details">
          <h4>Detalles</h4>
          <InputSelect
            label="Categoria"
            name="category"
            onChange={handleChange}
          >
            <option select="true">Seleccione una opción</option>
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
            <option select="true">Seleccione una opción</option>
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
            <option select="true">Seleccione una opción</option>
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
            defalutValue
          >
            <option select="true">Seleccione una opción</option>
            <option>Masculino</option>
            <option>Femenino</option>
            <option>Otro</option>
          </InputSelect>
          <InputSelect
            label="Estado:"
            name="state"
            onChange={handleChange}
          >
            <option select="true">Seleccione una opción</option>
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
