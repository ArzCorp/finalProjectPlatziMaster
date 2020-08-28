const INITIAL_STATE = {
  AddImageModalState: false,
  AddClotheModalState: false,
  EditClotheModalState: false,
  SignupModalState: false,
  LoginModalState: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SignupModal':
      return {
        ...state,
        SignupModalState: action.payload,
      };
    case 'LoginModal':
      return {
        ...state,
        LoginModalState: action.payload,
      };
    case 'AddImageModal':
      return {
        ...state,
        AddImageModalState: action.payload,
      };
    case 'AddClotheModal':
      return {
        ...state,
        AddClotheModalState: action.payload,
      };
    case 'EditClotheModal':
      return {
        ...state,
        EditClotheModalState: action.payload,
      };
    default: return state;
  }
};
