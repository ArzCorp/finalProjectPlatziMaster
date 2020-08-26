import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Input from '../atoms/Input';
import Button from '../atoms/Button';
// import Loader from '../atoms/Loader';
// import Modal from './Modal';

const LoginForm = (props) => {
  const [fields, setFields] = useState(0);
  const [errorsFields, setErrorsFields] = useState(0);
  const [modalOpen, setModalOpen] = useState(0);
  const [status, setStatus] = useState(0);

  const handleChange = (ev) => {
    setFields({
      ...fields,
      [ev.target.name]: ev.target.value,
    });
  };

  const fetchLogin = async (data) => {
    const URL_API_LOGIN = 'http://68.183.108.146:8000/users/login/';
    const options = {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' },
    };

    const response = await fetch(URL_API_LOGIN, options);

    const res = await response.json();
    if (res.non_field_errors) {
      setStatus(res.non_field_errors[0]);
    }

    const statusresponse = await response.status;
    if (statusresponse === 201) {
      setStatus('Acceso correcto !!');
      setTimeout(() => window.location.href = '/feed', 1000);
    }
  };

  const submitLoginForm = (ev) => {
    ev.preventDefault();
    if (validateForm()) {
      setErrorsFields({});
      setModalOpen(true);
      fetchLogin(fields);
    }
  };

  const validateForm = () => {
    const errors = {};
    let formIsValid = true;

    if (!fields.phone_number) {
      formIsValid = false;
      errors.phone_number = '*Ingresa tu número de teléfono.';
    }

    if (typeof fields.phone_number !== 'undefined') {
      if (!fields.phone_number.match(/^[0-9]{10}$/)) {
        formIsValid = false;
        errors.phone_number = '*Ingresa un numero valido de 10 digitos.';
      }
    }

    if ((!fields.password)) {
      formIsValid = false;
      errors.password = '*Ingresa tu contraseña.';
    }

    if (typeof fields.password !== 'undefined') {
      if (!fields.password.match(/^.*(?=.{8,}).*$/)) {
        formIsValid = false;
        errors.password = '*La contraseña no es correcta.';
      }
    }

    setErrorsFields({ errors });
    return formIsValid;
  };

  const validateField = (field) => {
    if (errorsFields.errors) {
      if (errorsFields.errors[field]) {
        return (
          <div className="loginForm__errorMsg">
            <p>
              <small>
                {errorsFields.errors[field]}
              </small>
            </p>
          </div>
        );
      }
    }
    return null;
  };

  return (
    <form className="loginForm" method="post" name="loginForm" onSubmit={submitLoginForm}>
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
      <div className="loginForm__buttons">
        <Button name="Ingresar" type="normal" />
        <Link to="/signup">
          <Button name="Crear cuenta" type="outline" />
        </Link>
        {/* <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} closeButton>
          <h1>{status}</h1>
          <Loader />
          <Button type="normal" name="Volver a intentar" />
        </Modal> */}
      </div>
    </form>
  );
};

export default LoginForm;
