export const turnModalState = (type, newModalState) => (dispatch) => {
  dispatch({
    type,
    payload: newModalState,
  });
};
