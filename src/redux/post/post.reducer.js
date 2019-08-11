import { PostActionTypes } from './post.types';

const initialStateUsers = {
    posts: [],
    isPending: true
  }

export const requestPosts = (state=initialStateUsers, action={}) => {
    switch (action.type) {
        case PostActionTypes.FETCHING_POST_START:
          return Object.assign({}, state, {isPending: true})
        case PostActionTypes.FETCHING_POST_SUCCESS:
          return Object.assign({}, state, {posts: action.payload, isPending: false})
        case PostActionTypes.FETCHING_POST_FAILED:
          return Object.assign({}, state, {error: action.payload})
        default:
          return state
    }
  }


const initialPostSearch = {
  searchField: ''
}

export const searchPosts = (state=initialPostSearch, action={}) => {
  switch(action.type) {
    case PostActionTypes.SEARCH_POST:
      return Object.assign({}, state, {searchField: action.payload})
    default:
      return state
  }
}