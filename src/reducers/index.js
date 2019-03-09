import { combineReducers } from 'redux';
import postReducer from './posRreducer';
export default combineReducers({
  post: postReducer
});
