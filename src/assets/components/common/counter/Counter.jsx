import React from "react";

const Counter = ({ add, sub, count }) => {
  return (
    <div>
      <button onClick={sub}>-</button>
      <p>{count}</p>
      <button onClick={add}>+</button>
    </div>
  );
};

export default Counter;
