import React from "react";
import CounterContainer from "../../common/counter/CounterContainer";

const ItemDetail = ({ item }) => {
  return (
    <div>
      <CounterContainer stock={item.stock} />
      <p>{item.name}</p>
      <p>stock: {item.stock}</p>
    </div>
  );
};

export default ItemDetail;
