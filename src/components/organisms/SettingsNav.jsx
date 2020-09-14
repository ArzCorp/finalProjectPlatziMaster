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
        name={<Icon iconName="tshirt" color="#fff" size="35px" idIcon="tshirt" tabIndexName="ver mi ropa publicada" />}
        id="button-tshirt"
        onClick={() => {
          changeButtonState('isActive', true);
          document.getElementById('button-settings').style.backgroundColor = '#fff';
          document.getElementById('settings').style.color = '#19704E';
          document.getElementById('button-tshirt').style.backgroundColor = '#19704E';
          document.getElementById('tshirt').style.color = '#fff';
        }}
      />
      <Button
        type="normal"
        name={<Icon iconName="settings" color="#19704E" size="35px" idIcon="settings" tabIndexName="actualizar mis datos" />}
        id="button-settings"
        onClick={() => {
          changeButtonState('isDisabled', false);
          document.getElementById('button-tshirt').style.backgroundColor = '#fff';
          document.getElementById('tshirt').style.color = '#19704E';
          document.getElementById('button-settings').style.backgroundColor = '#19704E';
          document.getElementById('settings').style.color = '#fff';
        }}
      />
    </div>
  </div>
);

const mapStateToProps = ({ buttonsReducers }) => ({
  buttonsReducers,
});

export default connect(mapStateToProps, buttonsActions)(Settings);
