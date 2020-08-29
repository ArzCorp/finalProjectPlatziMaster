import React, { useState } from 'react';
import { connect } from 'react-redux';

import * as modalActions from '../../actions/ModalActions';
import * as usersActions from '../../actions/userActions';

import Modal from './Modal';
import AddImage from '../atoms/AddImage';
import Button from '../atoms/Button';

const AddClotheModal = (props) => {
  console.log(props);
  const { turnModalState, modalReducers: { AddImageModalState } } = props;
  const { editProfileImage, userReducer: { userLoged: { user: { username }, token } } } = props;
  const [fields, setField] = useState(0);
  const handleChange = (ev) => {
    setField({
      ...fields,
      [ev.target.name]: ev.target.value,
    });
  };
  console.log(fields);
  return (
    <Modal
      modalState={AddImageModalState}
      onCloseModal={() => { turnModalState('AddImageModal', false); }}
    >
      <form
        className="addImageForm"
        method="post"
        name="addImageForm"
        onSubmit={() => { editProfileImage(fields, username, token); }}
      >
        <AddImage
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
