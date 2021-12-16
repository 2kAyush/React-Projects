const GET_TODOS = "GET_TODOS";
const CHANGE_ID = "CHANGE_ID";
const ADD_TASKS = "ADD_TASKS";

export const getTodos = () => {
  return async (dispatch, getState) => {
    console.log("getS.id: ", getState().id);
    let response = await fetch(
      `https://jsonplaceholder.typicode.com/todos?userId=${getState().id}`
    );
    response = await response.json();
    if (response) {
      dispatch({ type: GET_TODOS, payload: response });
    }
  };
};

export const changeId = (id) => {
  if (id > 0 && id < 12) {
    return { type: CHANGE_ID, payload: id };
  }
  return { type: "Do nothing" };
};

export const addTasks = (taskDetails) => {
  return async (dispatch) => {
    let response = await fetch(`https://jsonplaceholder.typicode.com/todos`, {
      method: "POST",
      body: JSON.stringify({
        userId: taskDetails.tagId,
        // id: taskDetails.id,
        title: taskDetails.title,
        completed: taskDetails.isCompleted,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    response = await response.json();
    dispatch({ type: ADD_TASKS, payload: response });
  };
};

const reducer = (state = { todos: [], id: 1 }, action) => {
  // console.log("state: ", state);
  switch (action.type) {
    case "GET_TODOS":
      return {
        ...state,
        todos: action.payload,
      };
    case CHANGE_ID: {
      state.id = action.payload;
      return { ...state, id: action.payload };
    }
    default:
      return state;
  }
};

export default reducer;
