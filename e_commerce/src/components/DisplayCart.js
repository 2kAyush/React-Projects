import React, { useContext } from "react";
import { store } from "../App";
import AddRemoveButton from "./AddRemoveButton";

export default function DisplayCart() {
  const [state, setState] = useContext(store);
  const { cartItems } = state;

  let totalPrice = 0;
  let cart = [];
  Object.entries(cartItems).forEach((item) => {
    totalPrice += item[1].price;
    console.log(item);
    cart.push(item[1]);
  });

  function addItem(item) {
    totalPrice += cartItems[item.id].price;
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
    totalPrice -= cartItems[item.id].price;
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
  function calcTotalPrice() {
    totalPrice = 0;
    cart.forEach((item) => {
      totalPrice += item.price * item.quantity;
    });
    return totalPrice;
  }
  if (cart.length > 0)
    return (
      <div>
        <h1>Your Cart</h1>
        <div className="cart-items">
          {cart.map((item) => {
            return (
              <div key={item.id} className="product-item">
                <img alt={item.name} src={item.poster} />
                <div className="product-detail">
                  <div className="product-title">{item.name}</div>
                  <div className="product-purchase">
                    <span>Total: ₹{item.price * item.quantity}</span>

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
        <h1>Total Price: {calcTotalPrice()}</h1>
      </div>
    );
  return <h1>Your cart is empty</h1>;
}
