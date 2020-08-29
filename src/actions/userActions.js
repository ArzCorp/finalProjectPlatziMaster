const URL_API = 'http://165.232.59.182:8000/';
const URL_API_RESPALDO = 'http://68.183.108.146:8000/';

export const fetchSignupUser = (data) => async (dispatch) => {
  const SIGNUP = `${URL_API}users/signup/`;
  const OPTIONS = {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },
  };

  const response = await fetch(SIGNUP, OPTIONS);
  const newUser = await response.json();

  const statusResponse = await response.status;
  const status = (statusResponse === 201);

  dispatch({
    type: 'fetchSignupUser',
    payload: { newUser, status },
  });

  return status;
};

export const fetchLoginUser = (data) => async (dispatch) => {
  const LOGIN = `${URL_API}users/login/`;
  const OPTIONS = {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },
  };

  const response = await fetch(LOGIN, OPTIONS);
  const logedUser = await response.json();

  const statusResponse = await response.status;
  const status = (statusResponse === 201);

  console.log(logedUser.token);
  localStorage.setItem('token', logedUser.token);

  dispatch({
    type: 'fetchLoginUser',
    payload: { logedUser, status },
  });

  return status;
};

export const validateForm = (fields, form) => (dispatch) => {
  const errors = {};
  let formIsValid = true;

  if (form === 'LoginForm') {
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
        errors.password = '*La contraseña no es valida.';
      }
    }
  }

  if (form === 'SignupForm') {
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
  }

  dispatch({
    type: 'validateForm',
    payload: { formIsValid, errors },
  });
  return formIsValid;
};

export const fetchNotificationsUser = (data) => async (dispatch) => {
  const NOTIFICATIONS = `${URL_API}clothes/notifications/`;
  const OPTIONS = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Token ${data}`,
    },
  };

  let notifications;
  let notificationsError;
  // const notificationsError = null;

  try {
    const response = await fetch(NOTIFICATIONS, OPTIONS);
    notifications = await response.json();
  } catch (error) {
    notificationsError = error;
  }

  const notificationss = [
    {
      clothe: 1,
      user: '6459783474',
      value: 'SUPERLIKE',
    }, {
      clothe: 2,
      user: '6459254769',
      value: 'LIKE',
    }
  ];

  console.log('notifications server response', notifications);

  dispatch({
    type: 'fetchNotificationsUser',
    payload: { notificationss, notificationsError },
  });
};
