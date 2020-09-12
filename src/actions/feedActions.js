import { httpRequest } from '../lib/http';

export const fetchClothesFeed = (nextPage) => async (dispatch) => {
  const endPoint = (!nextPage) ? 'clothes/' : nextPage;

  try {
    const response = await httpRequest({
      dispatch,
      endPoint,
      options: {
        method: 'GET',
      },
      urlWithoutConfig: nextPage,
    });

    if (response.status !== 200) return;

    dispatch({
      type: 'fetchClothesFeed',
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: 'ERROR',
      dispatch: error.message,
    });
  }
};

export const nextPositionClothe = (data) => async (dispatch) => {
  const endPoint = 'clothes/interactions/';

  try {
    let response = await httpRequest({
      dispatch,
      endPoint,
      options: {
        method: 'POST',
        body: JSON.stringify(data),
      },
    });

    if (response.status !== 202 && response.status !== 400) {
      return;
    } if (response.status === 400) {
      response = await httpRequest({
        dispatch,
        endPoint,
        options: {
          method: 'PUT',
          body: JSON.stringify(data),
        },
      });
    }

    dispatch({
      type: 'nextClothe',
    });
  } catch (error) {
    dispatch({
      type: 'ERROR',
      dispatch: error.message,
    });
  }
};
