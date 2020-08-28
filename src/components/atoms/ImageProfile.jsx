import React from 'react';
import { connect } from 'react-redux';

import * as userActions from '../../actions/userActions';
import * as modalActions from '../../actions/ModalActions';

import Icon from './Icon';
import Button from './Button';
import AddImageModal from '../organisms/AddImageModal';

const ImageProfile = ({ url, turnModalState }) => (
  <div className="profile">
    <img className="profile__image" alt="perfil" src={url} />
    <Button
      className="btn"
      onClick={() => {
        turnModalState('AddImageModal', true);
      }}
      type="outline"
      name={
        <Icon color="$Color-Primary" iconName="camera" />
      }
    />
    <AddImageModal />
  </div>
);

const mapStateToProps = ({ userReducer, modalReducers }) => ({
  userReducer,
  modalReducers,
});

const mapDipatchToProps = {
  ...userActions,
  ...modalActions,
};

export default connect(mapStateToProps, mapDipatchToProps)(ImageProfile);
