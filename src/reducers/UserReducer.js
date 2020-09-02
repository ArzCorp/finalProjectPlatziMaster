const INITIAL_STATE = {
  userSignup: [],
  userLoged: [],
  userClothes: [],
  errorsFields: [],
  userNotifications: [],
  isAuthenticated: localStorage.getItem('token'),
  formIsValid: false,
  stateLoginResponse: false,
  stateSignupResponse: false,
  loading: false,
  error: null,
  clothesFeed: null,
  positionClothe: 0,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
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
    case 'CLEAR':
      return {
        ...state,
        errorsFields: [],
        formIsValid: false,
        isAuthenticated: false,
      }
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
        isAuthenticated: true,
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
    case 'fetchClothesFeed':
      return {
        ...state,
        clothesFeed: action.payload,
        loading: false,
        positionClothe: 0,
      };
    case 'nextClothe':
      return {
        ...state,
        positionClothe: state.positionClothe + 1,
      };
    case 'userReaction':
      return {
        ...state,
        loading: false,
      };
    default: return state;
  }
};
