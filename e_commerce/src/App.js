import React, { useState, createContext } from "react";
import NavBar from "./components/NavBar";
import CardGrid from "./components/CardGrid";
import "./style.scss";
import { navbar } from "./data";
import Cart from "./components/Cart";

export const store = createContext([
  {
    activeCategory: "dogs",
    cartItems: {},
    totalPrice: 0,
  },
  (obj) => obj,
]);

function App() {
  const state = useState({
    activeCategory: "dogs",
    cartItems: {},
    totalPrice: 0,
  });
  const [isShowing, setIsShowing] = useState(false);
  function toggle() {
    setIsShowing(!isShowing);
  }
  return (
    <store.Provider value={state}>
      <div className="App">
        <div className="app-header">
          <NavBar items={navbar} />
          <button className="button" onClick={toggle}>
            Cart
          </button>
          <Cart isShowing={isShowing} hide={toggle} />
        </div>
        <CardGrid />
      </div>
    </store.Provider>
  );
}

export default App;
