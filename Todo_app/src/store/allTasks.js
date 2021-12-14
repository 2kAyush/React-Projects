const GET_TODOS = "GET_TODOS";
const CHNG_ID = "CHANGE_ID";

export const getTodos = (id) => {
  return async (dispatch) => {
    let response = await fetch(
      `https://jsonplaceholder.typicode.com/todos?userId=${id}`
    );
    response = await response.json();
    if (response) {
      dispatch({ type: GET_TODOS, payload: response });
    }
  };
};

export const changeId = (id) => {
  if (id > 0 && id < 12) {
    return { type: CHNG_ID, payload: id };
  }
};

const reducer = (state = { todos: [], id: 1 }, action) => {
  switch (action.type) {
    case "GET_TODOS":
      console.log("came here (before)");
      // console.log("came here");
      console.log(state);
      return {
        ...state,
        todos: action.payload,
      };
    case "CHNG_ID":
      return { ...state, id: action.payload };
    default:
      return state;
  }
};

export default reducer;
