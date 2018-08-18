import { SET_RESULTS_COUNT } from "./types";

export const setResultsCount = count => {
  return {
    type: SET_RESULTS_COUNT,
    payload: count
  };
};
