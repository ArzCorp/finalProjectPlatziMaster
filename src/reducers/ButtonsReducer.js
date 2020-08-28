const INITIAL_STATE = {
  isButtonActive: true,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'isActive':
      return {
        ...state,
        isButtonActive: action.payload,
      };
    case 'isDisabled': {
      return {
        ...state,
        isButtonActive: action.payload,
      };
    }
    default: return state;
  }
};
