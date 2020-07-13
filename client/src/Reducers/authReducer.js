import { USER_LOGIN } from '../Actions/types';

const initialState = {
  isAuthenticated: null,
  user: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return {
        isAuthenticated: true,
        user: action.payload,
      };
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
