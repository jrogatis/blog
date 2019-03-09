import jsonPlaceholder from '../apis/jasonPlaceholder';

export const fetchPost = () => async dispatch => {
  const response = await jsonPlaceholder.get('/posts');
  dispatch({ type: 'FETCH_POST', payload: response });
};
