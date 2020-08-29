import React from 'react';
import { connect } from 'react-redux';

import * as userActions from '../actions/userActions';
import * as buttonsActions from '../actions/ButtonsActions';
import * as modalActions from '../actions/ModalActions';

import ImageProfile from '../components/atoms/ImageProfile';
import NavBar from '../components/organisms/NavBar';
import SettingsNav from '../components/organisms/SettingsNav';
import SettingsClothes from '../components/organisms/SettingsClothes';

const UserPerfil = ({ userReducer, getUserClothes, buttonsReducers: { isButtonActive }, userReducer: { userClothes, userLoged: { token } } }) => {
  if (userClothes.length === 0) {
    getUserClothes(token);
  }
  return (
    <section className="userprofile__entry">
      <NavBar />
      <ImageProfile
        url=""
      />
      <SettingsNav />
      <SettingsClothes
        userReducer={userReducer}
        isButtonActive={isButtonActive}
      />
    </section>
  );
};

const mapStateToProps = ({ userReducer, buttonsReducers, modalReducers }) => ({
  userReducer,
  buttonsReducers,
  modalReducers,
});

const mapDipatchToProps = {
  ...userActions,
  ...buttonsActions,
  ...modalActions,
};

export default connect(mapStateToProps, mapDipatchToProps)(UserPerfil);
