import { combineReducers } from 'redux';

import {requestUsers} from './user/user.reducer';

export default combineReducers({
  user: requestUsers,
});