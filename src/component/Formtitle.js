import React from "react";

export const Formtitle = (props) => {
  const { id, name, img, price ,AddtoBasket,quantity} = props;

  const handle = (id) => {
    console.log(id);
  };
  return (
    <div className="card">
      
      <div className="card-image">
        <img src={img} alt={name}></img>
      </div>
      <div className="card-content">
        <span className="card-title"> {name} </span>
      </div>
      <div className="card-action">
        <button onClick={() => AddtoBasket({id,name,price,quantity})} className="btn btn-success">
          
          Add to Basket
        </button>
        <span className="right">
          {price} <b>$</b>
        </span>
      </div>
    </div>
  );
};
