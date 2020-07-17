import axios from 'axios';
import {
  USER_LOGIN,
  USER_LOGOUT,
  LOAD_USER,
  VERIFY_SOCIAL_AUTH,
} from './types';

// Get the use token

const userToken = localStorage.getItem('token');

export const loadUser = () => (dispatch) => {
  axios
    .get('/app', {
      // withCredentials: true,
      headers: {
        Authorization: userToken,
      },
    })
    .then((res) => {
      dispatch({
        type: LOAD_USER,
        payload: res.data,
      });
    });
};

export const user_login = (values) => (dispatch) => {
  axios.post(`/auth/login`, values).then((res) => {
    saveToken(res.headers.authorization);
    dispatch({
      type: USER_LOGIN,
      payload: res.data.user,
    });
  });
};
export const register = (values) => (dispatch) => {
  axios.post(`${process.env.REACT_APP_ENPOINT}/auth/register`).then((res) => {
    dispatch({
      type: USER_LOGIN,
      payload: res.data,
    });
  });
};

export const logout = () => (dispatch) => {
  axios.post('/auth/logout').then((res) => {
    dispatch({
      type: USER_LOGOUT,
    });
  });
};

const saveToken = (token) => {
  let localToken = token.split('bearer')[1];
  window.localStorage.setItem('token', localToken);
};

export const verifySocialAuth = () => (dispatch) => {
  axios.get('/auth/social_verification').then((res) => {
    const token = res.data.token;
    window.localStorage.setItem('token', token);
    dispatch({
      type: VERIFY_SOCIAL_AUTH,
      payload: res.data,
    });
  });
};
