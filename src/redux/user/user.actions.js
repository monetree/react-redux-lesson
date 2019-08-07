import { UserActionTypes } from './user.types';

export const requestUsers = () => (dispatch) => {
    dispatch({ type: UserActionTypes.FETCHING_USER_START })
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(data => data.json())
    .then(data => dispatch({ type: UserActionTypes.FETCHING_USER_SUCCESS, payload: data }))
    .catch(error => dispatch({ type: UserActionTypes.FETCHING_USER_FAILED, payload: error }))
}