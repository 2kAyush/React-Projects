import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTasks } from "../store/allTasks";

const Home = () => {
  const dispatch = useDispatch();
  const [tagId, setTagId] = useState("");
  const [title, setTitle] = useState("");
  const [completed, setCompleted] = useState("");
  return (
    <div className="container my-3">
      <h1>Todo-list</h1>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Add a Task</h5>
          <div className="">
            <input
              className="form-control me-2"
              id="ip"
              type="number"
              placeholder="Tag Id"
              value={tagId}
              onChange={(e) => {
                setTagId(Number(e.target.value));
              }}
            />
            <input
              className="form-control me-2 my-3"
              id="ip"
              type="text"
              placeholder="Is Completed?"
              value={completed}
              onChange={(e) => {
                setCompleted(e.target.value);
              }}
            />
            <input
              className="form-control me-2 my-3"
              // id="ip"
              type="text"
              placeholder="Task name"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </div>
          <button
            className="btn-sm btn-primary util-btns my-1"
            onClick={() => {
              dispatch(addTasks({ tagId, title, completed }));
              setCompleted("");
              setTagId("");
              setTitle("");
              alert("Successfully added");
            }}
          >
            Add
          </button>
        </div>
      </div>
      {/* <h1>Your Tasks</h1>
      <hr />
      <div id="notes" className="row container-fluid">
        <ul id="listTasks"></ul>
      </div> */}
    </div>
  );
};

export default Home;
