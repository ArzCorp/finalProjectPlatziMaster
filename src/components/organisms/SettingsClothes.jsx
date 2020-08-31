import React from 'react';
import { connect } from 'react-redux';

import * as userActions from '../../actions/userActions';
import * as buttonsActions from '../../actions/ButtonsActions';

import EditProfile from './EditProfile';
import AddClothe from '../atoms/AddClothe';
import EditeClothe from '../atoms/EditClothe';

const SettingsClothes = ({ buttonsReducers: { isButtonActive } }) => {
  if (isButtonActive) {
    return (
      <div className="clothes">
        <AddClothe />
        <EditeClothe />
      </div>
    );
  }
  return (
    <EditProfile />
  );
};

const mapStateToProps = ({ userReducer, buttonsReducers }) => ({
  userReducer,
  buttonsReducers,
});

const mapDipatchToProps = {
  ...userActions,
  ...buttonsActions,
};

export default connect(mapStateToProps, mapDipatchToProps)(SettingsClothes);
