import React, { useState } from "react";
import { Data } from "../component/data";
import { Formtitle } from "../component/Formtitle";
import { Card } from "../component/Card";
import { Formmap } from "../component/Formmap";
import { BasketItem } from "./BasketItem";

export const Form = () => {
  const [order, setorder] = useState([]);
  const [IsbasketShow, setIsbasketShow] = useState(false);
 

  const DeleteHandle = (id) => {
    const filterorder = order.filter((filt) => filt.id !== id);
    setorder(filterorder);
  };

  const HandleBasket = () => {
    setIsbasketShow(!IsbasketShow);
    console.log(IsbasketShow);
  };

  const Increment = (id) => {
    const NewOrde = order.map((el) => {
      if (el.id === id) {
        const Newquantity = el.quantity + 1;
        return {
          ...el,
          quantity: Newquantity,
        };
      } else {
        return el;
      }
    });
    setorder(NewOrde);
  };

  const Decrement = (id) => {
    const NewOrd = order.map((el) => {
      if (el.id === id && el.quantity > 0) {
        const NewQuanti = el.quantity - 1;
        return {
          ...el,
          quantity: NewQuanti,
        };
      } else {
        return el;
      }
    });
    setorder(NewOrd);
  };
  const AddtoBasket = (item) => {
    const IndexItem = order.findIndex((Find) => Find.id === item.id);
    if (IndexItem < 0) {
      const NewItem = {
        ...item,
        quantity: 1,
      };
      setorder([...order, NewItem]);
    } else {
      const NewOrder = order.map((value, index) => {
        if (index === IndexItem) {
          return {
            ...value,
            quantity: value.quantity + 1,
          };
        } else {
          return value;
        }
      });
      setorder(NewOrder);
    }
  };

  
  return (
    <div className="container content">



      <Card HandleBasket={HandleBasket} quantity={order.length} />

      <Formmap
        HandleBasket={HandleBasket}
        AddtoBasket={AddtoBasket}
        Data={Data}
      />
      {IsbasketShow && (
        <BasketItem
          Decrement={Decrement}
          Increment={Increment}
          DeleteHandle={DeleteHandle}
          HandleBasket={HandleBasket}
          order={order}
        />
      )}

   
   
    </div>
  );
};
