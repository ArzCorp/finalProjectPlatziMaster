export const changeButtonState = (type, state) => (dispatch) => {
  dispatch({
    type,
    payload: state,
  });
};
