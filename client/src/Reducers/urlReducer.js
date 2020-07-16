import { GET_ALL_URLS, POST_URL, DELETE_URL } from '../Actions/types';

const initialState = {
  urls: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_URLS: {
      return {
        ...state,
        urls: [...action.payload],
      };
    }
    case POST_URL: {
      console.log(action.payload);
      return {
        ...state,
        urls: [...state.urls, action.payload],
      };
    }
    case DELETE_URL: {
      console.log(action.payload);
      return {
        ...state,
        urls: state.urls.filter((item) => !action.payload.includes(item._id)),
      };
    }
    default: {
      return state;
    }
  }
};
