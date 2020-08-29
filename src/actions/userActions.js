export const fetchSignupUser = (data) => async (dispatch) => {
  const URL_API_SIGNUP = 'http://68.183.108.146:8000/users/signup/';
  const OPTIONS = {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },
  };

  const response = await fetch(URL_API_SIGNUP, OPTIONS);
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
  const URL_API_LOGIN = 'http://68.183.108.146:8000/users/login/';
  const OPTIONS = {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },
  };

  const response = await fetch(URL_API_LOGIN, OPTIONS);
  const logedUser = await response.json();

  const statusResponse = await response.status;
  const status = (statusResponse === 201);

  dispatch({
    type: 'fetchLoginUser',
    payload: { logedUser, status },
  });

  return status;
};

export const editProfile = (data, telephone, token) => async (dispatch) => {
  const URL_API_UPDATE = `http://68.183.108.146:8000/users/${telephone}/`;
  const OPTIONS = {
    method: 'PATCH',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Token ${token}`,
    },
  };
  const response = await fetch(URL_API_UPDATE, OPTIONS);
  const updateDataUser = await response.json();
  dispatch({
    type: 'EditProfile',
    payload: updateDataUser,
  });
};

export const editProfileImage = (data, telephone, token) => async (dispatch) => {
  const URL_API_UPDATE = `http://68.183.108.146:8000/users/${telephone}/profile/`;
  const OPTIONS = {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      Authorization: `Token ${token}`,
    },
  };
  const response = await fetch(URL_API_UPDATE, OPTIONS);
  const updateDataUser = await response.json();
  dispatch({
    type: 'EditProfile',
    payload: updateDataUser,
  });
};

export const getUserClothes = (token) => async (dispatch) => {
  const URL_API_UPDATE = 'http://68.183.108.146:8000/clothes/myclothes/';
  const OPTIONS = {
    method: 'GET',
    body: JSON.stringify(),
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Token ${token}`,
    },
  };
  const response = await fetch(URL_API_UPDATE, OPTIONS);
  const getClothesData = await response.json();
  dispatch({
    type: 'getClotheData',
    payload: getClothesData,
  });
};

export const addClothe = (data, token) => async (dispatch) => {
  const URL_API_UPDATE = 'http://68.183.108.146:8000/clothes/myclothes/';
  const OPTIONS = {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Token ${token}`,
    },
  };
  const response = await fetch(URL_API_UPDATE, OPTIONS);
  const addClotheData = await response.json();
  dispatch({
    type: 'addClotheData',
    payload: addClotheData,
  });
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
