import React from "react";
import CounterContainer from "../../common/counter/CounterContainer";

const ItemDetail = ({ item, quantity }) => {
  return (
    <div>
      <img src={item.imageUrl} alt="" />
      <p className="text-3xl font-bold">{item.name}</p>
      <p>stock: {item.stock}</p>
      <CounterContainer stock={item.stock} product={item} quantity={quantity} />
    </div>
  );
};

export default ItemDetail;
