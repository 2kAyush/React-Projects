import React, { useContext, useEffect } from "react";
import { pets } from "../data";
import { store } from "../App";
import AddRemoveButton from "./AddRemoveButton";

export default function CardGrid() {
  const [state, setState] = useContext(store);
  const { activeCategory, cartItems } = state;

  function addItem(item) {
    if (cartItems[item.id]) {
      setState({
        ...state,
        cartItems: {
          ...cartItems,
          [item.id]: {
            ...cartItems[item.id],
            quantity: cartItems[item.id].quantity + 1,
          },
        },
      });
    } else {
      // seting a new state -> you want the previous state's snapshot also so that you dont lose on the previously updated state of some keys
      setState({
        ...state,
        cartItems: {
          ...cartItems,
          [item.id]: {
            ...item,
            quantity: 1,
          },
        },
      });
    }
  }

  function removeItem(item) {
    if (cartItems[item.id].quantity > 1) {
      setState({
        ...state,
        cartItems: {
          ...cartItems,
          [item.id]: {
            ...cartItems[item.id],
            quantity: cartItems[item.id].quantity - 1,
          },
        },
      });
    } else {
      // seting a new state -> you want the previous state's snapshot also so that you dont lose on the previously updated state of some keys
      delete cartItems[item.id];
      setState({
        ...state,
      });
    }
  }
  const filteredPets = pets.filter((pet) => pet.category === activeCategory);
  useEffect(() => {
    console.log(state);
    console.log("cart:", cartItems);
  }, [state, cartItems]);
  return (
    <div className="products">
      {filteredPets.map((item) => {
        return (
          <div key={item.id} className="product-item">
            <img alt={item.name} src={item.poster} />
            <div className="product-detail">
              <div className="product-title">{item.name}</div>
              <div className="product-purchase">
                <span>₹{item.price}</span>
                <AddRemoveButton
                  item={item}
                  cartItems={cartItems}
                  addItem={() => {
                    addItem(item);
                  }}
                  removeItem={() => {
                    removeItem(item);
                  }}
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
