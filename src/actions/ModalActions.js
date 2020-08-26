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
