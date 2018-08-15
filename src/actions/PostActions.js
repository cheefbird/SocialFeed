import { FETCH_POSTS } from "./types";

const path = "https://api.massrelevance.com/MassRelDemo/kindle.json";

export const fetchPosts = () => {
  return dispatch => {
    fetch(path)
      .then(response => response.json())
      .then(json => {
        dispatch({
          type: FETCH_POSTS,
          payload: json
        });
      });
  };
};
