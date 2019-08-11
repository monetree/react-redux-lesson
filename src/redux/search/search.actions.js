import { SearchActionTypes } from './search.types';

export const setSearchField = (text) => ({
    type: SearchActionTypes.SEARCH_START,
    payload: text
})
