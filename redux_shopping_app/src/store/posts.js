const GET_POSTS = "posts/GET_POST";

export const getPost = () => {
  return async (dispatch, getState) => {
    console.log(getState(), "states");
    let response = await fetch("https://jsonplaceholder.typicode.com/posts");
    response = await response.json();
    if (response) {
      dispatch({
        type: GET_POSTS,
        payload: response,
      });
    }
  };
};

export default function reducer(
  state = {
    posts: [],
  },
  action
) {
  switch (action.type) {
    case GET_POSTS: {
      getPost();
      return {
        ...state,
        posts: action.payload,
      };
    }
    default:
      return state;
  }
}
