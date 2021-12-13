import React from "react";
import { NavLink } from "react-router-dom";
import { getCategories } from "../dummy";
import { useDispatch, useSelector } from "react-redux";
import { toggleCart } from "../store/cart";

export default function NavBar() {
  const categories = getCategories();
  const dispatch = useDispatch();
  const state = useSelector((state) => {
    return state.cartStore;
  });
  const { isOpen } = state;
  return (
    <div className="navbar">
      <NavLink
        className="navbar-item"
        /* avtiveClassName="active-link" */ to="/"
      >
        Home
      </NavLink>
      <NavLink
        className="navbar-item"
        /* avtiveClassName="active-link" */
        to="/posts"
      >
        Posts
      </NavLink>
      <NavLink
        className="navbar-item"
        // avtiveClassName="active-link"
        to="/about"
      >
        About
      </NavLink>
      {categories.map((category) => {
        return (
          <NavLink
            className="navbar-item"
            to={`/items/${category.id}`}
            key={category.id}
          >
            {category.name}
          </NavLink>
        );
      })}
      <button
        className="navbar-btn navbar-item"
        onClick={() => {
          dispatch(toggleCart(!isOpen));
        }}
      >
        Cart
      </button>
    </div>
  );
}
