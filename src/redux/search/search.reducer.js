import { SearchActionTypes } from './search.types';


const initialStateSearch = {
    search: null
  }

export const getSearchType = (state=initialStateSearch, action={}) => {
    switch (action.payload) {
        case 'user:':
            return Object.assign({}, state, {search: action.payload})
          case 'post:':
            return Object.assign({}, state, {search: action.payload})
        default:
          return state
    }
  }