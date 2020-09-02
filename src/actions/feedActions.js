import { httpRequest } from '../lib/http';

export const fetchClothesFeed = (nextPage) => async (dispatch) => {
  let endPoint = 'clothes/';

  if (nextPage) endPoint += nextPage;

  try {
    const response = await httpRequest({
      dispatch,
      endPoint,
      options: {
        method: 'GET',
      },
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

export const nextPositionClothe = () => ({
  type: 'nextClothe',
});

export const userReaction = (clotheId, userReaction) => async (dispatch) => {
  const USER_REACTION = `${URL_API}clothes/interactions/`;

  const OPTIONS = {
    method: 'POST',
    body: JSON.stringify({
      clothe: `${clotheId}`,
      value: `${userReaction}`,
    }),
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Token ${TOKEN}`,
    },
  };
  dispatch({
    type: 'LOADING',
  });

  try {
    const response = await fetch(USER_REACTION, OPTIONS);
    console.log('SUCCESS REACTION', userReaction);
    dispatch({
      type: 'userReaction',
    });
  } catch (error) {
    dispatch({
      type: 'ERROR',
      dispatch: error.message,
    });
  }
};
