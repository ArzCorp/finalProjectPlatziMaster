import React from 'react';
import { connect } from 'react-redux';

import * as buttonsActions from '../../actions/ButtonsActions';

import Icon from '../atoms/Icon';
import Button from '../atoms/Button';

const Settings = ({ changeButtonState }) => (
  <div className="settings">
    <div className="settings__navbar">
      <Button
        type="normal"
        name={<Icon iconName="tshirt" color="white" size="35px" />}
        id="button-tshirt"
        onClick={() => {
          changeButtonState('isActive', true);
        }}
      />
      <Button
        type="normal"
        name={<Icon iconName="settings" color="white" size="35px" />}
        id="button-settings"
        onClick={() => {
          changeButtonState('isDisabled', false);
        }}
      />
    </div>
  </div>
);

const mapStateToProps = ({ buttonsReducers }) => ({
  buttonsReducers,
});

export default connect(mapStateToProps, buttonsActions)(Settings);
