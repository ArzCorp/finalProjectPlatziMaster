import { combineReducers } from 'redux';
import userReducer from './UserReducer';
import buttonsReducers from './ButtonsReducer';
import modalReducers from './ModalReducer';

export default combineReducers({
  userReducer,
  buttonsReducers,
  modalReducers,
});
