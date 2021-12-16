import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTodos, changeId } from "../store/allTasks";

const TagTasks = () => {
  let values = 1;
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const { todos, id } = state;
  console.log(todos);
  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);
  let ctr = 1;

  return (
    <div className="container">
      <div className="d-flex my-3 mx-3" style={{ width: "25%" }}>
        <input
          className="form-control me-2"
          type="number"
          placeholder="Search tasks by tag Name"
          onChange={(e) => {
            values = e.target.value;
          }}
        />
        <button
          className="btn btn-outline-success my-2 my-sm-0"
          onClick={() => {
            dispatch(changeId(Number(values)));
            dispatch(getTodos());
          }}
        >
          Search
        </button>
      </div>
      <h1>Tasks with Tag {id} </h1>
      {todos.map((todo) => {
        return (
          <div key={ctr}>
            <h3>
              {ctr++}: {todo.title}
            </h3>
            <p>{todo.completed}</p>
          </div>
        );
      })}
    </div>
  );
};

export default TagTasks;
