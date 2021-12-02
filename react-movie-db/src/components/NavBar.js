import React from "react";
import "../styles/navbar.css";

export default function NavBar({ search, setInputValue }) {
  return (
    <div className="navbar">
      <span className="heading">Movie DB</span>
      <input
        onChange={(e) => setInputValue(e.target.value)}
        onKeyPress={search}
        type="text"
        placeholder="Search..."
        className="search-bar"
      />
    </div>
  );
}
