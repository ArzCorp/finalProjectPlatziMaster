import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Input from '../atoms/Input';
import Button from '../atoms/Button';

const LoginForm = () => {
  const [fields, setFields] = useState(0);
  const [errorsFields, setErrorsFields] = useState(0);

  const handleChange = (ev) => {
    setFields({
      ...fields,
      [ev.target.name]: ev.target.value,
    });
  };

  const submitLoginForm = (ev) => {
    ev.preventDefault();
    if (validateForm()) {
      setErrorsFields({});
      console.log('fields', fields);
      alert('Form submitted');
      // envio a la api
    }
  };

  const validateForm = () => {
    const errors = {};
    let formIsValid = true;

    if (!fields.username) {
      formIsValid = false;
      errors.username = '*Ingresa tu número de teléfono.';
    }

    if (typeof fields.username !== 'undefined') {
      if (!fields.username.match(/^[0-9]{10}$/)) {
        formIsValid = false;
        errors.username = '*Ingresa un numero valido de 10 digitos.';
      }
    }

    if ((!fields.password) || (fields.password == '')) {
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
        name="username"
        onChange={handleChange}
      />
      {validateField('username')}
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
      </div>
    </form>
  );
};

export default LoginForm;
