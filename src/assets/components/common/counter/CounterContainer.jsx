import React from "react";
import Counter from "./Counter";

const CounterContainer = ({ stock }) => {
  const [count, setCount] = React.useState(1);

  const add = () => {
    if (count < stock) setCount(count + 1);
  };
  const sub = () => {
    if (count > 1) setCount(count - 1);
  };

  const childProps = {
    add,
    sub,
    count,
  };

  return <Counter {...childProps} />;
};

export default CounterContainer;
