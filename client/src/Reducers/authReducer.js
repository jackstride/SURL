import {
  USER_LOGIN,
  USER_LOGOUT,
  USER_REGISTER,
  LOAD_USER,
} from '../Actions/types';

const initialState = {
  isAuthenticated: null,
  user: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_USER: {
      return {
        isAuthenticated: true,
        user: action.payload.user,
      };
    }
    case USER_LOGIN:
      return {
        isAuthenticated: true,
        user: action.payload,
      };
    case USER_LOGOUT: {
      return {
        isAuthenticated: false,
        user: null,
      };
    }
    case 'USER_LOADED':
      return {
        isAuthenticated: true,
        user: [],
      };
    default: {
      return state;
    }
  }
};
