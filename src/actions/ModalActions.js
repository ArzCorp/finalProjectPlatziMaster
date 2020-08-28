export const isOpen = (type) => (dispatch) => {
  dispatch({
    type,
    payload: true,
  });
};

export const isClose = (type) => (dispatch) => {
  dispatch({
    type,
    payload: false,
  });
};

export const turnModalState = (type, newModalState) => (dispatch) => {
  dispatch({
    type,
    payload: newModalState,
  });
};