import React from "react";

export const Card = (props) => {
    const {quantity=0,HandleBasket=Function.prototype}=props
  return (
    <div className="cart" onClick={HandleBasket}>
      <i className="material-icons shop">add_shopping_cart</i>
      <span className="cart-quantity">{quantity}</span>
    </div>
  );
};
