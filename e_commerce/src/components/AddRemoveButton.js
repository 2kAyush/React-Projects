import React from "react";

function AddRemoveButton({ item, cartItems, addItem, removeItem }) {
  const itemInCart = cartItems[item.id];
  // for a particular card I want to maintain the state as to how many pets are there
  // cartItems {
  //   cards on which you have clicked plus
  // making a quantity key in the object of pets[slectedcardindex]
  // }
  //
  // const x = [a,d,v]
  //  const y = [...x, jj]
  // ...state -> we are using spread operator ->
  // Object.assign({}, objname, {ver})
  if (itemInCart) {
    return (
      <div className="button-group">
        <button className="button" onClick={() => removeItem(item)}>
          -
        </button>
        <div className="button-label">{itemInCart.quantity}</div>
        <button className="button" onClick={() => addItem(item)}>
          +
        </button>
      </div>
    );
  }
  return (
    <button onClick={() => addItem(item)} className="button">
      Add to Cart
    </button>
  );
}

export default AddRemoveButton;
