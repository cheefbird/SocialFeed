import { FETCH_POSTS } from "../actions/types";

const INITIAL_STATE = {
  loading: true,
  posts: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        loading: false,
        posts: action.payload
      };

    default:
      return state;
  }
};
