const URL_API = 'https://fiscalsalinas.me/';
// const URL_API_RESPALDO = 'http://68.183.108.146:8000/';

export const logout = () => (dispatch) => {
  dispatch({
    type: 'CLEAR',
  });
};

export const fetchSignupUser = (data) => async (dispatch) => {
  const SIGNUP = `${URL_API}users/signup/`;
  const OPTIONS = {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },
  };
  dispatch({
    type: 'LOADING',
  });
  try {
    const response = await fetch(SIGNUP, OPTIONS);
    const newUser = await response.json();

    const statusResponse = await response.status;
    const status = (statusResponse === 201);

    dispatch({
      type: 'fetchSignupUser',
      payload: { newUser, status },
    });
    return status;
  } catch (error) {
    dispatch({
      type: 'ERROR',
      payload: error.message,
    });
  }
};

export const fetchLoginUser = (data) => async (dispatch) => {
  const LOGIN = `${URL_API}users/login/`;
  const OPTIONS = {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },
  };

  dispatch({
    type: 'LOADING',
  });
  try {
    const response = await fetch(LOGIN, OPTIONS);
    const logedUser = await response.json();

    const statusResponse = await response.status;
    const status = (statusResponse === 201);

    localStorage.setItem('token', logedUser.token);
    localStorage.setItem('user', JSON.stringify(logedUser));

    dispatch({
      type: 'fetchLoginUser',
      payload: { logedUser, status },
    });
    return status;
  } catch (error) {
    dispatch({
      type: 'ERROR',
      dispatch: error.message,
    });
  }
};

export const editProfile = (data, telephone, token) => async (dispatch, getState) => {
  const { user } = getState().userReducer;
  const URL_API_UPDATE = `${URL_API}users/${telephone}/`;
  const OPTIONS = {
    method: 'PATCH',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Token ${token}`,
    },
  };
  dispatch({
    type: 'LOADING',
  });
  try {
    const response = await fetch(URL_API_UPDATE, OPTIONS);
    const dataUser = await response.json();
    const statusResponse = await response.status;
    const status = (statusResponse === 201);

    const userDataEdit = {
      ...user,
      token,
      user: dataUser,
    };

    localStorage.setItem('token', userDataEdit.token);
    localStorage.setItem('user', JSON.stringify(userDataEdit));

    dispatch({
      type: 'EditProfile',
      payload: { userDataEdit, status },
    });
  } catch (error) {
    dispatch({
      type: 'ERROR',
      payload: error.message,
    });
  }
};

export const getDataUser = (telephone, token) => async (dispatch) => {
  const URL_API_UPDATE = `${URL_API}users/${telephone}/`;
  const OPTIONS = {
    method: 'GET',
    body: JSON.stringify(),
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Token ${token}`,
    },
  };
  const response = await fetch(URL_API_UPDATE, OPTIONS);
  const updateDataUser = await response.json();

  const statusResponse = await response.status;
  const status = (statusResponse === 201);

  dispatch({
    type: 'fetchLoginUser',
    payload: { updateDataUser, status },
  });
};

export const editProfileImage = (telephone, token, image) => async (dispatch, getState) => {
  const { user } = getState().userReducer;
  const headers = new Headers();
  const formImage = new FormData();
  formImage.append('picture', image.files[0], 'userImage.jpeg');
  headers.append('Authorization', `Token ${token}`);
  const URL_API_ADDIMAGE = `${URL_API}users/${telephone}/profile/`;
  const OPTIONS = {
    method: 'PATCH',
    body: formImage,
    headers,
    redirect: 'follow',
  };
  const response = await fetch(URL_API_ADDIMAGE, OPTIONS);
  const imageUser = await response.json();
  const updateUser = {
    ...user,
    token,
    user: imageUser,
  };
  console.log(updateUser);
  dispatch({
    type: 'EditProfile',
    payload: updateUser,
  });
};

export const getUserClothes = (token) => async (dispatch) => {
  const URL_API_UPDATE = `${URL_API}clothes/myclothes/`;
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

export const addClothe = (fields, token, image01, image02, image03) => async (dispatch) => {
  const headers = new Headers();
  const clotheData = new FormData();
  const { category, color, size, gender, state } = fields;
  clotheData.append('picture', image01.files[0], 'image02.jpeg');
  clotheData.append('picture2', image02.files[0], 'image03.jpeg');
  clotheData.append('picture3', image03.files[0], 'image01.jpeg');
  clotheData.append('category', category);
  clotheData.append('color', color);
  clotheData.append('size', size);
  clotheData.append('gender', gender);
  clotheData.append('state', state);
  headers.append('Authorization', `Token ${token}`);

  const URL_API_UPDATE = `${URL_API}clothes/myclothes/`;
  const OPTIONS = {
    method: 'POST',
    body: clotheData,
    headers,
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

export const fetchNotificationsUser = (token) => async (dispatch) => {
  const NOTIFICATIONS = `${URL_API}clothes/notifications/`;
  const OPTIONS = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Token ${token}`,
    },
  };
  dispatch({
    type: 'LOADING',
  });
  try {
    const response = await fetch(NOTIFICATIONS, OPTIONS);
    const notifications = await response.json();
    const notificationsfake = [
      {
        clothe: 1,
        user: '6459783474',
        value: 'SUPERLIKE',
      }, {
        clothe: 2,
        user: '6459254769',
        value: 'LIKE',
      },
    ];
    console.log('notifications server response', notifications);
    dispatch({
      type: 'fetchNotificationsUser',
      payload: notificationsfake,
    });
  } catch (error) {
    dispatch({
      type: 'ERROR',
      dispatch: error.message,
    });
  }
};
