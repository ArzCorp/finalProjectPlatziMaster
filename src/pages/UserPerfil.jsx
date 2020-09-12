import React from 'react';
import { connect } from 'react-redux';

import * as userActions from '../actions/userActions';
import * as buttonsActions from '../actions/ButtonsActions';
import * as modalActions from '../actions/ModalActions';

import ImageProfile from '../components/atoms/ImageProfile';
import SettingsClothes from '../components/organisms/SettingsClothes';
import SettingsNav from '../components/organisms/SettingsNav';

const UserPerfil = ({ userReducer, buttonsReducers: { isButtonActive } }) => {
  const data = localStorage.getItem('user');
  const jsonData = JSON.parse(data);
  const { user: { profile: { picture } } } = jsonData;

  return (
    <section className="userprofile">
      <div className="userprofile__settings">
        <ImageProfile
          src={picture}
        />
        <SettingsNav />
      </div>
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
