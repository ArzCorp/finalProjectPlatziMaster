import { URL_API } from '../config';

let token = localStorage.getItem('token');

if (!token) token = '';

export const setToken = (_token) => {
  token = _token;
  localStorage.setItem('token', _token);
};

export const httpRequest = async ({ endPoint, options, dispatch }) => {
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
    options,
  };

  const url = `${URL_API}${endPoint}`;
  const response = await fetch(url, opts);
  const data = await response.json();
  const { status } = response;
  return {
    data,
    status,
  };
};
