const INITIAL_STATE = {
  isOpenModalImage: false,
  isOpenModalAdd: false,
  isOpenModalEdit: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
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
