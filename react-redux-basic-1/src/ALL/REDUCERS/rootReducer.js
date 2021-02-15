import { combineReducers } from 'redux';
import users from './userReducer';
const rootReducer = combineReducers({
  data: users,
});

export default rootReducer;
