import React from "react";

const Home = () => {
  return (
    <div className="container my-3">
      <h1>Todo-list</h1>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Add a Task</h5>
          <div className="self">
            <input
              className="form-control me-2"
              id="ip"
              type="text"
              placeholder="Task"
            />
            <div style={{ display: "inline-block" }}>
              <div className="row">
                <div className="col">
                  <button className="btn-sm btn-primary util-btns" id="addBtn">
                    Add
                  </button>
                </div>
                <div className="col">
                  <button className="btn-sm btn-primary util-btns" id="delBtn">
                    Delete
                  </button>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <button
                    className="btn-sm btn-primary mt-3 util-btns"
                    id="sortBtn"
                  >
                    Sort
                  </button>
                </div>
                <div className="col">
                  <button
                    className="btn-sm btn-primary mt-3 util-btns"
                    id="clearBtn"
                  >
                    Clear
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h1>Your Tasks</h1>
      <hr />
      <div id="notes" className="row container-fluid">
        <ul id="listTasks"></ul>
      </div>
    </div>
  );
};

export default Home;
