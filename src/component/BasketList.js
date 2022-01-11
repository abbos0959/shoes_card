import React from "react";

export const BasketList = (props) => {
  const { id, name, price, quantity,DeleteHandle,Increment ,Decrement} = props;

  return (
    <div class="collection">
      <a class="collection-item cen">
        {name} X {quantity}={price*quantity}
        <a onClick={() => Increment(id)} className="waves-effect waves-light btn">
        <i className="material-icons left">exposure_plus_1</i>
      </a>
      <a onClick={()=>Decrement(id)} className="waves-effect waves-light btn">
        <i className="material-icons left">exposure_minus_1</i>
      </a>
        
        <i onClick={()=>DeleteHandle(id)} className="material-icons right delet"> delete_forever </i>
      </a>
      
    </div>
    
  );
};
