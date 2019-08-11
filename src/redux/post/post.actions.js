import { PostActionTypes } from './post.types';


export const requestPosts = () => (dispatch) => {
    dispatch({ type: PostActionTypes.FETCHING_POST_START })
    fetch('http://localhost:3001/posts')
    .then(data => data.json())
    .then(data => dispatch({ type: PostActionTypes.FETCHING_POST_SUCCESS, payload: data }))
    .catch(error => dispatch({ type: PostActionTypes.FETCHING_POST_FAILED, payload: error }))
}



export const searchPost = (text) => ({
    type: PostActionTypes.SEARCH_POST,
    payload: text
})