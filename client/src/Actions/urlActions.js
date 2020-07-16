import { GET_ALL_URLS, POST_URL, DELETE_URL } from './types';
import axios from 'axios';

// Get all URLS
export const getAllUrls = (user_id) => (dispatch) => {
  console.log(user_id);
  axios.get('/url/user/' + user_id).then((res) => {
    console.log(res);
    dispatch({
      type: GET_ALL_URLS,
      payload: res.data.URL,
    });
  });
};

// Add a URL
export const addURL = (values) => (dispatch) => {
  axios.post('/url', values).then((res) => {
    console.log(res);
    dispatch({
      type: POST_URL,
      payload: res.data.success,
    });
  });
};

// Delete URL
export const deleteURL = (values) => (dispatch) => {
  axios
    .delete('/url/delete', {
      data: {
        _id: values,
      },
    })
    .then((res) => {
      dispatch({
        type: DELETE_URL,
        payload: values,
      });
    });
};
