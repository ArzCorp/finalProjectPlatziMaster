import React, { useState } from 'react';
import { connect } from 'react-redux';

import * as modalActions from '../../actions/ModalActions';
import * as usersActions from '../../actions/userActions';

import Modal from './Modal';
import AddImage from '../atoms/AddImage';
import Button from '../atoms/Button';

const AddClotheModal = ({ turnModalState, editProfileImage, modalReducers: { AddImageModalState } }) => {
  const data = localStorage.getItem('user');
  const jsonData = JSON.parse(data);
  const { token, user: { username } } = jsonData;

  const [fields, setField] = useState(0);
  const image = document.getElementById('image');

  const handleChange = (ev) => {
    setField({
      ...fields,
      [ev.target.name]: ev.target.value,
    });
  };
  const handleSubmit = async (ev) => {
    ev.preventDefault();
    await editProfileImage(fields, username, token, image);
  };

  return (
    <Modal
      modalState={AddImageModalState}
      onCloseModal={() => { turnModalState('AddImageModal', false); }}
      closeButton
    >
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
        <Button
          type="normal"
          name="Guardar"
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
  ...usersActions,
  ...modalActions,
};

export default connect(mapStateToProps, mapDipatchToProps)(AddClotheModal);
