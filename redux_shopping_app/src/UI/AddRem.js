import React from "react";
import { addToCart, removeFromCart } from "../store/cart";
import { useDispatch, useSelector } from "react-redux";

export default function AddRemBtn({ item }) {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => ({
    cartItems: state.cartStore.items,
  }));
  // console.log(cartItems);
  function addStuff() {
    dispatch(addToCart(item));
  }
  function removeStuff() {
    dispatch(removeFromCart(item));
  }
  if (!cartItems[item.id]) {
    return (
      <button className="btn btn-success" onClick={addStuff}>
        Add to Cart
      </button>
    );
  } else {
    return (
      <div className="add-remove-btn">
        <button className="btn btn-success" onClick={addStuff}>
          +
        </button>
        <div className="quantity">{cartItems[item.id].quantity}</div>
        <button className="btn btn-success" onClick={removeStuff}>
          -
        </button>
      </div>
    );
  }
}
