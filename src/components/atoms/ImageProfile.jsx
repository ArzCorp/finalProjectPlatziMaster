import React from 'react';
import { connect } from 'react-redux';

import * as userActions from '../../actions/userActions';
import * as modalActions from '../../actions/ModalActions';

import Icon from './Icon';
import Button from './Button';
import AddImageModal from '../organisms/AddImageModal';

const ImageProfile = ({ src, turnModalState }) => {
  const ProfileImage = 'https://res.cloudinary.com/martindev/image/upload/v1600105786/ourclothe/imageProfile.png_iggog6.jpg';
  return (
    <div className="profile">
      <img className="profile__image" alt="perfil" src={src || ProfileImage} />
      <Button
        className="btn"
        onClick={() => {
          turnModalState('AddImageModal', true);
        }}
        type="outline"
        name={
          <Icon color="$Color-Primary" iconName="camera" tabIndexName="cargar imagen de perfil" />
        }
      />
      <AddImageModal />
    </div>
  );
}

const mapStateToProps = ({ userReducer, modalReducers }) => ({
  userReducer,
  modalReducers,
});

const mapDipatchToProps = {
  ...userActions,
  ...modalActions,
};

export default connect(mapStateToProps, mapDipatchToProps)(ImageProfile);
