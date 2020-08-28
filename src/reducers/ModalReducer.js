const INITIAL_STATE = {
  isOpenModalImage: false,
  isOpenModalAdd: false,
  isOpenModalEdit: false,
  SignupModalState: false,
  LoginModalState: false,
  FilterModalState: false,
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
    case 'FilterModal':
      return {
        ...state,
        FilterModalState: action.payload,
      };

    case 'isOpenImage':
      return {
        ...state,
        isOpenModalImage: action.payload,
      };
    case 'isCloseImage': {
      return {
        ...state,
        isOpenModalImage: action.payload,
      };
    }
    case 'isOpenAdd':
      return {
        ...state,
        isOpenModalAdd: action.payload,
      };
    case 'isCloseAdd': {
      return {
        ...state,
        isOpenModalAdd: action.payload,
      };
    }
    case 'isOpenEdit':
      return {
        ...state,
        isOpenModalEdit: action.payload,
      };
    case 'isCloseEdit': {
      return {
        ...state,
        isOpenModalEdit: action.payload,
      };
    }
    default: return state;
  }
};
