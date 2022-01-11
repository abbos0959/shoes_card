import React from "react";
import { BasketList } from "./BasketList";

export const BasketItem = (props) => {
  const { order, HandleBasket, DeleteHandle,Increment,Decrement } = props;
  const Total = order.reduce((sum, el) => {
    return sum + el.price * el.quantity;
  }, 0);

  return (
    <ul class="collection basket-list">
      <li class="collection-item">Basket</li>
      <div className="hand" onClick={HandleBasket}>
        X
      </div>
      <li class="collection-item">
        {order.length ? (
          order.map((value) => {
            return (
              <BasketList
              Decrement={Decrement}
              Increment={Increment}
                DeleteHandle={DeleteHandle}
                key={value.id}
                {...value}
              />
            );
          })
        ) : (
          <li className="collection-item">savatda hozircha mahsulotlar yo`q</li>
        )}
      </li>

      <li class="collection-item">Total Cost {Total}</li>
    </ul>
  );
};
