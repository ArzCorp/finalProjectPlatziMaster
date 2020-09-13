import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import * as userActions from '../../actions/userActions';
import * as modalActions from '../../actions/ModalActions';

import Input from '../atoms/Input';
import NumberInput from '../atoms/NumberInput';
import PasswordInput from '../atoms/PasswordInput';
import Button from '../atoms/Button';
import SignupModal from './SignupModal';

const SignupForm = (props) => {
  const [fields, setFields] = useState(0);

  const handleChange = (ev) => {
    setFields({
      ...fields,
      [ev.target.name]: ev.target.value,
    });
  };

  const submituserRegistrationForm = async (ev) => {
    ev.preventDefault();
    if (props.validateForm(fields, 'SignupForm')) {
      const valid = await props.fetchSignupUser(fields);

      if (valid) {
        props.turnModalState('SignupModal', true);
        setTimeout(() => {
          props.turnModalState('SignupModal', false);
          window.location.href = '/login';
        }, 2000);
      }
    }
  };

  const validateField = (field) => {
    const errorsCout = props.userReducer.errorsFields;
    if (errorsCout[`${field}`]) {
      return (
        <div className="SignupForm__errorMsg">
          <p>
            <small>{errorsCout[`${field}`]}</small>
          </p>
        </div>
      );
    }
    return null;
  };

  const getFeedbackBackend = () => {
    const feedbackBackend = props.userReducer.userSignup;

    if (feedbackBackend.username || feedbackBackend.non_field_errors) {
      return (
        <div className="SignupForm__feedback">
          <p>{feedbackBackend.username}</p>
          <p>{feedbackBackend.non_field_errors}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <form className="SignupForm" id="SignupForm" method="post" name="userRegistrationForm" onSubmit={submituserRegistrationForm}>
      <Input
        type="text"
        label="Nombre"
        placeholder="Nombre"
        name="first_name"
        onChange={handleChange}
      />
      {validateField('first_name')}
      <Input
        type="text"
        label="Apellidos"
        placeholder="Apellidos"
        name="last_name"
        onChange={handleChange}
      />
      {validateField('last_name')}
      <NumberInput
        type="text"
        label="Teléfono"
        placeholder="Teléfono"
        name="username"
        onChange={handleChange}
      />
      {validateField('username')}
      <PasswordInput
        type="password"
        label="Contraseña"
        placeholder="Contraseña"
        name="password"
        onChange={handleChange}
      />
      {validateField('password')}
      <PasswordInput
        type="password"
        label="Confirmar contraseña"
        placeholder="Confirmar contraseña"
        name="password_confirmation"
        onChange={handleChange}
      />
      {validateField('password_confirmation')}
      {getFeedbackBackend()}
      <div className="SignupForm__buttons">
        <Button name="Registrarse" type="normal" />
        <Link to="/login">
          <Button name="Ya tengo una cuenta" type="outline" />
        </Link>
      </div>
      <SignupModal
        modalState={props.modalReducers.SignupModalState}
        onCloseModal={() => props.turnModalState('SignupModal', false)}
      />
    </form>
  );
};

const mapStateToProps = ({ userReducer, modalReducers }) => ({
  userReducer,
  modalReducers,
});

const mapDipatchToProps = {
  ...userActions,
  ...modalActions,
};

export default connect(mapStateToProps, mapDipatchToProps)(SignupForm);
