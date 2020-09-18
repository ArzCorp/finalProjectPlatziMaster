import React, { useState } from 'react';
import { connect } from 'react-redux';

import * as modalActions from '../../actions/ModalActions';
import * as usersActions from '../../actions/userActions';

import Modal from './Modal';
import AddImage from '../atoms/AddImage';
import Button from '../atoms/Button';
import Loader from '../atoms/Loader';

const addPhotoProfile = (props) => {
  const { turnModalState, uploadProfilePhoto, turnStatusResponse, modalReducers: { AddImageModalState }, userReducer: { loading, error, statusResponse, statusMessage } } = props;
  const data = localStorage.getItem('user');
  const jsonData = JSON.parse(data);
  const { token, user: { username } } = jsonData;
  const [fields, setField] = useState(0);
  const image = document.getElementById('image');

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

  if (statusResponse) {
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

  const previewFile = () => {
    const fileInput = document.getElementById('image');
    if (fileInput.files && fileInput.files[0]) {
      const view = new FileReader();
      view.onload = (e) => {
        document.getElementById('imageLabel').innerHTML = `<img src=${e.target.result} alt=${'Sin vista previa'} width="100%" />`;
      };
      view.readAsDataURL(fileInput.files[0]);
    }
  };

  const handleChange = (ev) => {
    setField({
      ...fields,
      [ev.target.name]: ev.target.value,
    });
    previewFile();
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    await uploadProfilePhoto(username, token, image);
    await turnModalState('AddImageModal', false);
  };

  return (
    <Modal
      modalState={AddImageModalState}
      onCloseModal={() => { turnModalState('AddImageModal', false); }}
      closeButton
    >
      <h2>Edita tu foto de perfil</h2>
      <form
        className="modal__scroll"
        method="patch"
        name="addImageForm"
        onSubmit={handleSubmit}
      >
        <AddImage
          id="image"
          onChange={handleChange}
          name="picture"
        />
        <div className="btn__container">
          <Button
            type="normal"
            name="Guardar"
          />
        </div>
      </form>
    </Modal>
  );
};

const mapStateToProps = ({ modalReducers, userReducer }) => ({
  modalReducers,
  userReducer,
});

const mapDipatchToProps = {
  ...usersActions,
  ...modalActions,
};

export default connect(mapStateToProps, mapDipatchToProps)(addPhotoProfile);
