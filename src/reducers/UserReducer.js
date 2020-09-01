const INITIAL_STATE = {
  userSignup: [],
  userLoged: [],
  userClothes: [],
  errorsFields: [],
  userNotifications: [],
  isAuth: true,
  formIsValid: false,
  stateLoginResponse: false,
  stateSignupResponse: false,
  loading: false,
  error: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'activateAuth':
      return {
        ...state,
        isAuth: action.payload,
      };
    case 'LOADING':
      return {
        ...state,
        loading: true,
      };
    case 'ERROR':
      return {
        error: action.payload,
        loading: false,
      };
    case 'fetchSignupUser':
      return {
        ...state,
        userSignup: action.payload.newUser,
        stateSignupResponse: action.payload.status,
        loading: false,
      };
    case 'fetchLoginUser':
      return {
        ...state,
        userLoged: action.payload.logedUser,
        stateLoginResponse: action.payload.status,
        loading: false,
      };
    case 'EditProfile':
      return {
        ...state,
        userLoged: action.payload.userDataEdit,
      };
    case 'addClotheData':
      return {
        ...state,
        userClothes: action.payload,
        errorsFields: action.payload.errors,
      };
    case 'getClotheData':
      return {
        ...state,
        userClothes: action.payload,
        errorsFields: action.payload.errors,
      };
    case 'validateForm':
      return {
        ...state,
        formIsValid: action.payload.formIsValid,
        errorsFields: action.payload.errors,
      };
    case 'fetchNotificationsUser':
      return {
        ...state,
        userNotifications: action.payload,
        loading: false,
      };
    default: return state;
  }
};
