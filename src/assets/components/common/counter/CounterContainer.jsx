import React, { useContext } from "react";
import Counter from "./Counter";
import { CartContext } from "../../../context/CartContext";

const CounterContainer = ({ product }) => {
  const [count, setCount] = React.useState(1);
  const { addToCart } = useContext(CartContext);

  const add = () => {
    if (count < product.stock) setCount(count + 1);
  };
  const sub = () => {
    if (count > 1) setCount(count - 1);
  };

  const addProduct = () => {
    addToCart(product, count);
  };

  const childProps = {
    add,
    sub,
    count,
    addProduct,
  };

  return <Counter {...childProps} />;
};

export default CounterContainer;
