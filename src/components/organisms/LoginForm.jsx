import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import * as userActions from '../../actions/userActions';
import * as modalActions from '../../actions/ModalActions';

import Input from '../atoms/Input';
import Button from '../atoms/Button';
import LoginModal from './LoginModal';

const LoginForm = (props) => {
  const [fields, setFields] = useState(0);

  const handleChange = (ev) => {
    setFields({
      ...fields,
      [ev.target.name]: ev.target.value,
    });
  };

  const submitLoginForm = async (ev) => {
    ev.preventDefault();
    if (props.validateForm(fields, 'LoginForm')) {
      const valid = await props.fetchLoginUser(fields);

      if (valid) {
        props.turnModalState('LoginModal', true);
        setTimeout(() => {
          props.turnModalState('LoginModal', false);
          window.location.href = '/#/signup';
        }, 2000);
      }
    }
  };

  const validateField = (field) => {
    const errorsCout = props.userReducer.errorsFields;
    if (errorsCout[`${field}`]) {
      return (
        <div className="loginForm__errorMsg">
          <p>
            <small>{errorsCout[`${field}`]}</small>
          </p>
        </div>
      );
    }
    return null;
  };

  const validateSignup = () => {
    const userSignup = props.userReducer.userSignup;

    if (userSignup.first_name) {
      return (
        <h2>
          Hola {userSignup.first_name}
          <br />
          Tu cuena ha sido creada con éxito! Por favor inicia sesion.
        </h2>
      );
    }
    return null;
  };

  const getFeedbackBackend = () => {
    const feedbackBackend = props.userReducer.userLoged;

    if (feedbackBackend.non_field_errors) {
      return (
        <div className="loginForm__feedback">
          <p>{feedbackBackend.non_field_errors}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <form className="loginForm" method="post" name="loginForm" onSubmit={submitLoginForm}>
      {validateSignup()}
      <Input
        type="number"
        label="Teléfono"
        placeholder="Teléfono"
        name="phone_number"
        onChange={handleChange}
      />
      {validateField('phone_number')}
      <Input
        type="password"
        label="Contraseña"
        placeholder="Contraseña"
        name="password"
        onChange={handleChange}
      />
      {validateField('password')}
      {getFeedbackBackend()}
      <div className="loginForm__buttons">
        <Button name="Ingresar" type="normal" />
        <Link to="/signup">
          <Button name="Crear cuenta" type="outline" />
        </Link>
        <LoginModal
          modalState={props.modalReducers.LoginModalState}
          onCloseModal={() => props.turnModalState('LoginModal', false)}
        />
      </div>
    </form>
  );
};

const mapStateToProps = ({ userReducer, modalReducers }) => ({
  userReducer,
  modalReducers,
});

const mapDispatchToProps = {
  ...userActions,
  ...modalActions,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
