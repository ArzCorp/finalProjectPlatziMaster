const INITIAL_STATE = {
  userSignup: [],
  userLoged: [],
  userClothes: [],
  errorsFields: [],
  userNotifications: [],
  formIsValid: false,
  stateLoginResponse: false,
  stateSignupResponse: false,
  loading: false,
  error: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'fetchSignupUser':
      return {
        ...state,
        userSignup: action.payload.newUser,
        stateSignupResponse: action.payload.status,
      };
    case 'fetchLoginUser':
      return {
        ...state,
        userLoged: action.payload.logedUser,
        stateLoginResponse: action.payload.status,
      };
    case 'EditProfile':
      return {
        ...state,
        userLoged: action.payload,
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
        userNotifications: action.payload.notificationss,
      };
    default: return state;
  }
};
