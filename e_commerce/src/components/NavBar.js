import React, { useContext } from "react";
import { store } from "../App";

export default function NavBar({ items }) {
  const [state, setState] = useContext(store);
  const { activeCategory } = state;
  return (
    <div className="navbar">
      {items.map((item) => {
        return (
          <div
            key={item.id}
            onClick={() => {
              setState({ ...state, activeCategory: item.name });
            }}
            className={`navbar-item ${
              activeCategory === item.name ? "is-selected" : " "
            }`}
          >
            {item.label}
          </div>
        );
      })}
    </div>
  );
}
