import { FETCH_POSTS } from "./types";

const path = resultsCount =>
  `https://api.massrelevance.com/MassRelDemo/kindle.json?limit=${resultsCount}`;

export const fetchPosts = resultsCount => {
  const url = path(resultsCount);

  return dispatch => {
    fetch(url)
      .then(response => response.json())
      .then(json => {
        dispatch({
          type: FETCH_POSTS,
          payload: json
        });
      })
      .catch(error => {
        console.error(error);
      });
  };
};
