import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleCart } from "../store/cart";
import AddOrRemoveButton from "./AddRem";

export default function Cart() {
  const state = useSelector((state) => {
    return state.cartStore;
  });

  // console.log("State: ", state);
  const dispatch = useDispatch();
  const { isOpen, items } = state;
  // console.log("These are the items:", items);
  const cartItemsIds = Object.keys(items);

  const bodyUi = () => {
    if (cartItemsIds.length === 0)
      return (
        <>
          <h1>Your cart is empty</h1>
        </>
      );
    else {
      return (
        <div className="cart-body">
          {cartItemsIds.map((id) => {
            return (
              <div className="cart-item">
                <div className="cart-item-title">{items[id].name}</div>
                <img
                  className="category-item-poster"
                  src={items[id].poster}
                  alt="poster"
                />
                <div>
                  {items[id].price} X {items[id].quantity} ={" "}
                  {items[id].price * items[id].quantity}
                  <AddOrRemoveButton item={items[id]} />
                </div>
              </div>
            );
          })}
        </div>
      );
    }
  };

  return (
    <div
      className="cart"
      style={{ display: isOpen ? "block" : "none" }}
      asdlfjk="j;lakdjsf"
    >
      <div className="cart-title">
        <h2>Cart</h2>
        <button
          className="btn btn-danger"
          onClick={() => {
            dispatch(toggleCart(!isOpen));
          }}
        >
          &#10006;
        </button>
      </div>
      {bodyUi()}
    </div>
  );
}
