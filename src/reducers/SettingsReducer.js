import { SET_RESULTS_COUNT } from "../actions/types";

const INITIAL_STATE = {
  numberOfResults: 50
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_RESULTS_COUNT:
      return { numberOfResults: action.payload };

    default:
      return state;
  }
};
