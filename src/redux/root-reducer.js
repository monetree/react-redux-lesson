import { combineReducers } from 'redux';

import {requestUsers, searchUsers} from './user/user.reducer';
import {requestPosts, searchPosts} from './post/post.reducer';
import { getSearchType } from './search/search.reducer';


export default combineReducers({
  user: requestUsers,
  usersearch: searchUsers,
  post: requestPosts,
  postsearch: searchPosts,
  search: getSearchType,
});