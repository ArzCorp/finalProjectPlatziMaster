const INITIAL_STATE = {
  userSignup: [],
  userLoged: JSON.parse(localStorage.getItem('user')) || [],
  userClothes: [],
  errorsFields: [],
  userNotifications: [],
  likeReceived: [],
  statusMessage: '',
  typeStatus: '',
  isAuthenticated: localStorage.getItem('token'),
  formIsValid: false,
  stateLoginResponse: false,
  stateSignupResponse: false,
  loading: false,
  error: null,
  statusResponse: false,
  positionClothe: 0,
  clothesObtained: false,
  clothesFeed: null,
  clotheId: undefined,
  clotheData: {},
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
        isAuthenticated: true,
        stateLoginResponse: action.payload.status,
        loading: false,
      };
    case 'statusResponse':
      return {
        ...state,
        statusResponse: false,
      };
    case 'EditProfile':
      return {
        ...state,
        userLoged: action.payload.userDataEdit,
        loading: false,
        statusResponse: action.payload.status,
        statusMessage: action.payload.statusMessage,
        typeStatus: action.payload.typeStatus,
      };
    case 'EditImageProfile':
      return {
        ...state,
        userLoged: action.payload.updateUserImage,
        loading: false,
      };
    case 'addClotheData':
      return {
        ...state,
        userClothes: action.payload,
        errorsFields: action.payload.errors,
        loading: false,
        statusResponse: action.payload.status,
        statusMessage: action.payload.statusMessage,
        typeStatus: action.payload.typeStatus,
      };
    case 'getClotheData':
      return {
        ...state,
        userClothes: action.payload,
        errorsFields: action.payload.errors,
        loading: false,
        clothesObtained: true,
      };
    case 'changeId':
      return {
        ...state,
        clotheId: action.payload,
      };
    case 'addClothe':
      return {
        ...state,
        clotheData: action.payload,
        clotheId: undefined,
      };
    case 'deleteClothe':
      return {
        ...state,
        loading: false,
        statusResponse: action.payload.statusResponse,
        statusMessage: action.payload.statusMessage,
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
        loading: false,
      };
    case 'userReaction':
      return {
        ...state,
        loading: false,
      };
    case 'likeReceived':
      return {
        ...state,
        likeReceived: action.payload,
      };
    case 'clearFeedbackBackend':
      return {
        ...state,
        userLoged: action.payload,
        userSignup: action.payload,
      };
    default: return state;
  }
};
