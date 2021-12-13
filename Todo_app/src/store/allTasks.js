const GET_TODOS = "GET_TODOS";

const reducer = (state = { todos: [] }, action) => {
  switch (action.type) {
    case "GET_TODOS":
      return state;
    default:
      return state;
  }
};
