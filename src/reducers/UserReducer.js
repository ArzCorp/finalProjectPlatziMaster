const INITIAL_STATE = {
  user: [],
  isActive: true,
  loading: undefined,
  error: undefined,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'getDataUser':
      return {
        ...state,
        user: action.payload,
      };
    default: return state;
  }
};
