import { GET_ALL_URLS, POST_URL, DELETE_URL } from './types';
import axios from 'axios';

// Get all URLS
export const getAllUrls = () => (dispatch) => {
  axios.get('/url/user/5f085de32bdb980b8b64e728').then((res) => {
    console.log(res.data.URL);
    dispatch({
      type: GET_ALL_URLS,
      payload: res.data.URL,
    });
  });
};

// Add a URL
export const addURL = (values) => (dispatch) => {
  axios.post('/url', values).then((res) => {
    dispatch({
      type: POST_URL,
      payload: values,
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
