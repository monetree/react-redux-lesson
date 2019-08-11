import { UserActionTypes } from './user.types';

const initialStateUsers = {
    users: [],
    isPending: true
  }

export const requestUsers = (state=initialStateUsers, action={}) => {
    switch (action.type) {
        case UserActionTypes.FETCHING_USER_START:
          return Object.assign({}, state, {isPending: true})
        case UserActionTypes.FETCHING_USER_SUCCESS:
          return Object.assign({}, state, {users: action.payload, isPending: false})
        case UserActionTypes.FETCHING_USER_FAILED:
          return Object.assign({}, state, {error: action.payload})
        default:
          return state
    }
  }

const initialUserSearch = {
  searchField: ''
}

export const searchUsers = (state=initialUserSearch, action={}) => {
  switch(action.type) {
    case UserActionTypes.SEARCH_USER:
      return Object.assign({}, state, {searchField: action.payload})
    default:
      return state
  }
}
