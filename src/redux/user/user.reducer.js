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