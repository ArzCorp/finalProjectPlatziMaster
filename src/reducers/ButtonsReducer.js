const INITIAL_STATE = {
  isActive: true,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'pullActive':
      return {
        ...state,
        isActive: action.payload,
      };
    case 'pullDisable': {
      return {
        ...state,
        isActive: action.payload,
      };
    }
    default: return state;
  }
};
