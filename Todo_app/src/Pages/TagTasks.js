import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTodos, changeId } from "../store/allTasks";

const TagTasks = () => {
  let [value, setValue] = useState(1);
  // let [id, setId] = useState(1);
  const dispatch = useDispatch();
  let { todos, id } = useSelector((state) => state);
  useEffect(() => {
    dispatch(getTodos(id));
  }, [dispatch, id]);
  // console.log(todos);
  let ctr = 1;
  return (
    <div className="container">
      <form className="d-flex my-3 mx-3" style={{ width: "25%" }}>
        <input
          className="form-control me-2"
          type="number"
          placeholder="Search tasks by tag Name"
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <button
          className="btn btn-outline-success my-2 my-sm-0"
          onClick={() => {
            // console.log("Clicked search task");
            // dispatch(getTodos(value));
            // setId(value);
            id = value;
            changeId(value);
          }}
        >
          Search
        </button>
      </form>
      <h1>User {id}'s Tasks: </h1>
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
