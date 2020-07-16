import axios from 'axios';
import { USER_LOGIN, USER_LOGOUT, LOAD_USER } from './types';

export const loadUser = () => (dispatch) => {
  axios.get('/test').then((res) => {
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
  console.log('called');
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
