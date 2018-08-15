import { FETCH_POSTS } from "../actions/types";

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return { ...action.payload, ...INITIAL_STATE };

    default:
      return state;
  }
};
