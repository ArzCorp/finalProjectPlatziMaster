export const pullActive = () => (dispatch) => {
  dispatch({
    type: 'pullActive',
    payload: true,
  });
};

export const pullDisable = () => (dispatch) => {
  dispatch({
    type: 'pullDisable',
    payload: false,
  });
};
