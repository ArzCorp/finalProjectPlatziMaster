import { URL_API } from '../config';

let token = localStorage.getItem('token');

if (!token) token = '';

export const setToken = (_token) => {
  token = _token;
  localStorage.setItem('token', _token);
};

export const httpRequest = async ({ endPoint, options, dispatch, urlWithoutConfig = false }) => {
  dispatch({
    type: 'LOADING',
  });

  const defaultOptions = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Token ${token}`,
    },
  };

  const opts = {
    ...defaultOptions,
    ...options,
  };

  const url = !urlWithoutConfig ? `${URL_API}${endPoint}` : endPoint;
  const response = await fetch(url, opts);
  let data;

  try {
    data = await response.json();
  } catch (_) {
    data = {};
  }

  const { status } = response;
  return {
    data,
    status,
  };
};
