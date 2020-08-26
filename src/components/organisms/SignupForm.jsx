import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Input from '../atoms/Input';
import Button from '../atoms/Button';

const SignupForm = () => {
  const [fields, setFields] = useState(0);
  const [errorsFields, setErrorsFields] = useState(0);

  const handleChange = (ev) => {
    setFields({
      ...fields,
      [ev.target.name]: ev.target.value,
    });
  };

  const fetchSignup = async (data) => {
    const URL_API_SIGNUP = 'http://68.183.108.146:8000/users/signup/';
    const options = {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' },
    };

    try {
      const response = await fetch(URL_API_SIGNUP, options);
      const status = await response.status;
      const res = await response.json();
      console.log('status', status);
      console.log('respuesta', res);
      if (status === 201) {
        alert('La cuenta se ha creado con éxito!')
      }
    } catch(error) {
      console.log('que feo error', error);
    }
  };

  const submituserRegistrationForm = (ev) => {
    ev.preventDefault();
    if (validateForm()) {
      setErrorsFields({});
      fetchSignup(fields);
      console.log('Form submitted');
    }
  };

  const validateForm = () => {
    const errors = {};
    let formIsValid = true;

    if (!fields.first_name) {
      formIsValid = false;
      errors.first_name = '*Ingresa tu(s) nombre(s).';
    }

    if (typeof fields.first_name !== 'undefined') {
      if (!fields.first_name.match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors.first_name = '*Solo usa caracteres del alfabeto.';
      }
    }

    if (!fields.last_name) {
      formIsValid = false;
      errors.last_name = '*Ingresa tu(s) apellido(s).';
    }

    if (typeof fields.last_name !== 'undefined') {
      if (!fields.last_name.match(/^[a-zA-Z]*$/)) {
        formIsValid = false;
        errors.last_name = '*Solo usa caracteres del alfabeto.';
      }
    }

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

    if (!fields.password) {
      formIsValid = false;
      errors.password = '*Ingresa tu contraseña.';
    }

    if (typeof fields.password !== 'undefined') {
      if (!fields.password.match(/^.*(?=.{8,}).*$/)) {
        formIsValid = false;
        errors.password = '*La contraseña debe tener al menos 8 digitos.';
      }
    }

    if (!fields.password_confirmation) {
      formIsValid = false;
      errors.password_confirmation = '*Debes confirmar tu contraseña.';
    }

    if (typeof fields.password_confirmation !== 'undefined') {
      if (!fields.password_confirmation.match(fields.password)) {
        formIsValid = false;
        errors.password_confirmation = '*Las contraseñas no coinciden.';
      }
    }

    setErrorsFields({ errors });
    return formIsValid;
  };

  const validateField = (field) => {
    if (errorsFields.errors) {
      if (errorsFields.errors[field]) {
        return (
          <div className="SignupForm__errorMsg">
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
      <Input
        type="password"
        label="Confirmar contraseña"
        placeholder="Confirmar contraseña"
        name="password_confirmation"
        onChange={handleChange}
      />
      {validateField('password_confirmation')}
      <div className="SignupForm__buttons">
        <Button name="Registrarse" type="normal" />
        <Link to="/login">
          <Button name="Ya tengo una cuenta" type="outline" />
        </Link>
      </div>
    </form>
  );
};

export default SignupForm;
